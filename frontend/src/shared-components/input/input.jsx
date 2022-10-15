import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./input.module.scss";

export const Input = ({ id, name, type, placeholder, hasError }) => {
  return (
    // <div className={styles[`${hasError ? "input input--error" : "input"}`]}>
      <div className={styles.input + " " + (hasError ? styles['input--error'] : null)}>
      <input type={type} id={id} name={name} placeholder={placeholder} />
      {type === "text" && <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}
      {type === "search" && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
    </div>
  );
};
