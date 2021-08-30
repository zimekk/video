import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";

// https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14
import waveformAvgChunker from "./waveformAvgChunker";
import useSetTrackProgress from "./useSetTrackProgress";

const pointCoordinates = ({
  index,
  pointWidth,
  pointMargin,
  canvasHeight,
  amplitude,
}) => {
  const pointHeight = Math.round((amplitude / 100) * canvasHeight);
  const verticalCenter = Math.round((canvasHeight - pointHeight) / 2);
  return [
    index * (pointWidth + pointMargin), // x starting point
    canvasHeight - pointHeight - verticalCenter, // y starting point
    pointWidth, // width
    pointHeight, // height
  ];
};

const paintCanvas = ({
  canvasRef,
  waveformData,
  canvasHeight,
  pointWidth,
  pointMargin,
  playingPoint,
  hoverXCoord,
}) => {
  const ref = canvasRef.current;
  const ctx = ref.getContext("2d");
  // On every canvas update, erase the canvas before painting
  // If you don't do this, you'll end up stacking waveforms and waveform
  // colors on top of each other
  ctx.clearRect(0, 0, ref.width, ref.height);
  waveformData.forEach((p, i) => {
    ctx.beginPath();
    const coordinates = pointCoordinates({
      index: i,
      pointWidth,
      pointMargin,
      canvasHeight,
      amplitude: p,
    });
    ctx.rect(...coordinates);
    const withinHover = hoverXCoord >= coordinates[0];
    const alreadyPlayed = i < playingPoint;
    if (withinHover) {
      ctx.fillStyle = alreadyPlayed ? "#94b398" : "#badebf";
    } else if (alreadyPlayed) {
      ctx.fillStyle = "#228741";
    } else {
      ctx.fillStyle = "#88bf99";
    }
    ctx.fill();
  });
};

const filterData = (audioBuffer) => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 100; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  return filteredData;
};

const normalizeData = (filteredData) => {
  const multiplier = Math.pow(Math.max(...filteredData), -1) * 100;
  return filteredData.map((n) => n * multiplier);
};

// https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/
export function WaveformWrapper({ src }) {
  const [wave, setWave] = useState(null);

  useEffect(() => {
    const audioContext = new AudioContext();
    console.log({ src });
    fetch(src)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      // .then(audioBuffer => visualize(audioBuffer));
      .then((audioBuffer) =>
        setWave({
          data: normalizeData(filterData(audioBuffer)),
          meta: {
            trackDuration: audioBuffer.duration,
          },
        })
      );
    // if (canvasRef.current) {
    //   paintWaveform()
    // }
  }, [setWave, src]);

  return wave ? (
    <Waveform waveformData={wave.data} waveformMeta={wave.meta} />
  ) : null;
}

export function Waveform({ waveformData, waveformMeta }) {
  const canvasRef = useRef();
  const chunkedData = waveformAvgChunker(waveformData);
  const waveformWidth = 500;
  const canvasHeight = 100;
  const pointWidth = 3;
  const pointMargin = 1;
  const { trackDuration } = waveformMeta;
  const [trackProgress, setTrackProgress] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [trackPlaying, setTrackPlaying] = useState(true);
  const [hoverXCoord, setHoverXCoord] = useState();
  const playingPoint =
    (trackProgress * waveformWidth) / 100 / (pointWidth + pointMargin);
  const paintWaveform = useCallback(() => {
    paintCanvas({
      canvasRef,
      waveformData: chunkedData,
      canvasHeight,
      pointWidth,
      pointMargin,
      playingPoint,
      hoverXCoord,
    });
  }, [playingPoint]);

  useSetTrackProgress({
    trackProgress,
    setTrackProgress,
    trackDuration,
    startTime,
    trackPlaying,
  });

  useEffect(() => {
    if (canvasRef.current) {
      paintWaveform();
    }
  }, [canvasRef]);

  useEffect(() => {
    paintWaveform();
  }, [playingPoint]);

  const setDefaultX = useCallback(() => {
    setHoverXCoord();
  }, []);

  const handleMouseMove = useCallback((e) => {
    setHoverXCoord(e.clientX - canvasRef.current.getBoundingClientRect().left);
  }, []);

  const seekTrack = (e) => {
    const xCoord = e.clientX - canvasRef.current.getBoundingClientRect().left;
    const seekPerc = (xCoord * 100) / waveformWidth;
    const seekMs = (trackDuration * seekPerc) / 100;
    setStartTime(Date.now() - seekMs);
  };

  return (
    <div style={{ padding: 16 }}>
      <canvas
        className={styles.Canvas}
        style={{ height: canvasHeight }}
        ref={canvasRef}
        height={canvasHeight}
        width={waveformWidth}
        onBlur={setDefaultX}
        onMouseOut={setDefaultX}
        onMouseMove={handleMouseMove}
        onClick={seekTrack}
      />
    </div>
  );
}
