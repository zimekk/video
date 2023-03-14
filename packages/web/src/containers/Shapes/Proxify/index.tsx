import React, { useState } from "react";
import styles from "./styles.module.scss";

// https://proxify.io/
export default function Proxify() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.Proxify}>
      <button
        className={styles.Button}
        onClick={() => setOpen((open) => !open)}
      >
        {open ? (
          <svg viewBox="0 0 14 14">
            <path
              d="M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L13 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 18 14">
            <path
              d="M1 7H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 13H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {open && (
        <div className={styles.Logo}>
          <svg viewBox="0 0 40 40">
            <circle cx="10" cy="10" r="10" fill="#003c1c" />
            <path
              d="M 21 0
           A 20 20, 0, 0, 0, 40 19
           L 40 0 Z
           "
              fill="#56c28e"
            />
            <circle cx="30" cy="30" r="10" fill="#ccc" />
            <path
              d="M 2 21
           A 2 2, 0, 0, 0, 0 23
           L 0 38
           A 2 2, 0, 0, 0, 2 40
           L 17 40
           A 2 2, 0, 0, 0, 19 38
           L 19 23
           A 2 2, 0, 0, 0, 17 21
           Z"
              fill="#5258FB"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
