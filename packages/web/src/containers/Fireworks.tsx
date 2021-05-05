import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import anime from "animejs";

const CanvasContext = createContext(null);
const TimeContext = createContext(0);

// https://github.com/rolyatmax/sketches
// https://soulwire.github.io/sketch.js/
// https://github.com/soulwire/sketch.js/blob/master/examples/particles.html
// https://codepen.io/juliangarnier/pen/gmOwJX
// https://codesandbox.io/s/mojs-react-example-kbikb
// var canvasEl = document.querySelector('.fireworks');
// var ctx = canvasEl.getContext('2d');
var numberOfParticules = 30;
// var pointerX = 0;
// var pointerY = 0;
// var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

// function setCanvasSize() {
//   canvasEl.width = window.innerWidth * 2;
//   canvasEl.height = window.innerHeight * 2;
//   canvasEl.style.width = window.innerWidth + 'px';
//   canvasEl.style.height = window.innerHeight + 'px';
//   canvasEl.getContext('2d').scale(2, 2);
// }

// function updateCoords(e) {
//   pointerX = e.clientX || e.touches[0].clientX;
//   pointerY = e.clientY || e.touches[0].clientY;
// }

function setParticuleDirection(p) {
  var angle = (anime.random(0, 360) * Math.PI) / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle),
  };
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

// setCanvasSize();
// window.addEventListener('resize', setCanvasSize, false);

function Canvas({ video, time, children = null, ...rest }) {
  const canvas = useRef();

  useEffect(() => {
    var ctx = canvas.current.getContext("2d");

    function createParticule(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(16, 32);
      p.endPos = setParticuleDirection(p);
      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function createCircle(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = "#FFF";
      p.radius = 0.1;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function () {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return p;
    }

    function animateParticules(x, y) {
      var circle = createCircle(x, y);
      var particules = [];
      for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: function (p) {
            return p.endPos.x;
          },
          y: function (p) {
            return p.endPos.y;
          },
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800),
          },
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
          offset: 0,
        });
    }

    var render = anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(
          video.current,
          0,
          0,
          video.current.width,
          video.current.height
        );
      },
    });

    // document.addEventListener(tap, function(e) {
    //   window.human = true;
    //   render.play();
    //   updateCoords(e);
    //   animateParticules(pointerX, pointerY);
    // }, false);

    var centerX = ctx.canvas.width / 2;
    var centerY = ctx.canvas.height / 2;

    function autoClick() {
      if (window.human) return;
      animateParticules(
        anime.random(centerX - 50, centerX + 50),
        anime.random(centerY - 50, centerY + 50)
      );
      anime({ duration: 500 }).finished.then(autoClick);
    }

    autoClick();
  }, [canvas]);

  return (
    <CanvasContext.Provider value={canvas.current?.getContext("2d")}>
      <TimeContext.Provider value={time}>
        <canvas ref={canvas} {...rest}></canvas>
        {children}
      </TimeContext.Provider>
    </CanvasContext.Provider>
  );
}

// function Video({ video, children = null }) {
//   const context = useContext(CanvasContext);
//   // const time = useContext(TimeContext);
//   // console.log(["Video"], { context, time });

//   if (context) {
//     context.drawImage(
//       video.current,
//       0,
//       0,
//       video.current.width,
//       video.current.height
//     );
//   }

//   return children;
// }

// function GrayScale({ children = null }) {
//   const context = useContext(CanvasContext);
//   const time = useContext(TimeContext);
//   // console.log(["GrayScale"], { context, time });

//   if (context) {
//     const imageData = context.getImageData(
//       0,
//       0,
//       context.canvas.width,
//       context.canvas.height
//     );

//     const { data } = imageData;

//     for (let i = 0; i < data.length; i += 4) {
//       const r = data[i],
//         g = data[i + 1],
//         b = data[i + 2];

//       var avg = (r + g + b) / 3;
//       data[i] = avg; // red
//       data[i + 1] = avg; // green
//       data[i + 2] = avg; // blue
//     }

//     context.putImageData(
//       imageData,
//       0,
//       0,
//       0,
//       0,
//       context.canvas.width,
//       context.canvas.height
//     );
//   }

//   return children;
// }

// function Ball({ children = null }) {
//   const context = useContext(CanvasContext);
//   const time = useContext(TimeContext);
//   // console.log(["Ball"], { context, time });

//   if (context) {
//     context.fillStyle = "#000000";
//     context.beginPath();
//     context.arc(
//       context.canvas.width / 2,
//       context.canvas.height / 2,
//       (context.canvas.height / 2) * Math.sin(time * 2) ** 2,
//       0,
//       2 * Math.PI
//     );
//     context.fill();
//   }

//   return children;
// }

// function Time({ children = null }) {
//   const context = useContext(CanvasContext);
//   const time = useContext(TimeContext);
//   // console.log(["Time"], { context, time });

//   // https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
//   const renderText = (text, x, y, textAlign = "left") => {
//     context.font = "30px Sans-serif";
//     context.textAlign = textAlign;
//     context.strokeStyle = "black";
//     context.lineWidth = 4;
//     context.strokeText(text, x, y);
//     context.fillStyle = "white";
//     context.fillText(text, x, y);
//   };

//   if (context) {
//     renderText(time, 480 - 10, 270 - 20, "right");
//   }

//   return children;
// }

export default function Fireworks() {
  const [time, setTime] = useState(0);
  const src = "https://webrtc.github.io/samples/src/video/chrome.webm";
  const video = useRef();

  // useEffect(() => {
  //   const update = () => {
  //     if (video.current.ended || video.current.paused) {
  //       return;
  //     }
  //     setTime(video.current.currentTime);
  //     video.current.requestVideoFrameCallback(update);
  //   };

  //   const play = () => {
  //     video.current.requestVideoFrameCallback(update);
  //   };

  //   // https://usefulangle.com/post/46/javascript-get-video-thumbnail-image-jpeg-png
  //   // Video metadata is loaded
  //   const loadedmetadata = () => {
  //     // Set canvas dimensions same as video dimensions
  //     const { videoWidth, videoHeight, duration } = video.current;
  //     console.log(["loadedmetadata"], { videoWidth, videoHeight, duration });
  //   };
  //   // Video playback position is changed
  //   const timeupdate = () => {
  //     // You are now ready to grab the thumbnail from the <canvas> element
  //     const { currentTime } = video.current;
  //     console.log(["timeupdate"], { currentTime });
  //   };

  //   video.current.addEventListener("play", play, true);
  //   video.current.addEventListener("loadedmetadata", loadedmetadata);
  //   video.current.addEventListener("timeupdate", timeupdate);
  //   return () => {
  //     video.current.removeEventListener("play", play);
  //   };
  // }, [video, src]);

  return (
    <div>
      <div>
        <video
          ref={video}
          src={src}
          width="480"
          height="270"
          preload="none"
          crossOrigin="anonymous"
          controls
        />
      </div>
      <div>
        <Canvas video={video} width="480" height="270" time={time}>
          {/* <Video video={video} />
          <GrayScale />
          <Ball />
          <Time /> */}
        </Canvas>
      </div>
    </div>
  );
}
