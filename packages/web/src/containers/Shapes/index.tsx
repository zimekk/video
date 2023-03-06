import React, {
  type ComponentProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.scss";

function Circle() {
  return (
    <>
      <circle cx={255} cy={86} r={18} fill="#1a191d" />
      <circle cx={252} cy={84} r={18} fill="#faeb0f" />
    </>
  );
}

function Circle2() {
  return (
    <>
      <circle cx={180} cy={202} r={7} fill="#1a191d" />
      <circle cx={179} cy={201} r={7} fill="#0ce8e3" />
    </>
  );
}

function Circle3() {
  return (
    <>
      <circle cx={128} cy={249} r={10} fill="#1a191d" />
      <circle cx={126} cy={248} r={10} fill="#cb7cd8" />
    </>
  );
}

function Circle4() {
  return <circle cx={259} cy={209} r={5} fill="#ff67a8" />;
}

function Circle5() {
  return <circle cx={169} cy={84} r={5} fill="##1a1a1a" />;
}

function Triangle() {
  return (
    <>
      <polygon points={`219,242 213,283 180,268`} fill="#1a191d" />
      <polygon points={`225,242 219,283 186,268`} fill="#ff69a8" />
    </>
  );
}

function Triangle2() {
  return (
    <>
      {/* <polygon points={`225,242 219,283 ${x},${y}`} fill="#1a191d" /> */}
      {/* <polygon points={`219,242 213,283 180,268${x},${y}`} fill="red" /> */}
      {/* <polygon points="264,290 216,321 256,338" fill="#1a191d" />
    <polygon points="270,290 222,321 262,338" fill="#cb7cd9" /> */}
      {/* <polygon points={`${x},${y} 328,129 316,160`} fill="red" /> */}
      <polygon points={`283,137 329,135 318,166`} fill="#1a191d" />
      <polygon points={`282,131 328,129 317,160`} fill="#cb7cd9" />
      {/* <polygon points={`225,242 219,283 186,268`} fill="#cb7cd9" /> */}
      {/* <polygon points="270,290 222,321 262,338" fill="#cb7cd9" /> */}
    </>
  );
}

function Shape() {
  return (
    <>
      {/* <path d={`M 160 140 L ${x} ${y} L 2 6 L 0 6 L 0 8 L -3 8 L -3 7 L -1 7 L -1 5 L 1 5 Z`} fill="red" /> */}
      {/* <path d={`M 149 137 L 155 137 L 155 158 L 139 158 L 139 173 L 119 173 L 119 167 L 133 167 L 133 152 L ${x} ${y} Z`} fill="red" /> */}
      <path
        d={`M 149 137 L 155 137 L 155 158 L 139 158 L 139 173 L 119 173 L 119 167 L 133 167 L 133 152 L 149 152 Z`}
        fill="#1a191d"
      />
      <path
        d={`M 148 135 L 154 135 L 154 156 L 138 156 L 138 171 L 118 171 L 118 165 L 132 165 L 132 150 L 148 150 Z`}
        fill="#f8ea10"
      />
    </>
  );
}

function Shape2() {
  const [[x, y], setPosition] = useState([154, 135]);
  useEffect(() => {
    Object.assign(window, {
      move: (dx: number, dy: number) =>
        setPosition(([x, y]) => [x + dx, y + dy]),
    });
  }, []);
  console.log([x, y].join(","));
  return (
    <>
      {/* <path d={`M 160 140 L ${x} ${y} L 2 6 L 0 6 L 0 8 L -3 8 L -3 7 L -1 7 L -1 5 L 1 5 Z`} fill="red" /> */}
      {/* <path d={`M 149 137 L 155 137 L 155 158 L 139 158 L 139 173 L 119 173 L 119 167 L 133 167 L 133 152 L ${x} ${y} Z`} fill="red" /> */}
      {/* <path d={`M 149 137 L 155 137 L 155 158 L 139 158 L 139 173 L 119 173 L 119 167 L 133 167 L 133 152 L 149 152 Z`} fill="#1a191d" /> */}
      <path
        d={`M 205,135 L 211,135 L 211 150 L 225 150 L 225 165 L 240 165 L 240 171 L 220 171 L 220 155 L 205 155 Z`}
        fill="#1a1a1a"
      />
      {/* <path d={`M 148 135 L 154 135 L 154 156 L 138 156 L 138 171 L 118 171 L 118 165 L 132 165 L 132 150 L 148 150 Z`} fill="#f8ea10" /> */}
    </>
  );
}

function Shapes(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <Circle5 />
      <Triangle />
      <Triangle2 />
      <Shape />
      <Shape2 />
    </svg>
  );
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <h3>Shapes</h3>
      <Shapes style={{ margin: "-498 -498" }} />
      <Shapes style={{ margin: "-498 0" }} />
      <Shapes style={{ margin: "-498 498" }} />
      <Shapes style={{ margin: "0 -498" }} />
      <Shapes style={{ margin: "0 0" }} />
      <Shapes style={{ margin: "0 498" }} />
      <Shapes style={{ margin: "498 -498" }} />
      <Shapes style={{ margin: "498 0" }} />
      <Shapes style={{ margin: "498 498" }} />
      {/* https://stock.adobe.com/bg/images/colorful-vector-seamless-pattern-background-with-abstract-geometric-shapes-for-80s-or-90s-design/453607568 */}
      {/* <img alt="GeeksforGeeks logo" referrerPolicy="no-referrer" src="https://as2.ftcdn.net/v2/jpg/04/53/60/75/1000_F_453607568_N4D1ybFt79FIulodcweiTBNyzDYNfBlm.jpg" /> */}
    </section>
  );
}
