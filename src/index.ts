/**
 * @license
 * Copyright 2019 Victor Dibia.
 * Handtrack.js - A library for prototyping realtime hand tracking using neural networks.
 * Licensed under the MIT License (the "License");
 * Code snippets from the tensorflow coco-ssd example are reused here - https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd
 * =============================================================================
 */

import * as tfnode from "@tensorflow/tfjs-node";
import * as path from "path";
import { Modelparams, predictions } from "./types/global";
import { Tensor, Rank } from "@tensorflow/tfjs-node";

const basePath = "jsonmodels";

const defaultParams = {
  flipHorizontal: true,
  outputStride: 16,
  imageScaleFactor: 0.7,
  maxNumBoxes: 20,
  iouThreshold: 0.5,
  scoreThreshold: 0.99,
  modelType: "MobilenetV2"
};

export async function load(params?: Modelparams) {
  let modelParams = Object.assign({}, defaultParams, params);
  // console.log(modelParams)
  const objectDetection = new ObjectDetection(modelParams);
  await objectDetection.load();
  return objectDetection;
}

export function startVideo(video) {
  // Video must have height and width in order to be used as input for NN
  // Aspect ratio of 3/4 is used to support safari browser.
  video.width = video.width || 640;
  video.height = video.height || video.width * (3 / 4);

  return new Promise(function(resolve, reject) {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user"
        }
      })
      .then(stream => {
        window.localStream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          resolve(true);
        };
      })
      .catch(function(err) {
        resolve(false);
      });
  });
}

export async function stopVideo() {
  if (window.localStream) {
    window.localStream.getTracks().forEach(track => {
      track.stop();
      return true;
    });
  } else {
    return false;
  }
}

export class ObjectDetection {
  modelPath: string;

  modelParams: Modelparams;
  fps!: number;
  model!: tfnode.GraphModel;
  constructor(modelParams) {
    this.modelPath = path.join(__dirname, "..", basePath, "model.json");
    /*    this.weightPath =
      basePath + modelParams.modelType + "/weights_manifest.json"; */
    this.modelParams = modelParams;
  }

  async load() {
    try {
      this.fps = 0;

      this.model = await tfnode.loadGraphModel("file://" + this.modelPath);

      // Warmup the model.
      const result = (await this.model.executeAsync(
        tfnode.zeros([1, 300, 300, 3])
      )) as Tensor<Rank>[];

      result.map(async t => await t.data());
      result.map(async t => t.dispose());
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  async detect(
    input:
      | HTMLVideoElement
      | tfnode.backend_util.PixelData
      | ImageData
      | HTMLImageElement
      | HTMLCanvasElement
  ) {
    let timeBegin = Date.now();
    const [height, width] = getInputTensorDimensions(input);
    console.log(height, width);
    const resizedHeight = getValidResolution(
      this.modelParams.imageScaleFactor,
      height,
      this.modelParams.outputStride
    );
    const resizedWidth = getValidResolution(
      this.modelParams.imageScaleFactor,
      width,
      this.modelParams.outputStride
    );

    const batched = tfnode.tidy(() => {
      const imageTensor = tfnode.browser.fromPixels(input);

      if (this.modelParams.flipHorizontal) {
        return imageTensor
          .reverse(1)
          .resizeBilinear([resizedHeight, resizedWidth])
          .expandDims(0);
      } else {
        return imageTensor
          .resizeBilinear([resizedHeight, resizedWidth])
          .expandDims(0);
      }
    });

    // const result = await this.model.executeAsync(batched);
    const _self = this;

    return this.model.executeAsync(batched).then(function(result) {
      const scores = result[0].dataSync();
      const boxes = result[1].dataSync();

      // clean the webgl tensors
      batched.dispose();
      tfnode.dispose(result);

      const [maxScores, classes] = calculateMaxScores(
        scores,
        result[0].shape[1],
        result[0].shape[2]
      );
      const prevBackend = tfnode.getBackend();

      // run post process in cpu
      tfnode.setBackend("cpu");
      const indexTensor = tfnode.tidy(() => {
        const boxes2 = tfnode.tensor2d(boxes, [
          result[1].shape[1],
          result[1].shape[3]
        ]);
        return tfnode.image.nonMaxSuppression(
          boxes2,
          scores,
          _self.modelParams.maxNumBoxes, // maxNumBoxes
          _self.modelParams.iouThreshold, // iou_threshold
          _self.modelParams.scoreThreshold // score_threshold
        );
      });
      const indexes = indexTensor.dataSync();
      indexTensor.dispose();
      // restore previous backend
      tfnode.setBackend(prevBackend);

      const predictions = _self.buildDetectedObjects(
        width,
        height,
        boxes,
        scores,
        indexes,
        classes
      );
      let timeEnd = Date.now();
      _self.fps = Math.round(1000 / (timeEnd - timeBegin));

      return predictions;
    });
  }

  buildDetectedObjects(width, height, boxes, scores, indexes, classes) {
    const count = indexes.length;
    const objects: predictions[] = [];
    for (let i = 0; i < count; i++) {
      const bbox: number[] = [];
      for (let j = 0; j < 4; j++) {
        bbox[j] = boxes[indexes[i] * 4 + j];
      }
      const minY = bbox[0] * height;
      const minX = bbox[1] * width;
      const maxY = bbox[2] * height;
      const maxX = bbox[3] * width;
      bbox[0] = minX;
      bbox[1] = minY;
      bbox[2] = maxX - minX;
      bbox[3] = maxY - minY;
      objects.push({
        bbox: bbox,
        class: classes[indexes[i]],
        score: scores[indexes[i]]
      });
    }
    return objects;
  }

  getFPS() {
    return this.fps;
  }

  setModelParameters(params) {
    this.modelParams = Object.assign({}, this.modelParams, params);
  }

  getModelParameters() {
    return this.modelParams;
  }

  renderPredictions(predictions, canvas, context, mediasource) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = mediasource.width;
    canvas.height = mediasource.height;
    // console.log("render", mediasource.width, mediasource.height)

    context.save();
    if (this.modelParams.flipHorizontal) {
      context.scale(-1, 1);
      context.translate(-mediasource.width, 0);
    }
    context.drawImage(mediasource, 0, 0, mediasource.width, mediasource.height);
    context.restore();
    context.font = "10px Arial";

    // console.log('number of detections: ', predictions.length);
    for (let i = 0; i < predictions.length; i++) {
      context.beginPath();
      context.fillStyle = "rgba(255, 255, 255, 0.6)";
      context.fillRect(
        predictions[i].bbox[0],
        predictions[i].bbox[1] - 17,
        predictions[i].bbox[2],
        17
      );
      context.rect(...predictions[i].bbox);

      // draw a dot at the center of bounding box

      context.lineWidth = 1;
      context.strokeStyle = "#0063FF";
      context.fillStyle = "#0063FF"; // "rgba(244,247,251,1)";
      context.fillRect(
        predictions[i].bbox[0] + predictions[i].bbox[2] / 2,
        predictions[i].bbox[1] + predictions[i].bbox[3] / 2,
        5,
        5
      );

      context.stroke();
      context.fillText(
        predictions[i].score.toFixed(3) + " " + " | hand",
        predictions[i].bbox[0] + 5,
        predictions[i].bbox[1] > 10 ? predictions[i].bbox[1] - 5 : 10
      );
    }

    // Write FPS to top left
    context.font = "bold 12px Arial";
    context.fillText("[FPS]: " + this.fps, 10, 20);
  }

  dispose() {
    if (this.model) {
      this.model.dispose();
    }
  }
}

function getValidResolution(imageScaleFactor, inputDimension, outputStride) {
  const evenResolution = inputDimension * imageScaleFactor - 1;
  return evenResolution - (evenResolution % outputStride) + 1;
}

function getInputTensorDimensions(
  input:
    | HTMLVideoElement
    | tfnode.backend_util.PixelData
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
) {
  return input instanceof tfnode.Tensor
    ? [input.shape[0], input.shape[1]]
    : [input.height, input.width];
}

function calculateMaxScores(scores, numBoxes, numClasses) {
  const maxes: number[] = [];
  const classes: number[] = [];
  for (let i = 0; i < numBoxes; i++) {
    let max = Number.MIN_VALUE;
    let index = -1;
    for (let j = 0; j < numClasses; j++) {
      if (scores[i * numClasses + j] > max) {
        max = scores[i * numClasses + j];
        index = j;
      }
    }
    maxes[i] = max;
    classes[i] = index;
  }
  // console.log([maxes, classes])
  return [maxes, classes];
}
