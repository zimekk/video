import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import cx from "classnames";
import { Waveform } from "./Waveform";
import styles from "./styles.module.scss";

const FRAME_RATES = [10, 12, 15, 20, 24, 30, 50, 60];

// https://www.borrowlenses.com/blog/understanding-video-resolutions/
const VIDEO_SIZES = {
  "640x480": "SD (Standard Definition) / 480p / 4:3",
  "1280x720": "HD (High Definition) / 720p / 16:9",
  "1920x1080": "Full HD / 1080p / 16:9",
  "2048x1152": "2K / 1:1.77",
  "3840x2160": "UHD / 2160p / 16:9",
  "4096x2160": "DCI 4K / 1:1.9",
};

const AUDIO_FILES = {
  "": "",
  "audio.ogg": require("../../assets/triangle/audio.ogg").default,
};

// https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
const renderText = (context, text, x, y, textAlign = "left") => {
  context.font = "30px Sans-serif";
  context.textAlign = textAlign;
  context.strokeStyle = "black";
  context.lineWidth = 4;
  context.strokeText(text, x, y);
  context.fillStyle = "white";
  context.fillText(text, x, y);
};

// function download(text, name, type)
//     {
//         const file = new Blob([text], {type: type});
//             const a = Object.assign(document.createElement('a'), {
//               href: URL.createObjectURL(file),
//               download: name
//               });
//             a.click();
//      }

let ffmpeg = null;

// https://www.videvo.net/video/flying-over-forest-3/4650/
// https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/
export default function Video() {
  const [selected, setSelected] = useState([]);
  const [lastSelected, setLastSelected] = useState(null);
  const [frames, setFrames] = useState([
    require(`../../assets/triangle/tmp.000.png`).default,
    require(`../../assets/triangle/tmp.001.png`).default,
    require(`../../assets/triangle/tmp.002.png`).default,
    require(`../../assets/triangle/tmp.003.png`).default,
    require(`../../assets/triangle/tmp.004.png`).default,
    require(`../../assets/triangle/tmp.005.png`).default,
    require(`../../assets/triangle/tmp.006.png`).default,
    require(`../../assets/triangle/tmp.007.png`).default,
    require(`../../assets/triangle/tmp.008.png`).default,
    require(`../../assets/triangle/tmp.009.png`).default,
    require(`../../assets/triangle/tmp.010.png`).default,
    require(`../../assets/triangle/tmp.011.png`).default,
    require(`../../assets/triangle/tmp.012.png`).default,
    require(`../../assets/triangle/tmp.013.png`).default,
    require(`../../assets/triangle/tmp.014.png`).default,
    require(`../../assets/triangle/tmp.015.png`).default,
    require(`../../assets/triangle/tmp.016.png`).default,
    require(`../../assets/triangle/tmp.017.png`).default,
    require(`../../assets/triangle/tmp.018.png`).default,
    require(`../../assets/triangle/tmp.019.png`).default,
    require(`../../assets/triangle/tmp.020.png`).default,
    require(`../../assets/triangle/tmp.021.png`).default,
    require(`../../assets/triangle/tmp.022.png`).default,
    require(`../../assets/triangle/tmp.023.png`).default,
    require(`../../assets/triangle/tmp.024.png`).default,
    require(`../../assets/triangle/tmp.025.png`).default,
    require(`../../assets/triangle/tmp.026.png`).default,
    require(`../../assets/triangle/tmp.027.png`).default,
    require(`../../assets/triangle/tmp.028.png`).default,
    require(`../../assets/triangle/tmp.029.png`).default,
    require(`../../assets/triangle/tmp.030.png`).default,
    require(`../../assets/triangle/tmp.031.png`).default,
    require(`../../assets/triangle/tmp.032.png`).default,
    require(`../../assets/triangle/tmp.033.png`).default,
    require(`../../assets/triangle/tmp.034.png`).default,
    require(`../../assets/triangle/tmp.035.png`).default,
    require(`../../assets/triangle/tmp.036.png`).default,
    require(`../../assets/triangle/tmp.037.png`).default,
    require(`../../assets/triangle/tmp.038.png`).default,
    require(`../../assets/triangle/tmp.039.png`).default,
    require(`../../assets/triangle/tmp.040.png`).default,
    require(`../../assets/triangle/tmp.041.png`).default,
    require(`../../assets/triangle/tmp.042.png`).default,
    require(`../../assets/triangle/tmp.043.png`).default,
    require(`../../assets/triangle/tmp.044.png`).default,
    require(`../../assets/triangle/tmp.045.png`).default,
    require(`../../assets/triangle/tmp.046.png`).default,
    require(`../../assets/triangle/tmp.047.png`).default,
    require(`../../assets/triangle/tmp.048.png`).default,
    require(`../../assets/triangle/tmp.049.png`).default,
    require(`../../assets/triangle/tmp.050.png`).default,
    require(`../../assets/triangle/tmp.051.png`).default,
    require(`../../assets/triangle/tmp.052.png`).default,
    require(`../../assets/triangle/tmp.053.png`).default,
    require(`../../assets/triangle/tmp.054.png`).default,
    require(`../../assets/triangle/tmp.055.png`).default,
    require(`../../assets/triangle/tmp.056.png`).default,
    require(`../../assets/triangle/tmp.057.png`).default,
    require(`../../assets/triangle/tmp.058.png`).default,
    require(`../../assets/triangle/tmp.059.png`).default,
  ]);
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState(["Click Start to transcode"]);
  const fileRef = useRef();
  const video = useRef();
  const canvas = useRef();
  const [audio, setAudio] = useState("");
  const [media, setMedia] = useState(null);
  const [devices, setDevices] = useState([]);
  const [deviceId, setDeviceId] = useState("");
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState(null);
  const [frameRate, setFrameRate] = useState(FRAME_RATES[0]);
  const [videoSize, setVideoSize] = useState(Object.keys(VIDEO_SIZES)[0]);

  const [width, height] = useMemo(() => videoSize.split("x"), [videoSize]);

  const selectDevice = useCallback(
    () =>
      navigator.mediaDevices
        // https://www.html5rocks.com/en/tutorials/getusermedia/intro/#toc-source
        .enumerateDevices()
        .then(
          (deviceInfos) =>
            console.log({ deviceInfos }) ||
            deviceInfos
              .filter(({ kind }) => ["videoinput"].includes(kind))
              .map((device) => {
                const { deviceId, kind, label } = device;
                const {
                  width: { max: width },
                  height: { max: height },
                } = device.getCapabilities();
                return { deviceId, kind, label, width, height };
              })
        )
        .then((devices) => {
          console.log({ devices });
          setDeviceId(devices[0].deviceId);
          setDevices(devices);
        })
        .catch(console.info),
    [setDevices, navigator]
  );

  const startRecording = useCallback(() => {
    navigator.mediaDevices
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#parameters
      .getUserMedia({
        video: { deviceId: { exact: deviceId } },
      })
      .then((stream) => {
        video.current.srcObject = stream;
        video.current.onloadedmetadata = (e) => video.current.play();
        setMedia({ stream });
      })
      .catch(console.info);
  }, [deviceId, setMedia, video, navigator]);

  const stopRecording = useCallback(() => {
    media.stream.getVideoTracks()[0].stop();
    video.current.pause();
    setMedia(null);
  }, [setMedia, media, video]);

  const remove = useCallback(() => {
    setFrames((frames) =>
      frames.filter((_frame, index) => !selected.includes(index))
    );
    setSelected([]);
    if (selected.includes(lastSelected)) {
      setLastSelected(null);
    }
  }, [selected, lastSelected, setFrames, setLastSelected]);

  const capture = useCallback(() => {
    const index = lastSelected === null ? frames.length : lastSelected;
    const canvas = Object.assign(document.createElement("canvas"), {
      width,
      height,
    });
    canvas.getContext("2d").drawImage(video.current, 0, 0, width, height);
    setFrames((frames) =>
      frames
        .slice(0, index)
        .concat(canvas.toDataURL())
        .concat(frames.slice(index))
    );
    setLastSelected(index + 1);
  }, [lastSelected, setFrames, setLastSelected]);

  // https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page
  // const importImages = useCallback(() => null, []);
  // const exportImages = useCallback(() => null, []);

  const showFrame = useCallback(
    (src, index) => {
      var image = new window.Image();
      image.addEventListener("load", function () {
        const context = canvas.current.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        renderText(context, `#${index}`, width - 10, height - 20, "right");
      });
      image.setAttribute("src", src);
    },
    [frames, canvas]
  );

  const startPlaying = useCallback(
    function timer() {
      setPlaying(
        setTimeout(() => {
          setLastSelected((index) => {
            const nextFrame = index < frames.length - 1 ? index + 1 : 0;
            showFrame(frames[nextFrame], nextFrame);
            return nextFrame;
          });
          timer();
        }, 1000 / frameRate)
      );
    },
    [setLastSelected, setPlaying, showFrame, frames, frameRate]
  );

  const stopPlaying = useCallback(() => {
    setPlaying((playing) => clearTimeout(playing));
  }, [setPlaying]);

  // https://github.com/ffmpegwasm/ffmpegwasm.github.io/blob/main/src/components/FFmpeg.js
  useEffect(() => {
    if (ffmpeg === null) {
      // https://github.com/ffmpegwasm/ffmpeg.wasm#use-other-version-of-ffmpegwasm-core--ffmpegcore
      ffmpeg = createFFmpeg({
        corePath: process.env.FFMPEG_CORE_PATH,
        // log: true,
      });
    }
    ffmpeg.setLogger(({ type, message }) => {
      console.log({ type, message });
      if (type !== "info") {
        setMessage((m) => m.concat(message));
      }
    });
    ffmpeg.setProgress(({ ratio }) => {
      if (ratio >= 0 && ratio <= 1) {
        setProgress(ratio * 100);
      }
      if (ratio === 1) {
        setTimeout(() => {
          setProgress(null);
        }, 1000);
      }
    });
  });

  const doTranscode = useCallback(async () => {
    const files = [];
    // https://github.com/ffmpegwasm/ffmpeg.wasm/blob/master/examples/browser/image2video.html
    if (!ffmpeg.isLoaded()) {
      // setMessage("Loading ffmpeg-core.js");
      await ffmpeg.load();
    }
    // setMessage("Loading data");
    if (audio) {
      files.push(audio);
      ffmpeg.FS("writeFile", audio, await fetchFile(AUDIO_FILES[audio]));
    }
    for (let i = 0; i < frames.length; i += 1) {
      const num = `00${i}`.slice(-3);
      files.push(`tmp.${num}.png`);
      ffmpeg.FS("writeFile", `tmp.${num}.png`, await fetchFile(frames[i]));
    }
    // setMessage("Start transcoding");
    await ffmpeg.run(
      ...[
        "-framerate",
        `${frameRate}`,
        "-video_size",
        `${width}x${height}`,
        "-pattern_type",
        "glob",
        "-i",
        "*.png",
      ]
        .concat(audio ? ["-i", audio, "-c:a", "copy"] : [])
        .concat([
          "-shortest",
          "-c:v",
          "libx264",
          "-pix_fmt",
          "yuv420p",
          "out.mp4",
        ])
    );
    // setMessage("Complete transcoding");
    files.push("out.mp4");
    setVideoSrc(
      URL.createObjectURL(
        new Blob([ffmpeg.FS("readFile", "out.mp4").buffer], {
          type: "video/mp4",
        })
      )
    );
    for (let i = 0; i < files.length; i += 1) {
      ffmpeg.FS("unlink", files[i]);
    }
  }, [audio, width, height, frames, frameRate, setMessage, setVideoSrc]);

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    const update = () => {
      if (video.current.ended || video.current.paused) {
        return;
      }

      // http://appcropolis.com/blog/web-technology/using-html5-canvas-to-capture-frames-from-a-video/
      context.drawImage(video.current, 0, 0, width, height);

      // renderText(video.current.currentTime, width - 10, height - 20, "right");
      renderText(context, "Live Video", width - 10, height - 20, "right");

      // https://web.dev/requestvideoframecallback-rvfc/
      video.current.requestVideoFrameCallback(update);
    };

    const play = () => {
      video.current.requestVideoFrameCallback(update);
    };

    // https://usefulangle.com/post/46/javascript-get-video-thumbnail-image-jpeg-png
    // Video metadata is loaded
    const loadedmetadata = () => {
      // Set canvas dimensions same as video dimensions
      const { videoWidth, videoHeight, duration } = video.current;
      console.log(["loadedmetadata"], { videoWidth, videoHeight, duration });
    };
    // Video playback position is changed
    const timeupdate = () => {
      // You are now ready to grab the thumbnail from the <canvas> element
      const { currentTime } = video.current;
      console.log(["timeupdate"], { currentTime });
    };

    video.current.addEventListener("play", play, false);
    video.current.addEventListener("loadedmetadata", loadedmetadata);
    video.current.addEventListener("timeupdate", timeupdate);
    return () => {
      video.current.removeEventListener("play", play);
    };
  }, [video, canvas]);

  useEffect(() => {
    const readImage = (file) => {
      // Check if the file is an image.
      if (file.type && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          // img.src = e.target.result;
          console.log({ file });
          setFrames((frames) => frames.concat(e.target.result));
        });
        reader.readAsDataURL(file);
      }
    };

    fileRef.current.addEventListener("change", (e) => {
      const fileList = e.target.files;
      console.log({ fileList });
      [...fileList].forEach(readImage);
      e.target.value = "";
    });
  }, [setFrames, fileRef]);

  return (
    <div className={styles.Layout}>
      <div className={styles.Preview}>
        <div className={styles.Camera}>
          <div>
            {deviceId && (
              <select
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
              >
                {devices.map(({ deviceId, label }, key) => (
                  <option key={key} value={deviceId}>
                    {label}
                  </option>
                ))}
              </select>
            )}
            {deviceId ? (
              media ? (
                <button key="stopRecording" onClick={stopRecording}>
                  Stop Recording
                </button>
              ) : (
                <button key="startRecording" onClick={startRecording}>
                  Start Recording
                </button>
              )
            ) : (
              <button key="select" onClick={selectDevice}>
                Select Device
              </button>
            )}
          </div>
          <video
            style={{ display: "none" }}
            ref={video}
            crossOrigin="anonymous"
            controls
          />
          <video
            className={styles.Video}
            src={videoSrc}
            crossOrigin="anonymous"
            controls
            loop
          />
        </div>
        <div className={styles.Camera}>
          <div>
            <select
              value={videoSize}
              onChange={(e) => setVideoSize(e.target.value)}
            >
              {Object.entries(VIDEO_SIZES).map(([value, label], key) => (
                <option key={key} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              value={frameRate}
              onChange={(e) => setFrameRate(e.target.value)}
            >
              {FRAME_RATES.map((value, key) => (
                <option key={key} value={value}>
                  {`${value} fps`}
                </option>
              ))}
            </select>
            {playing ? (
              <button key="stopPlaying" onClick={stopPlaying}>
                Stop
              </button>
            ) : (
              <button key="startPlaying" onClick={startPlaying}>
                Play
              </button>
            )}
            <button onClick={doTranscode} disabled={progress !== null}>
              Transcode{progress === null ? "" : ` (${progress.toFixed(1)}%)`}
            </button>
            {message.length && <span>{message[message.length - 1]}</span>}
          </div>
          <canvas
            ref={canvas}
            className={styles.Canvas}
            width={width}
            height={height}
          ></canvas>
        </div>
      </div>
      <div className={styles.Toolbar}>
        <button onClick={() => capture()}>Capture</button>{" "}
        <button
          onClick={() => setSelected(frames.map((_i, i) => i))}
          disabled={selected.length === frames.length}
        >
          Select All
        </button>{" "}
        <button onClick={() => remove()} disabled={selected.length === 0}>
          Remove{selected.length > 0 && ` (${selected.length})`}
        </button>{" "}
        <button onClick={() => fileRef.current.click()}>Import files</button>{" "}
        <input
          ref={fileRef}
          type="file"
          id="file-selector"
          multiple
          style={{ display: "none" }}
        />
        <select value={audio} onChange={(e) => setAudio(e.target.value)}>
          {Object.keys(AUDIO_FILES).map((audio, key) => (
            <option key={key} value={audio}>
              {audio}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.Scroller}>
        <div className={styles.Timeline}>
          <div className={styles.Time}>
            {lastSelected !== null && (
              <div
                className={styles.Slider}
                style={{
                  marginLeft: `${(100 * lastSelected) / frames.length}%`,
                }}
              ></div>
            )}
          </div>
          <div className={styles.Line}>
            {frames.map((image, index) => (
              <div
                key={index}
                className={cx(
                  styles.Frame,
                  selected.includes(index) && styles.Frame__Selected
                )}
              >
                <div className={styles.Scale}>{`#${index}`}</div>
                <img
                  src={image}
                  // style={{ width: `${width / 2}px`, height: `${height / 2}px` }}
                  className={styles.Image}
                  // width={width}
                  // height={height}
                  alt=""
                  onClick={(e) => {
                    if (e.shiftKey && lastSelected !== null) {
                      const [from, to] =
                        lastSelected < index
                          ? [lastSelected, index]
                          : [index, lastSelected];
                      setLastSelected(index);
                      setSelected((selected) =>
                        selected
                          .filter((i) => i < from || to < i)
                          .concat(
                            frames
                              .map((_i, i) => i)
                              .filter((i) => from <= i && i <= to)
                          )
                      );
                    } else if (e.metaKey) {
                      setLastSelected(selected.includes(index) ? null : index);
                      setSelected((selected) =>
                        selected.includes(index)
                          ? selected.filter((i) => index !== i)
                          : selected.concat(index)
                      );
                    } else {
                      setLastSelected(index);
                      setSelected([index]);
                      showFrame(image, index);
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <div className={styles.Line}>
            {audio && <Waveform src={AUDIO_FILES[audio]} />}
          </div>
        </div>
      </div>
    </div>
  );
}
