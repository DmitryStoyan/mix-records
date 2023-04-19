import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../button/Button";

export function Certificate() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);

  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [numberError, setNumberError] = useState("Номер не может быть пустым");

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
        <div className={styles.form_wrapper}>
          <form className={styles.form}>
            <input
              name="name"
              type="text"
              placeholder="Фамилия Имя"
              className={`${styles.input_name} ${styles.input}`}
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className={styles.input}
            />
            <input
              name="number"
              type="number"
              placeholder="Номер телефона"
              className={styles.input}
            />
          </form>
          <Button />
        </div>
      </div>
    </div>
  );
}
