import { useEffect } from "react";
import React from "react";
import styles from "./styles.module.css";

export function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.content_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.title}>Обратный звонок</h3>
      </div>
    </div>
  );
}
