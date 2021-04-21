import React, { useCallback, useRef, useState } from "react";

// https://dev.to/sebastianstamm/screen-recording-in-10-lines-of-vanilla-js-3bo8
// https://developers.google.com/web/updates/2016/10/capture-stream
// https://webrtc.github.io/samples/src/content/capture/canvas-record/
export default function Recorder() {
  const video = useRef(null);
  const [media, setMedia] = useState(null);

  const startRecording = useCallback(() =>
    navigator.mediaDevices
      .getDisplayMedia({
        video: { mediaSource: "screen" },
      })
      .then((stream) => {
        const record = new MediaRecorder(stream);
        const chunks = [];

        record.addEventListener("dataavailable", ({ data }) =>
          chunks.push(data)
        );
        record.addEventListener("stop", () => {
          video.current.src = URL.createObjectURL(
            new Blob(chunks, { type: chunks[0].type })
          );
          setMedia(null);
        });
        record.start();

        setMedia({ stream, record });
      })
      .catch(console.info)
  );

  const stopRecording = useCallback(() => {
    media.stream.getVideoTracks()[0].stop();
    media.record.stop();
  });

  return (
    <div>
      <div>
        {media ? (
          <button key="stop" onClick={stopRecording}>
            Stop Recording
          </button>
        ) : (
          <button key="start" onClick={startRecording}>
            Start Recording
          </button>
        )}
      </div>
      <video ref={video} width="480" height="270" autoPlay controls />
    </div>
  );
}
