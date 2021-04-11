import { hot } from "react-hot-loader/root";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";
import styles from "./App.module.scss";

function App() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <h1>Video</h1>
      <div>
        <button onClick={(e) => dispatch(increment())}>{counter}</button>
      </div>
    </div>
  );
}

export default hot(App);
