import React, { useEffect, useMemo, useRef, useState } from "react";
import { Subject } from "rxjs";
import YouTubePlayer from "youtube-player";
import styles from "./styles.module.scss";

const VIDEO_ID = "uY1_NscMn_4";

// https://developers.google.com/youtube/iframe_api_reference#Events
const stateNames = {
  "-1": "unstarted",
  0: "ended",
  1: "playing",
  2: "paused",
  3: "buffering",
  5: "video cued",
};

function Player() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const action$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (playerRef.current) {
      // https://developers.google.com/youtube/iframe_api_reference
      const player = YouTubePlayer(playerRef.current, {
        videoId: VIDEO_ID,
        // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
        playerVars: {
          controls: 0,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          origin: "http://localhost:8080",
          start: 15,
        },
      });

      player.on("ready", function () {
        console.log("Player1 is ready.");
      });

      player
        // Play video is a Promise.
        // .playVideo()
        // .seekTo(25, false)
        .pauseVideo()
        .then(() =>
          console.log(
            "Starting to play player1. It will take some time to buffer video before it actually starts playing."
          )
        );

      const updateProgress = async () => {
        setProgress(
          (100 * (await player.getCurrentTime())) / (await player.getDuration())
        );
      };

      player.on("stateChange", function (event) {
        if (!stateNames[event.data]) {
          throw new Error(`Unknown state (${event.data}).`);
        }

        console.log(`State: ${stateNames[event.data]} (${event.data}).`);

        updateProgress();

        if (event.data === 1) {
          setPlaying(true);
          interval = setInterval(updateProgress, 1000);
        } else if ([0, 2, 5].includes(event.data)) {
          setPlaying(false);
          clearInterval(interval);
        }
      });

      const subscription = action$.pipe().subscribe((action) => {
        if (action === "play") {
          player.playVideo();
        } else if (action === "stop") {
          player.pauseVideo();
          // player.stopVideo()
        }
      });

      return () => {
        clearInterval(interval);
        subscription.unsubscribe();
      };
    }
  }, [action$, playerRef, setProgress]);

  return (
    <div className={styles.Player}>
      <div ref={playerRef}></div>
      <div className={styles.Overlay}>
        <div className={styles.Label}>{`mid & lower abs workout`}</div>
        <div className={styles.Countdown}>8</div>
        <div className={styles.Description}>
          <i>
            First
            <br />
            <b>Exercise</b>
          </i>
        </div>
        <div className={styles.Counter}>
          Standing Heel
          <br />
          Touch
          <i>32</i>
        </div>
        <div className={styles.SessionProgress}>
          Session Progress
          <i>1%</i>
        </div>
        <div className={styles.Progress}>
          <i
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        {playing ? (
          <div
            className={styles.Mask}
            onClick={(e) => (e.preventDefault(), action$.next("stop"))}
          ></div>
        ) : (
          <button
            className={styles.Play}
            onClick={(e) => (e.preventDefault(), action$.next("play"))}
          >
            <i></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <h3>Player</h3>
      <Player />
    </section>
  );
}
