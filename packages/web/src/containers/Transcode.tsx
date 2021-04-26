import React, { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

// https://github.com/ffmpegwasm/react-app/blob/master/src/App.js
export default function Transcode() {
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");
  const ffmpeg = createFFmpeg({
    log: true,
  });
  const doTranscode = async () => {
    setMessage("Loading ffmpeg-core.js");
    await ffmpeg.load();
    setMessage("Start transcoding");
    ffmpeg.FS(
      "writeFile",
      "test.avi",
      await fetchFile(require("../assets/video-3s.avi").default)
    );
    await ffmpeg.run("-i", "test.avi", "test.mp4");
    setMessage("Complete transcoding");
    const data = ffmpeg.FS("readFile", "test.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
  };

  return (
    <div>
      {/* <div>
        {media ? (
          <button key="stop" onClick={stopRecording}>
            Stop Recording
          </button>
        ) : (
          <button key="start" onClick={startRecording}>
            Start Recording
          </button>
        )}
      </div> */}
      <video src={videoSrc} width="480" height="270" controls />
      <div>
        <button onClick={doTranscode}>Transcode</button>
      </div>
      <div>{message}</div>
    </div>
  );
}
