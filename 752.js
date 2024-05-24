/*! For license information please see 752.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[752],{4752:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(2155),a=n(1189),c=n(7708),o=n(3104),i=n(3120),u=n(9619),l=n(5793),s=n(395),f=n.n(s),d=n(2655),p=n.n(d),h=n(8929);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){for(var t=e.getChannelData(0),n=Math.floor(t.length/2e3),r=[],a=0;a<2e3;a++){for(var c=n*a,o=0,i=0;i<n;i++)o+=Math.abs(t[c+i]);r.push(o/n)}return r},b=function(e){var t,n=Math.pow(Math.max.apply(Math,function(e){if(Array.isArray(e))return g(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),-1);return e.map((function(e){return e*n}))},v=function(e,t,n,r,a){e.lineWidth=1,e.strokeStyle="#94b398",e.beginPath(),n=a?n:-n,e.moveTo(t,0),e.lineTo(t,n),e.arc(t+r/2,n,r/2,Math.PI,0,a),e.lineTo(t+r,0),e.stroke()},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio||1;e.width=e.offsetWidth*n,e.height=(e.offsetHeight+40)*n;var r=e.getContext("2d");r.scale(n,n),r.translate(0,e.offsetHeight/2+20);for(var a=e.offsetWidth/t.length,c=0;c<t.length;c++){var o=a*c,i=t[c]*e.offsetHeight-20;i<0?i=0:i>e.offsetHeight/2&&(i=i>e.offsetHeight/2),v(r,o,i,a,(c+1)%2)}};function A(e){var t=e.src,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new AudioContext;fetch(t).then((function(e){return e.arrayBuffer()})).then((function(t){return e.decodeAudioData(t)})).then((function(e){return y(n.current,b(m(e)))}))}),[t]),r.createElement("canvas",{ref:n,className:h.default.Waveform})}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function w(){w=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var c=t&&t.prototype instanceof b?t:b,o=Object.create(c.prototype),i=new D(r||[]);return a(o,"_invoke",{value:R(e,n,i)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",p="suspendedYield",h="executing",g="completed",m={};function b(){}function v(){}function y(){}var A={};l(A,o,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(_([])));k&&k!==n&&r.call(k,o)&&(A=k);var S=y.prototype=b.prototype=Object.create(A);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(a,c,o,i){var u=f(e[a],e,c);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==x(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(s).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,i)}))}i(u.arg)}var c;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return c=c?c.then(a,a):a()}})}function R(t,n,r){var a=d;return function(c,o){if(a===h)throw Error("Generator is already running");if(a===g){if("throw"===c)throw o;return{value:e,done:!0}}for(r.method=c,r.arg=o;;){var i=r.delegate;if(i){var u=j(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=f(t,n,r);if("normal"===l.type){if(a=r.done?g:p,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=g,r.method="throw",r.arg=l.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var c=f(a,t.iterator,n.arg);if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,m;var o=c.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}throw new TypeError(x(t)+" is not iterable")}return v.prototype=y,a(S,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},L(C.prototype),l(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,a,c){void 0===c&&(c=Promise);var o=new C(s(e,n,r,a),c);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(S),l(S,u,"Generator"),l(S,o,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function E(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){E(c,r,a,o,i,"next",e)}function i(e){E(c,r,a,o,i,"throw",e)}o(void 0)}))}}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,o,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw a}}return i}}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return C(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var R=[10,12,15,20,24,30,50,60],j={"640x480":"SD (Standard Definition) / 480p / 4:3","1280x720":"HD (High Definition) / 720p / 16:9","1920x1080":"Full HD / 1080p / 16:9","2048x1152":"2K / 1:1.77","3840x2160":"UHD / 2160p / 16:9","4096x2160":"DCI 4K / 1:1.9"},T={"":"","audio.ogg":n(5671).A,"music.mp3":n(7088).A,"sound1.mp3":n(9677).A,"sound2.mp3":n(6778).A},I=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"left";e.font="30px Sans-serif",e.textAlign=a,e.strokeStyle="black",e.lineWidth=4,e.strokeText(t,n,r),e.fillStyle="white",e.fillText(t,n,r)},D=function(e,t){return Object.assign(document.createElement("a"),{href:e,download:t}).dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))},_=null,O={CARD:"CARD"};function N(e){var t=e.image,n=e.index,o=e.selected,i=e.onClick,u=e.moveCard,l=(0,r.useRef)(null),s=S((0,a.H)({accept:O.CARD,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var r;if(l.current){var a=e.index,c=n;if(a!==c){var o=null===(r=l.current)||void 0===r?void 0:r.getBoundingClientRect(),i=(o.right-o.left)/2,s=t.getClientOffset().x-o.left;a<c&&s<i||a>c&&s>i||(u(a,c),e.index=c)}}}}),2),d=s[0].handlerId,p=s[1],g=S((0,c.i)((function(){return{type:O.CARD,item:{index:n},collect:function(e){return{opacity:e.isDragging()?.5:1}}}}),[]),2),m=g[0].opacity;return(0,g[1])(p(l)),r.createElement("div",{ref:l,className:f()(h.default.Frame,o.includes(n)&&h.default.Frame__Selected),style:{opacity:m},"data-handler-id":d},r.createElement("div",{className:h.default.Scale},"#".concat(n)),r.createElement("img",{src:t,className:h.default.Image,alt:"",onClick:i}))}function Z(){var e=S((0,r.useState)([]),2),t=e[0],a=e[1],c=S((0,r.useState)(null),2),s=c[0],f=c[1],d=S((0,r.useState)([n(8696).A,n(9825).A,n(8746).A,n(4307).A,n(6908).A,n(9173).A,n(1342).A,n(839).A,n(4480).A,n(729).A,n(5651).A,n(7898).A,n(9009).A,n(8792).A,n(8407).A,n(5918).A,n(1669).A,n(5756).A,n(5643).A,n(818).A,n(9794).A,n(8795).A,n(3760).A,n(8585).A,n(4326).A,n(2415).A,n(8852).A,n(1357).A,n(7498).A,n(9075).A,n(6605).A,n(5476).A,n(4383).A,n(5366).A,n(8441).A,n(1536).A,n(1387).A,n(258).A,n(853).A,n(7788).A,n(5124).A,n(8157).A,n(6950).A,n(5967).A,n(3744).A,n(9993).A,n(3906).A,n(5035).A,n(5548).A,n(8437).A,n(2079).A,n(3990).A,n(1021).A,n(8516).A,n(8459).A,n(9458).A,n(8249).A,n(3424).A,n(7047).A,n(9358).A]),2),g=d[0],m=d[1],b=S((0,r.useState)(["Click Start to transcode"]),2),v=b[0],y=b[1],x=(0,r.useRef)(!1),E=(0,r.useRef)(),O=(0,r.useRef)(),Z=(0,r.useRef)(),U=S((0,r.useState)(""),2),W=U[0],P=U[1],M=S((0,r.useState)(null),2),H=M[0],z=M[1],F=S((0,r.useState)([]),2),G=F[0],Q=F[1],Y=S((0,r.useState)(""),2),B=Y[0],J=Y[1],K=S((0,r.useState)(null),2),V=K[0],q=K[1],X=S((0,r.useState)(null),2),$=X[0],ee=X[1],te=S((0,r.useState)(R[0]),2),ne=te[0],re=te[1],ae=S((0,r.useState)(Object.keys(j)[0]),2),ce=ae[0],oe=ae[1],ie=S((0,r.useState)([]),2),ue=ie[0],le=ie[1],se=S((0,r.useState)(""),2),fe=se[0],de=se[1],pe=S((0,r.useMemo)((function(){return ce.split("x")}),[ce]),2),he=pe[0],ge=pe[1],me=(0,r.useCallback)((function(){return navigator.mediaDevices.enumerateDevices().then((function(e){return console.log({deviceInfos:e})||e.filter((function(e){var t=e.kind;return["videoinput"].includes(t)})).map((function(e){var t=e.deviceId,n=e.kind,r=e.label,a=e.getCapabilities();return{deviceId:t,kind:n,label:r,width:a.width.max,height:a.height.max}}))})).then((function(e){console.log({devices:e}),J(e[0].deviceId),Q(e)})).catch(console.info)}),[Q,navigator]),be=(0,r.useCallback)((function(){navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:B}}}).then((function(e){return z({stream:e})})).catch(console.info)}),[B,z,navigator]),ve=(0,r.useCallback)((function(){return z((function(e){return e.stream.getVideoTracks()[0].stop()||null}))}),[z]),ye=(0,r.useCallback)((function(){m((function(e){return e.filter((function(e,n){return!t.includes(n)}))})),a([]),t.includes(s)&&f(null)}),[t,s,m,f]),Ae=(0,r.useCallback)((function(){var e=null===s?g.length-1:s,t=Object.assign(document.createElement("canvas"),{width:he,height:ge});t.getContext("2d").drawImage(O.current,0,0,he,ge),m((function(n){return n.slice(0,e).concat(t.toDataURL()).concat(n.slice(e))})),f(e+1)}),[g,s,m,f]),xe=S((0,r.useState)((function(){return Object.assign(new window.Image,{onload:function(){return Se()}})})),1)[0];(0,r.useEffect)((function(){xe.setAttribute("src",null===s?"":g[s])}),[xe,g,s]);var we=(0,r.useCallback)((function e(){q(setTimeout((function(){f((function(e){return e<g.length-1?e+1:0})),e()}),1e3/ne))}),[f,q,g,ne]),Ee=(0,r.useCallback)((function(){return q((function(e){return clearTimeout(e)}))}),[q]);(0,r.useEffect)((function(){null===_&&(_=new u.m),_&&(_.on("log",(function(e){var t=e.type,n=e.message;console.log({type:t,message:n}),"info"!==t&&y((function(e){return e.concat(n)}))})),_.on("progress",(function(e){var t=e.progress;t>=0&&t<=1&&ee(100*t),1===t&&setTimeout((function(){ee(null)}),1e3)})))}),[]);var ke=(0,r.useCallback)(k(w().mark((function e(){var t,n,r,a;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],_){e.next=3;break}return e.abrupt("return");case 3:if(x.current){e.next=7;break}return x.current=!0,e.next=7,_.load({coreURL:"ffmpeg/ffmpeg-core.js",wasmURL:"ffmpeg/ffmpeg-core.wasm"});case 7:if(!W){e.next=15;break}return t.push(W),e.t0=_,e.t1=W,e.next=13,(0,l.t2)(T[W]);case 13:e.t2=e.sent,e.t0.writeFile.call(e.t0,e.t1,e.t2);case 15:n=0;case 16:if(!(n<g.length)){e.next=28;break}return r="00".concat(n).slice(-3),t.push("tmp.".concat(r,".png")),e.t3=_,e.t4="tmp.".concat(r,".png"),e.next=23,(0,l.t2)(g[n]);case 23:e.t5=e.sent,e.t3.writeFile.call(e.t3,e.t4,e.t5);case 25:n+=1,e.next=16;break;case 28:return e.next=30,_.exec(["-framerate","".concat(ne),"-video_size","".concat(he,"x").concat(ge),"-pattern_type","glob","-i","*.png"].concat(W?["-i",W,"-c:a","copy"]:[]).concat(["-shortest","-c:v","libx264","-pix_fmt","yuv420p","out.mp4"]));case 30:return t.push("out.mp4"),e.t6=Blob,e.next=34,_.readFile("out.mp4");case 34:e.t7=e.sent.buffer,e.t8=[e.t7],e.t9={type:"video/mp4"},a=new e.t6(e.t8,e.t9),le((function(e){return de(e.length),e.concat(URL.createObjectURL(a))})),t.forEach((function(e){var t;return null===(t=_)||void 0===t?void 0:t.deleteFile(e)}));case 40:case"end":return e.stop()}}),e)}))),[W,he,ge,g,ne,x,y,le,de]);(0,r.useEffect)((function(){Object.assign(O.current,""===fe?{oncanplay:function(){return O.current.play()},srcObject:H?H.stream:null,src:""}:{loop:!0,oncanplay:null,srcObject:null,src:ue[fe]})}),[H,O,ue,fe]);var Se=(0,r.useCallback)((function(){var e=Z.current.getContext("2d");if((O.current.srcObject||O.current.getAttribute("src"))&&e.drawImage(O.current,0,0,he,ge),xe.src){var t=e.getImageData(0,0,he,ge);if(e.drawImage(xe,0,0,he,ge),O.current.srcObject||O.current.getAttribute("src")){for(var n=e.getImageData(0,0,he,ge).data,r=t.data,a=.8,c=0;c<r.length;c+=4)r[c+0]=a*r[c+0]+(1-a)*n[c+0],r[c+1]=a*r[c+1]+(1-a)*n[c+1],r[c+2]=a*r[c+2]+(1-a)*n[c+2],r[c+3]=a*r[c+3]+(1-a)*n[c+3];e.putImageData(t,0,0)}}I(e,"Live Video",he-10,ge-20,"right")}),[H,Z,s]);(0,r.useEffect)((function(){var e=function e(){Se(),O.current.ended||O.current.paused||O.current.requestVideoFrameCallback(e)};return O.current.addEventListener("play",(function(){O.current.requestVideoFrameCallback(e)}),!1),O.current.addEventListener("loadedmetadata",(function(){var e=O.current,t=e.videoWidth,n=e.videoHeight,r=e.duration;console.log(["loadedmetadata"],{videoWidth:t,videoHeight:n,duration:r})})),O.current.addEventListener("timeupdate",(function(){})),function(){}}),[O]),(0,r.useEffect)((function(){var e=function(e){if(e.type&&e.type.startsWith("image/")){var t=new FileReader;t.addEventListener("load",(function(e){return m((function(t){return t.concat(e.target.result)}))})),t.readAsDataURL(e)}};E.current.addEventListener("change",(function(t){var n;(n=t.target.files,function(e){if(Array.isArray(e))return C(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||L(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(e),t.target.value=""}))}),[m,E]);var Le=(0,r.useCallback)((function(){t.forEach((function(e){return D(g[e],"frame_".concat((e/100).toFixed(2).split(".")[1]))}))}),[t,g]),Ce=(0,r.useCallback)((function(e,t){var n=g[e];m(p()(g,{$splice:[[e,1],[t,0,n]]}))}),[g]);return r.createElement(o.Q,{backend:i.t2},r.createElement("div",{className:h.default.Layout},r.createElement("div",{className:h.default.Preview},r.createElement("div",{className:h.default.Camera},r.createElement("div",null,r.createElement("select",{value:fe,onChange:function(e){return de(e.target.value)}},r.createElement("option",{value:""},"Video Input"),ue.map((function(e,t){return r.createElement("option",{key:t,value:t},e)}))),r.createElement("button",{onClick:function(){return le((function(e){return e.filter((function(e,t){return String(t)!==fe}))})),de("")},disabled:""===fe},"Delete")," ",r.createElement("button",{onClick:function(){return D(ue[fe],"video_".concat(fe))},disabled:""===fe},"Download")," ",B&&r.createElement("select",{value:B,onChange:function(e){return J(e.target.value)}},G.map((function(e,t){var n=e.deviceId,a=e.label;return r.createElement("option",{key:t,value:n},a)}))),B?H?r.createElement("button",{key:"stopRecording",onClick:ve},"Stop Recording"):r.createElement("button",{key:"startRecording",onClick:be},"Start Recording"):r.createElement("button",{key:"select",onClick:me},"Select Device")),r.createElement("video",{className:h.default.Video,ref:O,crossOrigin:"anonymous",controls:!0})),r.createElement("div",{className:h.default.Camera},r.createElement("div",null,r.createElement("select",{value:ce,onChange:function(e){return oe(e.target.value)}},Object.entries(j).map((function(e,t){var n=S(e,2),a=n[0],c=n[1];return r.createElement("option",{key:t,value:a},c)}))),r.createElement("select",{value:ne,onChange:function(e){return re(e.target.value)}},R.map((function(e,t){return r.createElement("option",{key:t,value:e},"".concat(e," fps"))}))),V?r.createElement("button",{key:"stopPlaying",onClick:Ee},"Stop"):r.createElement("button",{key:"startPlaying",onClick:we},"Play"),r.createElement("button",{onClick:ke,disabled:null!==$},"Transcode",null===$?"":" (".concat($.toFixed(1),"%)")),v.length&&r.createElement("span",null,v[v.length-1])),r.createElement("canvas",{ref:Z,className:h.default.Canvas,width:he,height:ge}))),r.createElement("div",{className:h.default.Toolbar},r.createElement("button",{onClick:function(){return Ae()}},"Capture")," ",r.createElement("button",{onClick:function(){return a(g.map((function(e,t){return t})))},disabled:t.length===g.length},"Select All")," ",r.createElement("button",{onClick:function(){return ye()},disabled:0===t.length},"Remove",t.length>0&&" (".concat(t.length,")"))," ",r.createElement("button",{onClick:function(){return Le()},disabled:0===t.length},"Export",t.length>0&&" (".concat(t.length,")"))," ",r.createElement("button",{onClick:function(){return E.current.click()}},"Import")," ",r.createElement("input",{ref:E,type:"file",id:"file-selector",multiple:!0,style:{display:"none"}}),r.createElement("select",{value:W,onChange:function(e){return P(e.target.value)}},Object.keys(T).map((function(e,t){return r.createElement("option",{key:t,value:e},e)})))),r.createElement("div",{className:h.default.Scroller},r.createElement("div",{className:h.default.Timeline},r.createElement("div",{className:h.default.Time},null!==s&&r.createElement("div",{className:h.default.Slider,style:{marginLeft:"".concat(100*s/g.length,"%")}})),r.createElement("div",{className:h.default.Line},g.map((function(e,n){return r.createElement(N,{key:n,image:e,index:n,selected:t,moveCard:Ce,onClick:function(e){if(e.shiftKey&&null!==s){var r=S(s<n?[s,n]:[n,s],2),c=r[0],o=r[1];f(n),a((function(e){return e.filter((function(e){return e<c||o<e})).concat(g.map((function(e,t){return t})).filter((function(e){return c<=e&&e<=o})))}))}else e.metaKey?(f(t.includes(n)?null:n),a((function(e){return e.includes(n)?e.filter((function(e){return n!==e})):e.concat(n)}))):(f(n),a([n]))}})}))),r.createElement("div",{className:h.default.Line},W&&r.createElement(A,{src:T[W]}))))))}},5253:(e,t,n)=>{var r=n(7526),a=n(8967)(r);a.push([e.id,'.U70kiCRNKLlEKPsHsrh4,.Z3L7dBILmJMZQIfNKudy{background:#fff url(\'data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>\');background-size:5%}.Z3L7dBILmJMZQIfNKudy{border:3px solid gray}.Me6TyNGLrPLLJQeU_31n{display:flex;flex:1;flex-direction:column}.Me6TyNGLrPLLJQeU_31n .D99jHOcRZjxiqMnl_rOT{flex:1}.D99jHOcRZjxiqMnl_rOT{display:flex;flex-direction:row}.D99jHOcRZjxiqMnl_rOT .QcWtRx4ERZU6vJIZSRTU{flex:1}.QcWtRx4ERZU6vJIZSRTU{display:flex;flex-direction:column}.QcWtRx4ERZU6vJIZSRTU .U70kiCRNKLlEKPsHsrh4,.QcWtRx4ERZU6vJIZSRTU ._WT440uh86B0NGBDcBoT{flex:1;max-width:100%}.soy_3F7GEVgaJeLAjagl{overflow-x:scroll}.soy_3F7GEVgaJeLAjagl .xD6gT5WED6Sf5Y2tZzzf{min-width:min-content}.xD6gT5WED6Sf5Y2tZzzf{display:flex;flex-direction:column}.xD6gT5WED6Sf5Y2tZzzf .ndQhfmIRjElWisRgwOzl{position:relative;height:20px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>\');background-size:166px 20px}.xD6gT5WED6Sf5Y2tZzzf .LjBis4OybYlPyWSrj8Ro{display:flex;flex-direction:row}.xD6gT5WED6Sf5Y2tZzzf .GnRAIupwxDyY6YMnXefm{position:relative;display:flex;flex-direction:column}.xD6gT5WED6Sf5Y2tZzzf .GnRAIupwxDyY6YMnXefm .Z3L7dBILmJMZQIfNKudy{max-height:120px}.xD6gT5WED6Sf5Y2tZzzf .ay7l19xojeQUv_cFSfPW .Z3L7dBILmJMZQIfNKudy{border-color:blue}.xD6gT5WED6Sf5Y2tZzzf .pWUyjpQhuZk_GrJUr4iQ{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>\')}.phiYGT4m029o8zGW9E9o{display:block;width:100%;height:120px}.QhUPM0RjHBFH71TdHul_{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.QhUPM0RjHBFH71TdHul_::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>\') no-repeat;background-size:100%}',""]),a.locals={Canvas:"U70kiCRNKLlEKPsHsrh4",Image:"Z3L7dBILmJMZQIfNKudy",Layout:"Me6TyNGLrPLLJQeU_31n",Preview:"D99jHOcRZjxiqMnl_rOT",Camera:"QcWtRx4ERZU6vJIZSRTU",Video:"_WT440uh86B0NGBDcBoT",Scroller:"soy_3F7GEVgaJeLAjagl",Timeline:"xD6gT5WED6Sf5Y2tZzzf",Time:"ndQhfmIRjElWisRgwOzl",Line:"LjBis4OybYlPyWSrj8Ro",Frame:"GnRAIupwxDyY6YMnXefm",Frame__Selected:"ay7l19xojeQUv_cFSfPW",Scale:"pWUyjpQhuZk_GrJUr4iQ",Waveform:"phiYGT4m029o8zGW9E9o",Slider:"QhUPM0RjHBFH71TdHul_"},e.exports=a},7088:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"d81af477293b97837ef8a0907301ba30.mp3"},9677:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"e9be31f8e26032d76603562af9bb8ede.mp3"},6778:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"20b18c71080afd5c152983d2359d29e0.mp3"},5671:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"6119fe70337dc9f89048a9dadf6859c2.ogg"},8696:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"bd769f7d1c8cfccef93711aa9e5e2028.png"},9825:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"a7f4c3e85ce6c2487e5042bf8f4c20ca.png"},8746:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"34e083bc59506a801de63017a129debe.png"},4307:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"2713de620766ec47dd0df51adc15cd8d.png"},6908:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"5a4446a8d4a749d5f0aa6c0cf2643b53.png"},9173:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"708ed0e1fd3979c0f4f8ca074bcd99a6.png"},1342:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c95ff9b68b7eed287fbd9eca07829e68.png"},839:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"0993d48aa704cafc73aadd055c898ded.png"},4480:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c82cb1223eeadf64430b13b2e7fca136.png"},729:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"be0fd9402dc85dfbb7ba1a549ad23fe0.png"},5651:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"921e4fcd9118b2461dd6a4e52b90b975.png"},7898:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"15d26c785def80a9cd21f148e747b1ad.png"},9009:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"5ec4f87957c05dee624973fc453da72a.png"},8792:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"f1e64a480cdcd9222ede98367eaed5ae.png"},8407:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"b6b7e4800c599cfac77ec94a77cfac66.png"},5918:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"03b137a91e5e6034d059624ac1ff83a0.png"},1669:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"4fe011cf5909bfd5b6f66b4f4e36516e.png"},5756:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"7bbddf38885cd38f0c69dffff33ae660.png"},5643:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"df223ecf42a9f2499fb705aaf897a3be.png"},818:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"d03a682c1b23657581a0eb85b6b0e0f4.png"},9794:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"6cb67a31af4ae976cdc3c8ca8c057d12.png"},8795:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"366e1c14db10557432f05bd24adcfe26.png"},3760:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"9151aecfaaeda4976c8a336653c58933.png"},8585:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"962b98d0446d21d98329545e00a27bd8.png"},4326:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"829a7ae67c6cf85e74bffed72344352a.png"},2415:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"eea5aa855016be5f26cf382d29160e0b.png"},8852:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"fd050c09ed7fe4e43a17d3200dbec906.png"},1357:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"3104068d50e28f2c834e508293458698.png"},7498:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c2331ae40826e33166ab10dcfd63c598.png"},9075:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"0926bb76529a15d4c7040c0baed58585.png"},6605:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"848922d8f0e9ace95412ba2d852d8c67.png"},5476:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"0a5c2e86fae33a10817e096519a90c2f.png"},4383:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c570b344d5bd0531052a6a56c41515f1.png"},5366:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"75b7778ea01c25e5b0edc730816dfa1e.png"},8441:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c0bb4da5daf0bd2dbe8a99558e28bc99.png"},1536:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"38c07b2b31fac62ca91be90178f9ebe8.png"},1387:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"aaed373e92fe9cdf36ccea1fcfa24049.png"},258:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"aeace46796aca08dfd1a29d2f3c2abad.png"},853:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"6b5903b75f4ae7b7936ff3fedc4fc3e1.png"},7788:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"8dc7bf1538bb585a60ea236e676bf1b1.png"},5124:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"7b71924a9a86bbb4ac82119ba46d49d4.png"},8157:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"9ced0ab5c2736b688430f088d6e1a1a5.png"},6950:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"1479015e5359e2d09626bb9e24f1e1c7.png"},5967:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"6f51bb1179699581712ee93475fe985d.png"},3744:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"8c3f6cc9d04930ad67daa7867ea1c7c3.png"},9993:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"bdbb961ea059b538324522beccd34c9f.png"},3906:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"89d8f38968c5dd7ccfce151001d17fe8.png"},5035:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"1eb142367601a906148513f70d8e8fc4.png"},5548:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c3fd0d8d2708ac2246069276cf3ad523.png"},8437:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"a908371e7f05aa98eb3d8c026a983edd.png"},2079:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"b5c9f3a8b780c767a692422565a1290a.png"},3990:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"68312611793b8963102f90bc24920db2.png"},1021:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"4f89655257d31d167682eae80304da42.png"},8516:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"08c3b9d009affdf3e5801339fd8446cd.png"},8459:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"0ef67290dea672db2efdb7da8ea2230a.png"},9458:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"ba8e661b936a6dfa5743c5956eebc904.png"},8249:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"d129dc00b85b3ab899ca91ef58e9804e.png"},3424:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"c750f4f132a725b57d64757d4f0b314d.png"},7047:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"64b37bb258c3715e1849ec2de379d8a8.png"},9358:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"06bb3eefe9a341d9baf323e335f66a8f.png"},8929:(e,t,n)=>{"use strict";n.d(t,{default:()=>x});var r=n(3957),a=n.n(r),c=n(1794),o=n.n(c),i=n(8866),u=n.n(i),l=n(621),s=n.n(l),f=n(3897),d=n.n(f),p=n(5462),h=n.n(p),g=n(5253),m=n.n(g),b={};b.styleTagTransform=h(),b.setAttributes=s(),b.insert=u().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d();var v=a()(m(),b);if(!m().locals||e.hot.invalidate){var y=!m().locals,A=y?g:m().locals;e.hot.accept(5253,(t=>{g=n(5253),m=n.n(g),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(A,y?g:m().locals,y)?(A=y?g:m().locals,v(m())):e.hot.invalidate()}))}e.hot.dispose((function(){v()}));const x=m()&&m().locals?m().locals:void 0}}]);