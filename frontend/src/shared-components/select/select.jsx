import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./select.module.scss";

export const Select = (props) => {
  const { id, name, placeholder, options, inputValue, valueChangedHandler } = props;

  return (
    <div className={styles.fieldWrapper}>
      <select
        onChange={(event) => valueChangedHandler(event.target.value)}
        name={name}
        id={id}
        defaultValue={inputValue}
        className={[styles.field, styles.select].join(" ")}
      >
        {placeholder != null ? <option value="">{placeholder}</option> : null}
        {Object.entries(options).map(([value, label], _) => {
          return (
            <option key={value} value={label} selected={label === inputValue}>
              {label}
            </option>
          );
        })}
      </select>
      <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
    </div>
  );
};
