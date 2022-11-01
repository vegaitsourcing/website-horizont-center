import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./select.module.scss";

export const Select = (props) => {
  const { id, name, placeholder, options, inputValue, valueChangedHandler, isValidInput } = props;
  const [selectedValue, setSelectedValue] = useState(inputValue);

  useEffect(() => {
    setSelectedValue(inputValue);
  }, [inputValue]);

  const handleSelectChange = (value) => {
    valueChangedHandler(value);
    setSelectedValue(value);
  };

  return (
    <div className={styles.fieldWrapper}>
      <select
        onChange={(event) => handleSelectChange(event.target.value)}
        name={name}
        id={id}
        value={selectedValue}
        className={[styles.field, styles.select, !isValidInput ? styles.selectError : ""].join(" ")}
      >
        {placeholder != null ? <option value="">{placeholder}</option> : null}
        {Object.entries(options).map(([value, label], _) => {
          return (
            <option key={value} value={label} className={styles.option}>
              {label}
            </option>
          );
        })}
      </select>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={[styles.icon, !isValidInput ? styles.inputError : ""].join(" ")}
      />
      {!isValidInput ? <div className={styles.inputError}>Morate odabrati bar jednu opciju</div> : ""}
    </div>
  );
};
