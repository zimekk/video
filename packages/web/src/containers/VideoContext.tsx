import React, { useCallback, useEffect, useRef } from "react";
import VideoContext from "videocontext";

const monochromeDescription = {
  title: "Monochrome",
  description:
    "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
  vertexShader: `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
          gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);
          v_texCoord = a_texCoord;
      }`,
  fragmentShader: `
      precision mediump float;
      uniform sampler2D u_image;
      uniform vec3 inputMix;
      uniform vec3 outputMix;
      varying vec2 v_texCoord;
      varying float v_mix;
      void main(){
          vec4 color = texture2D(u_image, v_texCoord);
          float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];
          color[0] = mono * outputMix[0];
          color[1] = mono * outputMix[1];
          color[2] = mono * outputMix[2];
          gl_FragColor = color;
      }`,
  properties: {
    inputMix: { type: "uniform", value: [0.4, 0.6, 0.2] },
    outputMix: { type: "uniform", value: [1.0, 1.0, 1.0] },
  },
  inputs: ["u_image"],
};

// https://github.com/bbc/VideoContext#effectnode
function Sephia() {
  const canvasRef = useRef();
  const ctxRef = useRef();

  const play = useCallback((e) => {
    if (ctxRef.current.state === VideoContext.STATE.PLAYING) {
      ctxRef.current.pause();
    } else {
      ctxRef.current.currentTime = 0;
      ctxRef.current.play();
    }
  });

  useEffect(() => {
    // Setup the video context.
    const canvas = canvasRef.current;
    const ctx = new VideoContext(canvas);

    // Create a video node and play it for 60 seconds.
    const videoNode = ctx.video(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
    videoNode.start(0);
    videoNode.stop(60);

    // Create the sepia effect node (from the above Monochrome effect description).
    const sepiaEffect = ctx.effect(monochromeDescription);

    // Give a sepia tint to the monochrome output (note how shader description properties are automatically bound to the JavaScript object).
    sepiaEffect.outputMix = [1.25, 1.18, 0.9];

    // Set-up the processing chain.
    videoNode.connect(sepiaEffect);
    sepiaEffect.connect(ctx.destination);

    // Start playback.
    // ctx.play();
    ctxRef.current = ctx;
  });

  return (
    <div>
      <div>
        <button onClick={play}>Play / Pause</button>
      </div>
      <canvas ref={canvasRef} width="480" height="270"></canvas>
    </div>
  );
}

const crossfadeDescription = {
  title: "Cross-Fade",
  description: "A cross-fade effect. Typically used as a transistion.",
  vertexShader: `
          attribute vec2 a_position;
          attribute vec2 a_texCoord;
          varying vec2 v_texCoord;
          void main() {
              gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);
              v_texCoord = a_texCoord;
          }`,
  fragmentShader: `
          precision mediump float;
          uniform sampler2D u_image_a;
          uniform sampler2D u_image_b;
          uniform float mix;
          varying vec2 v_texCoord;
          varying float v_mix;
          void main(){
              vec4 color_a = texture2D(u_image_a, v_texCoord);
              vec4 color_b = texture2D(u_image_b, v_texCoord);
              color_a[0] *= mix;
              color_a[1] *= mix;
              color_a[2] *= mix;
              color_a[3] *= mix;
              color_b[0] *= (1.0 - mix);
              color_b[1] *= (1.0 - mix);
              color_b[2] *= (1.0 - mix);
              color_b[3] *= (1.0 - mix);
              gl_FragColor = color_a + color_b;
          }`,
  properties: {
    mix: { type: "uniform", value: 0.0 },
  },
  inputs: ["u_image_a", "u_image_b"],
};

// https://github.com/bbc/VideoContext#transitionnode
function CrossFade() {
  const canvasRef = useRef();
  const ctxRef = useRef();

  const play = useCallback((e) => {
    if (ctxRef.current.state === VideoContext.STATE.PLAYING) {
      ctxRef.current.pause();
    } else {
      ctxRef.current.play();
    }
  });

  useEffect(() => {
    // Setup the video context.
    const canvas = canvasRef.current;
    const videoCtx = new VideoContext(canvas);
    const videoNode1 = videoCtx.video(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
    videoNode1.start(0);
    videoNode1.stop(4);

    const videoNode2 = videoCtx.video(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    );
    videoNode2.start(2);
    videoNode2.stop(6);

    // const crossFade = videoCtx.transition(VideoContext.DEFINITIONS.CROSSFADE);
    const crossFade = videoCtx.transition(crossfadeDescription);
    crossFade.transition(2, 4, 0.0, 1.0, "mix");

    videoNode1.connect(crossFade);
    videoNode2.connect(crossFade);
    crossFade.connect(videoCtx.destination);

    // videoCtx.play();
    ctxRef.current = videoCtx;
  });

  return (
    <div>
      <div>
        <button onClick={play}>Play / Pause</button>
      </div>
      <canvas ref={canvasRef} width="480" height="270"></canvas>
    </div>
  );
}

export default function () {
  return (
    <div>
      <Sephia />
      <CrossFade />
    </div>
  );
}
