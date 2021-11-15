import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

// https://github.com/samdutton/simpl/tree/gh-pages/imagecapture
export default function Camera() {
  const [imageCapture, setImageCapture] = useState(null);
  const [devices, setDevices] = useState([]);
  const [videoSource, setVideoSource] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [zoomCapabilities, setZoomCapabilities] = useState(null);

  useEffect(() => {
    if (devices.length && videoSource === null) {
      setVideoSource(devices[0].deviceId);
    }
  }, [devices, videoSource, setVideoSource]);

  const changeVideoSource = useCallback(
    (e) => {
      const { value: deviceId } = e.target;
      setVideoSource(deviceId);
    },
    [setVideoSource]
  );

  useEffect(() => {
    if (videoSource) {
      console.log({ videoSource });

      const gotStream = (stream) => {
        console.log("getUserMedia() got stream: ", stream);
        setMediaStream(stream);
      };

      // Get a video stream from the currently selected camera source.
      const constraints = {
        video: { deviceId: videoSource ? { exact: videoSource } : undefined },
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(gotStream)
        .catch((error) => {
          console.log("getUserMedia error: ", error);
        });
    }
  }, [videoSource, setMediaStream]);

  const videoRef = useRef();

  useEffect(() => {
    if (mediaStream && videoRef) {
      console.log({ mediaStream });

      // Display the stream from the currently selected camera source, and then
      // create an ImageCapture object, using the video from the stream.
      Object.assign(videoRef.current, {
        srcObject: mediaStream,
      });

      setImageCapture(new ImageCapture(mediaStream.getVideoTracks()[0]));
    }
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [videoRef, mediaStream, setImageCapture]);

  useEffect(() => {
    if (imageCapture) {
      console.log({ imageCapture });

      // Get the PhotoCapabilities for the currently selected camera source.
      imageCapture
        .getPhotoCapabilities()
        .then(function (capabilities) {
          console.log("Camera capabilities:", capabilities);
          setZoomCapabilities(
            capabilities.zoom?.max > 0
              ? {
                  min: capabilities.zoom.min,
                  max: capabilities.zoom.max,
                  current: capabilities.zoom.current,
                }
              : null
          );
          // zoomInput.classList.remove('hidden');
        })
        .catch(function (error) {
          console.log("getCapabilities() error: ", error);
        });
    }
  }, [imageCapture, setZoomCapabilities]);

  useEffect(() => {
    function gotDevices(deviceInfos) {
      // From the list of media devices available, set up the camera source <select>,
      // then get a video stream from the default camera source.
      setDevices(
        deviceInfos
          .filter(({ kind }) => kind === "videoinput")
          .map(({ deviceId, label }, index) => ({
            deviceId,
            label: label || `Camera ${index + 1}`,
          }))
      );
    }

    // Get a list of available media input (and output) devices
    // then get a MediaStream for the currently selected input device
    navigator.mediaDevices
      .enumerateDevices()
      .then(gotDevices)
      .catch((error) => {
        console.log("enumerateDevices() error: ", error);
      });
  }, [setDevices]);

  const changeZoom = useCallback(
    (e) => {
      const { value: current } = e.target;
      setZoomCapabilities((capabilities) => ({ ...capabilities, current }));
    },
    [setZoomCapabilities]
  );

  useEffect(() => {
    if (zoomCapabilities) {
      console.log({ zoomCapabilities });
      imageCapture.setOptions({
        zoom: zoomCapabilities.current,
      });
    }
  }, [imageCapture, zoomCapabilities]);

  const canvasRef = useRef();

  const grabFrame = useCallback(
    (e) => {
      // Get an ImageBitmap from the currently selected camera source and
      // display this with a canvas element.
      imageCapture
        .grabFrame()
        .then(function (imageBitmap) {
          console.log("Grabbed frame:", imageBitmap);
          const canvas = Object.assign(canvasRef.current, {
            width: imageBitmap.width,
            height: imageBitmap.height,
          });
          canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
          // canvas.classList.remove('hidden');
        })
        .catch(function (error) {
          console.log("grabFrame() error: ", error);
        });
    },
    [canvasRef, imageCapture]
  );

  const imgRef = useRef();

  const takePhoto = useCallback(
    (e) => {
      // Get a Blob from the currently selected camera source and
      // display this with an img element.
      imageCapture
        .takePhoto()
        .then(function (blob) {
          console.log("Took photo:", blob);
          // img.classList.remove('hidden');
          Object.assign(imgRef.current, {
            src: URL.createObjectURL(blob),
          });
        })
        .catch(function (error) {
          console.log("takePhoto() error: ", error);
        });
    },
    [imgRef, imageCapture]
  );

  return (
    <div className={styles.Layout}>
      <div>
        <button onClick={grabFrame}>Grab Frame</button>
        <button onClick={takePhoto}>Take Photo</button>
        {devices && (
          <div className={styles.Select}>
            <label htmlFor="videoSource">Video source: </label>
            <select id="videoSource" onChange={changeVideoSource}>
              {devices.map(({ deviceId, label }, key) => (
                <option key={key} value={deviceId}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}
        {zoomCapabilities &&
          (({ min, max, current }) => (
            <input
              type="range"
              step="20"
              min={min}
              max={max}
              value={current}
              onChange={changeZoom}
            />
          ))(zoomCapabilities)}
      </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ display: mediaStream ? "" : "none" }}
      />
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
    </div>
  );
}
