import React from "react";
import { GLSL, LinearCopy, Node, Shaders } from "gl-react";
import { Surface } from "gl-react-dom";
import JSON2D from "react-json2d";

// https://github.com/gre/gl-react/blob/master/packages/cookbook/src/examples/video/index.js
// https://github.com/gre/gl-react/blob/master/packages/cookbook/src/examples/textfunky/index.js
const shaders = Shaders.create({
  funky: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main() {
  gl_FragColor = texture2D(t, uv) * vec4(
    0.5 + 0.5 * cos(uv.x * 30.0),
    0.5 + 0.5 * sin(uv.y * 20.0),
    0.7 + 0.3 * sin(uv.y * 8.0),
    1.0);
}
`,
  },
});

const Funky = ({ children: t }) => (
  <Node shader={shaders.funky} uniforms={{ t }} />
);

export default function Transitions() {
  return (
    <Surface
      width={480}
      height={270}
      style={{
        background: `#fff url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill-opacity=".05" >\
          <rect x="100" width="100" height="100" />\
          <rect y="100" width="100" height="100" />\
        </svg>')`,
        backgroundSize: "5%",
      }}
      webglContextAttributes={{
        // https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.2
        premultipliedAlpha: false,
      }}
    >
      <Funky>
        <LinearCopy>
          <JSON2D width={400} height={200}>
            {{
              background: "rgba(0,0,0,.2)",
              size: [400, 200],
              draws: [
                {
                  textAlign: "center",
                  fillStyle: "#fff",
                  font: "48px bold Arial",
                },
                [
                  "fillText",
                  "Hello World\n2d canvas text\ninjected as texture",
                  200,
                  60,
                  56,
                ],
              ],
            }}
          </JSON2D>
        </LinearCopy>
      </Funky>
    </Surface>
  );
}
