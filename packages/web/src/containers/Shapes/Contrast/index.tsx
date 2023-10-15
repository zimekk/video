import React from "react";
import styles from "./styles.module.scss";

// https://medium.com/transferwise-design/accessible-but-never-boring-part-1-ec8222f1f364
export default function Contrast() {
  return (
    <div className={styles.Contrast}>
      {[
        "Bright Green",
        "Bright Pink",
        "Bright Orange",
        "Bright Yellow",
        "Bright Blue",
        "Forest Green",
        "Dark Maroon",
        "Dark Purple",
        "Dark Gold",
        "Dark Charcoal",
      ].map((name, key) => (
        <div key={key} className={styles[name.replace(" ", "")]}>
          <small>{name}</small>
          AAA
        </div>
      ))}
    </div>
  );
}
