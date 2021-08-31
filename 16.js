/*! For license information please see 16.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[16],{2016:(e,t,c)=>{"use strict";c.r(t),c.d(t,{default:()=>b});var a=c(2784),n=c(3986),s=c(2779),d=c.n(s),i=c(1111);const l=(e,t,c,a,n)=>{e.lineWidth=1,e.strokeStyle="#94b398",e.beginPath(),c=n?c:-c,e.moveTo(t,0),e.lineTo(t,c),e.arc(t+a/2,c,a/2,Math.PI,0,n),e.lineTo(t+a,0),e.stroke()};function r({src:e}){const t=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const c=new AudioContext;fetch(e).then((e=>e.arrayBuffer())).then((e=>c.decodeAudioData(e))).then((e=>((e,t,c=window.devicePixelRatio||1)=>{e.width=e.offsetWidth*c,e.height=(e.offsetHeight+40)*c;const a=e.getContext("2d");a.scale(c,c),a.translate(0,e.offsetHeight/2+20);const n=e.offsetWidth/t.length;for(let c=0;c<t.length;c++){const s=n*c;let d=t[c]*e.offsetHeight-20;d<0?d=0:d>e.offsetHeight/2&&(d=d>e.offsetHeight/2),l(a,s,d,n,(c+1)%2)}})(t.current,(e=>{const t=Math.pow(Math.max(...e),-1);return e.map((e=>e*t))})((e=>{const t=e.getChannelData(0),c=Math.floor(t.length/2e3),a=[];for(let e=0;e<2e3;e++){let n=c*e,s=0;for(let e=0;e<c;e++)s+=Math.abs(t[n+e]);a.push(s/c)}return a})(e)))))}),[e]),a.createElement("canvas",{ref:t,className:i.Z.Waveform})}const o=[10,12,15,20,24,30,50,60],u={"640x480":"SD (Standard Definition) / 480p / 4:3","1280x720":"HD (High Definition) / 720p / 16:9","1920x1080":"Full HD / 1080p / 16:9","2048x1152":"2K / 1:1.77","3840x2160":"UHD / 2160p / 16:9","4096x2160":"DCI 4K / 1:1.9"},f={"":"","audio.ogg":c(8220).Z},p=(e,t,c,a,n="left")=>{e.font="30px Sans-serif",e.textAlign=n,e.strokeStyle="black",e.lineWidth=4,e.strokeText(t,c,a),e.fillStyle="white",e.fillText(t,c,a)};let g=null;function b(){const[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(null),[b,m]=(0,a.useState)([c(3656).Z,c(5024).Z,c(7522).Z,c(391).Z,c(27).Z,c(3472).Z,c(9586).Z,c(282).Z,c(6863).Z,c(6276).Z,c(8513).Z,c(9653).Z,c(5832).Z,c(9513).Z,c(3249).Z,c(6235).Z,c(9345).Z,c(3614).Z,c(4116).Z,c(2214).Z,c(8274).Z,c(5506).Z,c(9123).Z,c(7768).Z,c(9180).Z,c(3146).Z,c(6171).Z,c(5176).Z,c(1502).Z,c(5756).Z,c(5510).Z,c(1361).Z,c(2633).Z,c(730).Z,c(1800).Z,c(9906).Z,c(2414).Z,c(9192).Z,c(3222).Z,c(9749).Z,c(7351).Z,c(3757).Z,c(5270).Z,c(7984).Z,c(6739).Z,c(6649).Z,c(3155).Z,c(1384).Z,c(7563).Z,c(4233).Z,c(2478).Z,c(5267).Z,c(8584).Z,c(6387).Z,c(3138).Z,c(6282).Z,c(1146).Z,c(6757).Z,c(4024).Z,c(6824).Z]),[Z,h]=(0,a.useState)(""),[v,x]=(0,a.useState)(["Click Start to transcode"]),y=(0,a.useRef)(),w=(0,a.useRef)(),[E,S]=(0,a.useState)(""),[k,C]=(0,a.useState)(null),[F,_]=(0,a.useState)([]),[U,L]=(0,a.useState)(""),[W,T]=(0,a.useState)(null),[D,G]=(0,a.useState)(null),[M,N]=(0,a.useState)(o[0]),[R,X]=(0,a.useState)(Object.keys(u)[0]),[j,H]=(0,a.useMemo)((()=>R.split("x")),[R]),K=(0,a.useCallback)((()=>navigator.mediaDevices.enumerateDevices().then((e=>console.log({deviceInfos:e})||e.filter((({kind:e})=>["videoinput"].includes(e))).map((e=>{const{deviceId:t,kind:c,label:a}=e,{width:{max:n},height:{max:s}}=e.getCapabilities();return{deviceId:t,kind:c,label:a,width:n,height:s}})))).then((e=>{console.log({devices:e}),L(e[0].deviceId),_(e)})).catch(console.info)),[_,navigator]),O=(0,a.useCallback)((()=>{navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:U}}}).then((e=>{y.current.srcObject=e,y.current.onloadedmetadata=e=>y.current.play(),C({stream:e})})).catch(console.info)}),[U,C,y,navigator]),z=(0,a.useCallback)((()=>{k.stream.getVideoTracks()[0].stop(),y.current.pause(),C(null)}),[C,k,y]),I=(0,a.useCallback)((()=>{m((t=>t.filter(((t,c)=>!e.includes(c))))),t([]),e.includes(s)&&l(null)}),[e,s,m,l]),A=(0,a.useCallback)((()=>{const e=null===s?b.length:s,t=Object.assign(document.createElement("canvas"),{width:j,height:H});t.getContext("2d").drawImage(y.current,0,0,j,H),m((c=>c.slice(0,e).concat(t.toDataURL()).concat(c.slice(e)))),l(e+1)}),[s,m,l]),P=(0,a.useCallback)(((e,t)=>{var c=new window.Image;c.addEventListener("load",(function(){const e=w.current.getContext("2d");e.drawImage(c,0,0,j,H),p(e,`#${t}`,j-10,H-20,"right")})),c.setAttribute("src",e)}),[b,w]),B=(0,a.useCallback)((function e(){T(setTimeout((()=>{l((e=>{const t=e<b.length-1?e+1:0;return P(b[t],t),t})),e()}),1e3/M))}),[l,T,P,b,M]),Q=(0,a.useCallback)((()=>{T((e=>clearTimeout(e)))}),[T]);(0,a.useEffect)((()=>{null===g&&(g=(0,n.createFFmpeg)({corePath:"ffmpeg/ffmpeg-core.js"})),g.setLogger((({type:e,message:t})=>{console.log({type:e,message:t}),"info"!==e&&x((e=>e.concat(t)))})),g.setProgress((({ratio:e})=>{e>=0&&e<=1&&G(100*e),1===e&&setTimeout((()=>{G(null)}),1e3)}))}));const V=(0,a.useCallback)((async()=>{const e=[];g.isLoaded()||await g.load(),E&&(e.push(E),g.FS("writeFile",E,await(0,n.fetchFile)(f[E])));for(let t=0;t<b.length;t+=1){const c=`00${t}`.slice(-3);e.push(`tmp.${c}.png`),g.FS("writeFile",`tmp.${c}.png`,await(0,n.fetchFile)(b[t]))}await g.run(...["-framerate",`${M}`,"-video_size",`${j}x${H}`,"-pattern_type","glob","-i","*.png"].concat(E?["-i",E,"-c:a","copy"]:[]).concat(["-shortest","-c:v","libx264","-pix_fmt","yuv420p","out.mp4"])),e.push("out.mp4"),h(URL.createObjectURL(new Blob([g.FS("readFile","out.mp4").buffer],{type:"video/mp4"})));for(let t=0;t<e.length;t+=1)g.FS("unlink",e[t])}),[E,j,H,b,M,x,h]);return(0,a.useEffect)((()=>{const e=w.current.getContext("2d"),t=()=>{y.current.ended||y.current.paused||(e.drawImage(y.current,0,0,j,H),p(e,"Live Video",j-10,H-20,"right"),y.current.requestVideoFrameCallback(t))},c=()=>{y.current.requestVideoFrameCallback(t)};return y.current.addEventListener("play",c,!1),y.current.addEventListener("loadedmetadata",(()=>{const{videoWidth:e,videoHeight:t,duration:c}=y.current;console.log(["loadedmetadata"],{videoWidth:e,videoHeight:t,duration:c})})),y.current.addEventListener("timeupdate",(()=>{const{currentTime:e}=y.current;console.log(["timeupdate"],{currentTime:e})})),()=>{y.current.removeEventListener("play",c)}}),[y,w]),a.createElement("div",{className:i.Z.Layout},a.createElement("div",{className:i.Z.Preview},a.createElement("div",{className:i.Z.Camera},a.createElement("div",null,U&&a.createElement("select",{value:U,onChange:e=>L(e.target.value)},F.map((({deviceId:e,label:t},c)=>a.createElement("option",{key:c,value:e},t)))),U?k?a.createElement("button",{key:"stopRecording",onClick:z},"Stop Recording"):a.createElement("button",{key:"startRecording",onClick:O},"Start Recording"):a.createElement("button",{key:"select",onClick:K},"Select Device")),a.createElement("video",{style:{display:"none"},ref:y,crossOrigin:"anonymous",controls:!0}),a.createElement("video",{className:i.Z.Video,src:Z,crossOrigin:"anonymous",controls:!0,loop:!0})),a.createElement("div",{className:i.Z.Camera},a.createElement("div",null,a.createElement("select",{value:R,onChange:e=>X(e.target.value)},Object.entries(u).map((([e,t],c)=>a.createElement("option",{key:c,value:e},t)))),a.createElement("select",{value:M,onChange:e=>N(e.target.value)},o.map(((e,t)=>a.createElement("option",{key:t,value:e},`${e} fps`)))),W?a.createElement("button",{key:"stopPlaying",onClick:Q},"Stop"):a.createElement("button",{key:"startPlaying",onClick:B},"Play"),a.createElement("button",{onClick:V,disabled:null!==D},"Transcode",null===D?"":` (${D.toFixed(1)}%)`),v.length&&a.createElement("span",null,v[v.length-1])),a.createElement("canvas",{ref:w,className:i.Z.Canvas,width:j,height:H}))),a.createElement("div",{className:i.Z.Toolbar},a.createElement("button",{onClick:()=>A()},"Capture")," ",a.createElement("button",{onClick:()=>t(b.map(((e,t)=>t))),disabled:e.length===b.length},"Select All")," ",a.createElement("button",{onClick:()=>I(),disabled:0===e.length},"Remove",e.length>0&&` (${e.length})`)," ",a.createElement("select",{value:E,onChange:e=>S(e.target.value)},Object.keys(f).map(((e,t)=>a.createElement("option",{key:t,value:e},e))))),a.createElement("div",{className:i.Z.Scroller},a.createElement("div",{className:i.Z.Timeline},a.createElement("div",{className:i.Z.Time},null!==s&&a.createElement("div",{className:i.Z.Slider,style:{marginLeft:100*s/b.length+"%"}})),a.createElement("div",{className:i.Z.Line},b.map(((c,n)=>a.createElement("div",{key:n,className:d()(i.Z.Frame,e.includes(n)&&i.Z.Frame__Selected)},a.createElement("div",{className:i.Z.Scale},`#${n}`),a.createElement("img",{src:c,className:i.Z.Image,alt:"",onClick:a=>{if(a.shiftKey&&null!==s){const[e,c]=s<n?[s,n]:[n,s];l(n),t((t=>t.filter((t=>t<e||c<t)).concat(b.map(((e,t)=>t)).filter((t=>e<=t&&t<=c)))))}else a.metaKey?(l(e.includes(n)?null:n),t((e=>e.includes(n)?e.filter((e=>n!==e)):e.concat(n)))):(l(n),t([n]),P(c,n))}}))))),a.createElement("div",{className:i.Z.Line},E&&a.createElement(r,{src:f[E]})))))}},2779:(e,t)=>{var c;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var d=n.apply(null,c);d&&e.push(d)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var i in c)a.call(c,i)&&c[i]&&e.push(i);else e.push(c.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(c=function(){return n}.apply(t,[]))||(e.exports=c)}()},1921:(e,t,c)=>{"use strict";c.r(t),c.d(t,{default:()=>g});var a=c(2609),n=c.n(a),s=c(8991),d=c.n(s),i=new URL(c(524),c.b),l=new URL(c(3715),c.b),r=new URL(c(6962),c.b),o=n()((function(e){return e[1]})),u=d()(i),f=d()(l),p=d()(r);o.push([e.id,"._44wV4FCd3ZNFDOFiXas,.H7AfsezmpbvUGTdStS0g{background:#fff url("+u+");background-size:5%}.H7AfsezmpbvUGTdStS0g{border:3px solid gray}.Q_vpzCP2MsOxQE7yQNZc{display:flex;flex:1;flex-direction:column}.Q_vpzCP2MsOxQE7yQNZc ._fGjKozgsnORHZm99BiU{flex:1}._fGjKozgsnORHZm99BiU{display:flex;flex-direction:row}._fGjKozgsnORHZm99BiU .sv8RcplQ9s1EbmrBl78r{flex:1}.sv8RcplQ9s1EbmrBl78r{display:flex;flex-direction:column}.sv8RcplQ9s1EbmrBl78r ._44wV4FCd3ZNFDOFiXas,.sv8RcplQ9s1EbmrBl78r ._5zIMYHRmbUseJAGtBXb{flex:1;max-width:100%}.P9dSSsruT2Mvli129gII{overflow-x:scroll}.P9dSSsruT2Mvli129gII ._FWKUxDWyMXvuuuG4l9X{min-width:min-content}._FWKUxDWyMXvuuuG4l9X{display:flex;flex-direction:column}._FWKUxDWyMXvuuuG4l9X .qaJGG5jK4yoCw6SlPNvF{position:relative;height:20px;background:#fff url("+f+');background-size:166px 20px}._FWKUxDWyMXvuuuG4l9X .mLaiuZEoyM8AK3uA5wtD{display:flex;flex-direction:row}._FWKUxDWyMXvuuuG4l9X .hj9CpEEmnVjzWL7DqojX{position:relative;display:flex;flex-direction:column}._FWKUxDWyMXvuuuG4l9X .hj9CpEEmnVjzWL7DqojX .H7AfsezmpbvUGTdStS0g{max-height:120px}._FWKUxDWyMXvuuuG4l9X .HNE5ylt3MAlJW0iFxyF9 .H7AfsezmpbvUGTdStS0g{border-color:blue}._FWKUxDWyMXvuuuG4l9X .NcETXcJG49cb7veMOnWr{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>\')}._nOhrf6bBcnGQ3jY_yb2{display:block;width:100%;height:120px}.LU9HRfTK6bZnUVb7G44K{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.LU9HRfTK6bZnUVb7G44K::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url('+p+") no-repeat;background-size:100%}",""]),o.locals={Canvas:"_44wV4FCd3ZNFDOFiXas",Image:"H7AfsezmpbvUGTdStS0g",Layout:"Q_vpzCP2MsOxQE7yQNZc",Preview:"_fGjKozgsnORHZm99BiU",Camera:"sv8RcplQ9s1EbmrBl78r",Video:"_5zIMYHRmbUseJAGtBXb",Scroller:"P9dSSsruT2Mvli129gII",Timeline:"_FWKUxDWyMXvuuuG4l9X",Time:"qaJGG5jK4yoCw6SlPNvF",Line:"mLaiuZEoyM8AK3uA5wtD",Frame:"hj9CpEEmnVjzWL7DqojX",Frame__Selected:"HNE5ylt3MAlJW0iFxyF9",Scale:"NcETXcJG49cb7veMOnWr",Waveform:"_nOhrf6bBcnGQ3jY_yb2",Slider:"LU9HRfTK6bZnUVb7G44K"};const g=o},8220:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6119fe70337dc9f89048a9dadf6859c2.ogg"},3656:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"bd769f7d1c8cfccef93711aa9e5e2028.png"},5024:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"a7f4c3e85ce6c2487e5042bf8f4c20ca.png"},7522:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"34e083bc59506a801de63017a129debe.png"},391:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"2713de620766ec47dd0df51adc15cd8d.png"},27:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"5a4446a8d4a749d5f0aa6c0cf2643b53.png"},3472:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"708ed0e1fd3979c0f4f8ca074bcd99a6.png"},9586:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c95ff9b68b7eed287fbd9eca07829e68.png"},282:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0993d48aa704cafc73aadd055c898ded.png"},6863:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c82cb1223eeadf64430b13b2e7fca136.png"},6276:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"be0fd9402dc85dfbb7ba1a549ad23fe0.png"},8513:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"921e4fcd9118b2461dd6a4e52b90b975.png"},9653:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"15d26c785def80a9cd21f148e747b1ad.png"},5832:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"5ec4f87957c05dee624973fc453da72a.png"},9513:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"f1e64a480cdcd9222ede98367eaed5ae.png"},3249:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"b6b7e4800c599cfac77ec94a77cfac66.png"},6235:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"03b137a91e5e6034d059624ac1ff83a0.png"},9345:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"4fe011cf5909bfd5b6f66b4f4e36516e.png"},3614:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"7bbddf38885cd38f0c69dffff33ae660.png"},4116:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"df223ecf42a9f2499fb705aaf897a3be.png"},2214:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"d03a682c1b23657581a0eb85b6b0e0f4.png"},8274:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6cb67a31af4ae976cdc3c8ca8c057d12.png"},5506:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"366e1c14db10557432f05bd24adcfe26.png"},9123:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"9151aecfaaeda4976c8a336653c58933.png"},7768:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"962b98d0446d21d98329545e00a27bd8.png"},9180:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"829a7ae67c6cf85e74bffed72344352a.png"},3146:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"eea5aa855016be5f26cf382d29160e0b.png"},6171:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"fd050c09ed7fe4e43a17d3200dbec906.png"},5176:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"3104068d50e28f2c834e508293458698.png"},1502:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c2331ae40826e33166ab10dcfd63c598.png"},5756:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0926bb76529a15d4c7040c0baed58585.png"},5510:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"848922d8f0e9ace95412ba2d852d8c67.png"},1361:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0a5c2e86fae33a10817e096519a90c2f.png"},2633:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c570b344d5bd0531052a6a56c41515f1.png"},730:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"75b7778ea01c25e5b0edc730816dfa1e.png"},1800:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c0bb4da5daf0bd2dbe8a99558e28bc99.png"},9906:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"38c07b2b31fac62ca91be90178f9ebe8.png"},2414:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"aaed373e92fe9cdf36ccea1fcfa24049.png"},9192:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"aeace46796aca08dfd1a29d2f3c2abad.png"},3222:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6b5903b75f4ae7b7936ff3fedc4fc3e1.png"},9749:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"8dc7bf1538bb585a60ea236e676bf1b1.png"},7351:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"7b71924a9a86bbb4ac82119ba46d49d4.png"},3757:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"9ced0ab5c2736b688430f088d6e1a1a5.png"},5270:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"1479015e5359e2d09626bb9e24f1e1c7.png"},7984:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6f51bb1179699581712ee93475fe985d.png"},6739:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"8c3f6cc9d04930ad67daa7867ea1c7c3.png"},6649:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"bdbb961ea059b538324522beccd34c9f.png"},3155:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"89d8f38968c5dd7ccfce151001d17fe8.png"},1384:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"1eb142367601a906148513f70d8e8fc4.png"},7563:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c3fd0d8d2708ac2246069276cf3ad523.png"},4233:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"a908371e7f05aa98eb3d8c026a983edd.png"},2478:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"b5c9f3a8b780c767a692422565a1290a.png"},5267:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"68312611793b8963102f90bc24920db2.png"},8584:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"4f89655257d31d167682eae80304da42.png"},6387:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"08c3b9d009affdf3e5801339fd8446cd.png"},3138:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0ef67290dea672db2efdb7da8ea2230a.png"},6282:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"ba8e661b936a6dfa5743c5956eebc904.png"},1146:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"d129dc00b85b3ab899ca91ef58e9804e.png"},6757:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c750f4f132a725b57d64757d4f0b314d.png"},4024:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"64b37bb258c3715e1849ec2de379d8a8.png"},6824:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"06bb3eefe9a341d9baf323e335f66a8f.png"},1111:(e,t,c)=>{"use strict";c.d(t,{Z:()=>x});var a=c(6062),n=c.n(a),s=c(4036),d=c.n(s),i=c(6793),l=c.n(i),r=c(7892),o=c.n(r),u=c(1173),f=c.n(u),p=c(2464),g=c.n(p),b=c(1921),m={};m.styleTagTransform=g(),m.setAttributes=o(),m.insert=l().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=f();var Z=n()(b.default,m);if(!b.default.locals||e.hot.invalidate){var h=!b.default.locals,v=h?b:b.default.locals;e.hot.accept(1921,(t=>{b=c(1921),function(e,t,c){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!c||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(c&&"default"===a||e[a]))return!1;return!0}(v,h?b:b.default.locals,h)?(v=h?b:b.default.locals,Z(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){Z()}));const x=b.default&&b.default.locals?b.default.locals:void 0},6962:e=>{"use strict";e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>'},3715:e=>{"use strict";e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>'},524:e=>{"use strict";e.exports='data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>'}}]);