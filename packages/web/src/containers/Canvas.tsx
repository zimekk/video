import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const FrameContext = createContext(0);
const CanvasContext = createContext(null);

const random = (min, max) => min + (max - min) * Math.random();

const getPositionBetween = (min, max, variance) =>
  random(min - variance, max + variance);

const hueVariance = 40;

const getRandomColor = (baseHue, hueVariance) => {
  const hue = random(baseHue - hueVariance, baseHue + hueVariance);
  const saturation = random(4, 55);

  return `hsla(${hue}, ${saturation}%, ${random(30, 80)}%, ${random(
    0.2,
    0.6
  )})`;
};

export const getRandomHexagon = ({ baseSize, baseHue, x, y }) => {
  const size = random(baseSize * 1.2, baseSize * 2);
  const positionVariance = Math.round(0.1 * baseSize);

  const [Xmin, Xmax] = Array.isArray(x) ? x : [x, x];
  const [Ymin, Ymax] = Array.isArray(y) ? y : [y, y];

  return {
    x: getPositionBetween(
      Xmin - size * 0.5,
      Xmax - size * 0.5,
      positionVariance
    ),
    y: getPositionBetween(
      Ymin - size * 0.5,
      Ymax - size * 0.5,
      positionVariance
    ),
    size,
    color: getRandomColor(baseHue, hueVariance),
    initialRotation: random(0, 90),
    rotationSpeed: random(-0.1, 0.1),
  };
};

export const getHexagonsToFillZone = ({ width, height }) => {
  const baseHue = random(200, 300);

  const smallerSize = Math.min(width, height);

  /* putting big hexagons in the screen corners */
  /* so that we have the whole screen covered */
  const cornerHexagons = [];
  for (let i = 0; i <= Math.round(width / smallerSize); i++) {
    for (let j = 0; j <= Math.round(height / smallerSize); j++) {
      cornerHexagons.push(
        getRandomHexagon({
          baseSize: Math.max(width, height),
          x: i * width,
          y: j * height,
          baseHue,
        })
      );
    }
  }

  /* Then adding some more hexagons randomly on the screen */
  const extraHexagons = [...Array(5)].map(() =>
    getRandomHexagon({
      baseSize: smallerSize,
      x: [0, width],
      y: [0, height],
      baseHue,
    })
  );
  return [...cornerHexagons, ...extraHexagons];
};

const useFrame = (f) => {
  const context = useContext(CanvasContext);
  const frame = useContext(FrameContext);
  // useEffect(() => context && f(frame, context), [frame, context])
  useEffect(() => context && f(frame, context), [frame, context]);
};

function Canvas({ ...rest }) {
  const [frame, setFrame] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    // console.log(['Canvas.useLayoutEffect'], context)
    const animationFrameId = window.requestAnimationFrame(() =>
      setFrame((frame) => frame + 1)
    );
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [frame, setFrame]);

  return (
    <div>
      <CanvasContext.Provider value={canvasRef.current?.getContext("2d")}>
        <FrameContext.Provider value={frame}>
          {/* <button onClick={(e) => setFrame((frame) => frame + 1)}>tick</button> */}
          <canvas ref={canvasRef} {...rest} />
        </FrameContext.Provider>
      </CanvasContext.Provider>
    </div>
  );
}

function Ball({ children = null }) {
  useFrame((frame, context) => {
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(
      context.canvas.width / 2,
      context.canvas.height / 2,
      (context.canvas.height / 2) * Math.sin(frame * 0.05) ** 2,
      0,
      2 * Math.PI
    );
    context.fill();
  });
  return children;
}
function Group({ children = null }) {
  return children;
}

// https://thibaut.io/react-canvas-components
function Hexagon({
  x,
  y,
  size,
  color,
  initialRotation,
  rotationSpeed,
  children = null,
}) {
  useFrame((frame, context) => {
    const animatedAngle = initialRotation + rotationSpeed * frame;
    const edgeLength = size * 0.5;

    context.beginPath();
    // This article explains all the math behind hexagons
    // https://www.redblobgames.com/grids/hexagons/
    [30, 90, 150, 210, 270, 330].forEach((angle, index) => {
      const radAngle = ((angle + animatedAngle) * Math.PI) / 180;
      const point = {
        x: x + edgeLength + edgeLength * Math.cos(radAngle),
        y: y + edgeLength + edgeLength * Math.sin(radAngle),
      };

      if (index === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    });
    context.fillStyle = color;
    context.fill();
  });
  return children;
}

function Clear({ children = null }) {
  useFrame((frame, context) => {
    // console.log(['Clear.useFrame'], {frame, context})
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });
  return children;
}

// https://codepen.io/chriscourses/pen/PzONKR
// https://www.youtube.com/watch?v=tvu0q1DNpGc
function Star() {
  this.radius = Math.random() * 10 + 5;
  this.x = this.radius + (400 - this.radius * 2) * Math.random();
  this.y = -10;
  this.dx = (Math.random() - 0.5) * 20;
  this.dy = 30;
  this.gravity = 0.5;
  this.friction = 0.54;

  this.update = function (c) {
    var groundHeight = c.canvas.height * 0.15;

    // Bounce particles off the floor of the canvas
    if (this.y + this.radius + this.dy >= c.canvas.height - groundHeight) {
      this.dy = -this.dy * this.friction;
      this.dx *= this.friction;
      this.radius -= 3;

      explosions.push(new Explosion(this));
    } else {
      this.dy += this.gravity;
    }

    // Bounce particles off left and right sides of canvas
    if (
      this.x + this.radius + this.dx >= c.canvas.width ||
      this.x - this.radius + this.dx < 0
    ) {
      this.dx = -this.dx;
      this.dx *= this.friction;
      explosions.push(new Explosion(this));
    }

    // Move particles by velocity
    this.x += this.dx;
    this.y += this.dy;

    this.draw(c);

    // Draw particles from explosion
    for (var i = 0; i < explosions.length; i++) {
      explosions[i].update(c);
    }
  };
  this.draw = function (c) {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);

    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 20;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;

    c.fillStyle = "#E3EAEF";
    c.fill();
    c.closePath();
    c.restore();
  };
}

function Particle(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.size = {
    width: 2,
    height: 2,
  };
  this.dx = dx;
  this.dy = dy;
  this.gravity = 0.09;
  this.friction = 0.88;
  this.timeToLive = 3;
  this.opacity = 1;

  this.update = function (c) {
    var groundHeight = c.canvas.height * 0.15;

    if (this.y + this.size.height + this.dy >= c.canvas.height - groundHeight) {
      this.dy = -this.dy * this.friction;
      this.dx *= this.friction;
    } else {
      this.dy += this.gravity;
    }

    if (
      this.x + this.size.width + this.dx >= c.canvas.width ||
      this.x + this.dx < 0
    ) {
      this.dx = -this.dx;
      this.dx *= this.friction;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw(c);

    this.timeToLive -= 0.01;
    this.opacity -= 1 / (this.timeToLive / 0.01);
  };
  this.draw = function (c) {
    c.save();
    c.fillStyle = "rgba(227, 234, 239," + this.opacity + ")";
    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 20;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.fillRect(this.x, this.y, this.size.width, this.size.height);
    c.restore();
  };

  this.isAlive = function () {
    return 0 <= this.timeToLive;
  };
}

function Explosion(star) {
  this.particles = [];

  this.init = function (parentStar) {
    for (var i = 0; i < 8; i++) {
      var velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 15,
      };
      this.particles.push(
        new Particle(parentStar.x, parentStar.y, velocity.x, velocity.y)
      );
    }
  };

  this.init(star);

  this.update = function (c) {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update(c);
      if (this.particles[i].isAlive() == false) {
        this.particles.splice(i, 1);
      }
    }
  };
}

var stars = [];
var explosions = [];
var randomSpawnRate = Math.floor(Math.random() * 25 + 60);

function Particles({ children = null }) {
  useFrame((frame, context) => {
    // var backgroundGradient = context.createLinearGradient(0,0,0, context.canvas.height);
    // backgroundGradient.addColorStop(0,"#171e26");
    // backgroundGradient.addColorStop(1,"#3f586b");

    for (var i = 0; i < stars.length; i++) {
      stars[i].update(context);
      // console.log(stars[0].isAlive());

      if (stars[i].radius <= 0) {
        stars.splice(i, 1);
      }
    }

    for (var i = 0; i < explosions.length; i++) {
      if (explosions[i].length <= 0) {
        explosions.splice(i, 1);
      }
    }

    if (frame % randomSpawnRate == 0) {
      stars.push(new Star());
      randomSpawnRate = Math.floor(Math.random() * 10 + 75);
    }
  });

  return children;
}

export default function () {
  const [checked, setChecked] = useState(false);

  // http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  // https://blog.koenvangilst.nl/react-hooks-with-canvas/
  // https://javascript.plainenglish.io/canvas-animation-inside-react-components-with-requestanimationframe-c5d594afc1b
  // https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
  return (
    <div>
      {/* <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked((checked) => !checked)}
      /> */}
      <Canvas width="480" height="270" style={{ background: "#333" }}>
        <Clear />
        <Ball />
        {getHexagonsToFillZone({
          height: 270,
          width: 480,
        }).map((hexagon, index) => (
          <Hexagon key={index} {...hexagon} />
        ))}
        {checked && <Group></Group>}
        <Particles />
      </Canvas>
    </div>
  );
}
