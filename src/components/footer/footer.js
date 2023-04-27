import React from "react";
import styles from "./styles.module.css";
import { navigation } from "../header/components/navigation";

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.navigation_list}>
            {navigation.map((item, index) => (
              <li
                className={styles.navigation_element}
                key={`navigation item ${index}`}
              >
                <a href={item.link} className={styles.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
