import React, { useCallback, useRef } from "react";

// http://jsfiddle.net/gxu080ve/1/
// https://gist.github.com/kishmiryan-karlen/559c190f6c20856ee323
export default function Luts() {
  const imageCanvasRef = useRef(null);
  const imageRef = useRef(null);
  const lutCanvasRef = useRef(null);
  const lutRef = useRef(null);

  const applyLUT = useCallback(() => {
    const image = imageRef.current;
    const lut = lutRef.current;
    const imageContext = imageCanvasRef.current.getContext("2d");
    const lutContext = lutCanvasRef.current.getContext("2d");
    let imageData, lutData, iData, lData;

    imageContext.clearRect(0, 0, image.naturalWidth, image.naturalHeight);
    imageContext.drawImage(image, 0, 0);
    imageData = imageContext.getImageData(
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );
    iData = imageData.data;

    lutContext.clearRect(0, 0, lut.naturalWidth, lut.naturalHeight);
    lutContext.drawImage(lut, 0, 0);
    lutData = lutContext.getImageData(
      0,
      0,
      lut.naturalWidth,
      lut.naturalHeight
    );
    lData = lutData.data;

    for (var i = 0, l = iData.length; i < l; i += 4) {
      var r, g, b;

      r = Math.floor(iData[i] / 4);
      g = Math.floor(iData[i + 1] / 4);
      b = Math.floor(iData[i + 2] / 4);

      var lutX, lutY, lutIndex;

      lutX = (b % 8) * 64 + r;
      lutY = Math.floor(b / 8) * 64 + g;
      lutIndex = (lutY * lut.naturalWidth + lutX) * 4;

      var lutR, lutG, lutB;

      lutR = lData[lutIndex];
      lutG = lData[lutIndex + 1];
      lutB = lData[lutIndex + 2];

      iData[i] = lutR;
      iData[i + 1] = lutG;
      iData[i + 2] = lutB;
    }
    imageContext.clearRect(0, 0, image.naturalWidth, image.naturalHeight);
    imageContext.putImageData(imageData, 0, 0);
  });

  return (
    <div>
      <div>
        {/* <img ref={lutRef} src="https://i.stack.imgur.com/o2d3y.png" alt="lut" crossOrigin="Anonymous" /> */}
        <img
          ref={lutRef}
          src={require("../assets/o2d3y.png").default}
          alt="lut"
          width="512"
          height="512"
        />
      </div>
      <div>
        {/* wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312 */}
        <img
          ref={imageRef}
          src="https://i.imgur.com/0bUSEBX.jpg"
          alt="The Scream"
          crossOrigin="Anonymous"
          width="480"
          height="270"
        />
      </div>
      <div>
        <button onClick={applyLUT}>Apply LUT</button>
      </div>
      <canvas
        ref={imageCanvasRef}
        width="480"
        height="270"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <canvas
        ref={lutCanvasRef}
        width="512"
        height="512"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  );
}
