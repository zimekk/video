import { hot } from "react-hot-loader/root";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import Animation from "./Animation";
import Blob from "./Blob";
import Canvas from "./Canvas";
import CanvasVideo from "./CanvasVideo";
import Cube from "./Cube";
import Fireworks from "./Fireworks";
import Gradients from "./Gradients";
import Json2d from "./Json2d";
import Letters from "./Letters";
import Luts from "./Luts";
import Polylines from "./Polylines";
import Recorder from "./Recorder";
import SpriteJs from "./SpriteJs";
import Thumbnails from "./Thumbnails";
import Transcode from "./Transcode";
import Transitions from "./Transitions";
import Video from "./Video";
import VideoContext from "./VideoContext";
import VideoTransitions from "./VideoTransitions";
import styles from "./App.module.scss";

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>{counter}</button>
        </div>
        <CanvasVideo />
        <VideoTransitions />
        <Json2d />
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
