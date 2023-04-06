// import { Button, dividerClasses } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Card } from "./components/Card";
import { Button } from "../button/Button";
import cardArr from "./components/cardArr";

export function Price() {
  const onlineCards = cardArr.filter((card) => card.online === true);
  const offlineCards = cardArr.filter((card) => card.online !== true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h3 className={styles.title}>наши услуги</h3>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <p className={styles.price_title}>
          <span className={styles.title_color}>online &</span> offline
        </p>
        <div className={styles.price_wrapper}>
          {onlineCards.map((card) => (
            <Card card={card} />
          ))}
        </div>
        <p className={styles.price_title}>offline</p>
        <div className={styles.price_wrapper}>
          {offlineCards.map((card) => (
            <Card card={card} />
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}
