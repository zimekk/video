import React, { type ComponentProps, useRef, useState } from "react";
import styles from "./styles.module.scss";

// https://codesandbox.io/s/2w0oy6qnvn
function Draggable({ ...props }: { x: number; y: number }) {
  const [position, setPosition] = useState(() => ({
    x: props.x,
    y: props.y,
    coords: {},
  }));

  const handleMouseMove = useRef((e) => {
    setPosition((position) => {
      const xDiff = position.coords.x - e.pageX;
      const yDiff = position.coords.y - e.pageY;
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      };
    });
  });

  const handleMouseDown = (e) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    setPosition((position) =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      })
    );
    document.addEventListener("mousemove", handleMouseMove.current);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove.current);
    setPosition((position) => Object.assign({}, position, { coords: {} }));
  };

  return (
    <rect
      className={styles.Draggable}
      stroke="blue"
      x={position.x - 2}
      y={position.y - 2}
      width={4}
      height={4}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
}

function Circle({
  cx,
  cy,
  r,
}: Omit<ComponentProps<"circle">, "cx" | "cy" | "r"> & {
  cx: number;
  cy: number;
  r: number;
}) {
  return (
    <>
      <g
        transform={`
    translate(${5} ${5})`}
      >
        <circle fill="#0ce8e3" cx={cx} cy={cy} r={r} />
      </g>
      <circle fill="none" stroke="black" cx={cx} cy={cy} r={r} />
      {[
        [cx, cy],
        [cx + r, cy],
      ].map(([x, y], key) => (
        <Draggable key={key} x={x} y={y} />
      ))}
    </>
  );
}

function Poly({
  points,
}: ComponentProps<"rect"> & { points: [number, number][] }) {
  return (
    <>
      <g
        transform={`
    translate(${5} ${-5})`}
      >
        <polygon
          fill="#cb7cd8"
          points={points.map(([x, y]) => [x, y].join(",")).join(" ")}
        />
      </g>
      <polygon
        fill="none"
        stroke="black"
        points={points.map(([x, y]) => [x, y].join(",")).join(" ")}
      />
      {points.map(([x, y], key) => (
        <Draggable key={key} x={x} y={y} />
      ))}
    </>
  );
}

function Rect({
  points,
}: ComponentProps<"rect"> & { points: [number, number][] }) {
  const [[x, y], [w, h]] = points;
  const width = w - x;
  const height = h - y;
  console.log({ x, y, width, height });
  return (
    <>
      <g
        transform={`
               translate(${Number(x) + 5} ${Number(y) - 5})`}
      >
        <rect
          fill="#faeb0f"
          transform={`rotate(30 ${Number(width) / 2} ${
            Number(height) / 2
          }) scale(1.2)`}
          x={0}
          y={0}
          width={width}
          height={height}
        />
      </g>
      <rect
        fill="none"
        stroke="black"
        x={x}
        y={y}
        width={width}
        height={height}
      />
      {points.map(([x, y], key) => (
        <Draggable key={key} x={x} y={y} />
      ))}
    </>
  );
}

const SHAPES = {
  Circle,
  Poly,
  Rect,
};

export default function Editor() {
  const [shapes] = useState<{ shape: keyof typeof SHAPES }[]>(() => [
    {
      shape: "Poly",
      points: [
        [110, 40],
        [130, 60],
        [100, 70],
      ],
    },
    {
      shape: "Rect",
      points: [
        [120, 120],
        [150, 150],
      ],
    },
    { shape: "Circle", cx: 50, cy: 50, r: 20 },
    {
      shape: "Poly",
      points: [
        [30, 125],
        [40, 125],
        [40, 140],
        [55, 140],
        [55, 150],
        [40, 150],
        [40, 165],
        [30, 165],
        [30, 150],
        [15, 150],
        [15, 140],
        [30, 140],
      ],
    },
  ]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        border: "1px solid red",
        top: "10%",
        left: "10%",
        width: "80%",
        height: "80%",
      }}
    >
      {shapes
        .map(({ shape, ...props }) => ({ Shape: SHAPES[shape], ...props }))
        .map(({ Shape, ...props }, key) => (
          <Shape key={key} {...props} />
        ))}
    </svg>
  );
}
