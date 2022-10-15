import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./input.module.scss";

export const Input = ({ id, name, type, placeholder, hasError, valueChangedHandler }) => {
  return (
    <div className={styles.input + " " + (hasError ? styles["input--error"] : null)}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => valueChangedHandler(e.currentTarget.value)}
      />
      {type === "text" && <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}
      {type === "search" && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
      {type === "dropdown" && <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />}
    </div>
  );
};
