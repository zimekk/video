import React, { useCallback, useEffect, useState, useRef } from "react";
// import { MediaPlayer } from "dashjs";
import styles from "./App.module.scss";

// https://blog.scottlogic.com/2020/11/23/ffmpeg-webassembly.html
// https://webtiming.github.io/timingsrc/doc/examples.html
// https://github.com/1c7/Subtitle-Timeline-Editor
// https://github.com/Daiz/frame-accurate-ish
// http://allensarkisyan.github.io/VideoFrameDocs/
// https://github.com/allensarkisyan/VideoFrame
// https://jordicenzano.github.io/frame-accurate-scrubbing/
// https://stackoverflow.com/questions/36410706/html5-video-frame-accurate

export default function () {
  const [info, setInfo] = useState(null);
  const videoRef = useRef();

  const pip = useCallback(() => videoRef.current.requestPictureInPicture());

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    const video = videoRef.current;
    console.log({ video });

    // https://www.w3.org/TR/html51/semantics-embedded-content.html#ready-states
    const { readyState } = video;
    console.log({ readyState });

    // https://wicg.github.io/video-rvfc/#examples
    const frame = (now, metadata) => {
      // https://wicg.github.io/video-rvfc/#video-frame-metadata
      console.log({ now, metadata });
      // https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality
      console.log(video.getVideoPlaybackQuality());

      video.requestVideoFrameCallback(frame);
    };
    video.requestVideoFrameCallback(frame);

    const loadedmetadata = () => {
      // Set canvas dimensions same as video dimensions
      const { currentTime, videoWidth, videoHeight, duration, readyState } =
        video;
      console.log(["loadedmetadata"], {
        currentTime,
        videoWidth,
        videoHeight,
        duration,
        readyState,
      });

      setInfo(() => ({ currentTime, duration }));
      // setOptions([...Array(Math.floor(duration))].map((i, n) => n));
    };
    const seeked = () => {
      const { currentTime, playbackRate, seeking } = video;
      console.log(["seeked"], { currentTime, playbackRate, seeking });
    };
    // Video playback position is changed
    const timeupdate = () => {
      // You are now ready to grab the thumbnail from the <canvas> element
      const { currentTime, playbackRate, seeking } = video;
      console.log(["timeupdate"], { currentTime, playbackRate, seeking });
      setInfo((info) => ({ ...info, currentTime }));
    };
    const error = () => {
      const { error } = video;
      // MediaError {code: 4, message: "DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed"}
      console.log(["error"], { error });
    };

    video.addEventListener("error", error);
    video.addEventListener("loadedmetadata", loadedmetadata);
    video.addEventListener("seeked", seeked);
    video.addEventListener("timeupdate", timeupdate);
  }, []);

  return (
    <div>
      <div>
        <button onClick={pip}>pip</button>
        {info &&
          (({ currentTime, duration }) => (
            <div className={styles.Duration}>
              <span
                className={styles.Progress}
                style={{ width: `${(100 * currentTime) / duration}%` }}
              ></span>
              {currentTime} / {duration}
            </div>
          ))(info)}
      </div>
      <video
        ref={videoRef}
        width="480"
        height="270"
        src="https://webrtc.github.io/samples/src/video/chrome.webm"
        controls
      ></video>
    </div>
  );
}
