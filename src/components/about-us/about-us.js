import React from "react";
import styles from "./styles.module.css";

export function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>немного о нас</h3>
      <div className={styles.video_wrapper}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/Lrrj9y1A-Fg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
