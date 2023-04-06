import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../button/Button";

export function Certificate() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

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
        <form>
          <input name="name" type="text" placeholder="Фамилия Имя" />
          <input name="email" type="email" placeholder="E-mail" />
          <input name="number" type="number" placeholder="Номер телефона" />
          <Button />
        </form>
      </div>
    </div>
  );
}
