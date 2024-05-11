/*! For license information please see 606.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[606],{6606:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>y});var n=r(2155),o=r(6487),i=r(280),a=r.n(i),l=r(8847);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),l=new z(n||[]);return o(a,"_invoke",{value:C(t,r,l)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",g="suspendedYield",y="executing",m="completed",v={};function b(){}function w(){}function x(){}var E={};f(E,a,(function(){return this}));var L=Object.getPrototypeOf,P=L&&L(L(K([])));P&&P!==r&&n.call(P,a)&&(E=P);var k=x.prototype=b.prototype=Object.create(E);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,l){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==c(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,l)}))}l(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var c=j(l,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:g,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function K(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},N(S.prototype),f(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(k),f(k,s,"Generator"),f(k,a,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=K,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:K(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function s(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p="uY1_NscMn_4",d={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"video cued"};function g(){var t=f((0,n.useState)(!1),2),e=t[0],r=t[1],i=f((0,n.useState)(0),2),c=i[0],h=i[1],g=(0,n.useRef)(null),y=(0,n.useMemo)((function(){return new o.B}),[]);return(0,n.useEffect)((function(){var t;if(g.current){var e=a()(g.current,{videoId:p,playerVars:{controls:0,fs:0,modestbranding:1,rel:0,origin:"http://localhost:8080",start:15}});e.on("ready",(function(){console.log("Player1 is ready.")})),e.pauseVideo().then((function(){return console.log("Starting to play player1. It will take some time to buffer video before it actually starts playing.")}));var n=function(){var t,r=(t=u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.next=3,e.getCurrentTime();case 3:return t.t1=t.sent,t.t2=100*t.t1,t.next=7,e.getDuration();case 7:t.t3=t.sent,t.t4=t.t2/t.t3,(0,t.t0)(t.t4);case 10:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,l,"next",t)}function l(t){s(i,n,o,a,l,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();e.on("stateChange",(function(e){if(!d[e.data])throw new Error("Unknown state (".concat(e.data,")."));console.log("State: ".concat(d[e.data]," (").concat(e.data,").")),n(),1===e.data?(r(!0),t=setInterval(n,1e3)):[0,2,5].includes(e.data)&&(r(!1),clearInterval(t))}));var o=y.pipe().subscribe((function(t){"play"===t?e.playVideo():"stop"===t&&e.pauseVideo()}));return function(){clearInterval(t),o.unsubscribe()}}}),[y,g,h]),n.createElement("div",{className:l.default.Player},n.createElement("div",{ref:g}),n.createElement("div",{className:l.default.Overlay},n.createElement("div",{className:l.default.Label},"mid & lower abs workout"),n.createElement("div",{className:l.default.Countdown},"8"),n.createElement("div",{className:l.default.Description},n.createElement("i",null,"First",n.createElement("br",null),n.createElement("b",null,"Exercise"))),n.createElement("div",{className:l.default.Counter},"Standing Heel",n.createElement("br",null),"Touch",n.createElement("i",null,"32")),n.createElement("div",{className:l.default.SessionProgress},"Session Progress",n.createElement("i",null,"1%")),n.createElement("div",{className:l.default.Progress},n.createElement("i",{style:{width:"".concat(c,"%")}})),e?n.createElement("div",{className:l.default.Mask,onClick:function(t){return t.preventDefault(),y.next("stop")}}):n.createElement("button",{className:l.default.Play,onClick:function(t){return t.preventDefault(),y.next("play")}},n.createElement("i",null))))}function y(){return n.createElement("section",{className:l.default.Section},n.createElement("h3",null,"Player"),n.createElement(g,null))}},7283:(t,e,r)=>{var n=r(1157),o=r(8614)(n);o.push([t.id,".jIe3paNDQuRarR4c3Xmg{display:block}.CKgSghNKpREBuzbA7Ykt{position:relative;display:inline-flex}.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp{position:absolute;top:0;left:0;bottom:0%;right:0}.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp .HLOkPO041PmouOMwNGz2,.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp .eqB63M9Aq_7Ul9jm32mN,.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp .leGhB8l4LkRWsE1NteTn,.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp .LngFCj6PDRozYWZ2baNd,.CKgSghNKpREBuzbA7Ykt .yxcP0qpquCbVTCM88kKp .AGD_Lxi5zgjKIVLzdDLp{position:absolute}.AGD_Lxi5zgjKIVLzdDLp{left:2.8%;bottom:4.7%;height:12%;width:16.4%;color:#fff;background:#000;text-transform:uppercase;text-align:center;font-size:10px;display:flex;align-items:center}.leGhB8l4LkRWsE1NteTn{top:50%;left:50%;color:#000;font-size:800%;line-height:100%;text-align:center;transform:translate(-50%, -50%)}.HLOkPO041PmouOMwNGz2{left:14%;top:9.5%;height:12%;width:30%;color:#000;text-align:left;font-size:130%;line-height:120%;display:flex;align-items:center;padding-left:1.5%}.HLOkPO041PmouOMwNGz2 i{position:absolute;top:-35%;left:-35%;width:32%;font-size:200%;text-align:center;line-height:150%;border-radius:50%;border:3px solid currentColor}.eqB63M9Aq_7Ul9jm32mN{right:3%;top:5%;width:27%;color:#000;text-align:left;font-size:130%;line-height:100%;display:flex;align-items:center;border-bottom:1px solid currentColor;padding-bottom:1.5%}.eqB63M9Aq_7Ul9jm32mN i{position:absolute;right:0;top:125%}.LngFCj6PDRozYWZ2baNd{right:20%;bottom:9.5%;height:12%;width:16.4%;color:#000;text-align:right;font-size:130%;line-height:80%;display:flex;align-items:center;justify-content:flex-end;border-right:1px solid currentColor;padding-right:1.5%}.hQ3Xho1E4oM84JfXXQSA{position:absolute;bottom:0;width:616px;height:3px;margin:0 12px;background:#2f4f4f}.hQ3Xho1E4oM84JfXXQSA i{position:absolute;width:0;height:100%;background:red}.DwdWf07qnV8K2PjbLwDn{position:absolute;top:0;left:0;bottom:0;right:0}.G11OY2BjGPPFALHQSRwW{cursor:pointer;position:absolute;top:50%;left:50%;color:#fff;background-color:rgba(0,0,0,.75);font-size:50%;text-align:center;transform:translate(-50%, -50%);width:10%;height:12%;border-radius:20%;border:0;padding:0}.G11OY2BjGPPFALHQSRwW:hover{background-color:red}.G11OY2BjGPPFALHQSRwW i{position:absolute;top:50%;left:50%;width:0;height:0;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) currentColor;border-style:solid;border-width:1em 0 1em 2em;transform:translate(-50%, -50%)}",""]),o.locals={Section:"jIe3paNDQuRarR4c3Xmg",Player:"CKgSghNKpREBuzbA7Ykt",Overlay:"yxcP0qpquCbVTCM88kKp",Counter:"HLOkPO041PmouOMwNGz2",SessionProgress:"eqB63M9Aq_7Ul9jm32mN",Countdown:"leGhB8l4LkRWsE1NteTn",Description:"LngFCj6PDRozYWZ2baNd",Label:"AGD_Lxi5zgjKIVLzdDLp",Progress:"hQ3Xho1E4oM84JfXXQSA",Mask:"DwdWf07qnV8K2PjbLwDn",Play:"G11OY2BjGPPFALHQSRwW"},t.exports=o},8847:(t,e,r)=>{"use strict";r.d(e,{default:()=>x});var n=r(3957),o=r.n(n),i=r(1794),a=r.n(i),l=r(8866),c=r.n(l),u=r(621),s=r.n(u),f=r(3897),h=r.n(f),p=r(5462),d=r.n(p),g=r(7283),y=r.n(g),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=h();var v=o()(y(),m);if(!y().locals||t.hot.invalidate){var b=!y().locals,w=b?g:y().locals;t.hot.accept(7283,(e=>{g=r(7283),y=r.n(g),function(t,e,r){if(!t&&e||t&&!e)return!1;var n;for(n in t)if((!r||"default"!==n)&&t[n]!==e[n])return!1;for(n in e)if(!(r&&"default"===n||t[n]))return!1;return!0}(w,b?g:y().locals,b)?(w=b?g:y().locals,v(y())):t.hot.invalidate()}))}t.hot.dispose((function(){v()}));const x=y()&&y().locals?y().locals:void 0}}]);