// import { Button, dividerClasses } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import album from "../../images/album.png";
import album2 from "../../images/album_2.png";
import card from "../../images/card.png";
import disco from "../../images/disco.png";
import microphone from "../../images/microphone.png";
import mixing from "../../images/mixing.jpeg";
import moon2 from "../../images/moon_2.png";
import moon from "../../images/moon.png";
import piano from "../../images/piano.png";
import picture from "../../images/picture.png";
import promo from "../../images/promo.png";
import track from "../../images/track.png";
import { Card } from "./components/Card";
import { Button } from "../button/Button";

export function Price() {
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
          <Card />
          <Card />
          <Card />
        </div>
        <p className={styles.price_title}>offline</p>
        <div className={styles.price_wrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button />
      </div>
    </div>
  );
}
