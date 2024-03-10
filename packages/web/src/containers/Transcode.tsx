import React, { useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

// https://github.com/ffmpegwasm/react-app/blob/master/src/App.js
export default function Transcode() {
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");

  // https://github.com/ffmpegwasm/ffmpeg.wasm#use-other-version-of-ffmpegwasm-core--ffmpegcore
  const ffmpeg = new FFmpeg();

  const doTranscode = async () => {
    setMessage("Loading ffmpeg-core.js");
    await ffmpeg.load();
    setMessage("Start transcoding");
    ffmpeg.writeFile(
      "test.avi",
      // https://github.com/ffmpegwasm/testdata/blob/master/video-3s.avi
      await fetchFile(require("../assets/video-3s.avi").default),
    );
    await ffmpeg.exec(["-i", "test.avi", "test.mp4"]);
    setMessage("Complete transcoding");
    const data = await ffmpeg.readFile("test.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" })),
    );
  };

  return (
    <div>
      <video src={videoSrc} width="480" height="270" controls />
      <div>
        <button onClick={doTranscode}>Transcode</button>
      </div>
      <div>{message}</div>
    </div>
  );
}
