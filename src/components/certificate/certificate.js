import React, { useEffect, useState } from "react";
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

  const [formValid, setFormValid] = useState(false);

  // Отключение кнопки при не валидности
  useEffect(() => {
    if (nameError || emailError || numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, numberError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Имя должно содержать не менее 2 букв");
    } else {
      setNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорреткный email");
    } else {
      setEmailError("");
    }
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (e.target.value.length < 11) {
      setNumberError("Номер должен содержать 11 цифр");
    } else {
      setNumberError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "number":
        setNumberDirty(true);
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.rectangle}></div>
        <div className={styles.ellipse}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.polygon}></div>
        <h3 className={styles.title}>
          подарочный сертификат для твоих близких
        </h3>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className={styles.form_wrapper}>
          <form className={styles.form}>
            {nameDirty && nameError && (
              <div className={styles.error}>{nameError}</div>
            )}
            <input
              onChange={(e) => nameHandler(e)}
              value={name}
              onBlur={(e) => blurHandler(e)}
              name="name"
              type="text"
              placeholder="Фамилия Имя"
              className={`${styles.input_name} ${styles.input}`}
            />
            {emailDirty && emailError && (
              <div className={styles.error}>{emailError}</div>
            )}
            <input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              name="email"
              type="email"
              placeholder="E-mail"
              className={styles.input}
            />
            {numberDirty && numberError && (
              <div className={styles.error}>{numberError}</div>
            )}
            <input
              onChange={(e) => numberHandler(e)}
              value={number}
              onBlur={(e) => blurHandler(e)}
              name="number"
              type="number"
              placeholder="Номер телефона"
              className={styles.input}
            />
          </form>
          <Button disabled={!formValid} />
        </div>
      </div>
    </div>
  );
}
