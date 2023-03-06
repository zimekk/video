/*! For license information please see 468.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[468],{5881:e=>{var t=1e3,r=60*t,n=60*r,o=24*n;function i(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,s){s=s||{};var a,u,c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return 6048e5*s;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===c&&isFinite(e))return s.long?(a=e,(u=Math.abs(a))>=o?i(a,u,o,"day"):u>=n?i(a,u,n,"hour"):u>=r?i(a,u,r,"minute"):u>=t?i(a,u,t,"second"):a+" ms"):function(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=n?Math.round(e/n)+"h":i>=r?Math.round(e/r)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},5130:(e,t,r)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))})),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(7123)(t);const{formatters:n}=e.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},7123:(e,t,r)=>{e.exports=function(e){function t(e){let r,o,i,s=null;function a(...e){if(!a.enabled)return;const n=a,o=Number(new Date),i=o-(r||o);n.diff=i,n.prev=r,n.curr=o,r=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((r,o)=>{if("%%"===r)return"%";s++;const i=t.formatters[o];if("function"==typeof i){const t=e[s];r=i.call(n,t),e.splice(s,1),s--}return r})),t.formatArgs.call(n,e),(n.log||t.log).apply(n,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=n,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{s=e}}),"function"==typeof t.init&&t.init(a),a}function n(e,r){const n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(5881),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((r=>{t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},9599:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?t:r)(s,o),s.onload||t(s,o),i.appendChild(s)}},6276:(e,t,r)=>{"use strict";r.d(t,{x:()=>z});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function a(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function u(e){return"function"==typeof e}function c(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create;var l=c((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function f(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var d=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,n,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var f=i(c),d=f.next();!d.done;d=f.next())d.value.remove(this)}catch(t){e={error:t}}finally{try{d&&!d.done&&(t=f.return)&&t.call(f)}finally{if(e)throw e.error}}else c.remove(this);var p=this.initialTeardown;if(u(p))try{p()}catch(e){o=e instanceof l?e.errors:[e]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var v=i(h),b=v.next();!b.done;b=v.next()){var m=b.value;try{y(m)}catch(e){o=null!=o?o:[],e instanceof l?o=a(a([],s(o)),s(e.errors)):o.push(e)}}}catch(e){r={error:e}}finally{try{b&&!b.done&&(n=v.return)&&n.call(v)}finally{if(r)throw r.error}}}if(o)throw new l(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)y(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&f(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&f(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}(),p=d.EMPTY;function h(e){return e instanceof d||e&&"closed"in e&&u(e.remove)&&u(e.add)&&u(e.unsubscribe)}function y(e){u(e)?e():e.unsubscribe()}var v=null,b=null,m=void 0,C=!1,g=!1,w={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=w.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,a([e,t],s(r))):setTimeout.apply(void 0,a([e,t],s(r)))},clearTimeout:function(e){var t=w.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function _(){}var F=x("C",void 0,void 0);function x(e,t,r){return{kind:e,value:t,error:r}}var S=null;function E(e){if(C){var t=!S;if(t&&(S={errorThrown:!1,error:null}),e(),t){var r=S,n=r.errorThrown,o=r.error;if(S=null,n)throw o}}else e()}var P=function(e){function t(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,h(t)&&t.add(r)):r.destination=M,r}return o(t,e),t.create=function(e,t,r){return new k(e,t,r)},t.prototype.next=function(e){this.isStopped?I(function(e){return x("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?I(x("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?I(F,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(d),O=Function.prototype.bind;function A(e,t){return O.call(e,t)}var T=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){j(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){j(e)}else j(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){j(e)}},e}(),k=function(e){function t(t,r,n){var o,i,s=e.call(this)||this;return u(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:s&&g?((i=Object.create(t)).unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&A(t.next,i),error:t.error&&A(t.error,i),complete:t.complete&&A(t.complete,i)}):o=t,s.destination=new T(o),s}return o(t,e),t}(P);function j(e){var t;C?(t=e,C&&S&&(S.errorThrown=!0,S.error=t)):function(e){w.setTimeout((function(){if(!v)throw e;v(e)}))}(e)}function I(e,t){var r=b;r&&w.setTimeout((function(){return r(e,t)}))}var M={closed:!0,next:_,error:function(e){throw e},complete:_},V="function"==typeof Symbol&&Symbol.observable||"@@observable";function D(e){return e}function L(e){return 0===e.length?D:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var N=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n,o=this,i=(n=e)&&n instanceof P||function(e){return e&&u(e.next)&&u(e.error)&&u(e.complete)}(n)&&h(n)?e:new k(e,t,r);return E((function(){var e=o,t=e.operator,r=e.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=R(t))((function(t,n){var o=new k({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[V]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return L(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=R(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function R(e){var t;return null!==(t=null!=e?e:m)&&void 0!==t?t:Promise}var U=c((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),z=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return o(t,e),t.prototype.lift=function(e){var t=new Y(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new U},t.prototype.next=function(e){var t=this;E((function(){var r,n;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var o=i(t.currentObservers),s=o.next();!s.done;s=o.next())s.value.next(e)}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}}))},t.prototype.error=function(e){var t=this;E((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var r=t.observers;r.length;)r.shift().error(e)}}))},t.prototype.complete=function(){var e=this;E((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,r=this,n=r.hasError,o=r.isStopped,i=r.observers;return n||o?p:(this.currentObservers=null,i.push(e),new d((function(){t.currentObservers=null,f(i,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,r=t.hasError,n=t.thrownError,o=t.isStopped;r?e.error(n):o&&e.complete()},t.prototype.asObservable=function(){var e=new N;return e.source=this,e},t.create=function(e,t){return new Y(e,t)},t}(N),Y=function(e){function t(t,r){var n=e.call(this)||this;return n.destination=t,n.source=r,n}return o(t,e),t.prototype.next=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)},t.prototype.error=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:p},t}(z)},6365:e=>{"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},7642:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(7071))&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},2349:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(5130)),o=a(r(7642)),i=a(r(4625)),s=a(r(8154));function a(e){return e&&e.__esModule?e:{default:e}}const u=(0,n.default)("youtube-player"),c={proxyEvents:e=>{const t={};for(const r of i.default){const n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=t=>{u('event "%s"',n,t),e.trigger(r,t)}}return t},promisifyPlayer:(e,t=!1)=>{const r={};for(const n of s.default)t&&o.default[n]?r[n]=(...t)=>e.then((e=>{const r=o.default[n],i=e.getPlayerState(),s=e[n].apply(e,t);return r.stateChangeRequired||Array.isArray(r.acceptableStates)&&!r.acceptableStates.includes(i)?new Promise((t=>{const n=()=>{const o=e.getPlayerState();let i;"number"==typeof r.timeout&&(i=setTimeout((()=>{e.removeEventListener("onStateChange",n),t()}),r.timeout)),Array.isArray(r.acceptableStates)&&r.acceptableStates.includes(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(i),t())};e.addEventListener("onStateChange",n)})).then((()=>s)):s})):r[n]=(...t)=>e.then((e=>e[n].apply(e,t)));return r}};t.default=c,e.exports=t.default},7071:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},4625:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8154:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],e.exports=t.default},5741:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(6365)),o=s(r(2349)),i=s(r(4213));function s(e){return e&&e.__esModule?e:{default:e}}let a;t.default=(e,t={},r=!1)=>{const s=(0,n.default)();if(a||(a=(0,i.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=o.default.proxyEvents(s);const u=new Promise((r=>{"object"==typeof e&&e.playVideo instanceof Function?r(e):a.then((n=>{const o=new n.Player(e,t);return s.on("ready",(()=>{r(o)})),null}))})),c=o.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},4213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(9599))&&n.__esModule?n:{default:n};t.default=e=>new Promise((t=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)return void t(window.YT);{const t="http:"===window.location.protocol?"http:":"https:";(0,o.default)(t+"//www.youtube.com/iframe_api",(t=>{t&&e.trigger("error",t)}))}const r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{r&&r(),t(window.YT)}})),e.exports=t.default}}]);