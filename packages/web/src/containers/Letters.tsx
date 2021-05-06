import React, { useEffect, useRef } from "react";
import anime from "animejs";

const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

class Line {
  color = "";
  opacity = 0;
  scaleX = 1;
  x = 0;
  y = 0;
  w = 0;
  h = 0;
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
  opacity = 0;
  rotateZ = 0;
  scale = 1;
  size = 30;
  text = "";
  translateX = 0;
  translateY = 0;
  x = 0;
  y = 0;
  constructor({ text, x, y, size, color }) {
    Object.assign(this, { text, x, y, size, color });
  }
  draw(ctx) {
    const { width, height } = ctx.canvas;
    const {
      rotateZ,
      size,
      text,
      x,
      y,
      scale,
      color,
      opacity,
      translateX,
      translateY,
    } = this;
    const fontSize = size * 0.8 * height;

    const em = (x) =>
      typeof x === "string"
        ? (([m, v, u]) =>
            ({
              px: v,
              em: v * fontSize,
            }[u]))(x.match(/^([+-]?[-e0-9.]+)(px|em)$/) || [])
        : x;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px Arial`;

    // ctx.strokeRect(0, 0, width, 0.75 * height);
    ctx.beginPath();
    ctx.rect(0, 0, width, 0.75 * height);
    ctx.clip();

    const { width: w } = ctx.measureText(text);
    ctx.translate(
      (x * 0.8 + 0.1) * width + w / 2 + em(translateX),
      ((y + size / 2) * 0.8 + 0.1) * height + em(translateY)
    );

    ctx.scale(scale, scale);
    ctx.rotate((rotateZ * Math.PI) / 180);
    ctx.fillText(text, -w / 2, (size / 2) * 0.8 * height);
    ctx.restore();
  }
}

function Canvas({ video, children = null, ...rest }) {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    const letters = "Letters".split("").map(
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

    anime({
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
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw(ctx);
      }
    };

    const s = 1;

    anime
      .timeline({ loop: true })
      // https://tobiasahlin.com/moving-letters/#7
      .add({
        targets: [...lines],
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: s * 750,
        easing: "easeOutExpo",
        delay: (el, i, l) => s * 200 * (l - i - 1),
        update,
      })
      .add(
        {
          targets: [...letters],
          opacity: 1,
          rotateZ: [180, 0],
          scale: 1,
          translateY: ["1.6em", 0],
          translateX: [".8em", 0],
          translateZ: 0,
          duration: s * 750,
          easing: "easeOutExpo",
          delay: (el, i) => s * 50 * i,
          update,
        },
        `-=${s * 950}`
      )
      .add({
        targets: [...letters, ...lines],
        opacity: 0,
        duration: s * 1000,
        easing: "easeOutExpo",
        delay: s * 1000,
        update,
      })
      // https://tobiasahlin.com/moving-letters/#1
      .add({
        targets: [...lines],
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: s * 600,
        easing: "easeOutExpo",
        delay: (el, i, l) => s * 200 * (l - i - 1),
        update,
      })
      .add(
        {
          targets: [...letters],
          opacity: [0, 1],
          rotateZ: 0,
          scale: [0.3, 1],
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          duration: s * 800,
          easing: "easeOutExpo",
          delay: (el, i) => s * 50 * (i + 1),
          update,
        },
        `-=${s * 800}`
      )
      .add({
        targets: [...letters, ...lines],
        opacity: 0,
        duration: s * 1000,
        easing: "easeOutExpo",
        delay: s * 1000,
      });
  }, [canvas]);

  return <canvas ref={canvas} {...rest}></canvas>;
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
