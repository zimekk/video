(()=>{"use strict";var e={1826:()=>{const e="https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js";var r;!function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"}(r||(r={}));const n=new Error("unknown message type"),t=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),o=(new Error("called FFmpeg.terminate()"),new Error("failed to import ffmpeg-core.js"));let i;self.onmessage=async({data:{id:c,type:a,data:d}})=>{const s=[];let f;try{if(a!==r.LOAD&&!i)throw t;switch(a){case r.LOAD:f=await(async({coreURL:n,wasmURL:t,workerURL:c})=>{const a=!i;try{n||(n=e),importScripts(n)}catch{if(n||(n=e.replace("/umd/","/esm/")),self.createFFmpegCore=(await import(n)).default,!self.createFFmpegCore)throw o}const d=n,s=t||n.replace(/.js$/g,".wasm"),f=c||n.replace(/.js$/g,".worker.js");return i=await self.createFFmpegCore({mainScriptUrlOrBlob:`${d}#${btoa(JSON.stringify({wasmURL:s,workerURL:f}))}`}),i.setLogger((e=>self.postMessage({type:r.LOG,data:e}))),i.setProgress((e=>self.postMessage({type:r.PROGRESS,data:e}))),a})(d);break;case r.EXEC:f=(({args:e,timeout:r=-1})=>{i.setTimeout(r),i.exec(...e);const n=i.ret;return i.reset(),n})(d);break;case r.WRITE_FILE:f=(({path:e,data:r})=>(i.FS.writeFile(e,r),!0))(d);break;case r.READ_FILE:f=(({path:e,encoding:r})=>i.FS.readFile(e,{encoding:r}))(d);break;case r.DELETE_FILE:f=(({path:e})=>(i.FS.unlink(e),!0))(d);break;case r.RENAME:f=(({oldPath:e,newPath:r})=>(i.FS.rename(e,r),!0))(d);break;case r.CREATE_DIR:f=(({path:e})=>(i.FS.mkdir(e),!0))(d);break;case r.LIST_DIR:f=(({path:e})=>{const r=i.FS.readdir(e),n=[];for(const t of r){const r=i.FS.stat(`${e}/${t}`),o=i.FS.isDir(r.mode);n.push({name:t,isDir:o})}return n})(d);break;case r.DELETE_DIR:f=(({path:e})=>(i.FS.rmdir(e),!0))(d);break;case r.MOUNT:f=(({fsType:e,options:r,mountPoint:n})=>{const t=e,o=i.FS.filesystems[t];return!!o&&(i.FS.mount(o,r,n),!0)})(d);break;case r.UNMOUNT:f=(({mountPoint:e})=>(i.FS.unmount(e),!0))(d);break;default:throw n}}catch(e){return void self.postMessage({id:c,type:r.ERROR,data:e.toString()})}f instanceof Uint8Array&&s.push(f.buffer),self.postMessage({id:c,type:a,data:f},s)}}},r={};function n(t){var o=r[t];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var i=r[t]={exports:{}};try{var c={id:t,module:i,factory:e[t],require:n};n.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}n.m=e,n.c=r,n.i=[],n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"be09fabf80c9ae14c6cf."+n.h()+".hot-update.json",n.h=()=>"669f02b6c74e92bff33c",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e,r,t,o={},i=n.c,c=[],a=[],d="idle",s=0,f=[];function u(e){d=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r).then((function(){}))}function p(){0==--s&&u("ready").then((function(){if(0===s){var e=f;f=[];for(var r=0;r<e.length;r++)e[r]()}}))}function l(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return u("check").then(n.hmrM).then((function(t){return t?u("prepare").then((function(){var o=[];return r=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,i){return n.hmrC[i](t.c,t.r,t.m,e,r,o),e}),[])).then((function(){return r=function(){return e?m(e):u("ready").then((function(){return o}))},0===s?r():new Promise((function(e){f.push((function(){e(r())}))}));var r}))})):u(E()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):m(e)}function m(e){e=e||{},E();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var c,a=u("apply"),d=function(e){c||(c=e)},s=[];return n.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([i,a]).then((function(){return c?u("fail").then((function(){throw c})):t?m(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return s}))}))}function E(){if(t)return r||(r=[]),Object.keys(n.hmrI).forEach((function(e){t.forEach((function(t){n.hmrI[e](t,r)}))})),t=void 0,!0}n.hmrD=o,n.i.push((function(f){var m,E,v,y,g=f.module,w=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var a=i[o].parents;-1===a.indexOf(n)&&a.push(n)}else c=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),c=[];return r(o)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(o,f,a(f));return o.e=function(e,n){return function(e){switch(d){case"ready":u("prepare");case"prepare":return s++,e.then(p,p),e;default:return e}}(r.e(e,n))},o}(f.require,f.id);g.hot=(m=f.id,E=g,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:v=e!==m,_requireSelf:function(){c=E.parents.slice(),e=v?void 0:m,n(m)},active:!0,accept:function(e,r,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){},y._acceptedErrorHandlers[e[t]]=n;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,r)})),u("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:l,apply:h,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[m]},e=void 0,y),g.parents=c,g.children=[],c=[],f.require=w})),n.hmrC={},n.hmrI={}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e,r,t,o,i=n.hmrS_importScripts=n.hmrS_importScripts||{826:1};function c(e,t){var i=!1;if(self.webpackHotUpdate_dev_web=(e,c,a)=>{for(var d in c)n.o(c,d)&&(r[d]=c[d],t&&t.push(d));a&&o.push(a),i=!0},importScripts(n.p+n.hu(e)),!i)throw new Error("Loading update chunk failed for unknown reason")}function a(c){function a(e){for(var r=[e],t={},o=r.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),c=i.id,a=i.chain,s=n.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var f=0;f<s.parents.length;f++){var u=s.parents[f],p=n.c[u];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[c]?(t[u]||(t[u]=[]),d(t[u],[c])):(delete t[u],r.push(u),o.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}n.f&&delete n.f.importScriptsHmr,e=void 0;var s={},f=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var l in r)if(n.o(r,l)){var h,m=r[l],E=!1,v=!1,y=!1,g="";switch((h=m?a(l):{type:"disposed",moduleId:l}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(E=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(E=new Error("Aborted because "+l+" is not accepted"+g));break;case"accepted":c.onAccepted&&c.onAccepted(h),v=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(E)return{error:E};if(v)for(l in u[l]=m,d(f,h.outdatedModules),h.outdatedDependencies)n.o(h.outdatedDependencies,l)&&(s[l]||(s[l]=[]),d(s[l],h.outdatedDependencies[l]));y&&(d(f,[h.moduleId]),u[l]=p)}r=void 0;for(var w,_=[],D=0;D<f.length;D++){var I=f[D],b=n.c[I];b&&(b.hot._selfAccepted||b.hot._main)&&u[I]!==p&&!b.hot._selfInvalidated&&_.push({module:I,require:b.hot._requireSelf,errorHandler:b.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,o=f.slice();o.length>0;){var c=o.pop(),a=n.c[c];if(a){var d={},u=a.hot._disposeHandlers;for(D=0;D<u.length;D++)u[D].call(null,d);for(n.hmrD[c]=d,a.hot.active=!1,delete n.c[c],delete s[c],D=0;D<a.children.length;D++){var p=n.c[a.children[D]];p&&(e=p.parents.indexOf(c))>=0&&p.parents.splice(e,1)}}}for(var l in s)if(n.o(s,l)&&(a=n.c[l]))for(w=s[l],D=0;D<w.length;D++)r=w[D],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)n.o(u,r)&&(n.m[r]=u[r]);for(var t=0;t<o.length;t++)o[t](n);for(var i in s)if(n.o(s,i)){var a=n.c[i];if(a){w=s[i];for(var d=[],p=[],l=[],h=0;h<w.length;h++){var m=w[h],E=a.hot._acceptedDependencies[m],v=a.hot._acceptedErrorHandlers[m];if(E){if(-1!==d.indexOf(E))continue;d.push(E),p.push(v),l.push(m)}}for(var y=0;y<d.length;y++)try{d[y].call(null,w)}catch(r){if("function"==typeof p[y])try{p[y](r,{moduleId:i,dependencyId:l[y]})}catch(n){c.onErrored&&c.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:l[y],error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"accept-errored",moduleId:i,dependencyId:l[y],error:r}),c.ignoreErrored||e(r)}}}for(var g=0;g<_.length;g++){var D=_[g],I=D.module;try{D.require(I)}catch(r){if("function"==typeof D.errorHandler)try{D.errorHandler(r,{moduleId:I,module:n.c[I]})}catch(n){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:I,error:r}),c.ignoreErrored||e(r)}}return f}}}n.hmrI.importScripts=function(e,i){r||(r={},o=[],t=[],i.push(a)),n.o(r,e)||(r[e]=n.m[e])},n.hmrC.importScripts=function(d,s,f,u,p,l){p.push(a),e={},t=s,r=f.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],d.forEach((function(r){n.o(i,r)&&void 0!==i[r]?(u.push(c(r,l)),e[r]=!0):e[r]=!1})),n.f&&(n.f.importScriptsHmr=function(r,t){e&&n.o(e,r)&&!e[r]&&(t.push(c(r)),e[r]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),n(1826)})();