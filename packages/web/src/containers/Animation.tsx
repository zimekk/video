import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CanvasContext = createContext(null);
const TimeContext = createContext(0);

function Canvas({ time, children = null, ...rest }) {
  const canvas = useRef();

  return (
    <CanvasContext.Provider value={canvas.current?.getContext("2d")}>
      <TimeContext.Provider value={time}>
        <canvas ref={canvas} {...rest}></canvas>
        {children}
      </TimeContext.Provider>
    </CanvasContext.Provider>
  );
}

function Video({ video, children = null }) {
  const context = useContext(CanvasContext);
  // const time = useContext(TimeContext);
  // console.log(["Video"], { context, time });

  if (context) {
    context.drawImage(
      video.current,
      0,
      0,
      video.current.width,
      video.current.height
    );
  }

  return children;
}

function GrayScale({ children = null }) {
  const context = useContext(CanvasContext);
  const time = useContext(TimeContext);
  // console.log(["GrayScale"], { context, time });

  if (context) {
    const imageData = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );

    const { data } = imageData;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i],
        g = data[i + 1],
        b = data[i + 2];

      var avg = (r + g + b) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }

    context.putImageData(
      imageData,
      0,
      0,
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
  }

  return children;
}

function Ball({ children = null }) {
  const context = useContext(CanvasContext);
  const time = useContext(TimeContext);
  // console.log(["Ball"], { context, time });

  if (context) {
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(
      context.canvas.width / 2,
      context.canvas.height / 2,
      (context.canvas.height / 2) * Math.sin(time * 2) ** 2,
      0,
      2 * Math.PI
    );
    context.fill();
  }

  return children;
}

function Time({ children = null }) {
  const context = useContext(CanvasContext);
  const time = useContext(TimeContext);
  // console.log(["Time"], { context, time });

  // https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
  const renderText = (text, x, y, textAlign = "left") => {
    context.font = "30px Sans-serif";
    context.textAlign = textAlign;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.strokeText(text, x, y);
    context.fillStyle = "white";
    context.fillText(text, x, y);
  };

  if (context) {
    renderText(time, 480 - 10, 270 - 20, "right");
  }

  return children;
}

export default function Animation() {
  const [time, setTime] = useState(0);
  const src = "https://webrtc.github.io/samples/src/video/chrome.webm";
  const video = useRef();

  useEffect(() => {
    const update = () => {
      if (video.current.ended || video.current.paused) {
        return;
      }
      setTime(video.current.currentTime);
      video.current.requestVideoFrameCallback(update);
    };

    const play = () => {
      video.current.requestVideoFrameCallback(update);
    };

    // https://usefulangle.com/post/46/javascript-get-video-thumbnail-image-jpeg-png
    // Video metadata is loaded
    const loadedmetadata = () => {
      // Set canvas dimensions same as video dimensions
      const { videoWidth, videoHeight, duration } = video.current;
      console.log(["loadedmetadata"], { videoWidth, videoHeight, duration });
    };
    // Video playback position is changed
    const timeupdate = () => {
      // You are now ready to grab the thumbnail from the <canvas> element
      const { currentTime } = video.current;
      console.log(["timeupdate"], { currentTime });
    };

    video.current.addEventListener("play", play, true);
    video.current.addEventListener("loadedmetadata", loadedmetadata);
    video.current.addEventListener("timeupdate", timeupdate);
    return () => {
      video.current.removeEventListener("play", play);
    };
  }, [video, src]);

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
        <Canvas width="480" height="270" time={time}>
          <Video video={video} />
          <GrayScale />
          <Ball />
          <Time />
        </Canvas>
      </div>
    </div>
  );
}
