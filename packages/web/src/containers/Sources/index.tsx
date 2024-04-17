import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ChangeEvent } from "react";

export default function Section() {
  const [sources, setSources] = useState<Record<string, string>>({});
  const [source, setSource] = useState("");
  const [stream, setStream] = useState<MediaStream | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const getUserMedia = useCallback(() => {
    // https://simpl.info/getusermedia/sources/
    const constraints = {
      video: { deviceId: source ? { exact: source } : undefined },
    };
    console.log(constraints);
    navigator.mediaDevices.getUserMedia(constraints).then(setStream);
  }, [source]);

  const enumerateDevices = useCallback(async () => {
    // https://web.dev/articles/getusermedia-intro?hl=pl#selecting_a_media_source
    await navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
      console.log(deviceInfos);
      setSources(
        deviceInfos
          .filter(({ kind }) => kind === "videoinput")
          .reduce(
            (devices, { deviceId, label }, index) =>
              Object.assign(devices, {
                [deviceId]: label || `Camera ${index + 1}`,
              }),
            {},
          ),
      );
    });
  }, [setSources]);

  const handleChangeSource = useCallback(
    ({ target }: ChangeEvent) => setSource((target as HTMLSelectElement).value),
    [],
  );

  useEffect(() => {
    if (source) {
      getUserMedia();
    }
  }, [source]);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      console.log(stream.getVideoTracks());
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <section className={styles.Section}>
      <h3>Sources</h3>
      <div>
        <button onClick={getUserMedia}>getUserMedia</button>
        <button onClick={enumerateDevices}>enumerateDevices</button>
        <label htmlFor="videoSource">Video source: </label>
        <select onChange={handleChangeSource}>
          {Object.entries(sources).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <video ref={videoRef} autoPlay muted playsInline />
    </section>
  );
}
