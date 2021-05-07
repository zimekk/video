import { hot } from "react-hot-loader/root";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import Animation from "./Animation";
import Blob from "./Blob";
import Cube from "./Cube";
import Fireworks from "./Fireworks";
import Gradients from "./Gradients";
import Letters from "./Letters";
import Luts from "./Luts";
import Polylines from "./Polylines";
import Recorder from "./Recorder";
import SpriteJs from "./SpriteJs";
import Canvas from "./Canvas";
import Thumbnails from "./Thumbnails";
import Transcode from "./Transcode";
import Transitions from "./Transitions";
import Video from "./Video";
import VideoContext from "./VideoContext";
import styles from "./App.module.scss";

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <button onClick={() => dispatch(increment())}>{counter}</button>
        <Cube />
        <Polylines />
        <SpriteJs />
        <Letters />
        <Blob />
        <Fireworks />
        <Animation />
        <Canvas />
        <VideoContext />
        <Transcode />
        <Luts />
        <Recorder />
        <Video counter={counter} />
        <Gradients />
        <Thumbnails />
        <Transitions />
      </div>
    </div>
  );
}

export default hot(App);
