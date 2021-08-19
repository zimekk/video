import React, { useCallback, useEffect, useRef, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import cx from "classnames";
import styles from "./styles.module.scss";

const EFFECTS = Object.freeze({
  GRAY_SCALE: "GRAY_SCALE",
  CHROMA_KEY: "CHROMA_KEY",
});
const VIDEOS = [
  "https://webrtc.github.io/samples/src/video/chrome.webm",
  "https://mdn.github.io/dom-examples/canvas/chroma-keying/media/video.mp4",
];

// https://github.com/ffmpegwasm/ffmpeg.wasm#use-other-version-of-ffmpegwasm-core--ffmpegcore
const ffmpeg = createFFmpeg({
  corePath: process.env.FFMPEG_CORE_PATH,
  log: true,
});

// https://www.videvo.net/video/flying-over-forest-3/4650/
// https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/
export default function Video({ counter }: { counter: number }) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [frames, setFrames] = useState([
    require(`../../assets/triangle/tmp.000.png`).default,
    require(`../../assets/triangle/tmp.001.png`).default,
    require(`../../assets/triangle/tmp.002.png`).default,
    require(`../../assets/triangle/tmp.003.png`).default,
    require(`../../assets/triangle/tmp.004.png`).default,
    require(`../../assets/triangle/tmp.005.png`).default,
    require(`../../assets/triangle/tmp.006.png`).default,
    require(`../../assets/triangle/tmp.007.png`).default,
    require(`../../assets/triangle/tmp.008.png`).default,
    require(`../../assets/triangle/tmp.009.png`).default,
    require(`../../assets/triangle/tmp.010.png`).default,
    require(`../../assets/triangle/tmp.011.png`).default,
    require(`../../assets/triangle/tmp.012.png`).default,
    require(`../../assets/triangle/tmp.013.png`).default,
    require(`../../assets/triangle/tmp.014.png`).default,
    require(`../../assets/triangle/tmp.015.png`).default,
    require(`../../assets/triangle/tmp.016.png`).default,
    require(`../../assets/triangle/tmp.017.png`).default,
    require(`../../assets/triangle/tmp.018.png`).default,
    require(`../../assets/triangle/tmp.019.png`).default,
    require(`../../assets/triangle/tmp.020.png`).default,
    require(`../../assets/triangle/tmp.021.png`).default,
    require(`../../assets/triangle/tmp.022.png`).default,
    require(`../../assets/triangle/tmp.023.png`).default,
    require(`../../assets/triangle/tmp.024.png`).default,
    require(`../../assets/triangle/tmp.025.png`).default,
    require(`../../assets/triangle/tmp.026.png`).default,
    require(`../../assets/triangle/tmp.027.png`).default,
    require(`../../assets/triangle/tmp.028.png`).default,
    require(`../../assets/triangle/tmp.029.png`).default,
    require(`../../assets/triangle/tmp.030.png`).default,
    require(`../../assets/triangle/tmp.031.png`).default,
    require(`../../assets/triangle/tmp.032.png`).default,
    require(`../../assets/triangle/tmp.033.png`).default,
    require(`../../assets/triangle/tmp.034.png`).default,
    require(`../../assets/triangle/tmp.035.png`).default,
    require(`../../assets/triangle/tmp.036.png`).default,
    require(`../../assets/triangle/tmp.037.png`).default,
    require(`../../assets/triangle/tmp.038.png`).default,
    require(`../../assets/triangle/tmp.039.png`).default,
    require(`../../assets/triangle/tmp.040.png`).default,
    require(`../../assets/triangle/tmp.041.png`).default,
    require(`../../assets/triangle/tmp.042.png`).default,
    require(`../../assets/triangle/tmp.043.png`).default,
    require(`../../assets/triangle/tmp.044.png`).default,
    require(`../../assets/triangle/tmp.045.png`).default,
    require(`../../assets/triangle/tmp.046.png`).default,
    require(`../../assets/triangle/tmp.047.png`).default,
    require(`../../assets/triangle/tmp.048.png`).default,
    require(`../../assets/triangle/tmp.049.png`).default,
    require(`../../assets/triangle/tmp.050.png`).default,
    require(`../../assets/triangle/tmp.051.png`).default,
    require(`../../assets/triangle/tmp.052.png`).default,
    require(`../../assets/triangle/tmp.053.png`).default,
    require(`../../assets/triangle/tmp.054.png`).default,
    require(`../../assets/triangle/tmp.055.png`).default,
    require(`../../assets/triangle/tmp.056.png`).default,
    require(`../../assets/triangle/tmp.057.png`).default,
    require(`../../assets/triangle/tmp.058.png`).default,
    require(`../../assets/triangle/tmp.059.png`).default,
  ]);
  const [effect, setEffect] = useState(Object.keys(EFFECTS)[0]);
  const [src, setVideo] = useState(VIDEOS[0]);
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");
  const video = useRef();
  const canvas = useRef();

  const capture = useCallback(() => {
    setFrames((frames) => frames.concat(canvas.current.toDataURL()));
  }, [setFrames]);

  const remove = useCallback(() => {
    setFrames((frames) =>
      frames.filter((_frame, index) => !selected.includes(index))
    );
    setSelected([]);
  }, [selected, setFrames]);

  const toggleSelected = useCallback(
    (index) => {
      setSelected((selected) =>
        selected.includes(index)
          ? selected.filter((i) => index !== i)
          : selected.concat(index)
      );
    },
    [setSelected]
  );

  const doTranscode = useCallback(async () => {
    // https://github.com/ffmpegwasm/ffmpeg.wasm/blob/master/examples/browser/image2video.html
    if (!ffmpeg.isLoaded()) {
      setMessage("Loading ffmpeg-core.js");
      await ffmpeg.load();
    }
    setMessage("Loading data");
    ffmpeg.FS(
      "writeFile",
      "audio.ogg",
      await fetchFile(require("../../assets/triangle/audio.ogg").default)
    );
    for (let i = 0; i < frames.length; i += 1) {
      const num = `00${i}`.slice(-3);
      ffmpeg.FS("writeFile", `tmp.${num}.png`, await fetchFile(frames[i]));
    }
    setMessage("Start transcoding");
    await ffmpeg.run(
      "-framerate",
      "30",
      "-pattern_type",
      "glob",
      "-i",
      "*.png",
      "-i",
      "audio.ogg",
      "-c:a",
      "copy",
      "-shortest",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "out.mp4"
    );
    setMessage("Complete transcoding");
    const data = ffmpeg.FS("readFile", "out.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
  }, [frames, setMessage, setVideoSrc]);

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

  const [width, height] = [240, 135];

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
        width={width}
        height={height}
        // preload="none"
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
          width={width}
          height={height}
        ></canvas>
      </div>
      <div>
        <video
          src={videoSrc}
          width={width}
          height={height}
          crossOrigin="anonymous"
          controls
        />
        <div>
          <button onClick={doTranscode}>Transcode</button>
        </div>
        <div>{message}</div>
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
        <button onClick={() => remove()} disabled={selected.length == 0}>
          remove
        </button>{" "}
      </div>
      <div>
        {frames.map((image, index) => (
          <img
            key={index}
            src={image}
            className={cx(
              styles.Image,
              selected.includes(index) && styles.Image__Selected
            )}
            width={width}
            height={height}
            alt=""
            onClick={() => toggleSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}
