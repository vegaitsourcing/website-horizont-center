import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./input.module.scss";

export const Input = ({ id, name, type, placeholder, hasError, options, required, valueChangeHandler }) => {
  if (type == "dropdown")
    return (
      <>
<<<<<<< HEAD
        <select
          onChange={(e) => valueChangeHandler(e.currentTarget.value)}
          name={name}
          id={id}
          className={styles.input + " " + styles.dropdown + " " + (hasError ? styles.hasError : null)}
        >
          {placeholder != null ? <option value="">{placeholder}</option> : null}
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
=======
        <div className={styles.inputWrapper}>
          <select
            name={name}
            id={id}
            className={styles.input + " " + styles.dropdown + " " + (hasError ? styles.hasError : null)}
          >
            {placeholder != null ? <option value="">{placeholder}</option> : null}
            {options.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </div>
>>>>>>> 5dd15f0b38ebf3b9d714568c7f5a959e4af83e42
      </>
    );
  else if (type == "search") {
    return (
      <>
<<<<<<< HEAD
        <input
          type={type}
          name={name}
          id={id}
          onChange={(e) => valueChangeHandler(e.currentTarget.value)}
          placeholder={placeholder}
          className={styles.input + " " + (hasError ? styles.hasError : null)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
=======
        <div className={styles.inputWrapper}>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className={styles.input + " " + (hasError ? styles.hasError : null)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </div>
>>>>>>> 5dd15f0b38ebf3b9d714568c7f5a959e4af83e42
      </>
    );
  } else {
    return (
      <input
        type={type}
        name={name}
        id={id}
        onChange={(e) => valueChangeHandler(e.currentTarget.value)}
        placeholder={placeholder}
        className={styles.input + " " + (hasError ? styles.hasError : null)}
      />
    );
  }
};
