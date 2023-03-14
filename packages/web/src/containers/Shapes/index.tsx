import React, { type ComponentProps, useId, useRef } from "react";
import Editor from "./Editor";
import Palette from "./Palette";
import Proxify from "./Proxify";
import styles from "./styles.module.scss";

function Circle() {
  return (
    <>
      <circle cx={145} cy={36} r={18} fill="#1a191d" />
      <circle cx={142} cy={34} r={18} fill="#faeb0f" />
    </>
  );
}

function Circle2() {
  return (
    <>
      <circle cx={70} cy={152} r={7} fill="#1a191d" />
      <circle cx={69} cy={151} r={7} fill="#0ce8e3" />
    </>
  );
}

function Circle3() {
  return (
    <>
      <circle cx={18} cy={199} r={10} fill="#1a191d" />
      <circle cx={16} cy={198} r={10} fill="#cb7cd8" />
    </>
  );
}

function Circle4() {
  return <circle cx={149} cy={159} r={5} fill="#ff67a8" />;
}

function Circle5() {
  return <circle cx={59} cy={34} r={5} fill="##1a1a1a" />;
}

function Triangle() {
  return (
    <>
      <polygon points={`109,192 103,233 70,218`} fill="#1a191d" />
      <polygon points={`115,192 109,233 76,218`} fill="#ff69a8" />
    </>
  );
}

function Triangle2() {
  return (
    <>
      <polygon points={`173,87 219,85 208,116`} fill="#1a191d" />
      <polygon points={`172,81 218,79 207,110`} fill="#cb7cd9" />
    </>
  );
}

function Shape() {
  return (
    <>
      <path
        d={`m 39 87 l 6 0 l 0 21 l -16 0 l 0 15 l -20 0 l 0 -6 l 14 0 l 0 -15 l 16 0 z`}
        fill="#1a191d"
      />
      <path
        d={`m 38 85 l 6 0 l 0 21 l -16 0 l 0 15 l -20 0 l 0 -6 l 14 0 l 0 -15 l 16 0 z`}
        fill="#f8ea10"
      />
    </>
  );
}

function Shape2() {
  return (
    <>
      <path
        d={`m 193 176 l 6 0 l 0 21 l -16 0 l 0 15 l -20 0 l 0 -6 l 14 0 l 0 -15 l 16 0 z`}
        fill="#1a191d"
      />
      <path
        d={`m 192 174 l 6 0 l 0 21 l -16 0 l 0 15 l -20 0 l 0 -6 l 14 0 l 0 -15 l 16 0 z`}
        fill="#0ce6e5"
      />
    </>
  );
}

function Shape3() {
  return (
    <path
      d={`m 95 85 l 6 0 l 0 15 l 14 0 l 0 15 l 15 0 l 0 6 l -20 0 l 0 -16 l -15 0 z`}
      fill="#1a1a1a"
    />
  );
}

function Shape4() {
  return (
    <path
      d={`m 213 2 l 20 0 l 0 15 l 15 0 l 0 20 l -6 0 l 0 -15 l -15 0 l 0 -15 l -14 0 z`}
      fill="#1a1a1a"
    />
  );
}

// https://css-tricks.com/snippets/svg/svg-patterns/
function Shapes(props: ComponentProps<"svg">) {
  const pattern = useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <pattern
        id={pattern}
        x="0"
        y="0"
        width="250"
        height="250"
        patternUnits="userSpaceOnUse"
      >
        <Circle />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
        <Triangle />
        <Triangle2 />
        <Shape />
        <Shape2 />
        <Shape3 />
        <Shape4 />
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${pattern})`}
      ></rect>
    </svg>
  );
}

export default function Section() {
  const imgRef = useRef(null);

  return (
    <section className={styles.Section}>
      <h3>Shapes</h3>
      <Proxify />
      <Editor />
      <Palette imgRef={imgRef} />
      {/* <Shapes /> */}
      {/* https://stock.adobe.com/bg/images/colorful-vector-seamless-pattern-background-with-abstract-geometric-shapes-for-80s-or-90s-design/453607568 */}
      {/* <img alt="GeeksforGeeks logo" referrerPolicy="no-referrer" src="https://as2.ftcdn.net/v2/jpg/04/53/60/75/1000_F_453607568_N4D1ybFt79FIulodcweiTBNyzDYNfBlm.jpg" /> */}
      <img
        ref={imgRef}
        alt="GeeksforGeeks logo"
        referrerPolicy="no-referrer"
        src="https://as2.ftcdn.net/v2/jpg/05/09/82/53/1000_F_509825373_MUTTNQoNQA2WmGtwTD0ZrP3O0PgxY7ie.jpg"
      />
    </section>
  );
}
