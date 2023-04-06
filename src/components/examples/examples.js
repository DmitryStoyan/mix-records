import React from "react";
import styles from "./styles.module.css";

export function Examples() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>примеры сведения</h3>
      <p className={styles.subtitle}>пример 1</p>
      <p className={styles.subtitle_music}>до</p>
      <p className={styles.subtitle_music}>после</p>
    </div>
  );
}
