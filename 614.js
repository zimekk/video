"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[614],{33614:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(2784),n=a(72066);function o(){const[e,t]=(0,l.useState)(null),[a,o]=(0,l.useState)([]),[i,r]=(0,l.useState)(null),[c,s]=(0,l.useState)(null),[d,u]=(0,l.useState)(null);(0,l.useEffect)((()=>{a.length&&null===i&&r(a[0].deviceId)}),[a,i,r]);const g=(0,l.useCallback)((e=>{const{value:t}=e.target;r(t)}),[r]);(0,l.useEffect)((()=>{if(i){console.log({videoSource:i});const e=e=>{console.log("getUserMedia() got stream: ",e),s(e)},t={video:{deviceId:i?{exact:i}:void 0}};navigator.mediaDevices.getUserMedia(t).then(e).catch((e=>{console.log("getUserMedia error: ",e)}))}}),[i,s]);const m=(0,l.useRef)();(0,l.useEffect)((()=>(c&&m&&(console.log({mediaStream:c}),Object.assign(m.current,{srcObject:c}),t(new ImageCapture(c.getVideoTracks()[0]))),()=>{c&&c.getTracks().forEach((e=>e.stop()))})),[m,c,t]),(0,l.useEffect)((()=>{e&&(console.log({imageCapture:e}),e.getPhotoCapabilities().then((function(e){console.log("Camera capabilities:",e),u(e.zoom?.max>0?{min:e.zoom.min,max:e.zoom.max,current:e.zoom.current}:null)})).catch((function(e){console.log("getCapabilities() error: ",e)})))}),[e,u]),(0,l.useEffect)((()=>{navigator.mediaDevices.enumerateDevices().then((function(e){o(e.filter((({kind:e})=>"videoinput"===e)).map((({deviceId:e,label:t},a)=>({deviceId:e,label:t||`Camera ${a+1}`}))))})).catch((e=>{console.log("enumerateDevices() error: ",e)}))}),[o]);const h=(0,l.useCallback)((e=>{const{value:t}=e.target;u((e=>({...e,current:t})))}),[u]);(0,l.useEffect)((()=>{d&&(console.log({zoomCapabilities:d}),e.setOptions({zoom:d.current}))}),[e,d]);const f=(0,l.useRef)(),v=(0,l.useCallback)((t=>{e.grabFrame().then((function(e){console.log("Grabbed frame:",e),Object.assign(f.current,{width:e.width,height:e.height}).getContext("2d").drawImage(e,0,0)})).catch((function(e){console.log("grabFrame() error: ",e)}))}),[f,e]),x=(0,l.useRef)(),p=(0,l.useCallback)((t=>{e.takePhoto().then((function(e){console.log("Took photo:",e),Object.assign(x.current,{src:URL.createObjectURL(e)})})).catch((function(e){console.log("takePhoto() error: ",e)}))}),[x,e]);return l.createElement("div",{className:n.Z.Layout},l.createElement("div",null,l.createElement("button",{onClick:v},"Grab Frame"),l.createElement("button",{onClick:p},"Take Photo"),a&&l.createElement("div",{className:n.Z.Select},l.createElement("label",{htmlFor:"videoSource"},"Video source: "),l.createElement("select",{id:"videoSource",onChange:g},a.map((({deviceId:e,label:t},a)=>l.createElement("option",{key:a,value:e},t))))),d&&(({min:e,max:t,current:a})=>l.createElement("input",{type:"range",step:"20",min:e,max:t,value:a,onChange:h}))(d)),l.createElement("video",{ref:m,autoPlay:!0,playsInline:!0,style:{display:c?"":"none"}}),l.createElement("img",{ref:x}),l.createElement("canvas",{ref:f}))}},29491:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(39601),n=a.n(l),o=a(82609),i=a.n(o),r=a(78991),c=a.n(r),s=new URL(a(10524),a.b),d=new URL(a(83715),a.b),u=new URL(a(46962),a.b),g=i()(n()),m=c()(s),h=c()(d),f=c()(u);g.push([e.id,".HLlT0ypHppPCvoIVpzny,.YnU5dtYWHOnA7E6baxdp{background:#fff url("+m+");background-size:5%}.YnU5dtYWHOnA7E6baxdp{border:3px solid gray}.GyXxj2siYbelm2KrOEzJ{display:flex;flex:1;flex-direction:column}.GyXxj2siYbelm2KrOEzJ .yXCB3EEzevHLF8EOK6Jz{flex:1}.yXCB3EEzevHLF8EOK6Jz{display:flex;flex-direction:row}.yXCB3EEzevHLF8EOK6Jz .wa1CQbdlu7WTNFiK6xS6{flex:1}.wa1CQbdlu7WTNFiK6xS6{display:flex;flex-direction:column}.wa1CQbdlu7WTNFiK6xS6 .HLlT0ypHppPCvoIVpzny,.wa1CQbdlu7WTNFiK6xS6 .ZBtvSd6T24U8zR7dydjL{flex:1;max-width:100%}.o4NFlL_ua4nKQZOfhKyZ{overflow-x:scroll}.o4NFlL_ua4nKQZOfhKyZ .vcgJ3S3MPO893UhBYmGa{min-width:min-content}.vcgJ3S3MPO893UhBYmGa{display:flex;flex-direction:column}.vcgJ3S3MPO893UhBYmGa .aTRmoLngMICDBznf2XOw{position:relative;height:20px;background:#fff url("+h+');background-size:166px 20px}.vcgJ3S3MPO893UhBYmGa .QxQlEuixAgDjxOVy6UmD{display:flex;flex-direction:row}.vcgJ3S3MPO893UhBYmGa .vUMFuLmTDL_Xvz5M3TmS{position:relative;display:flex;flex-direction:column}.vcgJ3S3MPO893UhBYmGa .vUMFuLmTDL_Xvz5M3TmS .YnU5dtYWHOnA7E6baxdp{max-height:120px}.vcgJ3S3MPO893UhBYmGa .PD0HX9nHT00nFPxS19Qr .YnU5dtYWHOnA7E6baxdp{border-color:blue}.vcgJ3S3MPO893UhBYmGa .Lqs8Xyh_cvTNauMtRDzW{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>\')}.uZ7TAI9KAd4S0MtFxAa7{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.uZ7TAI9KAd4S0MtFxAa7::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url('+f+") no-repeat;background-size:100%}",""]),g.locals={Canvas:"HLlT0ypHppPCvoIVpzny",Image:"YnU5dtYWHOnA7E6baxdp",Layout:"GyXxj2siYbelm2KrOEzJ",Preview:"yXCB3EEzevHLF8EOK6Jz",Camera:"wa1CQbdlu7WTNFiK6xS6",Video:"ZBtvSd6T24U8zR7dydjL",Scroller:"o4NFlL_ua4nKQZOfhKyZ",Timeline:"vcgJ3S3MPO893UhBYmGa",Time:"aTRmoLngMICDBznf2XOw",Line:"QxQlEuixAgDjxOVy6UmD",Frame:"vUMFuLmTDL_Xvz5M3TmS",Frame__Selected:"PD0HX9nHT00nFPxS19Qr",Scale:"Lqs8Xyh_cvTNauMtRDzW",Slider:"uZ7TAI9KAd4S0MtFxAa7"};const v=g},78991:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},72066:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(46062),n=a.n(l),o=a(44036),i=a.n(o),r=a(96793),c=a.n(r),s=a(17892),d=a.n(s),u=a(11173),g=a.n(u),m=a(42464),h=a.n(m),f=a(29491),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=g();var x=n()(f.default,v);if(!f.default.locals||e.hot.invalidate){var p=!f.default.locals,b=p?f:f.default.locals;e.hot.accept(29491,(t=>{f=a(29491),function(e,t,a){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!a||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(a&&"default"===l||e[l]))return!1;return!0}(b,p?f:f.default.locals,p)?(b=p?f:f.default.locals,x(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){x()}));const w=f.default&&f.default.locals?f.default.locals:void 0},46962:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>'},83715:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>'},10524:e=>{e.exports='data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>'}}]);