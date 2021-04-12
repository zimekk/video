import { hot } from "react-hot-loader/root";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import Gradients from "./Gradients";
import Transitions from "./Transitions";
import styles from "./App.module.scss";

// https://www.videvo.net/video/flying-over-forest-3/4650/
function Video() {
  return (
    <div>
      <video width="480" height="270" preload="none" controls>
        <source src="https://content.videvo.net/videvo_files/video/free/2016-01/originalContent/Forest_15_3b_Videvo.mov" />
      </video>
    </div>
  );
}

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <button onClick={(e) => dispatch(increment())}>{counter}</button>
        <Video />
        <Gradients />
        <Transitions />
      </div>
    </div>
  );
}

export default hot(App);
