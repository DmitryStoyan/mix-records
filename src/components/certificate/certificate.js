import React from "react";
import styles from "./styles.module.css";

export function Certificate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h3 className={styles.title}>
          подарочный сертификат для твоих близких
        </h3>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
    </div>
  );
}
