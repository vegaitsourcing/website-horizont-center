import React, { useState, useEffect } from "react";

import styles from "./text.area.module.scss";

export const TextArea = ({ defaultValue, valueChangedHandler }) => {
  const [countValue, setCount] = useState(0);
  const [isValidTextArea, setIsValidTextArea] = useState(false);

  useEffect(() => {
    setCount(defaultValue.length);
    validateTextArea(defaultValue.length);
  }, [defaultValue]);

  const validateTextArea = (value) => {
    if (value >= 100) {
      setIsValidTextArea(true);
    }
  };

  const count = () => {
    var field = document.getElementById("description");
    setCount(field.value.length);
    setIsValidTextArea(field.value.length >= 100 ? true : false);
    valueChangedHandler(field.value, "description");
  };

  return (
    <div className={styles.descriptionInput}>
      <textarea
        id="description"
        name="description"
        onKeyUp={count}
        className={[styles.textarea, !isValidTextArea ? styles.error : ""].join(" ")}
        placeholder="Dodante informacije"
        defaultValue={defaultValue}
      ></textarea>
      <p id="counter" className={[styles.charCount, !isValidTextArea ? styles.error : ""].join(" ")}>
        <span>{countValue}/500 karaktera</span>
        <br />
        {!isValidTextArea ? <span className={styles.textError}>Potrebno je uneti minimum 100 karaktera</span> : ""}
      </p>
    </div>
  );
};
