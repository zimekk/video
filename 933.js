/*! For license information please see 933.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[933],{2933:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var n=r(2155),o=r(4218);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",p="suspendedYield",d="executing",m="completed",g={};function b(){}function w(){}function E(){}var x={};s(x,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(I([])));S&&S!==r&&n.call(S,u)&&(x=S);var j=E.prototype=b.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,u){var l=v(t[o],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==i(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=v(e,r,n);if("normal"===l.type){if(o=n.done?m:p,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=v(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return w.prototype=E,o(j,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},O(k.prototype),s(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(j),s(j,f,"Generator"),s(j,u,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(){var t=l((0,n.useState)({}),2),e=t[0],r=t[1],c=l((0,n.useState)(""),2),f=c[0],s=c[1],h=l((0,n.useState)(null),2),v=h[0],y=h[1],p=(0,n.useRef)(null),d=(0,n.useCallback)((function(){var t={video:{deviceId:f?{exact:f}:void 0}};console.log(t),navigator.mediaDevices.getUserMedia(t).then(y)}),[f]),m=(0,n.useCallback)(u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.enumerateDevices().then((function(t){console.log(t),r(t.filter((function(t){return"videoinput"===t.kind})).reduce((function(t,e,r){var n,o,a,c,u=e.deviceId,l=e.label;return Object.assign(t,(n={},o=u,a=l||"Camera ".concat(r+1),c=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==i(c)?c:c+"")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,n))}),{}))}));case 2:case"end":return t.stop()}}),t)}))),[r]),g=(0,n.useCallback)((function(t){var e=t.target;return s(e.value)}),[]);return(0,n.useEffect)((function(){f&&d()}),[f]),(0,n.useEffect)((function(){return v&&p.current&&(p.current.srcObject=v,console.log(v.getVideoTracks())),function(){v&&v.getTracks().forEach((function(t){return t.stop()}))}}),[v]),n.createElement("section",{className:o.default.Section},n.createElement("h3",null,"Sources"),n.createElement("div",null,n.createElement("button",{onClick:d},"getUserMedia"),n.createElement("button",{onClick:m},"enumerateDevices"),n.createElement("label",{htmlFor:"videoSource"},"Video source: "),n.createElement("select",{onChange:g},Object.entries(e).map((function(t){var e=l(t,2),r=e[0],o=e[1];return n.createElement("option",{key:r,value:r},o)})))),n.createElement("video",{ref:p,autoPlay:!0,muted:!0,playsInline:!0}))}},3710:(t,e,r)=>{var n=r(1157),o=r(8614)(n);o.push([t.id,".nHgcDCzXygsOdu6mJvm2{display:block}",""]),o.locals={Section:"nHgcDCzXygsOdu6mJvm2"},t.exports=o},4218:(t,e,r)=>{"use strict";r.d(e,{default:()=>E});var n=r(3957),o=r.n(n),i=r(1794),a=r.n(i),c=r(8866),u=r.n(c),l=r(621),f=r.n(l),s=r(3897),h=r.n(s),v=r(5462),y=r.n(v),p=r(3710),d=r.n(p),m={};m.styleTagTransform=y(),m.setAttributes=f(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=h();var g=o()(d(),m);if(!d().locals||t.hot.invalidate){var b=!d().locals,w=b?p:d().locals;t.hot.accept(3710,(e=>{p=r(3710),d=r.n(p),function(t,e,r){if(!t&&e||t&&!e)return!1;var n;for(n in t)if((!r||"default"!==n)&&t[n]!==e[n])return!1;for(n in e)if(!(r&&"default"===n||t[n]))return!1;return!0}(w,b?p:d().locals,b)?(w=b?p:d().locals,g(d())):t.hot.invalidate()}))}t.hot.dispose((function(){g()}));const E=d()&&d().locals?d().locals:void 0}}]);