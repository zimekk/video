import React from "react";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import timeLoop from "./timeLoop";

const images = "wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312"
  .split(",")
  .map((id) => `https://i.imgur.com/${id}.jpg`);

// https://gl-react-cookbook.surge.sh/transitions
const Slideshow = timeLoop(({ slides, delay, duration, time }) => {
  const index = Math.floor(time / (delay + duration));
  const from = slides[index % slides.length];
  const to = slides[(index + 1) % slides.length];
  const transition = GLTransitions[index % GLTransitions.length];
  const total = delay + duration;
  const progress = (time - index * total - delay) / duration;
  return progress > 0 ? (
    <GLTransition
      from={from}
      to={to}
      progress={progress}
      transition={transition}
    />
  ) : (
    <LinearCopy>{from}</LinearCopy>
  );
});

export default function Transitions() {
  return (
    <Surface width={480} height={270}>
      <Slideshow slides={images} delay={2000} duration={1500} />
    </Surface>
  );
}
