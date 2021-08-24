/*! For license information please see 33.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[33],{4033:(e,t,c)=>{"use strict";c.r(t),c.d(t,{default:()=>l});var a=c(2784),n=c(3986),s=c(2779),d=c.n(s),r=c(1111);const i=(0,n.createFFmpeg)({corePath:"ffmpeg/ffmpeg-core.js",log:!0}),o=(e,t,c,a,n="left")=>{e.font="30px Sans-serif",e.textAlign=n,e.strokeStyle="black",e.lineWidth=4,e.strokeText(t,c,a),e.fillStyle="white",e.fillText(t,c,a)};function l(){const[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(null),[u,f]=(0,a.useState)([c(3656).Z,c(5024).Z,c(7522).Z,c(391).Z,c(27).Z,c(3472).Z,c(9586).Z,c(282).Z,c(6863).Z,c(6276).Z,c(8513).Z,c(9653).Z,c(5832).Z,c(9513).Z,c(3249).Z,c(6235).Z,c(9345).Z,c(3614).Z,c(4116).Z,c(2214).Z,c(8274).Z,c(5506).Z,c(9123).Z,c(7768).Z,c(9180).Z,c(3146).Z,c(6171).Z,c(5176).Z,c(1502).Z,c(5756).Z,c(5510).Z,c(1361).Z,c(2633).Z,c(730).Z,c(1800).Z,c(9906).Z,c(2414).Z,c(9192).Z,c(3222).Z,c(9749).Z,c(7351).Z,c(3757).Z,c(5270).Z,c(7984).Z,c(6739).Z,c(6649).Z,c(3155).Z,c(1384).Z,c(7563).Z,c(4233).Z,c(2478).Z,c(5267).Z,c(8584).Z,c(6387).Z,c(3138).Z,c(6282).Z,c(1146).Z,c(6757).Z,c(4024).Z,c(6824).Z]),[p,b]=(0,a.useState)(""),[g,Z]=(0,a.useState)("Click Start to transcode"),m=(0,a.useRef)(),v=(0,a.useRef)(),[h,y]=(0,a.useState)(null),[k,w]=(0,a.useState)([]),[S,C]=(0,a.useState)(""),[x,E]=(0,a.useState)(null),[F,_]=[320,240],T=(0,a.useCallback)((()=>navigator.mediaDevices.enumerateDevices().then((e=>console.log({deviceInfos:e})||e.filter((({kind:e})=>["videoinput"].includes(e))).map((e=>{const{deviceId:t,kind:c,label:a}=e,{width:{max:n},height:{max:s}}=e.getCapabilities();return{deviceId:t,kind:c,label:a,width:n,height:s}})))).then((e=>{console.log({devices:e}),C(e[0].deviceId),w(e)})).catch(console.info)),[w,navigator]),I=(0,a.useCallback)((()=>{navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:S}}}).then((e=>{m.current.srcObject=e,m.current.onloadedmetadata=e=>m.current.play(),y({stream:e})})).catch(console.info)}),[S,y,m,navigator]),L=(0,a.useCallback)((()=>{h.stream.getVideoTracks()[0].stop(),m.current.pause(),y(null)}),[y,h,m]),U=(0,a.useCallback)((()=>{f((t=>t.filter(((t,c)=>!e.includes(c))))),t([])}),[e,f]),A=(0,a.useCallback)((()=>{const e=Object.assign(document.createElement("canvas"),{width:F,height:_});e.getContext("2d").drawImage(m.current,0,0,F,_),f((t=>t.concat(e.toDataURL())))}),[f]),R=(0,a.useCallback)(((e,t)=>{var c=new window.Image;c.addEventListener("load",(function(){const e=v.current.getContext("2d");e.drawImage(c,0,0,F,_),o(e,`#${t}`,F-10,_-20,"right")})),c.setAttribute("src",e)}),[u,v]),D=(0,a.useCallback)((function e(){E(setTimeout((()=>{l((e=>{const t=e<u.length-1?e+1:0;return R(u[t],t),t})),e()}),100))}),[l,E,R,u]),O=(0,a.useCallback)((()=>{E((e=>clearTimeout(e)))}),[E]),W=(0,a.useCallback)((async()=>{i.isLoaded()||(Z("Loading ffmpeg-core.js"),await i.load()),Z("Loading data"),i.FS("writeFile","audio.ogg",await(0,n.fetchFile)(c(8220).Z));for(let e=0;e<u.length;e+=1){const t=`00${e}`.slice(-3);i.FS("writeFile",`tmp.${t}.png`,await(0,n.fetchFile)(u[e]))}Z("Start transcoding"),await i.run("-framerate","10","-video_size",`${F}x${_}`,"-pattern_type","glob","-i","*.png","-i","audio.ogg","-c:a","copy","-shortest","-c:v","libx264","-pix_fmt","yuv420p","out.mp4"),Z("Complete transcoding");const e=i.FS("readFile","out.mp4");b(URL.createObjectURL(new Blob([e.buffer],{type:"video/mp4"})))}),[u,Z,b]);return(0,a.useEffect)((()=>{const e=v.current.getContext("2d"),t=()=>{m.current.ended||m.current.paused||(e.drawImage(m.current,0,0,F,_),o(e,"Live Video",F-10,_-20,"right"),m.current.requestVideoFrameCallback(t))},c=()=>{m.current.requestVideoFrameCallback(t)};return m.current.addEventListener("play",c,!1),m.current.addEventListener("loadedmetadata",(()=>{const{videoWidth:e,videoHeight:t,duration:c}=m.current;console.log(["loadedmetadata"],{videoWidth:e,videoHeight:t,duration:c})})),m.current.addEventListener("timeupdate",(()=>{const{currentTime:e}=m.current;console.log(["timeupdate"],{currentTime:e})})),()=>{m.current.removeEventListener("play",c)}}),[m,v]),a.createElement("div",null,a.createElement("video",{style:{display:"none"},ref:m,crossOrigin:"anonymous",controls:!0}),a.createElement("canvas",{ref:v,className:r.Z.Canvas,width:F,height:_}),a.createElement("video",{src:p,width:F,height:_,crossOrigin:"anonymous",controls:!0,loop:!0}),a.createElement("div",null,S&&a.createElement("select",{value:S,onChange:e=>C(e.target.value)},k.map((({deviceId:e,label:t},c)=>a.createElement("option",{key:c,value:e},t)))),S?h?a.createElement("button",{key:"stopRecording",onClick:L},"Stop Recording"):a.createElement("button",{key:"startRecording",onClick:I},"Start Recording"):a.createElement("button",{key:"select",onClick:T},"Select Device"),a.createElement("button",{onClick:()=>A()},"Capture")," ",a.createElement("button",{onClick:()=>t(u.map(((e,t)=>t))),disabled:e.length===u.length},"Select All")," ",a.createElement("button",{onClick:()=>U(),disabled:0===e.length},"Remove",e.length>0&&` (${e.length})`)," ",x?a.createElement("button",{key:"stopPlaying",onClick:O},"Stop"):a.createElement("button",{key:"startPlaying",onClick:D},"Play"),a.createElement("button",{onClick:W},"Transcode"),a.createElement("span",null,g)),a.createElement("div",{className:r.Z.Timeline},u.map(((c,n)=>a.createElement("img",{key:n,src:c,style:{width:F/2+"px",height:_/2+"px"},className:d()(r.Z.Image,e.includes(n)&&r.Z.Image__Selected),width:F,height:_,alt:"",onClick:a=>{if(a.shiftKey&&null!==s){const[e,c]=s<n?[s,n]:[n,s];l(n),t((t=>t.filter((t=>t<e||c<t)).concat(u.map(((e,t)=>t)).filter((t=>e<=t&&t<=c)))))}else a.metaKey?(l(e.includes(n)?null:n),t((e=>e.includes(n)?e.filter((e=>n!==e)):e.concat(n)))):(l(n),t([n]),R(c,n))}})))))}},2779:(e,t)=>{var c;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var d=n.apply(null,c);d&&e.push(d)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var r in c)a.call(c,r)&&c[r]&&e.push(r);else e.push(c.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(c=function(){return n}.apply(t,[]))||(e.exports=c)}()},1921:(e,t,c)=>{"use strict";c.r(t),c.d(t,{default:()=>l});var a=c(2609),n=c.n(a),s=c(8991),d=c.n(s),r=new URL(c(7658),c.b),i=n()((function(e){return e[1]})),o=d()(r);i.push([e.id,"._44wV4FCd3ZNFDOFiXas,.H7AfsezmpbvUGTdStS0g{background:#fff url("+o+");background-size:5%}.H7AfsezmpbvUGTdStS0g{border:3px solid gray}.BbcEt_1dpTgn_Qlfh3qe{border-color:blue}._FWKUxDWyMXvuuuG4l9X{display:flex;flex-direction:row;overflow-x:scroll;width:100%}._FWKUxDWyMXvuuuG4l9X .H7AfsezmpbvUGTdStS0g{margin:1px}",""]),i.locals={Canvas:"_44wV4FCd3ZNFDOFiXas",Image:"H7AfsezmpbvUGTdStS0g",Image__Selected:"BbcEt_1dpTgn_Qlfh3qe",Timeline:"_FWKUxDWyMXvuuuG4l9X"};const l=i},8220:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6119fe70337dc9f89048a9dadf6859c2.ogg"},3656:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"bd769f7d1c8cfccef93711aa9e5e2028.png"},5024:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"a7f4c3e85ce6c2487e5042bf8f4c20ca.png"},7522:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"34e083bc59506a801de63017a129debe.png"},391:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"2713de620766ec47dd0df51adc15cd8d.png"},27:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"5a4446a8d4a749d5f0aa6c0cf2643b53.png"},3472:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"708ed0e1fd3979c0f4f8ca074bcd99a6.png"},9586:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c95ff9b68b7eed287fbd9eca07829e68.png"},282:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0993d48aa704cafc73aadd055c898ded.png"},6863:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c82cb1223eeadf64430b13b2e7fca136.png"},6276:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"be0fd9402dc85dfbb7ba1a549ad23fe0.png"},8513:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"921e4fcd9118b2461dd6a4e52b90b975.png"},9653:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"15d26c785def80a9cd21f148e747b1ad.png"},5832:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"5ec4f87957c05dee624973fc453da72a.png"},9513:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"f1e64a480cdcd9222ede98367eaed5ae.png"},3249:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"b6b7e4800c599cfac77ec94a77cfac66.png"},6235:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"03b137a91e5e6034d059624ac1ff83a0.png"},9345:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"4fe011cf5909bfd5b6f66b4f4e36516e.png"},3614:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"7bbddf38885cd38f0c69dffff33ae660.png"},4116:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"df223ecf42a9f2499fb705aaf897a3be.png"},2214:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"d03a682c1b23657581a0eb85b6b0e0f4.png"},8274:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6cb67a31af4ae976cdc3c8ca8c057d12.png"},5506:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"366e1c14db10557432f05bd24adcfe26.png"},9123:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"9151aecfaaeda4976c8a336653c58933.png"},7768:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"962b98d0446d21d98329545e00a27bd8.png"},9180:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"829a7ae67c6cf85e74bffed72344352a.png"},3146:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"eea5aa855016be5f26cf382d29160e0b.png"},6171:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"fd050c09ed7fe4e43a17d3200dbec906.png"},5176:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"3104068d50e28f2c834e508293458698.png"},1502:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c2331ae40826e33166ab10dcfd63c598.png"},5756:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0926bb76529a15d4c7040c0baed58585.png"},5510:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"848922d8f0e9ace95412ba2d852d8c67.png"},1361:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0a5c2e86fae33a10817e096519a90c2f.png"},2633:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c570b344d5bd0531052a6a56c41515f1.png"},730:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"75b7778ea01c25e5b0edc730816dfa1e.png"},1800:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c0bb4da5daf0bd2dbe8a99558e28bc99.png"},9906:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"38c07b2b31fac62ca91be90178f9ebe8.png"},2414:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"aaed373e92fe9cdf36ccea1fcfa24049.png"},9192:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"aeace46796aca08dfd1a29d2f3c2abad.png"},3222:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6b5903b75f4ae7b7936ff3fedc4fc3e1.png"},9749:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"8dc7bf1538bb585a60ea236e676bf1b1.png"},7351:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"7b71924a9a86bbb4ac82119ba46d49d4.png"},3757:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"9ced0ab5c2736b688430f088d6e1a1a5.png"},5270:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"1479015e5359e2d09626bb9e24f1e1c7.png"},7984:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"6f51bb1179699581712ee93475fe985d.png"},6739:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"8c3f6cc9d04930ad67daa7867ea1c7c3.png"},6649:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"bdbb961ea059b538324522beccd34c9f.png"},3155:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"89d8f38968c5dd7ccfce151001d17fe8.png"},1384:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"1eb142367601a906148513f70d8e8fc4.png"},7563:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c3fd0d8d2708ac2246069276cf3ad523.png"},4233:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"a908371e7f05aa98eb3d8c026a983edd.png"},2478:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"b5c9f3a8b780c767a692422565a1290a.png"},5267:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"68312611793b8963102f90bc24920db2.png"},8584:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"4f89655257d31d167682eae80304da42.png"},6387:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"08c3b9d009affdf3e5801339fd8446cd.png"},3138:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"0ef67290dea672db2efdb7da8ea2230a.png"},6282:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"ba8e661b936a6dfa5743c5956eebc904.png"},1146:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"d129dc00b85b3ab899ca91ef58e9804e.png"},6757:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"c750f4f132a725b57d64757d4f0b314d.png"},4024:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"64b37bb258c3715e1849ec2de379d8a8.png"},6824:(e,t,c)=>{"use strict";c.d(t,{Z:()=>a});const a=c.p+"06bb3eefe9a341d9baf323e335f66a8f.png"},1111:(e,t,c)=>{"use strict";c.d(t,{Z:()=>y});var a=c(6062),n=c.n(a),s=c(4036),d=c.n(s),r=c(6793),i=c.n(r),o=c(7892),l=c.n(o),u=c(1173),f=c.n(u),p=c(2464),b=c.n(p),g=c(1921),Z={};Z.styleTagTransform=b(),Z.setAttributes=l(),Z.insert=i().bind(null,"head"),Z.domAPI=d(),Z.insertStyleElement=f();var m=n()(g.default,Z);if(!g.default.locals||e.hot.invalidate){var v=!g.default.locals,h=v?g:g.default.locals;e.hot.accept(1921,(t=>{g=c(1921),function(e,t,c){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!c||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(c&&"default"===a||e[a]))return!1;return!0}(h,v?g:g.default.locals,v)?(h=v?g:g.default.locals,m(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()}));const y=g.default&&g.default.locals?g.default.locals:void 0},7658:e=>{"use strict";e.exports='data:image/svg+xml,   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"         fill-opacity=".05" >            <rect x="100" width="100" height="100" />            <rect y="100" width="100" height="100" />            </svg>'}}]);