"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[920],{2920:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(1855),o=n(7178);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){var r,o,i,l;r=e,o=t,i=n[t],l=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==a(l)?l:l+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){var e=c((0,r.useState)(null),2),t=e[0],n=e[1],a=c((0,r.useState)([]),2),i=a[0],u=a[1],s=c((0,r.useState)(null),2),f=s[0],d=s[1],m=c((0,r.useState)(null),2),g=m[0],v=m[1],p=c((0,r.useState)(null),2),h=p[0],b=p[1];(0,r.useEffect)((function(){i.length&&null===f&&d(i[0].deviceId)}),[i,f,d]);var y=(0,r.useCallback)((function(e){var t=e.target.value;d(t)}),[d]);(0,r.useEffect)((function(){if(f){console.log({videoSource:f});var e={video:{deviceId:f?{exact:f}:void 0}};navigator.mediaDevices.getUserMedia(e).then((function(e){console.log("getUserMedia() got stream: ",e),v(e)})).catch((function(e){console.log("getUserMedia error: ",e)}))}}),[f,v]);var x=(0,r.useRef)();(0,r.useEffect)((function(){return g&&x&&(console.log({mediaStream:g}),Object.assign(x.current,{srcObject:g}),n(new ImageCapture(g.getVideoTracks()[0]))),function(){g&&g.getTracks().forEach((function(e){return e.stop()}))}}),[x,g,n]),(0,r.useEffect)((function(){t&&(console.log({imageCapture:t}),t.getPhotoCapabilities().then((function(e){var t;console.log("Camera capabilities:",e),b((null===(t=e.zoom)||void 0===t?void 0:t.max)>0?{min:e.zoom.min,max:e.zoom.max,current:e.zoom.current}:null)})).catch((function(e){console.log("getCapabilities() error: ",e)})))}),[t,b]),(0,r.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){u(e.filter((function(e){return"videoinput"===e.kind})).map((function(e,t){return{deviceId:e.deviceId,label:e.label||"Camera ".concat(t+1)}})))})).catch((function(e){console.log("enumerateDevices() error: ",e)}))}),[u]);var w=(0,r.useCallback)((function(e){var t=e.target.value;b((function(e){return l(l({},e),{},{current:t})}))}),[b]);(0,r.useEffect)((function(){h&&(console.log({zoomCapabilities:h}),t.setOptions({zoom:h.current}))}),[t,h]);var O,S,E,C,L=(0,r.useRef)(),T=(0,r.useCallback)((function(e){t.grabFrame().then((function(e){console.log("Grabbed frame:",e),Object.assign(L.current,{width:e.width,height:e.height}).getContext("2d").drawImage(e,0,0)})).catch((function(e){console.log("grabFrame() error: ",e)}))}),[L,t]),z=(0,r.useRef)(),P=(0,r.useCallback)((function(e){t.takePhoto().then((function(e){console.log("Took photo:",e),Object.assign(z.current,{src:URL.createObjectURL(e)})})).catch((function(e){console.log("takePhoto() error: ",e)}))}),[z,t]);return r.createElement("div",{className:o.A.Layout},r.createElement("div",null,r.createElement("button",{onClick:T},"Grab Frame"),r.createElement("button",{onClick:P},"Take Photo"),i&&r.createElement("div",{className:o.A.Select},r.createElement("label",{htmlFor:"videoSource"},"Video source: "),r.createElement("select",{id:"videoSource",onChange:y},i.map((function(e,t){var n=e.deviceId,o=e.label;return r.createElement("option",{key:t,value:n},o)})))),h&&(S=(O=h).min,E=O.max,C=O.current,r.createElement("input",{type:"range",step:"20",min:S,max:E,value:C,onChange:w}))),r.createElement("video",{ref:x,autoPlay:!0,playsInline:!0,style:{display:g?"":"none"}}),r.createElement("img",{ref:z}),r.createElement("canvas",{ref:L}))}},7056:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(4355),o=n.n(r),a=n(4428),i=n.n(a),l=n(8247),c=n.n(l),u=new URL(n(1793),n.b),s=new URL(n(9273),n.b),f=new URL(n(4256),n.b),d=i()(o()),m=c()(u),g=c()(s),v=c()(f);d.push([e.id,`.HLlT0ypHppPCvoIVpzny,.YnU5dtYWHOnA7E6baxdp{background:#fff url(${m});background-size:5%}.YnU5dtYWHOnA7E6baxdp{border:3px solid gray}.GyXxj2siYbelm2KrOEzJ{display:flex;flex:1;flex-direction:column}.GyXxj2siYbelm2KrOEzJ .yXCB3EEzevHLF8EOK6Jz{flex:1}.yXCB3EEzevHLF8EOK6Jz{display:flex;flex-direction:row}.yXCB3EEzevHLF8EOK6Jz .wa1CQbdlu7WTNFiK6xS6{flex:1}.wa1CQbdlu7WTNFiK6xS6{display:flex;flex-direction:column}.wa1CQbdlu7WTNFiK6xS6 .HLlT0ypHppPCvoIVpzny,.wa1CQbdlu7WTNFiK6xS6 .ZBtvSd6T24U8zR7dydjL{flex:1;max-width:100%}.o4NFlL_ua4nKQZOfhKyZ{overflow-x:scroll}.o4NFlL_ua4nKQZOfhKyZ .vcgJ3S3MPO893UhBYmGa{min-width:min-content}.vcgJ3S3MPO893UhBYmGa{display:flex;flex-direction:column}.vcgJ3S3MPO893UhBYmGa .aTRmoLngMICDBznf2XOw{position:relative;height:20px;background:#fff url(${g});background-size:166px 20px}.vcgJ3S3MPO893UhBYmGa .QxQlEuixAgDjxOVy6UmD{display:flex;flex-direction:row}.vcgJ3S3MPO893UhBYmGa .vUMFuLmTDL_Xvz5M3TmS{position:relative;display:flex;flex-direction:column}.vcgJ3S3MPO893UhBYmGa .vUMFuLmTDL_Xvz5M3TmS .YnU5dtYWHOnA7E6baxdp{max-height:120px}.vcgJ3S3MPO893UhBYmGa .PD0HX9nHT00nFPxS19Qr .YnU5dtYWHOnA7E6baxdp{border-color:blue}.vcgJ3S3MPO893UhBYmGa .Lqs8Xyh_cvTNauMtRDzW{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url('data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>')}.uZ7TAI9KAd4S0MtFxAa7{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.uZ7TAI9KAd4S0MtFxAa7::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url(${v}) no-repeat;background-size:100%}`,""]),d.locals={Canvas:"HLlT0ypHppPCvoIVpzny",Image:"YnU5dtYWHOnA7E6baxdp",Layout:"GyXxj2siYbelm2KrOEzJ",Preview:"yXCB3EEzevHLF8EOK6Jz",Camera:"wa1CQbdlu7WTNFiK6xS6",Video:"ZBtvSd6T24U8zR7dydjL",Scroller:"o4NFlL_ua4nKQZOfhKyZ",Timeline:"vcgJ3S3MPO893UhBYmGa",Time:"aTRmoLngMICDBznf2XOw",Line:"QxQlEuixAgDjxOVy6UmD",Frame:"vUMFuLmTDL_Xvz5M3TmS",Frame__Selected:"PD0HX9nHT00nFPxS19Qr",Scale:"Lqs8Xyh_cvTNauMtRDzW",Slider:"uZ7TAI9KAd4S0MtFxAa7"};const p=d},8247:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},7178:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(9019),o=n.n(r),a=n(528),i=n.n(a),l=n(8108),c=n.n(l),u=n(2555),s=n.n(u),f=n(2735),d=n.n(f),m=n(5884),g=n.n(m),v=n(7056),p={};p.styleTagTransform=g(),p.setAttributes=s(),p.insert=c().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=d();var h=o()(v.default,p);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,y=b?v:v.default.locals;e.hot.accept(7056,(t=>{v=n(7056),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,b?v:v.default.locals,b)?(y=b?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const x=v.default&&v.default.locals?v.default.locals:void 0},4256:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>'},9273:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>'},1793:e=>{e.exports='data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>'}}]);