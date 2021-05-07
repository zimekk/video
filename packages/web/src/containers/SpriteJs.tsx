import React, { useEffect, useRef } from "react";
import { Group, Label, Layer, Sprite } from "spritejs";

export default function () {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const layer = new Layer({
      canvas,
    });

    const video = document.createElement("video");
    video.src = "https://webrtc.github.io/samples/src/video/chrome.webm";
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.muted = true;
    video.play();

    const videoCanvas = canvas.cloneNode();
    const videoCtx = videoCanvas.getContext("2d");
    const s = new Sprite({
      width: 480,
      height: 270,
    });

    layer.canvas.style.backgroundColor = "#3f097a";
    layer.append(s);

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
      }
    );

    group.append(text1, text2);

    let started = false;
    video.addEventListener("playing", () => {
      if (!started) {
        started = true;
        layer.tick((...p) => {
          videoCtx.drawImage(video, 0, 0);
          s.attr("texture", videoCanvas);
        });
      }
    });
  });

  return (
    <div>
      <canvas ref={canvasRef} width="480" height="270" />
    </div>
  );
}
