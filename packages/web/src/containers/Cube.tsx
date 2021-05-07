import React, { useEffect, useRef } from "react";
import {
  Renderer,
  Camera,
  Geometry,
  Transform,
  Texture,
  RenderTarget,
  Program,
  Mesh,
  Box,
} from "ogl";

// https://github.com/oframe/ogl/blob/master/examples/render-to-texture.html
const vertex = /* glsl */ `
                attribute vec3 position;
                attribute vec3 normal;
                attribute vec2 uv;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform mat3 normalMatrix;
                varying vec2 vUv;
                varying vec3 vNormal;
                void main() {
                    vUv = uv;
                    vNormal = normalize(normalMatrix * normal);
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `;

const fragment = /* glsl */ `
                precision highp float;
                uniform sampler2D tMap;
                varying vec2 vUv;
                varying vec3 vNormal;
                void main() {
                    vec3 normal = normalize(vNormal);
                    float lighting = 0.2 * dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
                    vec3 tex = texture2D(tMap, vUv).rgb;
                    gl_FragColor.rgb = tex + lighting + vec3(vUv - 0.5, 0.0) * 0.1;
                    gl_FragColor.a = 1.0;
                }
            `;

function createMesh(gl) {
  const geometry = new Box(gl);

  // A little data texture with 4 colors just to keep things interesting
  const texture = new Texture(gl, {
    image: new Uint8Array([
      191,
      25,
      54,
      255,
      96,
      18,
      54,
      255,
      96,
      18,
      54,
      255,
      37,
      13,
      53,
      255,
    ]),
    width: 2,
    height: 2,
    magFilter: gl.NEAREST,
  });

  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      tMap: { value: texture },
    },
  });

  const mesh = new Mesh(gl, { geometry, program });

  return { mesh };
}

function createTargetMesh(gl) {
  const geometry = new Box(gl);

  // Create render target framebuffer.
  // Uses canvas size by default and doesn't automatically resize.
  // To resize, re-create target
  const target = new RenderTarget(gl, {
    width: 512,
    height: 512,
  });

  const targetProgram = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      tMap: { value: target.texture },
    },
  });

  const targetMesh = new Mesh(gl, { geometry, program: targetProgram });

  return { mesh: targetMesh, target };
}

// https://github.com/oframe/ogl/blob/master/examples/particles.html
function createParticlesMesh(gl) {
  const vertex = /* glsl */ `
    attribute vec3 position;
    attribute vec4 random;
    uniform mat4 modelMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;
    varying vec4 vRandom;
    void main() {
        vRandom = random;
        
        // positions are 0->1, so make -1->1
        vec3 pos = position * 2.0 - 1.0;
        
        // Scale towards camera to be more interesting
        pos.z *= 10.0;
        
        // modelMatrix is one of the automatically attached uniforms when using the Mesh class
        vec4 mPos = modelMatrix * vec4(pos, 1.0);
        // add some movement in world space
        float t = uTime * 0.6;
        mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
        mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
        mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
        
        // get the model view position so that we can scale the points off into the distance
        vec4 mvPos = viewMatrix * mPos;
        gl_PointSize = 300.0 / length(mvPos.xyz) * (random.x + 0.1);
        gl_Position = projectionMatrix * mvPos;
    }
`;

  const fragment = /* glsl */ `
    precision highp float;
    uniform float uTime;
    varying vec4 vRandom;
    void main() {
        vec2 uv = gl_PointCoord.xy;
        
        float circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 0.8;
        
        gl_FragColor.rgb = 0.8 + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28) + vec3(0.1, 0.0, 0.3);
        gl_FragColor.a = circle;
    }
`;

  //     const renderer = new Renderer({
  //       canvas,
  //       width: canvas.width,
  //       height: canvas.height,
  //       dpr: 2,
  //     });
  //     const gl = renderer.gl;
  //     gl.clearColor(1, 1, 1, 1);

  //     const camera = new Camera(gl, { fov: 15 });
  //     camera.position.z = 15;

  const num = 100;
  const position = new Float32Array(num * 3);
  const random = new Float32Array(num * 4);

  for (let i = 0; i < num; i++) {
    position.set([Math.random(), Math.random(), Math.random()], i * 3);
    random.set(
      [Math.random(), Math.random(), Math.random(), Math.random()],
      i * 4
    );
  }

  const geometry = new Geometry(gl, {
    position: { size: 3, data: position },
    random: { size: 4, data: random },
  });

  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      uTime: { value: 0 },
    },
    transparent: true,
    depthTest: false,
  });

  // Make sure mode is gl.POINTS
  const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

  return { mesh: particles, program };
}

export default function () {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const renderer = new Renderer({
      canvas,
      width: canvas.width,
      height: canvas.height,
      dpr: 2,
    });
    // const renderer = new Renderer({ dpr: 2 });
    const gl = renderer.gl;
    // document.body.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 1, 5);
    camera.lookAt([0, 0, 0]);

    const targetCamera = new Camera(gl, { fov: 35 });
    targetCamera.position.set(0, 1, 5);
    targetCamera.lookAt([0, 0, 0]);

    function resize() {
      // renderer.setSize(window.innerWidth, window.innerHeight);

      // Only update aspect of target camera, as first scene will be drawn to a square render target
      targetCamera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    // window.addEventListener('resize', resize, false);
    resize();

    const { mesh } = createMesh(gl);
    const { mesh: targetMesh, target } = createTargetMesh(gl);
    const { mesh: particles, program: particlesProgram } = createParticlesMesh(
      gl
    );

    const scene = new Transform();
    // scene.addChild(sphere); // also works
    targetMesh.setParent(scene);
    particles.setParent(scene);

    requestAnimationFrame(update);
    function update(t) {
      requestAnimationFrame(update);

      mesh.rotation.y -= 0.02;
      targetMesh.rotation.y -= 0.005;
      targetMesh.rotation.x -= 0.01;

      // Set background for first render to target
      gl.clearColor(0.15, 0.05, 0.2, 1);

      // Add target property to render call
      renderer.render({ scene: mesh, camera, target });

      // Change to final background
      gl.clearColor(1, 1, 1, 1);

      // Omit target to render to canvas
      // renderer.render({ scene: targetMesh, camera: targetCamera });

      // add some slight overall movement to be more interesting
      particles.rotation.x = Math.sin(t * 0.0002) * 0.1;
      particles.rotation.y = Math.cos(t * 0.0005) * 0.15;
      particles.rotation.z += 0.01;

      particlesProgram.uniforms.uTime.value = t * 0.001;
      // renderer.render({ scene: particles, camera });

      renderer.render({ scene, camera: targetCamera });
    }
  });

  return (
    <div>
      <canvas ref={canvasRef} width="480" height="270" />
    </div>
  );
}
