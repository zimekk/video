"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[427],{7427:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(4041),o=r(2628);function a(){return n.createElement("div",{className:o.A.Contrast},["Bright Green","Bright Pink","Bright Orange","Bright Yellow","Bright Blue","Forest Green","Dark Maroon","Dark Purple","Dark Gold","Dark Charcoal"].map((function(e,t){return n.createElement("div",{key:t,className:o.A[e.replace(" ","")]},n.createElement("small",null,e),"AAA")})))}var l=r(7283);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var c=["shape"],u=["Shape"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e){var t=p({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e)),r=d((0,n.useState)((function(){return{x:t.x,y:t.y,coords:{}}})),2),o=r[0],a=r[1],i=(0,n.useRef)((function(e){a((function(t){var r=t.coords.x-e.pageX,n=t.coords.y-e.pageY;return{x:t.x-r,y:t.y-n,coords:{x:e.pageX,y:e.pageY}}}))}));return n.createElement("rect",{className:l.A.Draggable,stroke:"blue",x:o.x-2,y:o.y-2,width:4,height:4,onMouseDown:function(e){var t=e.pageX,r=e.pageY;a((function(e){return Object.assign({},e,{coords:{x:t,y:r}})})),document.addEventListener("mousemove",i.current)},onMouseUp:function(){document.removeEventListener("mousemove",i.current),a((function(e){return Object.assign({},e,{coords:{}})}))}})}var y={Circle:function(e){var t=e.cx,r=e.cy,o=e.r;return n.createElement(n.Fragment,null,n.createElement("g",{transform:"\n    translate(".concat(5," ",5,")")},n.createElement("circle",{fill:"#0ce8e3",cx:t,cy:r,r:o})),n.createElement("circle",{fill:"none",stroke:"black",cx:t,cy:r,r:o}),[[t,r],[t+o,r]].map((function(e,t){var r=d(e,2),o=r[0],a=r[1];return n.createElement(b,{key:t,x:o,y:a})})))},Poly:function(e){var t=e.points;return n.createElement(n.Fragment,null,n.createElement("g",{transform:"\n    translate(".concat(5," ",-5,")")},n.createElement("polygon",{fill:"#cb7cd8",points:t.map((function(e){var t=d(e,2);return[t[0],t[1]].join(",")})).join(" ")})),n.createElement("polygon",{fill:"none",stroke:"black",points:t.map((function(e){var t=d(e,2);return[t[0],t[1]].join(",")})).join(" ")}),t.map((function(e,t){var r=d(e,2),o=r[0],a=r[1];return n.createElement(b,{key:t,x:o,y:a})})))},Rect:function(e){var t=e.points,r=d(t,2),o=d(r[0],2),a=o[0],l=o[1],i=d(r[1],2),c=i[0]-a,u=i[1]-l;return n.createElement(n.Fragment,null,n.createElement("g",{transform:"\n               translate(".concat(Number(a)+5," ").concat(Number(l)-5,")")},n.createElement("rect",{fill:"#faeb0f",transform:"rotate(30 ".concat(Number(c)/2," ").concat(Number(u)/2,") scale(1.2)"),x:0,y:0,width:c,height:u})),n.createElement("rect",{fill:"none",stroke:"black",x:a,y:l,width:c,height:u}),t.map((function(e,t){var r=d(e,2),o=r[0],a=r[1];return n.createElement(b,{key:t,x:o,y:a})})))}};function h(){var e=d((0,n.useState)((function(){return[{shape:"Poly",points:[[110,40],[130,60],[100,70]]},{shape:"Rect",points:[[120,120],[150,150]]},{shape:"Circle",cx:50,cy:50,r:20},{shape:"Poly",points:[[30,125],[40,125],[40,140],[55,140],[55,150],[40,150],[40,165],[30,165],[30,150],[15,150],[15,140],[30,140]]}]})),1)[0];return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{border:"1px solid red",top:"10%",left:"10%",width:"80%",height:"80%"}},e.map((function(e){var t=e.shape,r=f(e,c);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,o,a,l;n=e,o=t,a=r[t],l=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(l)?l:String(l))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({Shape:y[t]},r)})).map((function(e,t){var r=e.Shape,o=f(e,u);return n.createElement(r,p({key:t},o))})))}var v=r(3473),g=r(535);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){var t=e.toString(16);return t.length<2?"0".concat(t):t}function j(e){var t=e.color,r=new v.A("black");return n.createElement("div",{className:g.A.Color},n.createElement("span",{style:{color:new v.A(t).deltaE2000(r)>50?"black":"white",backgroundColor:t}},t))}function x(e){var t=e.imgRef,r=(0,n.useRef)(null),o=k((0,n.useState)((function(){return[]})),2),a=o[0],l=o[1];return(0,n.useEffect)((function(){if(t.current){var e=Object.assign(t.current,{crossOrigin:"Anonymous"}),n=function(){if(r.current){var t=r.current;t.width=e.width,t.height=e.height;var n=t.getContext("2d");n&&(n.drawImage(e,0,0),l(function(e){for(var t=e.data,r=[],n=0;n<t.length;n+=4){var o={r:t[n],g:t[n+1],b:t[n+2]};r.push(o)}var a=r.map((function(e){var t=e.r,r=e.g,n=e.b;return"#".concat(E(t)).concat(E(r)).concat(E(n))})).reduce((function(e,t){return Object.assign(e,function(e,t,r){var n;return n=function(e,t){if("object"!=S(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==S(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t,(e[t]||0)+1))}),{});return Object.entries(a).sort((function(e,t){return t[1]-e[1]})).reduce((function(e,t){var r=k(t,1)[0],n=new v.A(r);return e.findIndex((function(e){return new v.A(e).deltaE2000(n)<10}))<0?e.concat(r):e}),[]).slice(0,9)}(n.getImageData(0,0,t.width,t.height))))}};return e.addEventListener("load",n),function(){e.removeEventListener("load",n)}}}),[r,t]),n.createElement("div",{className:g.A.Palette},n.createElement("canvas",{ref:r}),n.createElement("div",{className:g.A.Swatch},a.map((function(e,t){return n.createElement(j,{key:t,color:e})}))))}var A=r(6389);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(){var e,t,r=(e=(0,n.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];return n.createElement("div",{className:A.A.Proxify},n.createElement("button",{className:A.A.Button,onClick:function(){return a((function(e){return!e}))}},o?n.createElement("svg",{viewBox:"0 0 14 14"},n.createElement("path",{d:"M13 1L1 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M1 1L13 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):n.createElement("svg",{viewBox:"0 0 18 14"},n.createElement("path",{d:"M1 7H17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M1 1H17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M1 13H17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o&&n.createElement("div",{className:A.A.Logo},n.createElement("svg",{viewBox:"0 0 40 40"},n.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"#003c1c"}),n.createElement("path",{d:"M 21 0 A 20 20, 0, 0, 0, 40 19 L 40 0 Z ",fill:"#56c28e"}),n.createElement("circle",{cx:"30",cy:"30",r:"10",fill:"#ccc"}),n.createElement("path",{d:"M 2 21 A 2 2, 0, 0, 0, 0 23 L 0 38 A 2 2, 0, 0, 0, 2 40 L 17 40 A 2 2, 0, 0, 0, 19 38 L 19 23 A 2 2, 0, 0, 0, 17 21 Z",fill:"#5258FB"}))))}var P=r(4075);function F(){var e=(0,n.useRef)(null);return n.createElement("section",{className:P.A.Section},n.createElement("h3",null,"Shapes"),n.createElement(D,null),n.createElement(h,null),n.createElement(x,{imgRef:e}),n.createElement(a,null),n.createElement("img",{ref:e,alt:"GeeksforGeeks logo",referrerPolicy:"no-referrer",src:"https://as2.ftcdn.net/v2/jpg/05/09/82/53/1000_F_509825373_MUTTNQoNQA2WmGtwTD0ZrP3O0PgxY7ie.jpg"}))}},9434:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(6758),o=r.n(n),a=r(935),l=r.n(a)()(o());l.push([e.id,".sjdSYGtb5DKbBQUm8TyF{display:flex;flex-direction:row;flex-wrap:wrap;gap:.25em;margin:3em 0 0}.sjdSYGtb5DKbBQUm8TyF div{position:relative;width:3em;height:1em;padding:2em .5em .5em .5em;font-size:xx-large;font-weight:bold}.sjdSYGtb5DKbBQUm8TyF div small{position:absolute;top:1em;font-size:x-small;font-weight:normal}.sjdSYGtb5DKbBQUm8TyF .px8LQK3JPAm4v0A1ocUw{color:#153300;background-color:#a0e971}.sjdSYGtb5DKbBQUm8TyF .XyKe77oOFch8u2tDRPNp{color:#330708;background-color:#ffd7ed}.sjdSYGtb5DKbBQUm8TyF .nLmX0SduRwxh2UFHV2qv{color:#26092e;background-color:#ffc193}.sjdSYGtb5DKbBQUm8TyF .LtWc46qFbSyl_YomrurU{color:#3b3418;background-color:#ffeb69}.sjdSYGtb5DKbBQUm8TyF .zj2wJ88sRmtnbT9DShoY{color:#23241f;background-color:#a0e2e3}.sjdSYGtb5DKbBQUm8TyF .XzQA6SMFNE8GqzaNHmCo{color:#9deb71;background-color:#163300}.sjdSYGtb5DKbBQUm8TyF .TSxcte2FvNLEStYs7o3w{color:#fed9ef;background-color:#330708}.sjdSYGtb5DKbBQUm8TyF .uHUVIzQDOJY9RGqqXSW8{color:#fec193;background-color:#26092e}.sjdSYGtb5DKbBQUm8TyF .QPozCfeMwLcS1hbQA9hU{color:#feea68;background-color:#3b341b}.sjdSYGtb5DKbBQUm8TyF .iYhbYqncTLKIg_Mkfk46{color:#a0e2e3;background-color:#22231e}",""]),l.locals={Contrast:"sjdSYGtb5DKbBQUm8TyF",BrightGreen:"px8LQK3JPAm4v0A1ocUw",BrightPink:"XyKe77oOFch8u2tDRPNp",BrightOrange:"nLmX0SduRwxh2UFHV2qv",BrightYellow:"LtWc46qFbSyl_YomrurU",BrightBlue:"zj2wJ88sRmtnbT9DShoY",ForestGreen:"XzQA6SMFNE8GqzaNHmCo",DarkMaroon:"TSxcte2FvNLEStYs7o3w",DarkPurple:"uHUVIzQDOJY9RGqqXSW8",DarkGold:"QPozCfeMwLcS1hbQA9hU",DarkCharcoal:"iYhbYqncTLKIg_Mkfk46"};const i=l},7173:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(6758),o=r.n(n),a=r(935),l=r.n(a)()(o());l.push([e.id,".lD2QCtCH68LuDu0mNSSV{cursor:pointer}",""]),l.locals={Draggable:"lD2QCtCH68LuDu0mNSSV"};const i=l},4749:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(6758),o=r.n(n),a=r(935),l=r.n(a)()(o());l.push([e.id,'.KMbIXkz5cNIF9Hevij51{display:flex;flex-direction:row;gap:1em}.YkGD0GbsQI1UZ_hCz0j9{display:flex;flex-direction:column;gap:.25em}.yhn0h5KsZcsxNk8U_D7K{display:flex;position:relative;z-index:2}.yhn0h5KsZcsxNk8U_D7K span{font-family:"Courier New",Courier,monospace;font-size:x-small;display:flex;border:1px solid #000;border-radius:50%;width:5em;height:5em;align-items:center;justify-content:center}',""]),l.locals={Palette:"KMbIXkz5cNIF9Hevij51",Swatch:"YkGD0GbsQI1UZ_hCz0j9",Color:"yhn0h5KsZcsxNk8U_D7K"};const i=l},7351:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(6758),o=r.n(n),a=r(935),l=r.n(a)()(o());l.push([e.id,".fS4IgE_9Eh0FkFJAGgcd{position:relative}.mqCPMx5ZyuUdtYFGwpp9{position:absolute;top:0;right:2em;width:18px;height:14px;border:0;background:rgba(0,0,0,0)}.f4Z9Z1ALnW99F8DRcXY1{position:absolute;top:40px;right:2em;width:40px;height:40px}",""]),l.locals={Proxify:"fS4IgE_9Eh0FkFJAGgcd",Button:"mqCPMx5ZyuUdtYFGwpp9",Logo:"f4Z9Z1ALnW99F8DRcXY1"};const i=l},6981:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(6758),o=r.n(n),a=r(935),l=r.n(a)()(o());l.push([e.id,".KpfDk5y69KP4cCr9shKG{display:block}.KpfDk5y69KP4cCr9shKG img{opacity:.2;width:500px;margin-left:140px}.KpfDk5y69KP4cCr9shKG svg{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%}",""]),l.locals={Section:"KpfDk5y69KP4cCr9shKG"};const i=l},2628:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(2591),o=r.n(n),a=r(1740),l=r.n(a),i=r(8128),c=r.n(i),u=r(855),s=r.n(u),f=r(3051),d=r.n(f),m=r(3656),p=r.n(m),b=r(9434),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d();var h=o()(b.default,y);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,g=v?b:b.default.locals;e.hot.accept(9434,(t=>{b=r(9434),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,v?b:b.default.locals,v)?(g=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},7283:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(2591),o=r.n(n),a=r(1740),l=r.n(a),i=r(8128),c=r.n(i),u=r(855),s=r.n(u),f=r(3051),d=r.n(f),m=r(3656),p=r.n(m),b=r(7173),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d();var h=o()(b.default,y);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,g=v?b:b.default.locals;e.hot.accept(7173,(t=>{b=r(7173),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,v?b:b.default.locals,v)?(g=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},535:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(2591),o=r.n(n),a=r(1740),l=r.n(a),i=r(8128),c=r.n(i),u=r(855),s=r.n(u),f=r(3051),d=r.n(f),m=r(3656),p=r.n(m),b=r(4749),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d();var h=o()(b.default,y);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,g=v?b:b.default.locals;e.hot.accept(4749,(t=>{b=r(4749),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,v?b:b.default.locals,v)?(g=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},6389:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(2591),o=r.n(n),a=r(1740),l=r.n(a),i=r(8128),c=r.n(i),u=r(855),s=r.n(u),f=r(3051),d=r.n(f),m=r(3656),p=r.n(m),b=r(7351),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d();var h=o()(b.default,y);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,g=v?b:b.default.locals;e.hot.accept(7351,(t=>{b=r(7351),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,v?b:b.default.locals,v)?(g=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},4075:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(2591),o=r.n(n),a=r(1740),l=r.n(a),i=r(8128),c=r.n(i),u=r(855),s=r.n(u),f=r(3051),d=r.n(f),m=r(3656),p=r.n(m),b=r(6981),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d();var h=o()(b.default,y);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,g=v?b:b.default.locals;e.hot.accept(6981,(t=>{b=r(6981),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,v?b:b.default.locals,v)?(g=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0}}]);