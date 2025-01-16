(()=>{var e={3379:(e,r,t)=>{"use strict";const n="https://unpkg.com/@ffmpeg/core@0.12.9/dist/umd/ffmpeg-core.js";var o;!function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.FFPROBE="FFPROBE",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"}(o||(o={}));const i=new Error("unknown message type"),c=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),a=(new Error("called FFmpeg.terminate()"),new Error("failed to import ffmpeg-core.js"));let d;self.onmessage=async({data:{id:e,type:r,data:s}})=>{const u=[];let f;try{if(r!==o.LOAD&&!d)throw c;switch(r){case o.LOAD:f=await(async({coreURL:e,wasmURL:r,workerURL:i})=>{const c=!d;try{e||(e=n),importScripts(e)}catch{if(e&&e!==n||(e=n.replace("/umd/","/esm/")),self.createFFmpegCore=(await t(9403)(e)).default,!self.createFFmpegCore)throw a}const s=e,u=r||e.replace(/.js$/g,".wasm"),f=i||e.replace(/.js$/g,".worker.js");return d=await self.createFFmpegCore({mainScriptUrlOrBlob:`${s}#${btoa(JSON.stringify({wasmURL:u,workerURL:f}))}`}),d.setLogger((e=>self.postMessage({type:o.LOG,data:e}))),d.setProgress((e=>self.postMessage({type:o.PROGRESS,data:e}))),c})(s);break;case o.EXEC:f=(({args:e,timeout:r=-1})=>{d.setTimeout(r),d.exec(...e);const t=d.ret;return d.reset(),t})(s);break;case o.FFPROBE:f=(({args:e,timeout:r=-1})=>{d.setTimeout(r),d.ffprobe(...e);const t=d.ret;return d.reset(),t})(s);break;case o.WRITE_FILE:f=(({path:e,data:r})=>(d.FS.writeFile(e,r),!0))(s);break;case o.READ_FILE:f=(({path:e,encoding:r})=>d.FS.readFile(e,{encoding:r}))(s);break;case o.DELETE_FILE:f=(({path:e})=>(d.FS.unlink(e),!0))(s);break;case o.RENAME:f=(({oldPath:e,newPath:r})=>(d.FS.rename(e,r),!0))(s);break;case o.CREATE_DIR:f=(({path:e})=>(d.FS.mkdir(e),!0))(s);break;case o.LIST_DIR:f=(({path:e})=>{const r=d.FS.readdir(e),t=[];for(const n of r){const r=d.FS.stat(`${e}/${n}`),o=d.FS.isDir(r.mode);t.push({name:n,isDir:o})}return t})(s);break;case o.DELETE_DIR:f=(({path:e})=>(d.FS.rmdir(e),!0))(s);break;case o.MOUNT:f=(({fsType:e,options:r,mountPoint:t})=>{const n=e,o=d.FS.filesystems[n];return!!o&&(d.FS.mount(o,r,t),!0)})(s);break;case o.UNMOUNT:f=(({mountPoint:e})=>(d.FS.unmount(e),!0))(s);break;default:throw i}}catch(r){return void self.postMessage({id:e,type:o.ERROR,data:r.toString()})}f instanceof Uint8Array&&u.push(f.buffer),self.postMessage({id:e,type:r,data:f},u)}},9403:e=>{function r(e){return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}))}r.keys=()=>[],r.resolve=r,r.id=9403,e.exports=r}},r={};function t(n){var o=r[n];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var i=r[n]={exports:{}};try{var c={id:n,module:i,factory:e[n],require:t};t.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}t.m=e,t.c=r,t.i=[],t.hu=e=>e+"."+t.h()+".hot-update.js",t.hmrF=()=>"48e4a900109a7f3cdc6e."+t.h()+".hot-update.json",t.h=()=>"c4ff276bba2a808f730d",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e,r,n,o={},i=t.c,c=[],a=[],d="idle",s=0,u=[];function f(e){d=e;for(var r=[],t=0;t<a.length;t++)r[t]=a[t].call(null,e);return Promise.all(r).then((function(){}))}function p(){0==--s&&f("ready").then((function(){if(0===s){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function l(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return f("check").then(t.hmrM).then((function(n){return n?f("prepare").then((function(){var o=[];return r=[],Promise.all(Object.keys(t.hmrC).reduce((function(e,i){return t.hmrC[i](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return r=function(){return e?m(e):f("ready").then((function(){return o}))},0===s?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):f(E()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):m(e)}function m(e){e=e||{},E();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return f("abort").then((function(){throw o[0]}));var i=f("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,a=f("apply"),d=function(e){c||(c=e)},s=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)s.push(r[t])}})),Promise.all([i,a]).then((function(){return c?f("fail").then((function(){throw c})):n?m(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):f("idle").then((function(){return s}))}))}function E(){if(n)return r||(r=[]),Object.keys(t.hmrI).forEach((function(e){n.forEach((function(n){t.hmrI[e](n,r)}))})),n=void 0,!0}t.hmrD=o,t.i.push((function(u){var m,E,v,y,g=u.module,w=function(r,t){var n=i[t];if(!n)return r;var o=function(o){if(n.hot.active){if(i[o]){var a=i[o].parents;-1===a.indexOf(t)&&a.push(t)}else c=[t],e=o;-1===n.children.indexOf(o)&&n.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+t),c=[];return r(o)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(o,u,a(u));return o.e=function(e,t){return function(e){switch(d){case"ready":f("prepare");case"prepare":return s++,e.then(p,p),e;default:return e}}(r.e(e,t))},o}(u.require,u.id);g.hot=(m=u.id,E=g,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:v=e!==m,_requireSelf:function(){c=E.parents.slice(),e=v?void 0:m,t(m)},active:!0,accept:function(e,r,t){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=r||function(){},y._acceptedErrorHandlers[e[n]]=t;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(t.hmrI).forEach((function(e){t.hmrI[e](m,r)})),f("ready");break;case"ready":Object.keys(t.hmrI).forEach((function(e){t.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:l,apply:h,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[m]},e=void 0,y),g.parents=c,g.children=[],c=[],u.require=w})),t.hmrC={},t.hmrI={}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e,r,n,o,i=t.hmrS_importScripts=t.hmrS_importScripts||{379:1};function c(e,n){var i=!1;if(self.webpackHotUpdate_dev_web=(e,c,a)=>{for(var d in c)t.o(c,d)&&(r[d]=c[d],n&&n.push(d));a&&o.push(a),i=!0},importScripts(t.p+t.hu(e)),!i)throw new Error("Loading update chunk failed for unknown reason")}function a(c){function a(e){for(var r=[e],n={},o=r.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),c=i.id,a=i.chain,s=t.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<s.parents.length;u++){var f=s.parents[u],p=t.c[f];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([f]),moduleId:c,parentId:f};-1===r.indexOf(f)&&(p.hot._acceptedDependencies[c]?(n[f]||(n[f]=[]),d(n[f],[c])):(delete n[f],r.push(f),o.push({chain:a.concat([f]),id:f})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}t.f&&delete t.f.importScriptsHmr,e=void 0;var s={},u=[],f={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var l in r)if(t.o(r,l)){var h=r[l],m=h?a(l):{type:"disposed",moduleId:l},E=!1,v=!1,y=!1,g="";switch(m.chain&&(g="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":c.onDeclined&&c.onDeclined(m),c.ignoreDeclined||(E=new Error("Aborted because of self decline: "+m.moduleId+g));break;case"declined":c.onDeclined&&c.onDeclined(m),c.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+g));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(m),c.ignoreUnaccepted||(E=new Error("Aborted because "+l+" is not accepted"+g));break;case"accepted":c.onAccepted&&c.onAccepted(m),v=!0;break;case"disposed":c.onDisposed&&c.onDisposed(m),y=!0;break;default:throw new Error("Unexception type "+m.type)}if(E)return{error:E};if(v)for(l in f[l]=h,d(u,m.outdatedModules),m.outdatedDependencies)t.o(m.outdatedDependencies,l)&&(s[l]||(s[l]=[]),d(s[l],m.outdatedDependencies[l]));y&&(d(u,[m.moduleId]),f[l]=p)}r=void 0;for(var w,_=[],D=0;D<u.length;D++){var I=u[D],b=t.c[I];b&&(b.hot._selfAccepted||b.hot._main)&&f[I]!==p&&!b.hot._selfInvalidated&&_.push({module:I,require:b.hot._requireSelf,errorHandler:b.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,o=u.slice();o.length>0;){var c=o.pop(),a=t.c[c];if(a){var d={},f=a.hot._disposeHandlers;for(D=0;D<f.length;D++)f[D].call(null,d);for(t.hmrD[c]=d,a.hot.active=!1,delete t.c[c],delete s[c],D=0;D<a.children.length;D++){var p=t.c[a.children[D]];p&&(e=p.parents.indexOf(c))>=0&&p.parents.splice(e,1)}}}for(var l in s)if(t.o(s,l)&&(a=t.c[l]))for(w=s[l],D=0;D<w.length;D++)r=w[D],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in f)t.o(f,r)&&(t.m[r]=f[r]);for(var n=0;n<o.length;n++)o[n](t);for(var i in s)if(t.o(s,i)){var a=t.c[i];if(a){w=s[i];for(var d=[],p=[],l=[],h=0;h<w.length;h++){var m=w[h],E=a.hot._acceptedDependencies[m],v=a.hot._acceptedErrorHandlers[m];if(E){if(-1!==d.indexOf(E))continue;d.push(E),p.push(v),l.push(m)}}for(var y=0;y<d.length;y++)try{d[y].call(null,w)}catch(r){if("function"==typeof p[y])try{p[y](r,{moduleId:i,dependencyId:l[y]})}catch(t){c.onErrored&&c.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:l[y],error:t,originalError:r}),c.ignoreErrored||(e(t),e(r))}else c.onErrored&&c.onErrored({type:"accept-errored",moduleId:i,dependencyId:l[y],error:r}),c.ignoreErrored||e(r)}}}for(var g=0;g<_.length;g++){var D=_[g],I=D.module;try{D.require(I)}catch(r){if("function"==typeof D.errorHandler)try{D.errorHandler(r,{moduleId:I,module:t.c[I]})}catch(t){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:r}),c.ignoreErrored||(e(t),e(r))}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:I,error:r}),c.ignoreErrored||e(r)}}return u}}}t.hmrI.importScripts=function(e,i){r||(r={},o=[],n=[],i.push(a)),t.o(r,e)||(r[e]=t.m[e])},t.hmrC.importScripts=function(d,s,u,f,p,l){p.push(a),e={},n=s,r=u.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],d.forEach((function(r){t.o(i,r)&&void 0!==i[r]?(f.push(c(r,l)),e[r]=!0):e[r]=!1})),t.f&&(t.f.importScriptsHmr=function(r,n){e&&t.o(e,r)&&!e[r]&&(n.push(c(r)),e[r]=!0)})},t.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(t.p+t.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),t(3379)})();