import React, { createContext, useEffect, useRef } from "react";
import bspline from "b-spline";

var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

const CanvasContext = createContext(null);

// https://easings.net/#easeInOutCubic
function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// https://css-tricks.com/blobs/
class Blob {
  constructor() {
    this.points = [];
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this);
      // point.acceleration = -1 + Math.random() * 2;
      this.push(point);
    }
  }

  render(t) {
    let canvas = this.canvas;
    let ctx = this.ctx;
    // let position = this.position;
    let pointsArray = this.points;
    // let radius = this.radius;
    let points = this.numPoints;
    // let divisional = this.divisional;
    let center = this.center;
    let video = this.video;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(video, 0, 0, video.width, video.height);

    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    ctx.lineWidth = 2;
    ctx.strokeStyle = colors[1];
    ctx.strokeRect(20, 20, 20, 20);

    if (t) {
      let a = (t / 6) % 360;
      let b = Math.min(Math.abs((a - 180) / 180), 1);
      ctx.save();
      ctx.translate(85, 40 + easeInOutCubic(b) * 20);
      ctx.beginPath();

      [30, 90, 150, 210, 270, 330, 30].forEach((angle, index) => {
        const radAngle = ((angle + easeInOutCubic(b) * 180) * Math.PI) / 180;
        const radius = 10;
        ctx[index ? "lineTo" : "moveTo"](
          radius * Math.cos(radAngle),
          radius * Math.sin(radAngle)
        );
      });
      ctx.strokeStyle = colors[0];
      ctx.stroke();
      ctx.restore();
    }

    if (t) {
      let a = (t / 2) % 360;
      // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
      ctx.save();
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
      ctx.translate(30, 95);
      ctx.rotate((a * Math.PI) / 180);
      ctx.translate(-30, -95);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, 90);
      ctx.lineTo(20, 100);
      ctx.lineTo(30, 90);
      ctx.lineTo(40, 100);
      ctx.lineTo(50, 90);
      ctx.strokeStyle = colors[1];
      ctx.stroke();
      ctx.restore();
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#a_scale_example
    if (t) {
      let a = (t / 4) % 180;
      ctx.translate(60, 65);
      ctx.scale(
        1 - Math.sin((a * Math.PI) / 180) / 2,
        1 - Math.sin((a * Math.PI) / 180) / 2
      );
      ctx.translate(-60, -65);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(60, 65, 15, 0, Math.PI * 2, true);
      ctx.strokeStyle = colors[2];
      ctx.stroke();
      ctx.restore();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    if (t) {
      let a = (-t / 5) % 360;
      let b = (-t / 7) % 360;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(
        75,
        100,
        10,
        (a * Math.PI) / 180,
        (a * Math.PI) / 180 + Math.PI * 1.5 + Math.sin((b * Math.PI) / 180),
        false
      );
      ctx.strokeStyle = colors[3];
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(60, 165, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = colors[0];
    ctx.fill();

    if (t) {
      let a = (t / 5) % 180;
      ctx.lineWidth = 2 + 2 * Math.sin((a * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(70, 130, 5, 0, Math.PI, false);
      ctx.arc(60, 130, 5, 0, Math.PI, true);
      ctx.arc(50, 130, 5, 0, Math.PI, false);
      ctx.arc(40, 130, 5, 0, Math.PI, true);
      ctx.arc(30, 130, 5, 0, Math.PI, false);
      ctx.arc(20, 130, 5, 0, Math.PI, true);
      ctx.strokeStyle = colors[3];
      ctx.stroke();
    }

    if (t) {
      // https://github.com/thibauts/b-spline#clamped-knot-vector
      let points = [
        [-1.0, 0.0],
        [-0.5, 0.5],
        [0.5, -0.5],
        [1.0, 0.0],
      ];
      let degree = 2;
      let knots = [0, 0, 0, 1, 2, 2, 2];

      let a = ((t / 6) % 360) / 360;
      let [x, y] = bspline(a % 1, degree, points, knots);
      ctx.translate(50, 200 + y * 40);
      ctx.rotate(x * Math.PI);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(10, 0);
      ctx.moveTo(0, -10);
      ctx.lineTo(0, 10);
      ctx.strokeStyle = colors[2];
      ctx.stroke();
      ctx.restore();
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.lineWidth = 1;
      for (let t = 0; t < a; t += 0.01) {
        let [x, y] = bspline(t % 1, degree, points, knots);
        ctx.strokeStyle = colors[0];
        ctx.strokeRect(50 + x * 40, 200 + y * 40, 1, 1);
        ctx.strokeStyle = colors[1];
        ctx.strokeRect(10 + t * 40, 200 + x * 40, 1, 1);
      }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#path2d_example
    var rectangle = new Path2D();
    rectangle.rect(10, 10, 20, 20);

    var circle = new Path2D();
    circle.arc(70, 15, 15, 0, 2 * Math.PI);

    ctx.strokeStyle = colors[3];
    ctx.stroke(rectangle);
    ctx.fillStyle = colors[2];
    ctx.fill(circle);

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
    var p = new Path2D("M5 60 l 15 10 l 5 -15 l 15 10");
    ctx.strokeStyle = colors[0];
    ctx.stroke(p);

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

    let p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(
        pointsArray[i - 1],
        pointsArray[i + 1] || pointsArray[0]
      );

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(p2.x, p2.y);

      ctx.fillStyle = "#000000";
      // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    // ctx.lineTo(_p2.x, _p2.y);

    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    // ctx.stroke();

    /*
    ctx.fillStyle = '#000000';
    if(this.mousePos) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
    }
*/
    requestAnimationFrame(this.render.bind(this));
  }

  push(item) {
    if (item instanceof Point) {
      this.points.push(item);
    }
  }

  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || "#000000";
  }

  set canvas(value) {
    if (
      value instanceof HTMLElement &&
      value.tagName.toLowerCase() === "canvas"
    ) {
      this._canvas = value;
      this.ctx = this._canvas.getContext("2d");
    }
  }
  get canvas() {
    return this._canvas;
  }

  set numPoints(value) {
    if (value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }

  set position(value) {
    if (typeof value == "object" && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return {
      x: this.canvas.width * this.position.x,
      y: this.canvas.height * this.position.y,
    };
  }

  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth),
    };

    this.acceleration = -0.3 + Math.random() * 0.6;
  }

  solveWith(leftPoint, rightPoint) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction;
  }

  set acceleration(value) {
    if (typeof value == "number") {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  set speed(value) {
    if (typeof value == "number") {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  set radialEffect(value) {
    if (typeof value == "number") {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  get position() {
    return {
      x:
        this.parent.center.x +
        this.components.x * (this.parent.radius + this.radialEffect),
      y:
        this.parent.center.y +
        this.components.y * (this.parent.radius + this.radialEffect),
    };
  }

  get components() {
    return this._components;
  }

  set elasticity(value) {
    if (typeof value === "number") {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if (typeof value === "number") {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0085;
  }
}

function Canvas({ video, children = null, ...rest }) {
  const canvas = useRef();

  useEffect(() => {
    const blob = new Blob();

    const init = function () {
      canvas.current.setAttribute("touch-action", "none");

      let oldMousePoint = { x: 0, y: 0 };
      let hover = false;
      let mouseMove = function (e) {
        let { x, y } = canvas.current.getBoundingClientRect();

        let pos = { x: blob.center.x + x, y: blob.center.y + y };
        let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
        let angle = null;

        blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

        if (dist < blob.radius && hover === false) {
          let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
          angle = Math.atan2(vector.y, vector.x);
          hover = true;
          // blob.color = '#77FF00';
        } else if (dist > blob.radius && hover === true) {
          let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
          angle = Math.atan2(vector.y, vector.x);
          hover = false;
          blob.color = null;
        }

        if (typeof angle == "number") {
          let nearestPoint = null;
          let distanceFromPoint = 100;

          blob.points.forEach((point) => {
            if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
              // console.log(point.azimuth, angle, distanceFromPoint);
              nearestPoint = point;
              distanceFromPoint = Math.abs(angle - point.azimuth);
            }
          });

          if (nearestPoint) {
            let strength = {
              x: oldMousePoint.x - e.clientX,
              y: oldMousePoint.y - e.clientY,
            };
            strength =
              Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
            if (strength > 100) strength = 100;
            nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
          }
        }

        oldMousePoint.x = e.clientX;
        oldMousePoint.y = e.clientY;
      };
      // window.addEventListener('mousemove', mouseMove);
      window.addEventListener("pointermove", mouseMove);

      blob.canvas = canvas.current;
      blob.video = video.current;
      blob.init();
      blob.render();
    };

    init();
  }, [canvas]);

  return (
    <CanvasContext.Provider value={canvas.current?.getContext("2d")}>
      <canvas ref={canvas} {...rest}></canvas>
      {children}
    </CanvasContext.Provider>
  );
}

export default function () {
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
