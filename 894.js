(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[894],{5894:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(2155),l=n(7675),a=n(4924),c=n(395),i=n.n(c),o=n(239);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,i=[],o=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{if(!o&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=["\n# Heading 1\n\n## Heading 1.1\n\nText 1\n\nText 2\n\nText 3\n\n## Heading 1.2\n\nText 1\n\nText 2\n\nText 3\n\n## Heading 1.3\n\nText 1\n\nText 2\n\nText 3\n","\n# Text 2\n\n\n"];function d(e){var t=e.list,n=e.selected,l=e.onSelect;return r.createElement("section",{className:o.default.List},t.map((function(e,t){return r.createElement("div",{key:t,className:i()(n===t&&o.default.selected)},r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),l(t)}},e))})))}function m(e){var t=e.item,n=e.onChange,c=u((0,r.useState)(!1),2),i=c[0],s=c[1],f=(0,r.useCallback)((function(e){var t=e.target;return n(t.value)}),[n]),d=(0,l.V)(),m=(0,r.useMemo)((function(){return a.xI.parse(t)}),[t]);return r.createElement("section",{className:o.default.Item},r.createElement("div",{style:{width:"10%"}},r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:i,onChange:function(e){var t=e.target;return s(t.checked)}}),r.createElement("span",null,"editable")),r.createElement("button",{onClick:d.enter},"fullscreen")),r.createElement("div",{style:{width:"40%",display:"flex",flexDirection:"column"}},i&&r.createElement("textarea",{value:t,onChange:f,rows:10})),r.createElement("div",{style:{width:"50%"}},r.createElement(l.m,{handle:d},r.createElement("article",{className:o.default.Text,dangerouslySetInnerHTML:{__html:m}}))))}function h(){var e=u((0,r.useState)(f),2),t=e[0],n=e[1],l=u((0,r.useState)(0),2),a=l[0],c=l[1],i=(0,r.useCallback)((function(e){return n((function(t){return t.map((function(t,n){return n===a?e:t}))}))}),[a]);return r.createElement("div",{className:o.default.Prompter},r.createElement(d,{list:t,selected:a,onSelect:c}),r.createElement(m,{item:t[a],onChange:i}))}function b(){return r.createElement("section",{className:o.default.Section},r.createElement("h3",null,"Prompter"),r.createElement(h,null))}},1435:(e,t,n)=>{var r=n(8534),l=n(1543)(r);l.push([e.id,".z4ib86xNrJ87mQghQw3b{display:block}.nf3uhFa7QyCxTc3WzXek .mHfhI14jKgox71Rsh8_W a{color:red}.cajYk53_qLcVBl_IkkUt{display:flex;flex-direction:row;height:400px}.cajYk53_qLcVBl_IkkUt textarea{flex:1;border:1px solid blue}.fullscreen{display:flex;flex-direction:column;height:100%}.U9wMxdcfb0DB6aVoIkyr{display:flex}.slwPkGaUZAL5Jbr_iNFb{overflow-y:scroll;border:1px solid red;font-size:2em}.fullscreen.fullscreen-enabled .slwPkGaUZAL5Jbr_iNFb{font-size:4em;color:#fff}",""]),l.locals={Section:"z4ib86xNrJ87mQghQw3b",List:"nf3uhFa7QyCxTc3WzXek",selected:"mHfhI14jKgox71Rsh8_W",Item:"cajYk53_qLcVBl_IkkUt",Preview:"U9wMxdcfb0DB6aVoIkyr",Text:"slwPkGaUZAL5Jbr_iNFb"},e.exports=l},239:(e,t,n)=>{"use strict";n.d(t,{default:()=>g});var r=n(1221),l=n.n(r),a=n(1266),c=n.n(a),i=n(658),o=n.n(i),u=n(2237),s=n.n(u),f=n(8953),d=n.n(f),m=n(6998),h=n.n(m),b=n(1435),x=n.n(b),v={};v.styleTagTransform=h(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=d();var y=l()(x(),v);if(!x().locals||e.hot.invalidate){var p=!x().locals,k=p?b:x().locals;e.hot.accept(1435,(t=>{b=n(1435),x=n.n(b),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(k,p?b:x().locals,p)?(k=p?b:x().locals,y(x())):e.hot.invalidate()}))}e.hot.dispose((function(){y()}));const g=x()&&x().locals?x().locals:void 0}}]);