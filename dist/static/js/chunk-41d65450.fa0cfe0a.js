(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d65450"],{1069:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(){"use strict";var t={667:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["vue-puzzle-vcode",{show_:t.show}],attrs:{id:t.id},on:{mousedown:t.onCloseMouseDown,mouseup:t.onCloseMouseUp,touchstart:t.onCloseMouseDown,touchend:t.onCloseMouseUp}},[n("div",{staticClass:"vue-auth-box_",on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("div",{staticClass:"auth-body_",style:"height: "+t.canvasHeight+"px"},[n("canvas",{ref:"canvas1",style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("canvas",{ref:"canvas3",class:["auth-canvas3_",{show:t.isSuccess}],style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),n("canvas",{ref:"canvas2",staticClass:"auth-canvas2_",style:"width:"+t.puzzleBaseSize+"px;height:"+t.canvasHeight+"px;transform:translateX("+(t.styleWidth-t.sliderBaseSize-(t.puzzleBaseSize-t.sliderBaseSize)*((t.styleWidth-t.sliderBaseSize)/(t.canvasWidth-t.sliderBaseSize)))+"px)",attrs:{width:t.puzzleBaseSize,height:t.canvasHeight}}),t._v(" "),n("div",{class:["loading-box_",{hide_:!t.loading}]},[t._m(0)]),t._v(" "),n("div",{class:["info-box_",{show:t.infoBoxShow},{fail:t.infoBoxFail}]},[t._v("\n        "+t._s(t.infoText)+"\n      ")]),t._v(" "),n("div",{class:["flash_",{show:t.isSuccess}],style:"transform: translateX("+(t.isSuccess?t.canvasWidth+.578*t.canvasHeight+"px":"-"+.578*t.canvasHeight+"px")+") skew(-30deg, 0);"}),t._v(" "),n("img",{staticClass:"reset_",attrs:{src:t.resetSvg},on:{click:t.reset}})]),t._v(" "),n("div",{staticClass:"auth-control_"},[n("div",{staticClass:"range-box",style:"height:"+t.sliderBaseSize+"px"},[n("div",{staticClass:"range-text"},[t._v(t._s(t.sliderText))]),t._v(" "),n("div",{ref:"range-slider",staticClass:"range-slider",style:"width:"+t.styleWidth+"px"},[n("div",{class:["range-btn",{isDown:t.mouseDown}],style:"width:"+t.sliderBaseSize+"px",on:{mousedown:function(e){return t.onRangeMouseDown(e)},touchstart:function(e){return t.onRangeMouseDown(e)}}},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])])])])])};i._withStripped=!0;var s={data:()=>({mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!0,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:null,closeDown:!1,isSuccess:!1,resetSvg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII=",imgIndex:-1}),props:{id:{type:String},canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},imgs:{type:Array},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},mounted(){document.body.appendChild(this.$el),document.addEventListener("mousemove",this.onRangeMouseMove,!1),document.addEventListener("mouseup",this.onRangeMouseUp,!1),document.addEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.addEventListener("touchend",this.onRangeMouseUp,!1),this.show&&document.body.classList.add("vue-puzzle-overflow"),this.reset()},beforeDestroy(){clearTimeout(this.timer1),document.body.removeChild(this.$el),document.removeEventListener("mousemove",this.onRangeMouseMove,!1),document.removeEventListener("mouseup",this.onRangeMouseUp,!1),document.removeEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onRangeMouseUp,!1)},watch:{show(t){t?(document.body.classList.add("vue-puzzle-overflow"),this.reset()):document.body.classList.remove("vue-puzzle-overflow")}},computed:{styleWidth(){const t=this.startWidth+this.newX-this.startX;return t<this.sliderBaseSize?this.sliderBaseSize:t>this.canvasWidth?this.canvasWidth:t},puzzleBaseSize(){return Math.round(52.5*Math.max(Math.min(this.puzzleScale,2),.2)+6)},sliderBaseSize(){return Math.max(Math.min(Math.round(this.sliderSize),Math.round(.5*this.canvasWidth)),10)}},methods:{onClose(){this.mouseDown||(clearTimeout(this.timer1),this.$emit("close"))},onCloseMouseDown(){this.closeDown=!0},onCloseMouseUp(){this.closeDown&&this.onClose(),this.closeDown=!1},onRangeMouseDown(t){this.isCanSlide&&(this.mouseDown=!0,this.startWidth=this.$refs["range-slider"].clientWidth,this.newX=t.clientX||t.changedTouches[0].clientX,this.startX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseMove(t){this.mouseDown&&(t.preventDefault(),this.newX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseUp(){this.mouseDown&&(this.mouseDown=!1,this.submit())},init(t){this.loading=!0,this.isCanSlide=!1;const e=this.$refs.canvas1,n=this.$refs.canvas2,i=this.$refs.canvas3,s=e.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d"),r=document.createElement("img");if(s.clearRect(0,0,this.canvasWidth,this.canvasHeight),o.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.pinX=this.getRandom(this.puzzleBaseSize,this.canvasWidth-this.puzzleBaseSize-20),this.pinY=this.getRandom(20,this.canvasHeight-this.puzzleBaseSize-20),r.crossOrigin="anonymous",r.onload=()=>{const[t,e,n,i]=this.makeImgSize(r);s.save(),this.paintBrick(s),s.closePath(),navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0||(s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill()),s.clip(),s.save(),s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=2,s.fill(),s.restore(),s.drawImage(r,t,e,n,i),a.drawImage(r,t,e,n,i),s.globalCompositeOperation="source-atop",this.paintBrick(s),s.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),1.2*this.puzzleBaseSize,0,2*Math.PI,!0),s.closePath(),s.shadowColor="rgba(255, 255, 255, .8)",s.shadowOffsetX=-1,s.shadowOffsetY=-1,s.shadowBlur=Math.min(Math.ceil(8*this.puzzleScale),12),s.fillStyle="#ffffaa",s.fill();const l=s.getImageData(this.pinX-3,this.pinY-20,this.pinX+this.puzzleBaseSize+5,this.pinY+this.puzzleBaseSize+5);o.putImageData(l,0,this.pinY-20),s.restore(),s.clearRect(0,0,this.canvasWidth,this.canvasHeight),s.save(),this.paintBrick(s),s.globalAlpha=.8,s.fillStyle="#ffffff",s.fill(),s.restore(),s.save(),s.globalCompositeOperation="source-atop",this.paintBrick(s),s.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),1.2*this.puzzleBaseSize,0,2*Math.PI,!0),s.shadowColor="#000",s.shadowOffsetX=2,s.shadowOffsetY=2,s.shadowBlur=16,s.fill(),s.restore(),s.save(),s.globalCompositeOperation="destination-over",s.drawImage(r,t,e,n,i),s.restore(),this.loading=!1,this.isCanSlide=!0},r.onerror=()=>{this.init(!0)},!t&&this.imgs&&this.imgs.length){let t=this.getRandom(0,this.imgs.length-1);t===this.imgIndex&&(t===this.imgs.length-1?t=0:t++),this.imgIndex=t,r.src=this.imgs[t]}else r.src=this.makeImgWithCanvas()},getRandom:(t,e)=>Math.ceil(Math.random()*(e-t)+t),makeImgSize(t){const e=t.width/t.height;let n=0,i=0,s=0,o=0;return e>this.canvasWidth/this.canvasHeight?(o=this.canvasHeight,s=e*o,i=0,n=(this.canvasWidth-s)/2):(s=this.canvasWidth,o=s/e,n=0,i=(this.canvasHeight-o)/2),[n,i,s,o]},paintBrick(t){const e=Math.ceil(15*this.puzzleScale);t.beginPath(),t.moveTo(this.pinX,this.pinY),t.lineTo(this.pinX+e,this.pinY),t.arcTo(this.pinX+e,this.pinY-e/2,this.pinX+e+e/2,this.pinY-e/2,e/2),t.arcTo(this.pinX+e+e,this.pinY-e/2,this.pinX+e+e,this.pinY,e/2),t.lineTo(this.pinX+e+e+e,this.pinY),t.lineTo(this.pinX+e+e+e,this.pinY+e),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e,this.pinX+e+e+e+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e+e,this.pinX+e+e+e,this.pinY+e+e,e/2),t.lineTo(this.pinX+e+e+e,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e),t.arcTo(this.pinX+e/2,this.pinY+e+e,this.pinX+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e/2,this.pinY+e,this.pinX,this.pinY+e,e/2),t.lineTo(this.pinX,this.pinY)},makeImgWithCanvas(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.canvasWidth,t.height=this.canvasHeight,e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.fillRect(0,0,this.canvasWidth,this.canvasHeight);for(let n=0;n<12;n++)if(e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.strokeStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,this.getRandom(0,2)>1)e.save(),e.rotate(this.getRandom(-90,90)*Math.PI/180),e.fillRect(this.getRandom(-20,t.width-20),this.getRandom(-20,t.height-20),this.getRandom(10,t.width/2+10),this.getRandom(10,t.height/2+10)),e.restore();else{e.beginPath();const n=this.getRandom(-Math.PI,Math.PI);e.arc(this.getRandom(0,t.width),this.getRandom(0,t.height),this.getRandom(10,t.height/2+10),n,n+1.5*Math.PI),e.closePath(),e.fill()}return t.toDataURL("image/png")},submit(){const t=Math.abs(this.pinX-(this.styleWidth-this.sliderBaseSize)+(this.puzzleBaseSize-this.sliderBaseSize)*((this.styleWidth-this.sliderBaseSize)/(this.canvasWidth-this.sliderBaseSize))-3);t<this.range?(this.infoText=this.successText,this.infoBoxFail=!1,this.infoBoxShow=!0,this.isCanSlide=!1,this.isSuccess=!0,clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.$emit("success",t)},800)):(this.infoText=this.failText,this.infoBoxFail=!0,this.infoBoxShow=!0,this.isCanSlide=!1,this.$emit("fail",t),clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.reset()},800))},reset(){this.infoBoxFail=!1,this.infoBoxShow=!1,this.isCanSlide=!0,this.isSuccess=!1,this.startWidth=this.sliderBaseSize,this.startX=0,this.newX=0,this.init()}}},o=n(379),a=n.n(o),r=n(358);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var l=function(t,e,n,i,s,o,a,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-gif_"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}],c._compiled=!0),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}(s,i);l.options.__file="src/app.vue";var c=l.exports},358:function(t,e,n){var i=n(645),s=n.n(i)()((function(t){return t[1]}));s.push([t.id,".vue-puzzle-vcode {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n}\n.vue-puzzle-vcode.show_ {\n  opacity: 1;\n  pointer-events: auto;\n}\n.vue-auth-box_ {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 20px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.vue-auth-box_ .auth-body_ {\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n  opacity: 1;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ {\n  opacity: 0;\n  pointer-events: none;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ .loading-gif_ span {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n          flex: none;\n  height: 5px;\n  line-height: 0;\n}\n@-webkit-keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n@keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span {\n  display: inline-block;\n  width: 5px;\n  height: 100%;\n  margin-left: 2px;\n  border-radius: 50%;\n  background-color: #888;\n  -webkit-animation: load 1.04s ease infinite;\n          animation: load 1.04s ease infinite;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(1) {\n  margin-left: 0;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(2) {\n  -webkit-animation-delay: 0.13s;\n          animation-delay: 0.13s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(3) {\n  -webkit-animation-delay: 0.26s;\n          animation-delay: 0.26s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(4) {\n  -webkit-animation-delay: 0.39s;\n          animation-delay: 0.39s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(5) {\n  -webkit-animation-delay: 0.52s;\n          animation-delay: 0.52s;\n}\n.vue-auth-box_ .auth-body_ .info-box_ {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  overflow: hidden;\n  font-size: 13px;\n  background-color: #83ce3f;\n  opacity: 0;\n  -webkit-transform: translateY(24px);\n          transform: translateY(24px);\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  color: #fff;\n  z-index: 10;\n}\n.vue-auth-box_ .auth-body_ .info-box_.show {\n  opacity: 0.95;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.vue-auth-box_ .auth-body_ .info-box_.fail {\n  background-color: #ce594b;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas2_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 100%;\n  z-index: 2;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity 600ms;\n  transition: opacity 600ms;\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_.show {\n  opacity: 1;\n}\n.vue-auth-box_ .auth-body_ .flash_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .flash_.show {\n  -webkit-transition: -webkit-transform 600ms;\n  transition: -webkit-transform 600ms;\n  transition: transform 600ms;\n  transition: transform 600ms, -webkit-transform 600ms;\n}\n.vue-auth-box_ .auth-body_ .reset_ {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 35px;\n  height: auto;\n  z-index: 12;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.vue-auth-box_ .auth-body_ .reset_:hover {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vue-auth-box_ .auth-control_ .range-box {\n  position: relative;\n  width: 100%;\n  background-color: #eef1f8;\n  margin-top: 20px;\n  border-radius: 3px;\n  box-shadow: 0 0 8px rgba(240, 240, 240, 0.6) inset;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: #b7bcd1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  width: 100%;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  background-color: rgba(106, 160, 255, 0.8);\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  right: 0;\n  width: 50px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 0 4px #ccc;\n  cursor: pointer;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div {\n  width: 0;\n  height: 40%;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  border: solid 1px #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div:nth-child(2) {\n  margin: 0 4px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:first-child,\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:first-child {\n  border: solid 4px transparent;\n  height: 0;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(2),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(2) {\n  border-width: 3px;\n  height: 0;\n  border-radius: 3px;\n  margin: 0 6px;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(3),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(3) {\n  border: solid 4px transparent;\n  height: 0;\n  border-left-color: #6aa0ff;\n}\n.vue-puzzle-overflow {\n  overflow: hidden !important;\n}\n",""]),e.Z=s},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(s[a]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);i&&s[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:function(t,e,n){var i,s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function r(t,e){for(var n={},i=[],s=0;s<t.length;s++){var r=t[s],l=e.base?r[0]+e.base:r[0],c=n[l]||0,h="".concat(l," ").concat(c);n[l]=c+1;var u=a(h),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(d)):o.push({identifier:h,updater:g(d,e),references:1}),i.push(h)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=s(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,h=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=h(e,s);else{var o=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var i=n.css,s=n.media,o=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,f=0;function g(t,e){var n,i,s;if(e.singleton){var o=f++;n=p||(p=l(e)),i=u.bind(null,n,o,!1),s=u.bind(null,n,o,!0)}else n=l(e),i=d.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=a(n[i]);o[s].references--}for(var l=r(t,e),c=0;c<n.length;c++){var h=a(n[c]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}n=l}}}}},e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,n),s.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(667)}()}))},2017:function(t,e,n){"use strict";n("cafe")},"90a4":function(t,e,n){},"9ed6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"titleName"},[t._v(t._s(t.loginTitle))])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"账号",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-switch",{staticClass:"custom-switch",attrs:{"active-color":"#ff4949","inactive-color":"#13ce66","active-text":"拼图模式","inactive-text":"滑动模式"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.mode,expression:"!mode"}],staticClass:"slide-verify"},[n("slide-check",{attrs:{"success-fun":t.sliderVerifySuccess,"error-fun":t.sliderVerifyError}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.mode,expression:"mode"}],staticClass:"pintu-verify"},[n("pintu-check",{attrs:{show:t.isPintuShow},on:{"close-pintu-check":t.closePintuCheck}})],1),n("el-button",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1)],1)},s=[],o=(n("d3b7"),n("b64b"),n("83d6")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-check-box"},[n("div",{staticClass:"slider-check",class:t.rangeStatus?"success":""},[n("i",{class:t.rangeStatus?t.successIcon:t.startIcon,on:{mousedown:t.rangeMove}}),t._v(" "+t._s(t.rangeStatus?t.successText:t.startText)+" ")])])},r=[],l={name:"SliderCheck",props:{successFun:{type:Function,default:function(){}},errorFun:{type:Function,default:function(){}}},data:function(){return{disX:0,rangeStatus:!1,startIcon:"el-icon-right",startText:"请拖住滑块，拖动到最右边",successIcon:"el-icon-success",successText:"验证通过"}},methods:{rangeMove:function(t){var e=this,n=t.target,i=t.clientX,s=n.offsetWidth,o=n.parentElement.offsetWidth,a=o-s;if(this.rangeStatus)return!1;document.onmousemove=function(t){var o=t.clientX;e.disX=o-i,e.disX<=0&&(e.disX=0),e.disX>=a-s&&(e.disX=a),n.style.transition=".1s all",n.style.transform="translateX("+e.disX+"px)",t.preventDefault()},document.onmouseup=function(){e.disX!==a?(n.style.transition=".5s all",n.style.transform="translateX(0)",e.errorFun&&e.errorFun()):(e.rangeStatus=!0,e.status&&(e.$parent[e.status]=!0),e.successFun&&e.successFun()),document.onmousemove=null,document.onmouseup=null}}}},c=l,h=(n("cb8b"),n("2877")),u=Object(h["a"])(c,a,r,!1,null,"4475bb05",null),d=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-code",{attrs:{show:t.show,type:"inside",imgs:t.images,"canvas-width":t.canvasWidth,"canvas-height":t.canvasHeight,"puzzle-scale":t.puzzleScale,"slider-size":t.sliderSize,range:t.range,"success-text":t.successText,"fail-text":t.failText,"slider-text":t.sliderText},on:{success:t.onSuccess,close:t.onClose}})},f=[],g=(n("caad"),n("1069")),m=n.n(g),v={name:"PintuCheck",components:{"v-code":m.a},emits:["close-pintu-check"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}}},data:function(){return{images:[],canvasWidth:320,canvasHeight:170,puzzleScale:1.1,sliderSize:60,range:10,successText:"验证通过",failText:"验证失败",sliderText:"请拖动滑块完成拼图"}},methods:{onSuccess:function(){this.$emit("close-pintu-check",!0)},onClose:function(){this.$emit("close-pintu-check",!1)}}},b=v,w=Object(h["a"])(b,p,f,!1,null,"557ea7c0",null),x=w.exports,y=function(t,e,n){e?n():n(new Error("请输入用户RTX账户/电话/邮箱"))},_=function(t,e,n){e?e.length<6?n(new Error("密码不能少于6位")):n():n(new Error("请输入用户密码"))},k={name:"Login",components:{"slide-check":d,"pintu-check":x},data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:y}],password:[{required:!0,trigger:"blur",validator:_}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},loginTitle:o["loginTitle"]||"OPENTOOL-Z智行工具箱",mode:!1,isPass:!1,isPintuShow:!1,isSliderPass:!1}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0},mode:function(t,e){this.isPass=!1,!t&&this.isSliderPass&&(this.isPass=!0)}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;if(!this.mode||this.isPass){if(!this.isPass){var e="请拖动滑块，拖动到最右边";return this.mode&&(e="请拖动滑块完成拼图"),void this.$message({message:e,type:"error",duration:2e3})}this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(e){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(e){t.loading=!1,console.log(e)}))}))}else this.isPintuShow=!0},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,n){return"redirect"!==n&&(e[n]=t[n]),e}),{})},sliderVerifySuccess:function(){this.isPass=!0,this.isSliderPass=!0},sliderVerifyError:function(){this.isPass=!1},closePintuCheck:function(t){this.isPass=t,this.isPintuShow=!1}}},z=k,S=(n("2017"),n("b31e"),Object(h["a"])(z,i,s,!1,null,"2ed1fd10",null));e["default"]=S.exports},aa49:function(t,e,n){},b31e:function(t,e,n){"use strict";n("90a4")},cafe:function(t,e,n){},cb8b:function(t,e,n){"use strict";n("aa49")}}]);