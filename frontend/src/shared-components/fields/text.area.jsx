import React, { useState, useEffect } from "react";

import styles from "./fields.module.scss";

export const TextArea = ({ defaultValue, valueChangedHandler }) => {
  const [countValue, setCount] = useState(0);
  const [isValidTextArea, setIsValidTextArea] = useState(false);

  useEffect(() => {
    setCount(defaultValue.length);
    validateTextArea(defaultValue.length);
  }, [defaultValue]);

  const validateTextArea = (value) => {
    if (value >= 100 && value <= 500) {
      setIsValidTextArea(true);
    }
  };

  const count = () => {
    const field = document.getElementById("description");
    setCount(field.value.length);
    setIsValidTextArea(field.value.length <= 100 || field.value.length > 500 ? false : true);
    valueChangedHandler(field.value, "description");
  };

  const wrapperClassNames = [styles.fieldWrapper, !isValidTextArea ? styles.fieldWrapperWithError : ""].join(" ");

  return (
    <div className={wrapperClassNames}>
      <textarea
        id="description"
        name="description"
        onKeyUp={count}
        className={[styles.field, styles.textarea].join(" ")}
        placeholder="Dodatne informacije"
        defaultValue={defaultValue}
      ></textarea>
      <p id="counter" className={styles.charCount}>
        <span>{countValue}/500 karaktera</span>
        <br />
        {!isValidTextArea && (
          <span className={styles.textError}>Potrebno je uneti minimum 100, maksimum 500 karaktera</span>
        )}
      </p>
    </div>
  );
};
