import React, { createContext, useEffect, useRef, useState } from "react";
import anime from "animejs";

const CanvasContext = createContext(null);

var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

class Line {
  color = "";
  scaleX = 1;
  opacity = 1;
  constructor({ x, y, w, h, color }) {
    Object.assign(this, { x, y, w, h, color });
  }
  draw(ctx) {
    const { width, height } = ctx.canvas;
    const { x, y, w, h, color } = this;
    const { scaleX, opacity } = this;
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.fillRect(
      (x * 0.8 + 0.1) * width,
      (y * 0.8 + 0.1) * height,
      w * 0.8 * width * scaleX,
      h * 0.8 * height
    );
    ctx.restore();
  }
}

class Text {
  color = "";
  text = "";
  size = 30;
  scale = 1;
  opacity = 1;
  constructor({ text, x, y, size, color }) {
    Object.assign(this, { text, x, y, size, color });
  }
  draw(ctx) {
    const { width, height } = ctx.canvas;
    const { size, text, x, y, scale, color, opacity } = this;
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.font = `${size * 0.8 * height}px Arial`;
    const { width: w } = ctx.measureText(text);
    ctx.translate(
      (x * 0.8 + 0.1) * width + w / 2,
      ((y + size / 2) * 0.8 + 0.1) * height
    );
    ctx.scale(scale, scale);
    ctx.fillText(text, -w / 2, (size / 2) * 0.8 * height);
    ctx.restore();
  }
}

function Canvas({ video, children = null, ...rest }) {
  const canvas = useRef();

  useEffect(() => {
    var ctx = canvas.current.getContext("2d");

    const letters = "Letters"
      .split("")
      .map(
        (text, i, l) =>
          new Text({
            text,
            x: i / l.length,
            y: 1 / 3,
            size: 1 / 3,
            color: colors[3],
          })
      );
    const lines = [0.3, 0.8].map(
      (y, i) => new Line({ x: 0, y, w: 1, h: 0.02, color: colors[i + 1] })
    );

    // https://tobiasahlin.com/moving-letters/#1
    var render = anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(
          video.current,
          0,
          0,
          video.current.width,
          video.current.height
        );
      },
    });

    const update = (anim) => {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw(ctx);
      }
    };

    anime
      .timeline({ loop: true })
      .add({
        targets: [...letters],
        scale: [0.3, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 100 * (i + 1),
        update,
      })
      .add(
        {
          targets: [...lines],
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 600,
          delay: (el, i, l) => 200 * (l - i),
          update,
        },
        50
      )
      .add({
        targets: [...letters, ...lines],
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, [canvas]);

  return (
    <CanvasContext.Provider value={canvas.current?.getContext("2d")}>
      <canvas ref={canvas} {...rest}></canvas>
      {children}
    </CanvasContext.Provider>
  );
}

export default function Letters() {
  const src = "https://webrtc.github.io/samples/src/video/chrome.webm";
  const video = useRef();

  return (
    <div>
      <div>
        <video
          ref={video}
          src={src}
          width="480"
          height="270"
          preload="none"
          crossOrigin="anonymous"
          controls
        />
      </div>
      <div>
        <Canvas video={video} width="480" height="270" />
      </div>
    </div>
  );
}
