import React, { useEffect, useState } from "react";

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
  inputDefaultValue,
  valueChangedHandler,
  required,
}) => {
  if (type == "dropdown")
    return (
      <div className={styles.inputWrapper}>
        <select
          onChange={(e) => valueChangedHandler(e.target.value)}
          name={name}
          id={id}
          className={styles.input + " " + styles.dropdown + " " + (hasError ? styles.hasError : null)}
        >
          {placeholder != null ? <option value="">{placeholder}</option> : null}
          {options.map((option, index) => {
            return (
              <option key={index} value={option} selected={inputDefaultValue === option}>
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
          onChange={(e) => valueChangedHandler(e.target.value)}
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
        defaultValue={inputDefaultValue ?? null}
        type={type}
        name={name}
        id={id}
        onChange={(e) => valueChangedHandler(e.target.value)}
        placeholder={placeholder}
        className={styles.input + " " + (hasError ? styles.hasError : null)}
      />
    );
  }
};
