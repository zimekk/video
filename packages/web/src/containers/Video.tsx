import React, { useEffect, useRef, useState } from "react";

// https://www.videvo.net/video/flying-over-forest-3/4650/
// https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/
export default function Video({ counter }) {
  const [options, setOptions] = useState([]);
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
        <source src="https://webrtc.github.io/samples/src/video/chrome.webm" />
        {/* <source src="https://content.videvo.net/videvo_files/video/free/2016-01/originalContent/Forest_15_3b_Videvo.mov" /> */}
      </video>
      <div>
        <canvas ref={canvas} width="480" height="270"></canvas>
      </div>
      <div>
        <select
          onChange={(e) => {
            video.current.currentTime = e.target.value;
          }}
        >
          {options.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button onClick={(e) => capture()}>capture</button>
        <a ref={link} href="#">
          download
        </a>
      </div>
      <div>
        <img ref={image} width="480" height="270" />
      </div>
    </div>
  );
}
