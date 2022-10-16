import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./input.module.scss";

export const Input = ({
  id,
  name,
  type,
  placeholder,
  hasError,
  options,
  inputValue,
  required,
  valueChangedHandler,
}) => {
  if (type == "dropdown")
    return (
      <div className={styles.inputWrapper}>
        <select
          onChange={(e) => valueChangedHandler && valueChangedHandler(e.currentTarget.value)}
          name={name}
          id={id}
          className={styles.input + " " + styles.dropdown + " " + (hasError ? styles.hasError : null)}
        >
          {placeholder != null ? <option value="">{placeholder}</option> : null}
          {options.map((option) => {
            return (
              <option value={option} selected={option === inputValue}>
                {option}
              </option>
            );
          })}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
      </div>
    );
  else if (type == "search") {
    return (
      <div className={styles.inputWrapper}>
        <div>{inputValue}</div>
        <input
          onChange={(e) => valueChangedHandler && valueChangedHandler(e.currentTarget.value)}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          className={styles.input + " " + (hasError ? styles.hasError : null)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </div>
    );
  } else {
    return (
      <input
        value={inputValue}
        type={type}
        name={name}
        id={id}
        onChange={(e) => valueChangedHandler && valueChangedHandler(e.currentTarget.value)}
        placeholder={placeholder}
        className={styles.input + " " + (hasError ? styles.hasError : null)}
      />
    );
  }
};
