import React from "react";
import styles from "./styles.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "../button/Button";
import { navigation } from "./components/navigation";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu_button_wrapper}>
          <MenuIcon className={styles.menu_icon} />
        </div>
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
