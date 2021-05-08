import React, { Component, useRef } from "react";
import GLTransition from "react-gl-transition";
import { Shaders, GLSL, LinearCopy, Node } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransitions from "gl-transitions";
import raf from "raf";
import timeLoop from "./timeLoop";

// https://gl-react-cookbook.surge.sh/video

// We implement a component <Video> that is like <video>
// but provides a onFrame hook so we can efficiently only render
// if when it effectively changes.
export class Video extends Component {
  componentDidMount() {
    const loop = () => {
      this._raf = raf(loop);
      const { video } = this.refs;
      if (!video) return;
      const currentTime = video.currentTime;
      // Optimization that only call onFrame if time changes
      if (currentTime !== this.currentTime) {
        this.currentTime = currentTime;
        this.props.onFrame(currentTime);
      }
    };
    this._raf = raf(loop);
  }
  componentWillUnmount() {
    raf.cancel(this._raf);
  }
  render() {
    const { onFrame, ...rest } = this.props;
    console.log(["render"]);
    // return null;
    return <video {...rest} ref="video" />;
  }
}

// Our example will simply split R G B channels of the video.
const shaders = Shaders.create({
  SplitColor: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D children;
void main () {
  float y = uv.y * 3.0;
  vec4 c = texture2D(children, vec2(uv.x, mod(y, 1.0)));
  gl_FragColor = vec4(
    c.r * step(2.0, y) * step(y, 3.0),
    c.g * step(1.0, y) * step(y, 2.0),
    c.b * step(0.0, y) * step(y, 1.0),
    1.0);
}
`,
  },
  //^NB perf: in fragment shader paradigm, we want to avoid code branch (if / for)
  // and prefer use of built-in functions and just giving the GPU some computating.
  // step(a,b) is an alternative to do if(): returns 1.0 if a<b, 0.0 otherwise.
});
const SplitColor = ({ children }) => (
  <Node shader={shaders.SplitColor} uniforms={{ children }} />
);

const images = "wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312"
  .split(",")
  .map((id) => `https://i.imgur.com/${id}.jpg`);

// https://gl-react-cookbook.surge.sh/transitions
const Slideshow = timeLoop(
  ({ video1Ref, video2Ref, slides, delay, duration, time }) => {
    const videos = [video1Ref, video2Ref].map(({ current }) =>
      current.readyState >= current.HAVE_ENOUGH_DATA ? current : null
    );
    const index = Math.floor(time / (delay + duration));
    const from = videos[index % videos.length] || slides[index % slides.length];
    const to =
      videos[(index + 1) % videos.length] ||
      slides[(index + 1) % slides.length];
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
  }
);

// We now uses <Video> in our GL graph.
// The texture we give to <SplitColor> is a (redraw)=><Video> function.
// redraw is passed to Video onFrame event and Node gets redraw each video frame.
export default () => {
  const video1Ref = useRef();
  const video2Ref = useRef();
  return (
    <div>
      <div>
        <video
          ref={video1Ref}
          src="https://webrtc.github.io/samples/src/video/chrome.webm"
          width="480"
          height="270"
          preload="none"
          crossOrigin="anonymous"
          controls
        />
      </div>
      <Surface width={480} height={270}>
        <Slideshow
          slides={images}
          delay={2000}
          duration={1500}
          video1Ref={video1Ref}
          video2Ref={video2Ref}
        />
      </Surface>
      <div>
        <video
          ref={video2Ref}
          src="https://webrtc.github.io/samples/src/video/chrome.webm"
          width="480"
          height="270"
          preload="none"
          crossOrigin="anonymous"
          controls
        />
      </div>
      <Surface width={480} height={270 * 3} pixelRatio={1}>
        <SplitColor>
          {(redraw) => (
            <Video
              onFrame={redraw}
              autoPlay
              loop
              crossOrigin="anonymous"
              src="https://webrtc.github.io/samples/src/video/chrome.webm"
            />
          )}
        </SplitColor>
      </Surface>
    </div>
  );
};
