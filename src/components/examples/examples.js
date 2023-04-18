import React from "react";
import styles from "./styles.module.css";
import { Player } from "./components/Player";
import { Button } from "@mui/material";

export function Examples() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>примеры сведения</h3>
      <p className={styles.subtitle}>пример 1</p>
      <p className={styles.subtitle_music}>до</p>
      <Player />
      <p className={styles.subtitle_music}>после</p>
    </div>
  );
}
