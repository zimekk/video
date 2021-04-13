import { hot } from "react-hot-loader/root";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import Gradients from "./Gradients";
import Transitions from "./Transitions";
import styles from "./App.module.scss";

// https://www.videvo.net/video/flying-over-forest-3/4650/
// https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/
function Video() {
  const video = useRef();
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const update = () => {
      if (video.current.ended || video.current.paused) {
        return;
      }

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
      const data = imageData.data;

      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
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
        video.current.width,
        video.current.height
      );

      requestAnimationFrame(update);
    };
    const play = () => {
      requestAnimationFrame(update);
    };

    video.current.addEventListener("play", play, false);
    return () => {
      video.current.removeEventListener("play", play);
    };
  }, [video, canvas]);

  return (
    <div>
      <video
        ref={video}
        width="480"
        height="270"
        preload="none"
        crossOrigin="anonymous"
        controls
      >
        <source src="http://bgrins.github.io/videoconverter.js/demo/bigbuckbunny.webm" />
        {/* <source src="https://content.videvo.net/videvo_files/video/free/2016-01/originalContent/Forest_15_3b_Videvo.mov" /> */}
      </video>
      <div>
        <canvas ref={canvas} width="480" height="270"></canvas>
      </div>
    </div>
  );
}

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <button onClick={(e) => dispatch(increment())}>{counter}</button>
        <Video />
        <Gradients />
        <Transitions />
      </div>
    </div>
  );
}

export default hot(App);
