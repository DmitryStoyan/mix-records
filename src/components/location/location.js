import React from "react";
import styles from "./styles.module.css";

export function Location() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h3 className={styles.title}>как нас найти</h3>
        <p className={styles.address}>Москва, Люсиновская ул., 36с2</p>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.0274227756086!2d37.61862117649457!3d55.72327559426543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1133fb1927%3A0x2b2408864d5d03e1!2z0JvRjtGB0LjQvdC-0LLRgdC60LDRjyDRg9C7LiwgMzYg0YEyLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE1MDkz!5e0!3m2!1sru!2skz!4v1682528396710!5m2!1sru!2skz"
          className={styles.map}
        ></iframe>
      </div>
    </div>
  );
}
