import { hot } from "react-hot-loader/root";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import Gradients from "./Gradients";
import Luts from "./Luts";
import Recorder from "./Recorder";
import Thumbnails from "./Thumbnails";
import Transcode from "./Transcode";
import Transitions from "./Transitions";
import Video from "./Video";
import styles from "./App.module.scss";

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <button onClick={() => dispatch(increment())}>{counter}</button>
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
