import React, { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";

export default function () {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    // https://github.com/oframe/ogl/blob/master/examples/polylines.html
    const vertex = /* glsl */ `
    precision highp float;
    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    vec4 getPosition() {
        vec4 current = vec4(position, 1);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
    
        // Calculate the tangent direction
        vec2 tangent = normalize(nextScreen - prevScreen);
    
        // Rotate 90 degrees to get the normal
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;
        // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );
        // When the points are on top of each other, shrink the line to avoid artifacts.
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);
        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }
    void main() {
        gl_Position = getPosition();
    }
`;

    const renderer = new Renderer({
      canvas,
      width: canvas.width,
      height: canvas.height,
      dpr: 2,
      alpha: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    // document.body.appendChild(gl.canvas);
    // gl.clearColor(0.9, 0.9, 0.9, 1);

    const scene = new Transform();

    const lines = [];

    // function resize() {
    //     renderer.setSize(window.innerWidth, window.innerHeight);

    //     // We call resize on the polylines to update their resolution uniforms
    //     lines.forEach((line) => line.polyline.resize());
    // }
    // window.addEventListener('resize', resize, false);

    // Just a helper function to make the code neater
    function random(a, b) {
      const alpha = Math.random();
      return a * (1.0 - alpha) + b * alpha;
    }

    // If you're interested in learning about drawing lines with geometry,
    // go through this detailed article by Matt DesLauriers
    // https://mattdesl.svbtle.com/drawing-lines-is-hard
    // It's an excellent breakdown of the approaches and their pitfalls.

    // In this example, we're making screen-space polylines. Basically it
    // involves creating a geometry of vertices along a path - with two vertices
    // at each point. Then in the vertex shader, we push each pair apart to
    // give the line some width.

    // We're going to make a number of different coloured lines for fun.
    ["#e09f7d", "#ef5d60", "#ec4067", "#a01a7d", "#311847"].forEach(
      (color, i) => {
        // Store a few values for each lines' spring movement
        const line = {
          spring: random(0.02, 0.1),
          friction: random(0.7, 0.95),
          mouseVelocity: new Vec3(),
          mouseOffset: new Vec3(random(-1, 1) * 0.02),
        };

        // Create an array of Vec3s (eg [[0, 0, 0], ...])
        // Note: Only pass in one for each point on the line - the class will handle
        // the doubling of vertices for the polyline effect.
        const count = 20;
        const points = (line.points = []);
        for (let i = 0; i < count; i++) points.push(new Vec3());

        // Pass in the points, and any custom elements - for example here we've made
        // custom shaders, and accompanying uniforms.
        line.polyline = new Polyline(gl, {
          points,
          vertex,
          uniforms: {
            uColor: { value: new Color(color) },
            uThickness: { value: random(20, 50) },
          },
        });

        line.polyline.mesh.setParent(scene);

        lines.push(line);
      }
    );

    // Call initial resize after creating the polylines
    // resize();

    // Add handlers to get mouse position
    const mouse = new Vec3();
    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, false);
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      // Get mouse value in -1 to 1 range, with y flipped
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }

    const tmp = new Vec3();

    requestAnimationFrame(update);
    function update(t) {
      requestAnimationFrame(update);

      lines.forEach((line) => {
        // Update polyline input points
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            // For the first point, spring ease it to the mouse position
            tmp
              .copy(mouse)
              .add(line.mouseOffset)
              .sub(line.points[i])
              .multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            // The rest of the points ease to the point in front of them, making a line
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    }
  });

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="480"
        height="270"
        style={{
          background: `#fff
            url('data:image/svg+xml,\
           <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"         fill-opacity=".05" >\
                    <rect x="100" width="100" height="100" />\
                    <rect y="100" width="100" height="100" />\
                    </svg>')`,
          backgroundSize: "10%",
        }}
      />
    </div>
  );
}
