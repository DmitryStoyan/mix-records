import React from "react";
import styles from "./styles.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "../button/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu_button_wrapper}>
          <MenuIcon className={styles.menu_icon} />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigation_list}>
            <li className={styles.navigation_element}>О нас</li>
            <li className={styles.navigation_element}>Услуги</li>
            <li className={styles.navigation_element}>Сертификат</li>
            <li className={styles.navigation_element}>Как нас найти</li>
          </ul>
        </nav>
        <div className={styles.main}>
          <h1 className={styles.title}>Студия звукозаписи MIX</h1>
          <p className={styles.subtitle}>
            Студия звукозаписи полного цикла и музыкальный лейбл.
          </p>
        </div>
        <Button />
      </div>
    </header>
  );
}
