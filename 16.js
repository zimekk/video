"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[16],{72016:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(2784),c=n(64757),r=n(55987),o=n(64153),i=n(80903),l=n(23986),d=n(72779),u=n.n(d),f=n(14819),s=n.n(f),p=n(91111);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=function(e,t,n,a,c){e.lineWidth=1,e.strokeStyle="#94b398",e.beginPath(),n=c?n:-n,e.moveTo(t,0),e.lineTo(t,n),e.arc(t+a/2,n,a/2,Math.PI,0,c),e.lineTo(t+a,0),e.stroke()};function m(e){var t=e.src,n=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new AudioContext;fetch(t).then((function(e){return e.arrayBuffer()})).then((function(t){return e.decodeAudioData(t)})).then((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio||1,a=20;e.width=e.offsetWidth*n,e.height=(e.offsetHeight+2*a)*n;var c=e.getContext("2d");c.scale(n,n),c.translate(0,e.offsetHeight/2+a);for(var r=e.offsetWidth/t.length,o=0;o<t.length;o++){var i=r*o,l=t[o]*e.offsetHeight-a;l<0?l=0:l>e.offsetHeight/2&&(l=l>e.offsetHeight/2),b(c,i,l,r,(o+1)%2)}}(n.current,(a=function(e){for(var t=e.getChannelData(0),n=Math.floor(t.length/2e3),a=[],c=0;c<2e3;c++){for(var r=n*c,o=0,i=0;i<n;i++)o+=Math.abs(t[r+i]);a.push(o/n)}return a}(e),c=Math.pow(Math.max.apply(Math,function(e){if(Array.isArray(e))return g(e)}(t=a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),-1),a.map((function(e){return e*c}))));var t,a,c}))}),[t]),a.createElement("canvas",{ref:n,className:p.Z.Waveform})}function h(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t,n,a,c,r,o){try{var i=e[r](o),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,c)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var r=e.apply(t,n);function o(e){v(r,a,c,o,i,"next",e)}function i(e){v(r,a,c,o,i,"throw",e)}o(void 0)}))}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,c,r=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){i=!0,c=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw c}}return r}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=[10,12,15,20,24,30,50,60],k={"640x480":"SD (Standard Definition) / 480p / 4:3","1280x720":"HD (High Definition) / 720p / 16:9","1920x1080":"Full HD / 1080p / 16:9","2048x1152":"2K / 1:1.77","3840x2160":"UHD / 2160p / 16:9","4096x2160":"DCI 4K / 1:1.9"},S={"":"","audio.ogg":n(28220).Z,"music.mp3":n(82353).Z,"sound1.mp3":n(15981).Z,"sound2.mp3":n(16339).Z},C=function(e,t){return Object.assign(document.createElement("a"),{href:e,download:t}).dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))},R=null,L="CARD";function I(e){var t=e.image,n=e.index,o=e.selected,i=e.onClick,l=e.moveCard,d=(0,a.useRef)(null),f=y((0,c.L)({accept:L,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var a;if(d.current){var c=e.index,r=n;if(c!==r){var o=null===(a=d.current)||void 0===a?void 0:a.getBoundingClientRect(),i=(o.right-o.left)/2,u=t.getClientOffset().x-o.left;c<r&&u<i||c>r&&u>i||(l(c,r),e.index=r)}}}}),2),s=f[0].handlerId,g=f[1],b=y((0,r.c)((function(){return{type:L,item:{index:n},collect:function(e){return{opacity:e.isDragging()?.5:1}}}}),[]),2),m=b[0].opacity;return(0,b[1])(g(d)),a.createElement("div",{ref:d,className:u()(p.Z.Frame,o.includes(n)&&p.Z.Frame__Selected),style:{opacity:m},"data-handler-id":s},a.createElement("div",{className:p.Z.Scale},"#".concat(n)),a.createElement("img",{src:t,className:p.Z.Image,alt:"",onClick:i}))}function D(){var e=y((0,a.useState)([]),2),t=e[0],c=e[1],r=y((0,a.useState)(null),2),d=r[0],u=r[1],f=y((0,a.useState)([n(23656).Z,n(95024).Z,n(97522).Z,n(10391).Z,n(27).Z,n(33472).Z,n(99586).Z,n(70282).Z,n(96863).Z,n(25824).Z,n(48513).Z,n(19653).Z,n(45832).Z,n(89513).Z,n(83249).Z,n(76235).Z,n(39345).Z,n(73614).Z,n(94116).Z,n(72214).Z,n(48274).Z,n(65506).Z,n(9123).Z,n(17768).Z,n(59180).Z,n(53146).Z,n(6171).Z,n(65176).Z,n(51502).Z,n(15756).Z,n(75510).Z,n(61361).Z,n(62633).Z,n(730).Z,n(61800).Z,n(79906).Z,n(22414).Z,n(89192).Z,n(13222).Z,n(19749).Z,n(17351).Z,n(73757).Z,n(95270).Z,n(87984).Z,n(46739).Z,n(86649).Z,n(63155).Z,n(51384).Z,n(7563).Z,n(4233).Z,n(52478).Z,n(55267).Z,n(28584).Z,n(36387).Z,n(43138).Z,n(16282).Z,n(91146).Z,n(26757).Z,n(54024).Z,n(66824).Z]),2),g=f[0],b=f[1],v=y((0,a.useState)(["Click Start to transcode"]),2),x=v[0],E=v[1],L=(0,a.useRef)(),D=(0,a.useRef)(),T=(0,a.useRef)(),j=y((0,a.useState)(""),2),U=j[0],W=j[1],A=y((0,a.useState)(null),2),_=A[0],M=A[1],N=y((0,a.useState)([]),2),O=N[0],F=N[1],z=y((0,a.useState)(""),2),H=z[0],P=z[1],Q=y((0,a.useState)(null),2),B=Q[0],Y=Q[1],J=y((0,a.useState)(null),2),G=J[0],K=J[1],V=y((0,a.useState)(w[0]),2),q=V[0],X=V[1],$=y((0,a.useState)(Object.keys(k)[0]),2),ee=$[0],te=$[1],ne=y((0,a.useState)([]),2),ae=ne[0],ce=ne[1],re=y((0,a.useState)(""),2),oe=re[0],ie=re[1],le=y((0,a.useMemo)((function(){return ee.split("x")}),[ee]),2),de=le[0],ue=le[1],fe=(0,a.useCallback)((function(){return navigator.mediaDevices.enumerateDevices().then((function(e){return console.log({deviceInfos:e})||e.filter((function(e){var t=e.kind;return["videoinput"].includes(t)})).map((function(e){var t=e.deviceId,n=e.kind,a=e.label,c=e.getCapabilities();return{deviceId:t,kind:n,label:a,width:c.width.max,height:c.height.max}}))})).then((function(e){console.log({devices:e}),P(e[0].deviceId),F(e)})).catch(console.info)}),[F,navigator]),se=(0,a.useCallback)((function(){navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:H}}}).then((function(e){return M({stream:e})})).catch(console.info)}),[H,M,navigator]),pe=(0,a.useCallback)((function(){return M((function(e){return e.stream.getVideoTracks()[0].stop()||null}))}),[M]),ge=(0,a.useCallback)((function(){b((function(e){return e.filter((function(e,n){return!t.includes(n)}))})),c([]),t.includes(d)&&u(null)}),[t,d,b,u]),be=(0,a.useCallback)((function(){var e=null===d?g.length-1:d,t=Object.assign(document.createElement("canvas"),{width:de,height:ue});t.getContext("2d").drawImage(D.current,0,0,de,ue),b((function(n){return n.slice(0,e).concat(t.toDataURL()).concat(n.slice(e))})),u(e+1)}),[g,d,b,u]),me=y((0,a.useState)((function(){return Object.assign(new window.Image,{onload:function(){return ye()}})})),1)[0];(0,a.useEffect)((function(){return me.setAttribute("src",null===d?"":g[d])}),[me,g,d]);var he=(0,a.useCallback)((function e(){Y(setTimeout((function(){u((function(e){return e<g.length-1?e+1:0})),e()}),1e3/q))}),[u,Y,g,q]),ve=(0,a.useCallback)((function(){return Y((function(e){return clearTimeout(e)}))}),[Y]);(0,a.useEffect)((function(){null===R&&(R=(0,l.createFFmpeg)({corePath:"ffmpeg/ffmpeg-core.js"})),R.setLogger((function(e){var t=e.type,n=e.message;console.log({type:t,message:n}),"info"!==t&&E((function(e){return e.concat(n)}))})),R.setProgress((function(e){var t=e.ratio;t>=0&&t<=1&&K(100*t),1===t&&setTimeout((function(){K(null)}),1e3)}))}));var Ze=(0,a.useCallback)(Z(regeneratorRuntime.mark((function e(){var t,n,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],R.isLoaded()){e.next=4;break}return e.next=4,R.load();case 4:if(!U){e.next=12;break}return n.push(U),e.t0=R,e.t1=U,e.next=10,(0,l.fetchFile)(S[U]);case 10:e.t2=e.sent,e.t0.FS.call(e.t0,"writeFile",e.t1,e.t2);case 12:a=0;case 13:if(!(a<g.length)){e.next=25;break}return c="00".concat(a).slice(-3),n.push("tmp.".concat(c,".png")),e.t3=R,e.t4="tmp.".concat(c,".png"),e.next=20,(0,l.fetchFile)(g[a]);case 20:e.t5=e.sent,e.t3.FS.call(e.t3,"writeFile",e.t4,e.t5);case 22:a+=1,e.next=13;break;case 25:return e.next=27,(t=R).run.apply(t,h(["-framerate","".concat(q),"-video_size","".concat(de,"x").concat(ue),"-pattern_type","glob","-i","*.png"].concat(U?["-i",U,"-c:a","copy"]:[]).concat(["-shortest","-c:v","libx264","-pix_fmt","yuv420p","out.mp4"])));case 27:n.push("out.mp4"),ce((function(e){return ie(e.length),e.concat(URL.createObjectURL(new Blob([R.FS("readFile","out.mp4").buffer],{type:"video/mp4"})))})),n.forEach((function(e){return R.FS("unlink",e)}));case 30:case"end":return e.stop()}}),e)}))),[U,de,ue,g,q,E,ce,ie]);(0,a.useEffect)((function(){return Object.assign(D.current,""===oe?{oncanplay:function(){return D.current.play()},srcObject:_?_.stream:null,src:""}:{loop:!0,oncanplay:null,srcObject:null,src:ae[oe]})}),[_,D,ae,oe]);var ye=(0,a.useCallback)((function(){var e=T.current.getContext("2d");if((D.current.srcObject||D.current.getAttribute("src"))&&e.drawImage(D.current,0,0,de,ue),me.src){var t=e.getImageData(0,0,de,ue);if(e.drawImage(me,0,0,de,ue),D.current.srcObject||D.current.getAttribute("src")){for(var n=e.getImageData(0,0,de,ue).data,a=t.data,c=.8,r=0;r<a.length;r+=4)a[r+0]=c*a[r+0]+(1-c)*n[r+0],a[r+1]=c*a[r+1]+(1-c)*n[r+1],a[r+2]=c*a[r+2]+(1-c)*n[r+2],a[r+3]=c*a[r+3]+(1-c)*n[r+3];e.putImageData(t,0,0)}}!function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"left";e.font="30px Sans-serif",e.textAlign=c,e.strokeStyle="black",e.lineWidth=4,e.strokeText(t,n,a),e.fillStyle="white",e.fillText(t,n,a)}(e,"Live Video",de-10,ue-20,"right")}),[_,T,d]);(0,a.useEffect)((function(){var e=function e(){ye(),D.current.ended||D.current.paused||D.current.requestVideoFrameCallback(e)};return D.current.addEventListener("play",(function(){D.current.requestVideoFrameCallback(e)}),!1),D.current.addEventListener("loadedmetadata",(function(){var e=D.current,t=e.videoWidth,n=e.videoHeight,a=e.duration;console.log(["loadedmetadata"],{videoWidth:t,videoHeight:n,duration:a})})),D.current.addEventListener("timeupdate",(function(){})),function(){}}),[D]),(0,a.useEffect)((function(){var e=function(e){if(e.type&&e.type.startsWith("image/")){var t=new FileReader;t.addEventListener("load",(function(e){return b((function(t){return t.concat(e.target.result)}))})),t.readAsDataURL(e)}};L.current.addEventListener("change",(function(t){h(t.target.files).forEach(e),t.target.value=""}))}),[b,L]);var xe=(0,a.useCallback)((function(){t.forEach((function(e){return C(g[e],"frame_".concat((e/100).toFixed(2).split(".")[1]))}))}),[t,g]),Ee=(0,a.useCallback)((function(e,t){var n=g[e];b(s()(g,{$splice:[[e,1],[t,0,n]]}))}),[g]);return a.createElement(o.W,{backend:i.PD},a.createElement("div",{className:p.Z.Layout},a.createElement("div",{className:p.Z.Preview},a.createElement("div",{className:p.Z.Camera},a.createElement("div",null,a.createElement("select",{value:oe,onChange:function(e){return ie(e.target.value)}},a.createElement("option",{value:""},"Video Input"),ae.map((function(e,t){return a.createElement("option",{key:t,value:t},e)}))),a.createElement("button",{onClick:function(){return ce((function(e){return e.filter((function(e,t){return String(t)!==oe}))})),ie("")},disabled:""===oe},"Delete")," ",a.createElement("button",{onClick:function(){return C(ae[oe],"video_".concat(oe))},disabled:""===oe},"Download")," ",H&&a.createElement("select",{value:H,onChange:function(e){return P(e.target.value)}},O.map((function(e,t){var n=e.deviceId,c=e.label;return a.createElement("option",{key:t,value:n},c)}))),H?_?a.createElement("button",{key:"stopRecording",onClick:pe},"Stop Recording"):a.createElement("button",{key:"startRecording",onClick:se},"Start Recording"):a.createElement("button",{key:"select",onClick:fe},"Select Device")),a.createElement("video",{className:p.Z.Video,ref:D,crossOrigin:"anonymous",controls:!0})),a.createElement("div",{className:p.Z.Camera},a.createElement("div",null,a.createElement("select",{value:ee,onChange:function(e){return te(e.target.value)}},Object.entries(k).map((function(e,t){var n=y(e,2),c=n[0],r=n[1];return a.createElement("option",{key:t,value:c},r)}))),a.createElement("select",{value:q,onChange:function(e){return X(e.target.value)}},w.map((function(e,t){return a.createElement("option",{key:t,value:e},"".concat(e," fps"))}))),B?a.createElement("button",{key:"stopPlaying",onClick:ve},"Stop"):a.createElement("button",{key:"startPlaying",onClick:he},"Play"),a.createElement("button",{onClick:Ze,disabled:null!==G},"Transcode",null===G?"":" (".concat(G.toFixed(1),"%)")),x.length&&a.createElement("span",null,x[x.length-1])),a.createElement("canvas",{ref:T,className:p.Z.Canvas,width:de,height:ue}))),a.createElement("div",{className:p.Z.Toolbar},a.createElement("button",{onClick:function(){return be()}},"Capture")," ",a.createElement("button",{onClick:function(){return c(g.map((function(e,t){return t})))},disabled:t.length===g.length},"Select All")," ",a.createElement("button",{onClick:function(){return ge()},disabled:0===t.length},"Remove",t.length>0&&" (".concat(t.length,")"))," ",a.createElement("button",{onClick:function(){return xe()},disabled:0===t.length},"Export",t.length>0&&" (".concat(t.length,")"))," ",a.createElement("button",{onClick:function(){return L.current.click()}},"Import")," ",a.createElement("input",{ref:L,type:"file",id:"file-selector",multiple:!0,style:{display:"none"}}),a.createElement("select",{value:U,onChange:function(e){return W(e.target.value)}},Object.keys(S).map((function(e,t){return a.createElement("option",{key:t,value:e},e)})))),a.createElement("div",{className:p.Z.Scroller},a.createElement("div",{className:p.Z.Timeline},a.createElement("div",{className:p.Z.Time},null!==d&&a.createElement("div",{className:p.Z.Slider,style:{marginLeft:"".concat(100*d/g.length,"%")}})),a.createElement("div",{className:p.Z.Line},g.map((function(e,n){return a.createElement(I,{key:n,image:e,index:n,selected:t,moveCard:Ee,onClick:function(e){if(e.shiftKey&&null!==d){var a=y(d<n?[d,n]:[n,d],2),r=a[0],o=a[1];u(n),c((function(e){return e.filter((function(e){return e<r||o<e})).concat(g.map((function(e,t){return t})).filter((function(e){return r<=e&&e<=o})))}))}else e.metaKey?(u(t.includes(n)?null:n),c((function(e){return e.includes(n)?e.filter((function(e){return n!==e})):e.concat(n)}))):(u(n),c([n]))}})}))),a.createElement("div",{className:p.Z.Line},U&&a.createElement(m,{src:S[U]}))))))}},71921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(39601),c=n.n(a),r=n(82609),o=n.n(r),i=n(78991),l=n.n(i),d=new URL(n(10524),n.b),u=new URL(n(83715),n.b),f=new URL(n(46962),n.b),s=o()(c()),p=l()(d),g=l()(u),b=l()(f);s.push([e.id,".U70kiCRNKLlEKPsHsrh4,.Z3L7dBILmJMZQIfNKudy{background:#fff url("+p+");background-size:5%}.Z3L7dBILmJMZQIfNKudy{border:3px solid gray}.Me6TyNGLrPLLJQeU_31n{display:flex;flex:1;flex-direction:column}.Me6TyNGLrPLLJQeU_31n .D99jHOcRZjxiqMnl_rOT{flex:1}.D99jHOcRZjxiqMnl_rOT{display:flex;flex-direction:row}.D99jHOcRZjxiqMnl_rOT .QcWtRx4ERZU6vJIZSRTU{flex:1}.QcWtRx4ERZU6vJIZSRTU{display:flex;flex-direction:column}.QcWtRx4ERZU6vJIZSRTU .U70kiCRNKLlEKPsHsrh4,.QcWtRx4ERZU6vJIZSRTU ._WT440uh86B0NGBDcBoT{flex:1;max-width:100%}.soy_3F7GEVgaJeLAjagl{overflow-x:scroll}.soy_3F7GEVgaJeLAjagl .xD6gT5WED6Sf5Y2tZzzf{min-width:min-content}.xD6gT5WED6Sf5Y2tZzzf{display:flex;flex-direction:column}.xD6gT5WED6Sf5Y2tZzzf .ndQhfmIRjElWisRgwOzl{position:relative;height:20px;background:#fff url("+g+');background-size:166px 20px}.xD6gT5WED6Sf5Y2tZzzf .LjBis4OybYlPyWSrj8Ro{display:flex;flex-direction:row}.xD6gT5WED6Sf5Y2tZzzf .GnRAIupwxDyY6YMnXefm{position:relative;display:flex;flex-direction:column}.xD6gT5WED6Sf5Y2tZzzf .GnRAIupwxDyY6YMnXefm .Z3L7dBILmJMZQIfNKudy{max-height:120px}.xD6gT5WED6Sf5Y2tZzzf .ay7l19xojeQUv_cFSfPW .Z3L7dBILmJMZQIfNKudy{border-color:blue}.xD6gT5WED6Sf5Y2tZzzf .pWUyjpQhuZk_GrJUr4iQ{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>\')}.phiYGT4m029o8zGW9E9o{display:block;width:100%;height:120px}.QhUPM0RjHBFH71TdHul_{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.QhUPM0RjHBFH71TdHul_::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url('+b+") no-repeat;background-size:100%}",""]),s.locals={Canvas:"U70kiCRNKLlEKPsHsrh4",Image:"Z3L7dBILmJMZQIfNKudy",Layout:"Me6TyNGLrPLLJQeU_31n",Preview:"D99jHOcRZjxiqMnl_rOT",Camera:"QcWtRx4ERZU6vJIZSRTU",Video:"_WT440uh86B0NGBDcBoT",Scroller:"soy_3F7GEVgaJeLAjagl",Timeline:"xD6gT5WED6Sf5Y2tZzzf",Time:"ndQhfmIRjElWisRgwOzl",Line:"LjBis4OybYlPyWSrj8Ro",Frame:"GnRAIupwxDyY6YMnXefm",Frame__Selected:"ay7l19xojeQUv_cFSfPW",Scale:"pWUyjpQhuZk_GrJUr4iQ",Waveform:"phiYGT4m029o8zGW9E9o",Slider:"QhUPM0RjHBFH71TdHul_"};const m=s},82353:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"d81af477293b97837ef8a0907301ba30.mp3"},15981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"e9be31f8e26032d76603562af9bb8ede.mp3"},16339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"20b18c71080afd5c152983d2359d29e0.mp3"},28220:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"6119fe70337dc9f89048a9dadf6859c2.ogg"},23656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"bd769f7d1c8cfccef93711aa9e5e2028.png"},95024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"a7f4c3e85ce6c2487e5042bf8f4c20ca.png"},97522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"34e083bc59506a801de63017a129debe.png"},10391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"2713de620766ec47dd0df51adc15cd8d.png"},27:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"5a4446a8d4a749d5f0aa6c0cf2643b53.png"},33472:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"708ed0e1fd3979c0f4f8ca074bcd99a6.png"},99586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c95ff9b68b7eed287fbd9eca07829e68.png"},70282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"0993d48aa704cafc73aadd055c898ded.png"},96863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c82cb1223eeadf64430b13b2e7fca136.png"},25824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"be0fd9402dc85dfbb7ba1a549ad23fe0.png"},48513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"921e4fcd9118b2461dd6a4e52b90b975.png"},19653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"15d26c785def80a9cd21f148e747b1ad.png"},45832:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"5ec4f87957c05dee624973fc453da72a.png"},89513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"f1e64a480cdcd9222ede98367eaed5ae.png"},83249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"b6b7e4800c599cfac77ec94a77cfac66.png"},76235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"03b137a91e5e6034d059624ac1ff83a0.png"},39345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"4fe011cf5909bfd5b6f66b4f4e36516e.png"},73614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"7bbddf38885cd38f0c69dffff33ae660.png"},94116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"df223ecf42a9f2499fb705aaf897a3be.png"},72214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"d03a682c1b23657581a0eb85b6b0e0f4.png"},48274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"6cb67a31af4ae976cdc3c8ca8c057d12.png"},65506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"366e1c14db10557432f05bd24adcfe26.png"},9123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"9151aecfaaeda4976c8a336653c58933.png"},17768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"962b98d0446d21d98329545e00a27bd8.png"},59180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"829a7ae67c6cf85e74bffed72344352a.png"},53146:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"eea5aa855016be5f26cf382d29160e0b.png"},6171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"fd050c09ed7fe4e43a17d3200dbec906.png"},65176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"3104068d50e28f2c834e508293458698.png"},51502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c2331ae40826e33166ab10dcfd63c598.png"},15756:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"0926bb76529a15d4c7040c0baed58585.png"},75510:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"848922d8f0e9ace95412ba2d852d8c67.png"},61361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"0a5c2e86fae33a10817e096519a90c2f.png"},62633:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c570b344d5bd0531052a6a56c41515f1.png"},730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"75b7778ea01c25e5b0edc730816dfa1e.png"},61800:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c0bb4da5daf0bd2dbe8a99558e28bc99.png"},79906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"38c07b2b31fac62ca91be90178f9ebe8.png"},22414:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"aaed373e92fe9cdf36ccea1fcfa24049.png"},89192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"aeace46796aca08dfd1a29d2f3c2abad.png"},13222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"6b5903b75f4ae7b7936ff3fedc4fc3e1.png"},19749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"8dc7bf1538bb585a60ea236e676bf1b1.png"},17351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"7b71924a9a86bbb4ac82119ba46d49d4.png"},73757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"9ced0ab5c2736b688430f088d6e1a1a5.png"},95270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"1479015e5359e2d09626bb9e24f1e1c7.png"},87984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"6f51bb1179699581712ee93475fe985d.png"},46739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"8c3f6cc9d04930ad67daa7867ea1c7c3.png"},86649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"bdbb961ea059b538324522beccd34c9f.png"},63155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"89d8f38968c5dd7ccfce151001d17fe8.png"},51384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"1eb142367601a906148513f70d8e8fc4.png"},7563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c3fd0d8d2708ac2246069276cf3ad523.png"},4233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"a908371e7f05aa98eb3d8c026a983edd.png"},52478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"b5c9f3a8b780c767a692422565a1290a.png"},55267:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"68312611793b8963102f90bc24920db2.png"},28584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"4f89655257d31d167682eae80304da42.png"},36387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"08c3b9d009affdf3e5801339fd8446cd.png"},43138:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"0ef67290dea672db2efdb7da8ea2230a.png"},16282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"ba8e661b936a6dfa5743c5956eebc904.png"},91146:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"d129dc00b85b3ab899ca91ef58e9804e.png"},26757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"c750f4f132a725b57d64757d4f0b314d.png"},54024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"64b37bb258c3715e1849ec2de379d8a8.png"},66824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"06bb3eefe9a341d9baf323e335f66a8f.png"},91111:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(46062),c=n.n(a),r=n(44036),o=n.n(r),i=n(96793),l=n.n(i),d=n(17892),u=n.n(d),f=n(11173),s=n.n(f),p=n(42464),g=n.n(p),b=n(71921),m={};m.styleTagTransform=g(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s();var h=c()(b.default,m);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,Z=v?b:b.default.locals;e.hot.accept(71921,(t=>{b=n(71921),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(Z,v?b:b.default.locals,v)?(Z=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=b.default&&b.default.locals?b.default.locals:void 0},46962:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>'},83715:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>'},10524:e=>{e.exports='data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>'}}]);