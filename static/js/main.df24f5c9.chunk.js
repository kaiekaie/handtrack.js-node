(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){e.exports=a(643)},196:function(e,t){},198:function(e,t){},230:function(e,t){},231:function(e,t){},277:function(e,t,a){var n={"./0.jpg":278,"./1.jpg":279,"./10.jpg":280,"./11.jpg":281,"./12.jpg":282,"./13.jpg":283,"./14.jpg":284,"./15.jpg":285,"./16.jpg":286,"./2.jpg":287,"./3.jpg":288,"./4.jpg":289,"./5.jpg":290,"./6.jpg":291,"./7.jpg":292,"./8.jpg":293,"./9.jpg":294,"./banner.jpg":295,"./hand.jpg":296};function i(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id=277},278:function(e,t,a){e.exports=a.p+"static/media/0.401840ba.jpg"},279:function(e,t,a){e.exports=a.p+"static/media/1.71d1d1d3.jpg"},280:function(e,t,a){e.exports=a.p+"static/media/10.9621bbbc.jpg"},281:function(e,t,a){e.exports=a.p+"static/media/11.c238e436.jpg"},282:function(e,t,a){e.exports=a.p+"static/media/12.973b8ab8.jpg"},283:function(e,t,a){e.exports=a.p+"static/media/13.728701d2.jpg"},284:function(e,t,a){e.exports=a.p+"static/media/14.9ef2f1c4.jpg"},285:function(e,t,a){e.exports=a.p+"static/media/15.1f5880d6.jpg"},286:function(e,t,a){e.exports=a.p+"static/media/16.401840ba.jpg"},287:function(e,t,a){e.exports=a.p+"static/media/2.2de0d22a.jpg"},288:function(e,t,a){e.exports=a.p+"static/media/3.0fef6bcf.jpg"},289:function(e,t,a){e.exports=a.p+"static/media/4.0d13a8b0.jpg"},290:function(e,t,a){e.exports=a.p+"static/media/5.ca8bdcab.jpg"},291:function(e,t,a){e.exports=a.p+"static/media/6.41988fc1.jpg"},292:function(e,t,a){e.exports=a.p+"static/media/7.00ef4aaf.jpg"},293:function(e,t,a){e.exports=a.p+"static/media/8.c04fb220.jpg"},294:function(e,t,a){e.exports=a.p+"static/media/9.e641a945.jpg"},295:function(e,t,a){e.exports=a.p+"static/media/banner.275e0e05.jpg"},296:function(e,t,a){e.exports=a.p+"static/media/hand.f39313f7.jpg"},641:function(e,t,a){},642:function(e,t,a){},643:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(171),s=a.n(l),o=a(8),c=a(9),r=a(11),d=a(10),m=a(12),h=a(650),u=a(179),v=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"headerbox pad20 "},i.a.createElement("div",{className:"bx--type-mega"},"Handtrack.js"),i.a.createElement("span",{className:"lighttext"}," A library for prototyping realtime handtracking in the browser. [",i.a.createElement("a",{href:"https://github.com/victordibia/handtrack.js/"},"Github"),"]"),i.a.createElement("br",null))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Made with ",i.a.createElement("span",{className:"redcolor"},"\u2665")," by ",i.a.createElement("a",{href:"https://twitter.com/vykthur",target:"blank"},"Victor Dibia"),". Designed using  ",i.a.createElement("a",{href:"http://carbondesignsystem.com",target:"blank"},"Carbon Design System."))}}]),t}(n.Component),b=a(651),p=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"sidebarcontent"},i.a.createElement("div",{className:"sidebartitle"},i.a.createElement("span",{className:"bx--type-epsilon"}," handtrack.js "),i.a.createElement("span",{className:"lighttext"}," ")),i.a.createElement("div",{className:"lighttext"},"v0.0.8"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"sidebarlinks"},i.a.createElement(b.a,{exact:!0,to:"/"},"demo")),i.a.createElement("div",{className:"sidebarlinks"},i.a.createElement(b.a,{to:"/doodle"},"doodle")),i.a.createElement("div",{className:"sidebarlinks"},i.a.createElement(b.a,{to:"/about"},"about")))}}]),t}(n.Component),f=a(648),E=a(31),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={modelParams:{scoreThreshold:.7,flipHorizontal:!1},model:null,modelLoaded:!1,videoPlayStatus:!1,showHighlight:!1,highlightText:"Attention needed"},a.canvas=i.a.createRef(),a.videoButton=i.a.createRef(),a.imgHolder=i.a.createRef(),a.video=i.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.state.model.dispose()}},{key:"componentDidMount",value:function(){var e=this;this.video.current.width=450,this.video.current.height=380,this.canvasContext=this.canvas.current.getContext("2d"),this.drawCenter=!0,E.a(this.state.modelParams).then(function(t){e.setState({model:t}),e.setState({modelLoaded:!0}),document.getElementsByClassName("handimagebox")[0].click()})}},{key:"runDetection",value:function(e){var t=this,a=this;this.state.model.detect(e).then(function(n){t.canvas.current&&(t.state.model.renderPredictions(n,t.canvas.current,t.canvasContext,e),t.state.videoPlayStatus&&e&&window.requestAnimationFrame(function(){a.runDetection(e)}))})}},{key:"detectImage",value:function(e){this.imgHolder.current.height=380,this.imgHolder.current.src=e.src,this.runDetection(this.imgHolder.current)}},{key:"updateConfidence",value:function(e){var t=this.state.modelParams;t.scoreThreshold=e.target.value/100,this.setState({modelParams:t}),this.state.model.setModelParameters(this.state.modelParams);var a=document.getElementsByClassName("handimageselected")[0];!this.state.videoPlayStatus&&a&&a.click()}},{key:"videoButtonClick",value:function(e){var t=this;this.state.videoPlayStatus?(this.setState({videoPlayStatus:!1}),E.c()):E.b(this.video.current).then(function(e){e?(t.setState({videoPlayStatus:!0}),t.runDetection(t.video.current)):(console.log("Camera not available"),t.setState({highlightText:"Please enable camera to use video detection"}),t.setState({showHighlight:!0}),setTimeout(function(){t.setState({showHighlight:!1})},6e3))})}},{key:"flipImageCheck",value:function(e){var t=this.state.modelParams;t.flipHorizontal=e.target.checked,this.setState({modelParams:t}),this.state.model.setModelParameters(this.state.modelParams),console.log(this.state)}},{key:"clickImage",value:function(e){for(var t=document.getElementsByClassName("handimagebox"),a=0;a<t.length;a++)t[a].classList.remove("handimageselected");if(e.target.classList.add("handimageselected"),this.state.videoPlayStatus){var n=this,i=e.target;document.getElementById("videobutton").click(),setTimeout(function(){n.detectImage(i)},200)}else this.detectImage(e.target)}},{key:"render",value:function(){var e=this,t=Array.from(Array(16).keys()).map(function(t){return i.a.createElement("img",{key:t,onClick:e.clickImage.bind(e),src:a(277)("./".concat(t,".jpg")),alt:"",className:"handimagebox"})});return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"pagetitle"},"Demo"),i.a.createElement("br",null),this.state.modelLoaded?null:i.a.createElement(k,null),i.a.createElement("div",{className:"clickable"},i.a.createElement("div",{className:this.state.modelLoaded?"hidden":"disableoverlay"}),i.a.createElement("div",{className:this.state.showHighlight?"orangehighlight mb10":"hidden"}," ",this.state.highlightText),i.a.createElement("div",{className:"bluehightlight mb10"},"All detection is done in the browser! ",i.a.createElement("span",{className:"lighttext"}," Click on an image or  Start video")),i.a.createElement("div",null,i.a.createElement(f.a,{id:"videobutton",onClick:this.videoButtonClick.bind(this)},"  ",this.state.videoPlayStatus?"\u25a9 Stop Video Detection":" \u25b6 \ufe0f Start Video Detection"," "),i.a.createElement("div",{className:"bx--form-item bx--checkbox-wrapper  flipimagecheckbox"},i.a.createElement("input",{onClick:this.flipImageCheck.bind(this),id:"flipimagecheckbox",className:"bx--checkbox",type:"checkbox",value:"new",name:"checkbox"}),i.a.createElement("label",{htmlFor:"flipimagecheckbox",className:"bx--checkbox-label"}," Flip Image "))),i.a.createElement("div",{className:"flex mt10"},i.a.createElement("div",{className:"flexfull"},i.a.createElement("div",{id:"instruction",className:"lighttext pb10 "},"Modify confidence score threshold."),i.a.createElement("div",{className:"mt10 flex  mr20 "},i.a.createElement("div",{className:"slidecontainer flexfull  "},i.a.createElement("input",{type:"range",val:100*this.state.modelParams.scoreThreshold,onChange:this.updateConfidence.bind(this),min:"1",max:"100",className:"slider",id:"confidencerange"})),i.a.createElement("div",{className:"iblock confidencethreshold "},"  ",this.state.modelParams.scoreThreshold," ")),i.a.createElement("div",{className:"bluehightlight mb10 lh10 mr20"},"Detection not working as expected? Change the confidence threshold value. The right threshold may depend on your ",i.a.createElement("span",{className:"boldtext"},"camera"),"  and ",i.a.createElement("span",{className:"boldtext"},"lighting"),"   conditions."),i.a.createElement("div",{className:"scrollholdbox "},t)),i.a.createElement("div",{className:"flex5 "},i.a.createElement("canvas",{ref:this.canvas,id:"canvas",className:"canvasbox"})))),i.a.createElement("div",{className:"videoboxes "}),i.a.createElement("img",{ref:this.imgHolder,id:"imgholder",className:"imgholder hidden",src:"",alt:""}),i.a.createElement("video",{ref:this.video,className:"videobox hidden",autoPlay:"autoplay",id:"myvideo"}))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"mb10"},i.a.createElement("div",{"data-loading":!0,className:"iblock bx--loading bx--loading--small"},i.a.createElement("svg",{className:"bx--loading__svg",viewBox:"-75 -75 150 150"},i.a.createElement("title",null,"Loading"),i.a.createElement("circle",{cx:"0",cy:"0",r:"37.5"}))),i.a.createElement("div",{className:"iblock loadingtitle"}," Loading Handtrack.js model .."))}}]),t}(n.Component),y=x,N=a(649),j=a(647),C=function(){return i.a.createElement(N.a,{language:"javascript",style:j.a},"import * as handTrack from 'handtrackjs'; \n\nconst img = document.getElementById('img'); \n\nhandTrack.load().then(model => {  \n    model.detect(img).then(predictions => {\n        console.log('Predictions: ', predictions); \n    });\n});\n\n\n\n")},w=function(){return i.a.createElement(N.a,{language:"javascript",style:j.a},"import * as handTrack from 'handtrackjs'; \n\nconst img = document.getElementById('img'); \nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nhandTrack.load().then(model => {  \n    model.detect(img).then(preds => { \n      model.renderPredictions(preds, canvas, ctx, img);\n    });\n});\n\n")},O=function(){return i.a.createElement(N.a,{language:"javascript",style:j.a},'import * as handTrack from \'handtrackjs\';\n\nhandTrack.startVideo(video).then(function (status) {\n    if (status) {\n        console.log("Video started")\n    } else {\n        console.log("Please enable video")\n    }\n});\n\n// handTrack.stopVideo(); \n\n')},P=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"pagetitle mt10"},"Usage Examples "),i.a.createElement("br",null),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex4 mr10 "},i.a.createElement("div",{className:"bluehightlight mb10 boldtext"},"load Model"),i.a.createElement(C,null)),i.a.createElement("div",{className:"flex4 mr10 "},i.a.createElement("div",{className:"bluehightlight mb10 boldtext"},"Render Predictions"),i.a.createElement(w,null)),i.a.createElement("div",{className:"flex4 mr10 "},i.a.createElement("div",{className:"bluehightlight mb10 boldtext"},"Video Control"),i.a.createElement(O,null))))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"pagetitle"},"About Handtrack.js"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("div",{className:"bluehightlight mb10"},"Handtrack.js lets you track hand position in an image or video element, right in the browser."),i.a.createElement("div",{className:"lh10"},"Underneath, it uses trained Convoluntional Neural Network model (SSD, MobilenetV2 Architecture).",i.a.createElement("br",null),"Details on how the model was trained can be found  ",i.a.createElement("a",{rel:"noopener noreferrer",href:"https://medium.com/@victor.dibia/how-to-build-a-real-time-hand-detector-using-neural-networks-ssd-on-tensorflow-d6bac0e4b2ce",target:"_blank"},"here")," .")),i.a.createElement("br",null),i.a.createElement(P,null))}}]),t}(n.Component),D=a(178),T=0,H=0,M=0,B=0,I=!1,L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChangeComplete=function(e){a.setState({doodlecolor:e.hex})},a.state={modelParams:{scoreThreshold:.9,flipHorizontal:!0,maxNumBoxes:1},model:null,modelLoaded:!1,videoPlayStatus:!1,showHighlight:!1,highlightText:"Attention needed",doodlecolor:"#1780DC",saveddoodles:[]},a.canvas=i.a.createRef(),a.videoButton=i.a.createRef(),a.imgHolder=i.a.createRef(),a.video=i.a.createRef(),a.media={width:450,height:380},a.doodlecounter=0,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.state.model.dispose()}},{key:"componentDidMount",value:function(){var e=this;this.video.current.width=this.media.width,this.video.current.height=this.media.height,T=225,M=190,this.cav=document.getElementById("canvas"),this.cav.width=450,this.cav.height=380,this.canvasContext=this.cav.getContext("2d"),this.DoodleCenter=!0,E.a(this.state.modelParams).then(function(t){e.setState({model:t}),e.setState({modelLoaded:!0}),e.setState({modelLoaded:!0})})}},{key:"runDetection",value:function(e){var t=this,a=this;this.state.model.detect(e).then(function(n){t.canvas.current&&(t.runDrawPredictions(n),t.state.videoPlayStatus&&e&&window.requestAnimationFrame(function(){a.runDetection(e)}))})}},{key:"runDrawPredictions",value:function(e){this.canvasContext.save(),this.state.modelParams.flipHorizontal&&(this.canvasContext.scale(-1,1),this.canvasContext.translate(-this.media.width,0)),this.canvasContext.restore();for(var t=0;t<e.length;t++)T=H,M=B,H=e[t].bbox[0]+e[t].bbox[2]/2,B=e[t].bbox[1]+e[t].bbox[3]/2,this.drawDoodle()}},{key:"drawDoodle",value:function(){this.canvasContext.beginPath(),this.canvasContext.lineWidth=5,this.canvasContext.lineCap="round",this.canvasContext.strokeStyle=this.state.doodlecolor,this.canvasContext.moveTo(T,M),this.canvasContext.lineTo(H,B),this.canvasContext.stroke(),this.canvasContext.closePath()}},{key:"detectImage",value:function(e){this.imgHolder.current.height=380,this.imgHolder.current.src=e.src,this.runDetection(this.imgHolder.current)}},{key:"updateConfidence",value:function(e){var t=this.state.modelParams;t.scoreThreshold=e.target.value/100,this.setState({modelParams:t}),this.state.model.setModelParameters(this.state.modelParams);var a=document.getElementsByClassName("handimageselected")[0];!this.state.videoPlayStatus&&a&&a.click()}},{key:"videoButtonClick",value:function(e){var t=this;this.state.videoPlayStatus?(this.setState({videoPlayStatus:!1}),E.c()):(this.canvasContext.clearRect(0,0,this.cav.width,this.cav.height),E.b(this.video.current).then(function(e){e?(t.setState({videoPlayStatus:!0}),t.runDetection(t.video.current)):(console.log("Camera not available"),t.setState({highlightText:"Please enable camera to use video detection"}),t.setState({showHighlight:!0}),setTimeout(function(){t.setState({showHighlight:!1})},6e3))}))}},{key:"clearButtonClick",value:function(e){this.doodlecounter++;var t=this.state.saveddoodles;t.push({id:"doodle"+this.doodlecounter,url:this.cav.toDataURL()}),this.setState(t),this.canvasContext.clearRect(0,0,this.cav.width,this.cav.height)}},{key:"clearAllButtonClick",value:function(e){this.setState({saveddoodles:[]})}},{key:"flipImageCheck",value:function(e){var t=this.state.modelParams;t.flipHorizontal=e.target.checked,this.setState({modelParams:t}),this.state.model.setModelParameters(this.state.modelParams),console.log(this.state)}},{key:"clickDoodle",value:function(e){}},{key:"clickImage",value:function(e){for(var t=document.getElementsByClassName("handimagebox"),a=0;a<t.length;a++)t[a].classList.remove("handimageselected");if(e.target.classList.add("handimageselected"),this.state.videoPlayStatus){var n=this,i=e.target;document.getElementById("videobutton").click(),setTimeout(function(){n.detectImage(i)},200)}else this.detectImage(e.target)}},{key:"canvasMouseDown",value:function(e){I=!0}},{key:"canvasMouseUp",value:function(){I=!1}},{key:"canvasMouseMove",value:function(e){I&&(console.log("dragging"),T=H,M=B,H=e.clientX-this.media.width,B=e.clientY-this.media.height,console.log("dragging",H,B,T,M),this.drawDoodle())}},{key:"canvasMouseOut",value:function(){I=!1}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"pagetitle"},"Doodle"),i.a.createElement("br",null),this.state.modelLoaded?null:i.a.createElement(A,null),i.a.createElement("div",{className:"clickable "},i.a.createElement("div",{className:this.state.modelLoaded?"hidden":"disableoverlay"}),i.a.createElement("div",{className:this.state.showHighlight?"orangehighlight mb10":"hidden"}," ",this.state.highlightText),i.a.createElement("div",{className:"bluehightlight mb10 lh10"},"Draw interesting doodles by waving your hand in front of the camera. All detection is done in the browser! ",i.a.createElement("span",{className:"lighttext"}," ")),i.a.createElement("div",null,i.a.createElement(f.a,{id:"videobutton",onClick:this.videoButtonClick.bind(this)},"  ",this.state.videoPlayStatus?"\u25a9 Stop Video Doodle":" \u25b6 \ufe0f Start Video Doodle"," "),i.a.createElement("div",{className:"bx--form-item bx--checkbox-wrapper  flipimagecheckbox"},i.a.createElement("input",{onClick:this.flipImageCheck.bind(this),id:"flipimagecheckbox",className:"bx--checkbox",type:"checkbox",value:"new",name:"checkbox"}),i.a.createElement("label",{htmlFor:"flipimagecheckbox",className:"bx--checkbox-label"}," Flip Image "))),i.a.createElement("div",{className:"flex mt10"},i.a.createElement("div",{className:"flex2 mr20  "},i.a.createElement("div",{className:"boldtext mb10"}," Select Doodle Color "),i.a.createElement("div",{style:{backgroundColor:this.state.doodlecolor},className:"doodlecolor mb10 rad3"}),i.a.createElement(D.ChromePicker,{color:this.state.doodlecolor,onChangeComplete:this.handleChangeComplete}),i.a.createElement(f.a,{className:"mt10 width100",id:"clearbutton",onClick:this.clearButtonClick.bind(this)}," Clear Doodle ")),i.a.createElement("div",{className:"flex2 relative"},i.a.createElement("div",{className:"relative"},i.a.createElement("video",{ref:this.video,className:"videobox videoflip",autoPlay:"autoplay",id:"myvideo"}),i.a.createElement("canvas",{onMouseOut:this.canvasMouseOut.bind(this),onMouseMove:this.canvasMouseMove.bind(this),onMouseUp:this.canvasMouseUp.bind(this),onMouseDown:this.canvasMouseDown.bind(this),ref:this.canvas,id:"canvas",className:"canvasbox absolute top left "}))),i.a.createElement("div",{className:"flexfull ml10"},i.a.createElement("div",{className:"flexfull "},i.a.createElement("div",{id:"instruction",className:"lighttext mt10"},"Modify confidence score threshold."),i.a.createElement("div",{className:"mt10 flex"},i.a.createElement("div",{className:"slidecontainer flexfull "},i.a.createElement("input",{type:"range",val:100*this.state.modelParams.scoreThreshold,onChange:this.updateConfidence.bind(this),min:"1",max:"100",className:"slider",id:"confidencerange"})),i.a.createElement("div",{className:"iblock confidencethreshold "},"  ",this.state.modelParams.scoreThreshold," "))),this.state.saveddoodles.length>0&&i.a.createElement(f.a,{className:"mb10 width100",id:"clearAllbutton",onClick:this.clearAllButtonClick.bind(this)},"  Clear All Doodles "),0===this.state.saveddoodles.length&&i.a.createElement("div",{className:"bluehightlight mb10 lh10 mr20"},"Detection not working as expected? Change the confidence threshold value. The right threshold may depend on your ",i.a.createElement("span",{className:"boldtext"},"camera"),"  and ",i.a.createElement("span",{className:"boldtext"},"lighting"),"   conditions."),i.a.createElement("div",{id:"saveddoodlebox"},this.state.saveddoodles.map(function(t){return i.a.createElement("img",{key:t.id,onClick:e.clickDoodle.bind(e),src:t.url,alt:"",className:"doodleimage mr10 mb10 rad3 floatleft"})}))))),i.a.createElement("div",{className:"videoboxes "}),i.a.createElement("img",{ref:this.imgHolder,id:"imgholder",className:"imgholder hidden",src:"",alt:""}))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"mb10"},i.a.createElement("div",{"data-loading":!0,className:"iblock bx--loading bx--loading--small"},i.a.createElement("svg",{className:"bx--loading__svg",viewBox:"-75 -75 150 150"},i.a.createElement("title",null,"Loading"),i.a.createElement("circle",{cx:"0",cy:"0",r:"37.5"}))),i.a.createElement("div",{className:"iblock loadingtitle"}," Loading Handtrack.js model .."))}}]),t}(n.Component),R=L,U=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("div",{className:"containerwrap"},i.a.createElement("div",{className:"aside sidebar"},i.a.createElement("div",{id:"sidebar"}," ",i.a.createElement(p,null)," ")),i.a.createElement("div",{className:"aside maincontent"},i.a.createElement("div",{id:"header"},i.a.createElement(v,null)),i.a.createElement("div",{className:"pagecontent bottomcontent pad20"},i.a.createElement(u.a,{exact:!0,path:"/",component:y}),i.a.createElement(u.a,{path:"/about",component:S}),i.a.createElement(u.a,{path:"/demo",component:y}),i.a.createElement(u.a,{path:"/doodle",component:R})),i.a.createElement("div",{id:"footer"}," ",i.a.createElement(g,null)," "))))}}]),t}(n.Component);a(641),a(642);s.a.render(i.a.createElement(U,null),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.df24f5c9.chunk.js.map