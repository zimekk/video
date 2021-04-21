import React, { useEffect, useRef, useState } from "react";
import styles from "./Video.module.scss";

const EFFECTS = Object.freeze({
  GRAY_SCALE: "GRAY_SCALE",
  CHROMA_KEY: "CHROMA_KEY",
});
const VIDEOS = [
  "https://webrtc.github.io/samples/src/video/chrome.webm",
  "https://mdn.github.io/dom-examples/canvas/chroma-keying/media/video.mp4",
];

// https://www.videvo.net/video/flying-over-forest-3/4650/
// https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/
export default function Video({ counter }: { counter: number }) {
  const [options, setOptions] = useState([]);
  const [effect, setEffect] = useState(Object.keys(EFFECTS)[0]);
  const [src, setVideo] = useState(VIDEOS[0]);
  const video = useRef();
  const canvas = useRef();
  const image = useRef();
  const link = useRef();

  const capture = () => {
    // Setting parameters of the download link
    link.current.setAttribute("href", canvas.current.toDataURL());
    link.current.setAttribute("download", "thumbnail.png");
    image.current.setAttribute("src", canvas.current.toDataURL());
  };

  const counterValue = useRef(counter);

  useEffect(() => {
    counterValue.current = counter;
  }, [counter]);

  useEffect(() => {
    const context = canvas.current.getContext("2d");

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

    const update = () => {
      if (video.current.ended || video.current.paused) {
        return;
      }

      // http://appcropolis.com/blog/web-technology/using-html5-canvas-to-capture-frames-from-a-video/
      context.drawImage(
        video.current,
        0,
        0,
        video.current.width,
        video.current.height
      );

      const imageData = context.getImageData(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );

      const { data } = imageData;

      // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas
      // https://github.com/mdn/dom-examples/tree/master/canvas/chroma-keying
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        if (effect === EFFECTS.GRAY_SCALE) {
          var avg = (r + g + b) / 3;
          data[i] = avg; // red
          data[i + 1] = avg; // green
          data[i + 2] = avg; // blue
        } else if (effect === EFFECTS.CHROMA_KEY) {
          if (g > 100 && r > 100 && b < 43) {
            data[i + 3] = 0;
          }
        }
      }

      context.putImageData(
        imageData,
        0,
        0,
        0,
        0,
        video.current.width,
        video.current.height
      );

      renderText(counterValue.current, 10, 40);
      renderText(video.current.currentTime, 480 - 10, 270 - 20, "right");

      // https://web.dev/requestvideoframecallback-rvfc/
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

      setOptions([...Array(Math.floor(duration))].map((i, n) => n));
    };
    // Video playback position is changed
    const timeupdate = () => {
      // You are now ready to grab the thumbnail from the <canvas> element
      const { currentTime } = video.current;
      console.log(["timeupdate"], { currentTime });
    };

    video.current.addEventListener("play", play, false);
    video.current.addEventListener("loadedmetadata", loadedmetadata);
    video.current.addEventListener("timeupdate", timeupdate);
    return () => {
      video.current.removeEventListener("play", play);
    };
  }, [video, canvas, src, effect]);

  return (
    <div>
      <div>
        <select value={src} onChange={(e) => setVideo(e.target.value)}>
          {VIDEOS.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <video
        ref={video}
        src={src}
        width="480"
        height="270"
        preload="none"
        crossOrigin="anonymous"
        controls
      />
      <div>
        <select value={effect} onChange={(e) => setEffect(e.target.value)}>
          {Object.entries(EFFECTS).map(([value, label], key) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <canvas
          ref={canvas}
          className={styles.Canvas}
          width="480"
          height="270"
        ></canvas>
      </div>
      <div>
        <select onChange={(e) => (video.current.currentTime = e.target.value)}>
          {options.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button onClick={() => capture()}>capture</button>{" "}
        <a ref={link} href="#">
          download
        </a>
      </div>
      <div>
        <img
          ref={image}
          className={styles.Image}
          width="480"
          height="270"
          alt=""
          onClick={(e) => window.open(e.target.getAttribute("src"))}
        />
      </div>
    </div>
  );
}
