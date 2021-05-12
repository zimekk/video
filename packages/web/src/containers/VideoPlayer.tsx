import React, { useEffect, useRef } from "react";
import { MediaPlayer } from "dashjs";

// https://blog.logrocket.com/a-comprehensive-guide-to-video-playback-in-react/
// https://bitmovin.com/adaptive-streaming/
// https://reference.dashif.org/dash.js/latest/samples/index.html
export default function () {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
    const player = MediaPlayer().create();
    player.initialize(video, url, false);
  }, []);

  return (
    <div>
      <video ref={videoRef} width="480" height="270" controls></video>
    </div>
  );
}
