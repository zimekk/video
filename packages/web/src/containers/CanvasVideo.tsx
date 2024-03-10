import React, { useCallback, useEffect, useRef, useState } from "react";
import { Group, Label, Layer, Sprite } from "spritejs";
import { Canvas2Video } from "canvas2video";
import { FFmpeg } from "@ffmpeg/ffmpeg";

Object.assign(window, { FFmpeg });

export default function () {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [recording, setRecording] = useState<Canvas2Video | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const layer = new Layer({
      canvas,
    });

    const s = new Sprite({
      width: 480,
      height: 270,
    });

    // layer.canvas.style.backgroundColor = "#3f097a";
    layer.append(s);

    // https://spritejs.org/demo/#/labels
    const group = new Group();
    group.attr({
      pos: [240, 100],
    });

    layer.append(group);

    const text1 = new Label("Hello World !");
    text1.attr({
      anchor: [0.5, 0.5],
      font: "bold 48px Arial",
      fillColor: "#ffdc45",
    });

    const text2 = new Label("SpriteJS.org");
    text2.attr({
      anchor: [0.5, 0.5],
      y: 60,
      font: "bold 48px Arial",
      fillColor: "#ffdc45",
    });

    group.animate(
      [
        { scale: 1.5, rotate: -30 },
        { scale: 1, rotate: 0 },
        { scale: 1.5, rotate: 30 },
      ],
      {
        duration: 3000,
        iterations: Infinity,
        direction: "alternate",
      },
    );

    group.append(text1, text2);
  }, []);

  const stopRecording = useCallback(() => {
    if (!recording) {
      return;
    }
    recording.stopRecord();
    recording
      .getStreamURL()
      .then((url) => videoRef.current && (videoRef.current.src = url))
      .catch((err) => console.error(err));
    setRecording(null);
  }, [recording]);

  // https://github.com/welefen/canvas2video
  const startRecording = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const recording = new Canvas2Video({
      canvas,
      outVideoType: "mp4",
      workerOptions: {
        // corePath: 'https://unpkg.com/@ffmpeg/core@0.6.0/ffmpeg-core.js'
        corePath: process.env.FFMPEG_CORE_PATH,
        logger: console.info,
      },
      // audio: 'http://s5.qhres.com/static/465f1f953f1e6ff2.mp3'
    });
    recording.startRecord();
    setRecording(recording);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="480" height="270" />
      <div>
        {recording ? (
          <button key="stop" onClick={stopRecording}>
            Stop Recording
          </button>
        ) : (
          <button key="start" onClick={startRecording}>
            Start Recording
          </button>
        )}
      </div>
      <video ref={videoRef} width="480" height="270" controls autoPlay></video>
    </div>
  );
}
