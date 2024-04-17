import React, { Suspense, lazy, useEffect, useState } from "react";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  player: lazy(() => import("./Player")),
  prompter: lazy(() => import("./Prompter")),
  shapes: lazy(() => import("./Shapes")),
  sources: lazy(() => import("./Sources")),
  editor: lazy(() => import("./Editor")),
  camera: lazy(() => import("./Camera")),
  demo: lazy(() => import("./Demo")),
};

const getPage = (location: { hash: string }) => {
  const [_, hash] = decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return ((keys) => (keys.includes(hash) ? hash : keys[0]))(
    Object.keys(PAGES),
  ) as keyof typeof PAGES;
};

export default function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location)),
    ),
  );

  const Demo = PAGES[page];

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Video
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}]
      </h1>
      <Suspense fallback={<Spinner />}>
        <Demo />
      </Suspense>
    </section>
  );
}
