"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[16],{72016:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(2784),c=a(64757),l=a(55987),d=a(64153),s=a(80903),o=a(23986),i=a(72779),r=a.n(i),f=a(14819),p=a.n(f),u=a(91111);const g=(e,t,a,n,c)=>{e.lineWidth=1,e.strokeStyle="#94b398",e.beginPath(),a=c?a:-a,e.moveTo(t,0),e.lineTo(t,a),e.arc(t+n/2,a,n/2,Math.PI,0,c),e.lineTo(t+n,0),e.stroke()};function b({src:e}){const t=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const a=new AudioContext;fetch(e).then((e=>e.arrayBuffer())).then((e=>a.decodeAudioData(e))).then((e=>((e,t,a=window.devicePixelRatio||1)=>{e.width=e.offsetWidth*a,e.height=(e.offsetHeight+40)*a;const n=e.getContext("2d");n.scale(a,a),n.translate(0,e.offsetHeight/2+20);const c=e.offsetWidth/t.length;for(let a=0;a<t.length;a++){const l=c*a;let d=t[a]*e.offsetHeight-20;d<0?d=0:d>e.offsetHeight/2&&(d=d>e.offsetHeight/2),g(n,l,d,c,(a+1)%2)}})(t.current,(e=>{const t=Math.pow(Math.max(...e),-1);return e.map((e=>e*t))})((e=>{const t=e.getChannelData(0),a=Math.floor(t.length/2e3),n=[];for(let e=0;e<2e3;e++){let c=a*e,l=0;for(let e=0;e<a;e++)l+=Math.abs(t[c+e]);n.push(l/a)}return n})(e)))))}),[e]),n.createElement("canvas",{ref:t,className:u.Z.Waveform})}const m=[10,12,15,20,24,30,50,60],Z={"640x480":"SD (Standard Definition) / 480p / 4:3","1280x720":"HD (High Definition) / 720p / 16:9","1920x1080":"Full HD / 1080p / 16:9","2048x1152":"2K / 1:1.77","3840x2160":"UHD / 2160p / 16:9","4096x2160":"DCI 4K / 1:1.9"},h={"":"","audio.ogg":a(28220).Z,"music.mp3":a(82353).Z,"sound1.mp3":a(15981).Z,"sound2.mp3":a(16339).Z},v=(e,t)=>Object.assign(document.createElement("a"),{href:e,download:t}).dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}));let x=null;const y="CARD";function E({image:e,index:t,selected:a,onClick:d,moveCard:s}){const o=(0,n.useRef)(null),[{handlerId:i},f]=(0,c.L)({accept:y,collect:e=>({handlerId:e.getHandlerId()}),hover(e,a){if(!o.current)return;const n=e.index,c=t;if(n===c)return;const l=o.current?.getBoundingClientRect(),d=(l.right-l.left)/2,i=a.getClientOffset().x-l.left;n<c&&i<d||n>c&&i>d||(s(n,c),e.index=c)}}),[{opacity:p},g]=(0,l.c)((()=>({type:y,item:{index:t},collect:e=>({opacity:e.isDragging()?.5:1})})),[]);return g(f(o)),n.createElement("div",{ref:o,className:r()(u.Z.Frame,a.includes(t)&&u.Z.Frame__Selected),style:{opacity:p},"data-handler-id":i},n.createElement("div",{className:u.Z.Scale},`#${t}`),n.createElement("img",{src:e,className:u.Z.Image,alt:"",onClick:d}))}function w(){const[e,t]=(0,n.useState)([]),[c,l]=(0,n.useState)(null),[i,r]=(0,n.useState)([a(23656).Z,a(95024).Z,a(97522).Z,a(10391).Z,a(27).Z,a(33472).Z,a(99586).Z,a(70282).Z,a(96863).Z,a(76276).Z,a(48513).Z,a(19653).Z,a(45832).Z,a(89513).Z,a(83249).Z,a(76235).Z,a(39345).Z,a(73614).Z,a(94116).Z,a(72214).Z,a(48274).Z,a(65506).Z,a(9123).Z,a(17768).Z,a(59180).Z,a(53146).Z,a(6171).Z,a(65176).Z,a(51502).Z,a(15756).Z,a(75510).Z,a(61361).Z,a(62633).Z,a(730).Z,a(61800).Z,a(79906).Z,a(22414).Z,a(89192).Z,a(13222).Z,a(19749).Z,a(17351).Z,a(73757).Z,a(95270).Z,a(87984).Z,a(46739).Z,a(86649).Z,a(63155).Z,a(51384).Z,a(7563).Z,a(4233).Z,a(52478).Z,a(55267).Z,a(28584).Z,a(36387).Z,a(43138).Z,a(16282).Z,a(91146).Z,a(26757).Z,a(54024).Z,a(66824).Z]),[f,g]=(0,n.useState)(["Click Start to transcode"]),y=(0,n.useRef)(),w=(0,n.useRef)(),C=(0,n.useRef)(),[k,S]=(0,n.useState)(""),[F,D]=(0,n.useState)(null),[_,L]=(0,n.useState)([]),[R,U]=(0,n.useState)(""),[W,M]=(0,n.useState)(null),[G,I]=(0,n.useState)(null),[j,T]=(0,n.useState)(m[0]),[N,H]=(0,n.useState)(Object.keys(Z)[0]),[O,X]=(0,n.useState)([]),[K,A]=(0,n.useState)(""),[z,P]=(0,n.useMemo)((()=>N.split("x")),[N]),B=(0,n.useCallback)((()=>navigator.mediaDevices.enumerateDevices().then((e=>console.log({deviceInfos:e})||e.filter((({kind:e})=>["videoinput"].includes(e))).map((e=>{const{deviceId:t,kind:a,label:n}=e,{width:{max:c},height:{max:l}}=e.getCapabilities();return{deviceId:t,kind:a,label:n,width:c,height:l}})))).then((e=>{console.log({devices:e}),U(e[0].deviceId),L(e)})).catch(console.info)),[L,navigator]),Q=(0,n.useCallback)((()=>{navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:R}}}).then((e=>D({stream:e}))).catch(console.info)}),[R,D,navigator]),V=(0,n.useCallback)((()=>D((e=>e.stream.getVideoTracks()[0].stop()||null))),[D]),$=(0,n.useCallback)((()=>{r((t=>t.filter(((t,a)=>!e.includes(a))))),t([]),e.includes(c)&&l(null)}),[e,c,r,l]),J=(0,n.useCallback)((()=>{const e=null===c?i.length:c,t=Object.assign(document.createElement("canvas"),{width:z,height:P});t.getContext("2d").drawImage(w.current,0,0,z,P),r((a=>a.slice(0,e).concat(t.toDataURL()).concat(a.slice(e)))),l(e+1)}),[c,r,l]),[q]=(0,n.useState)((()=>Object.assign(new window.Image,{onload:()=>ae()})));(0,n.useEffect)((()=>q.setAttribute("src",null===c?"":i[c])),[q,i,c]);const Y=(0,n.useCallback)((function e(){M(setTimeout((()=>{l((e=>e<i.length-1?e+1:0)),e()}),1e3/j))}),[l,M,i,j]),ee=(0,n.useCallback)((()=>M((e=>clearTimeout(e)))),[M]);(0,n.useEffect)((()=>{null===x&&(x=(0,o.createFFmpeg)({corePath:"ffmpeg/ffmpeg-core.js"})),x.setLogger((({type:e,message:t})=>{console.log({type:e,message:t}),"info"!==e&&g((e=>e.concat(t)))})),x.setProgress((({ratio:e})=>{e>=0&&e<=1&&I(100*e),1===e&&setTimeout((()=>{I(null)}),1e3)}))}));const te=(0,n.useCallback)((async()=>{const e=[];x.isLoaded()||await x.load(),k&&(e.push(k),x.FS("writeFile",k,await(0,o.fetchFile)(h[k])));for(let t=0;t<i.length;t+=1){const a=`00${t}`.slice(-3);e.push(`tmp.${a}.png`),x.FS("writeFile",`tmp.${a}.png`,await(0,o.fetchFile)(i[t]))}await x.run(...["-framerate",`${j}`,"-video_size",`${z}x${P}`,"-pattern_type","glob","-i","*.png"].concat(k?["-i",k,"-c:a","copy"]:[]).concat(["-shortest","-c:v","libx264","-pix_fmt","yuv420p","out.mp4"])),e.push("out.mp4"),X((e=>(A(e.length),e.concat(URL.createObjectURL(new Blob([x.FS("readFile","out.mp4").buffer],{type:"video/mp4"}))))));for(let t=0;t<e.length;t+=1)x.FS("unlink",e[t])}),[k,z,P,i,j,g,X,A]);(0,n.useEffect)((()=>Object.assign(w.current,""===K?{oncanplay:()=>w.current.play(),srcObject:F?F.stream:null,src:""}:{loop:!0,oncanplay:null,srcObject:null,src:O[K]})),[F,w,O,K]);const ae=(0,n.useCallback)((()=>{const e=C.current.getContext("2d");if((w.current.srcObject||w.current.getAttribute("src"))&&e.drawImage(w.current,0,0,z,P),q.src){const a=e.getImageData(0,0,z,P);if(e.drawImage(q,0,0,z,P),w.current.srcObject||w.current.getAttribute("src")){const{data:n}=e.getImageData(0,0,z,P),{data:c}=a,l=.8;for(var t=0;t<c.length;t+=4)c[t+0]=l*c[t+0]+(1-l)*n[t+0],c[t+1]=l*c[t+1]+(1-l)*n[t+1],c[t+2]=l*c[t+2]+(1-l)*n[t+2],c[t+3]=l*c[t+3]+(1-l)*n[t+3];e.putImageData(a,0,0)}}((e,t,a,n,c="left")=>{e.font="30px Sans-serif",e.textAlign=c,e.strokeStyle="black",e.lineWidth=4,e.strokeText(t,a,n),e.fillStyle="white",e.fillText(t,a,n)})(e,"Live Video",z-10,P-20,"right")}),[F,C,c]);(0,n.useEffect)((()=>{const e=()=>{ae(),w.current.ended||w.current.paused||w.current.requestVideoFrameCallback(e)};return w.current.addEventListener("play",(()=>{w.current.requestVideoFrameCallback(e)}),!1),w.current.addEventListener("loadedmetadata",(()=>{const{videoWidth:e,videoHeight:t,duration:a}=w.current;console.log(["loadedmetadata"],{videoWidth:e,videoHeight:t,duration:a})})),w.current.addEventListener("timeupdate",(()=>{})),()=>{}}),[w]),(0,n.useEffect)((()=>{const e=e=>{if(e.type&&e.type.startsWith("image/")){const t=new FileReader;t.addEventListener("load",(e=>r((t=>t.concat(e.target.result))))),t.readAsDataURL(e)}};y.current.addEventListener("change",(t=>{[...t.target.files].forEach(e),t.target.value=""}))}),[r,y]);const ne=(0,n.useCallback)((()=>{e.forEach((e=>v(i[e],`frame_${(e/100).toFixed(2).split(".")[1]}`)))}),[e,i]),ce=(0,n.useCallback)(((e,t)=>{const a=i[e];r(p()(i,{$splice:[[e,1],[t,0,a]]}))}),[i]);return n.createElement(d.W,{backend:s.PD},n.createElement("div",{className:u.Z.Layout},n.createElement("div",{className:u.Z.Preview},n.createElement("div",{className:u.Z.Camera},n.createElement("div",null,n.createElement("select",{value:K,onChange:e=>A(e.target.value)},n.createElement("option",{value:""},"Video Input"),O.map(((e,t)=>n.createElement("option",{key:t,value:t},e)))),n.createElement("button",{onClick:()=>(X((e=>e.filter(((e,t)=>String(t)!==K)))),A("")),disabled:""===K},"Delete")," ",n.createElement("button",{onClick:()=>v(O[K],`video_${K}`),disabled:""===K},"Download")," ",R&&n.createElement("select",{value:R,onChange:e=>U(e.target.value)},_.map((({deviceId:e,label:t},a)=>n.createElement("option",{key:a,value:e},t)))),R?F?n.createElement("button",{key:"stopRecording",onClick:V},"Stop Recording"):n.createElement("button",{key:"startRecording",onClick:Q},"Start Recording"):n.createElement("button",{key:"select",onClick:B},"Select Device")),n.createElement("video",{className:u.Z.Video,ref:w,crossOrigin:"anonymous",controls:!0})),n.createElement("div",{className:u.Z.Camera},n.createElement("div",null,n.createElement("select",{value:N,onChange:e=>H(e.target.value)},Object.entries(Z).map((([e,t],a)=>n.createElement("option",{key:a,value:e},t)))),n.createElement("select",{value:j,onChange:e=>T(e.target.value)},m.map(((e,t)=>n.createElement("option",{key:t,value:e},`${e} fps`)))),W?n.createElement("button",{key:"stopPlaying",onClick:ee},"Stop"):n.createElement("button",{key:"startPlaying",onClick:Y},"Play"),n.createElement("button",{onClick:te,disabled:null!==G},"Transcode",null===G?"":` (${G.toFixed(1)}%)`),f.length&&n.createElement("span",null,f[f.length-1])),n.createElement("canvas",{ref:C,className:u.Z.Canvas,width:z,height:P}))),n.createElement("div",{className:u.Z.Toolbar},n.createElement("button",{onClick:()=>J()},"Capture")," ",n.createElement("button",{onClick:()=>t(i.map(((e,t)=>t))),disabled:e.length===i.length},"Select All")," ",n.createElement("button",{onClick:()=>$(),disabled:0===e.length},"Remove",e.length>0&&` (${e.length})`)," ",n.createElement("button",{onClick:()=>ne(),disabled:0===e.length},"Export",e.length>0&&` (${e.length})`)," ",n.createElement("button",{onClick:()=>y.current.click()},"Import")," ",n.createElement("input",{ref:y,type:"file",id:"file-selector",multiple:!0,style:{display:"none"}}),n.createElement("select",{value:k,onChange:e=>S(e.target.value)},Object.keys(h).map(((e,t)=>n.createElement("option",{key:t,value:e},e))))),n.createElement("div",{className:u.Z.Scroller},n.createElement("div",{className:u.Z.Timeline},n.createElement("div",{className:u.Z.Time},null!==c&&n.createElement("div",{className:u.Z.Slider,style:{marginLeft:100*c/i.length+"%"}})),n.createElement("div",{className:u.Z.Line},i.map(((a,d)=>n.createElement(E,{key:d,image:a,index:d,selected:e,moveCard:ce,onClick:a=>{if(a.shiftKey&&null!==c){const[e,a]=c<d?[c,d]:[d,c];l(d),t((t=>t.filter((t=>t<e||a<t)).concat(i.map(((e,t)=>t)).filter((t=>e<=t&&t<=a)))))}else a.metaKey?(l(e.includes(d)?null:d),t((e=>e.includes(d)?e.filter((e=>d!==e)):e.concat(d)))):(l(d),t([d]))}})))),n.createElement("div",{className:u.Z.Line},k&&n.createElement(b,{src:h[k]}))))))}},71921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(82609),c=a.n(n),l=a(78991),d=a.n(l),s=new URL(a(10524),a.b),o=new URL(a(83715),a.b),i=new URL(a(46962),a.b),r=c()((function(e){return e[1]})),f=d()(s),p=d()(o),u=d()(i);r.push([e.id,"._44wV4FCd3ZNFDOFiXas,.H7AfsezmpbvUGTdStS0g{background:#fff url("+f+");background-size:5%}.H7AfsezmpbvUGTdStS0g{border:3px solid gray}.Q_vpzCP2MsOxQE7yQNZc{display:flex;flex:1;flex-direction:column}.Q_vpzCP2MsOxQE7yQNZc ._fGjKozgsnORHZm99BiU{flex:1}._fGjKozgsnORHZm99BiU{display:flex;flex-direction:row}._fGjKozgsnORHZm99BiU .sv8RcplQ9s1EbmrBl78r{flex:1}.sv8RcplQ9s1EbmrBl78r{display:flex;flex-direction:column}.sv8RcplQ9s1EbmrBl78r ._44wV4FCd3ZNFDOFiXas,.sv8RcplQ9s1EbmrBl78r ._5zIMYHRmbUseJAGtBXb{flex:1;max-width:100%}.P9dSSsruT2Mvli129gII{overflow-x:scroll}.P9dSSsruT2Mvli129gII ._FWKUxDWyMXvuuuG4l9X{min-width:min-content}._FWKUxDWyMXvuuuG4l9X{display:flex;flex-direction:column}._FWKUxDWyMXvuuuG4l9X .qaJGG5jK4yoCw6SlPNvF{position:relative;height:20px;background:#fff url("+p+');background-size:166px 20px}._FWKUxDWyMXvuuuG4l9X .mLaiuZEoyM8AK3uA5wtD{display:flex;flex-direction:row}._FWKUxDWyMXvuuuG4l9X .hj9CpEEmnVjzWL7DqojX{position:relative;display:flex;flex-direction:column}._FWKUxDWyMXvuuuG4l9X .hj9CpEEmnVjzWL7DqojX .H7AfsezmpbvUGTdStS0g{max-height:120px}._FWKUxDWyMXvuuuG4l9X .HNE5ylt3MAlJW0iFxyF9 .H7AfsezmpbvUGTdStS0g{border-color:blue}._FWKUxDWyMXvuuuG4l9X .NcETXcJG49cb7veMOnWr{font-size:.75em;display:flex;height:15px;padding:5px;background:#fff url(\'data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" fill-opacity=".5" >        <rect x="0" y="5" width="1" height="15" />        <rect x="25%" y="10" width="1" height="10" />        <rect x="50%" y="10" width="1" height="10" />        <rect x="75%" y="10" width="1" height="10" />        </svg>\')}._nOhrf6bBcnGQ3jY_yb2{display:block;width:100%;height:120px}.LU9HRfTK6bZnUVb7G44K{position:absolute;z-index:1;margin-top:5px;width:1px;height:280px;background:#f02c00}.LU9HRfTK6bZnUVb7G44K::before{content:"";display:block;position:absolute;width:21px;height:21px;margin-left:-10px;background:url('+u+") no-repeat;background-size:100%}",""]),r.locals={Canvas:"_44wV4FCd3ZNFDOFiXas",Image:"H7AfsezmpbvUGTdStS0g",Layout:"Q_vpzCP2MsOxQE7yQNZc",Preview:"_fGjKozgsnORHZm99BiU",Camera:"sv8RcplQ9s1EbmrBl78r",Video:"_5zIMYHRmbUseJAGtBXb",Scroller:"P9dSSsruT2Mvli129gII",Timeline:"_FWKUxDWyMXvuuuG4l9X",Time:"qaJGG5jK4yoCw6SlPNvF",Line:"mLaiuZEoyM8AK3uA5wtD",Frame:"hj9CpEEmnVjzWL7DqojX",Frame__Selected:"HNE5ylt3MAlJW0iFxyF9",Scale:"NcETXcJG49cb7veMOnWr",Waveform:"_nOhrf6bBcnGQ3jY_yb2",Slider:"LU9HRfTK6bZnUVb7G44K"};const g=r},82353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"d81af477293b97837ef8a0907301ba30.mp3"},15981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"e9be31f8e26032d76603562af9bb8ede.mp3"},16339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"20b18c71080afd5c152983d2359d29e0.mp3"},28220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"6119fe70337dc9f89048a9dadf6859c2.ogg"},23656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"bd769f7d1c8cfccef93711aa9e5e2028.png"},95024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"a7f4c3e85ce6c2487e5042bf8f4c20ca.png"},97522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"34e083bc59506a801de63017a129debe.png"},10391:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"2713de620766ec47dd0df51adc15cd8d.png"},27:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"5a4446a8d4a749d5f0aa6c0cf2643b53.png"},33472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"708ed0e1fd3979c0f4f8ca074bcd99a6.png"},99586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c95ff9b68b7eed287fbd9eca07829e68.png"},70282:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"0993d48aa704cafc73aadd055c898ded.png"},96863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c82cb1223eeadf64430b13b2e7fca136.png"},76276:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"be0fd9402dc85dfbb7ba1a549ad23fe0.png"},48513:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"921e4fcd9118b2461dd6a4e52b90b975.png"},19653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"15d26c785def80a9cd21f148e747b1ad.png"},45832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"5ec4f87957c05dee624973fc453da72a.png"},89513:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"f1e64a480cdcd9222ede98367eaed5ae.png"},83249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"b6b7e4800c599cfac77ec94a77cfac66.png"},76235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"03b137a91e5e6034d059624ac1ff83a0.png"},39345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"4fe011cf5909bfd5b6f66b4f4e36516e.png"},73614:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"7bbddf38885cd38f0c69dffff33ae660.png"},94116:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"df223ecf42a9f2499fb705aaf897a3be.png"},72214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"d03a682c1b23657581a0eb85b6b0e0f4.png"},48274:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"6cb67a31af4ae976cdc3c8ca8c057d12.png"},65506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"366e1c14db10557432f05bd24adcfe26.png"},9123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"9151aecfaaeda4976c8a336653c58933.png"},17768:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"962b98d0446d21d98329545e00a27bd8.png"},59180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"829a7ae67c6cf85e74bffed72344352a.png"},53146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"eea5aa855016be5f26cf382d29160e0b.png"},6171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"fd050c09ed7fe4e43a17d3200dbec906.png"},65176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"3104068d50e28f2c834e508293458698.png"},51502:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c2331ae40826e33166ab10dcfd63c598.png"},15756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"0926bb76529a15d4c7040c0baed58585.png"},75510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"848922d8f0e9ace95412ba2d852d8c67.png"},61361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"0a5c2e86fae33a10817e096519a90c2f.png"},62633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c570b344d5bd0531052a6a56c41515f1.png"},730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"75b7778ea01c25e5b0edc730816dfa1e.png"},61800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c0bb4da5daf0bd2dbe8a99558e28bc99.png"},79906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"38c07b2b31fac62ca91be90178f9ebe8.png"},22414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"aaed373e92fe9cdf36ccea1fcfa24049.png"},89192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"aeace46796aca08dfd1a29d2f3c2abad.png"},13222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"6b5903b75f4ae7b7936ff3fedc4fc3e1.png"},19749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"8dc7bf1538bb585a60ea236e676bf1b1.png"},17351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"7b71924a9a86bbb4ac82119ba46d49d4.png"},73757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"9ced0ab5c2736b688430f088d6e1a1a5.png"},95270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"1479015e5359e2d09626bb9e24f1e1c7.png"},87984:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"6f51bb1179699581712ee93475fe985d.png"},46739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"8c3f6cc9d04930ad67daa7867ea1c7c3.png"},86649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"bdbb961ea059b538324522beccd34c9f.png"},63155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"89d8f38968c5dd7ccfce151001d17fe8.png"},51384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"1eb142367601a906148513f70d8e8fc4.png"},7563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c3fd0d8d2708ac2246069276cf3ad523.png"},4233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"a908371e7f05aa98eb3d8c026a983edd.png"},52478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"b5c9f3a8b780c767a692422565a1290a.png"},55267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"68312611793b8963102f90bc24920db2.png"},28584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"4f89655257d31d167682eae80304da42.png"},36387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"08c3b9d009affdf3e5801339fd8446cd.png"},43138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"0ef67290dea672db2efdb7da8ea2230a.png"},16282:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"ba8e661b936a6dfa5743c5956eebc904.png"},91146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"d129dc00b85b3ab899ca91ef58e9804e.png"},26757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"c750f4f132a725b57d64757d4f0b314d.png"},54024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"64b37bb258c3715e1849ec2de379d8a8.png"},66824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"06bb3eefe9a341d9baf323e335f66a8f.png"},91111:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(46062),c=a.n(n),l=a(44036),d=a.n(l),s=a(96793),o=a.n(s),i=a(17892),r=a.n(i),f=a(11173),p=a.n(f),u=a(42464),g=a.n(u),b=a(71921),m={};m.styleTagTransform=g(),m.setAttributes=r(),m.insert=o().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=p();var Z=c()(b.default,m);if(!b.default.locals||e.hot.invalidate){var h=!b.default.locals,v=h?b:b.default.locals;e.hot.accept(71921,(t=>{b=a(71921),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!a||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(a&&"default"===n||e[n]))return!1;return!0}(v,h?b:b.default.locals,h)?(v=h?b:b.default.locals,Z(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){Z()}));const x=b.default&&b.default.locals?b.default.locals:void 0},46962:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 212" fill="%23f02c00">        <path d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"/>        </svg>'},83715:e=>{e.exports='data:image/svg+xml,        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >        <rect x="100" width="100" height="100" />        <rect y="100" width="100" height="100" />        </svg>'},10524:e=>{e.exports='data:image/svg+xml,      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >      <rect x="100" width="100" height="100" />      <rect y="100" width="100" height="100" />      </svg>'}}]);