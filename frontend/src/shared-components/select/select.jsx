import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./select.module.scss";

export const Select = ({
  id,
  name,
  placeholder,
  options,
  inputValue = "",
  valueChangedHandler,
  className,
  isValidInput = true,
}) => {
  const [selectedValue, setSelectedValue] = useState(inputValue);

  useEffect(() => {
    setSelectedValue(inputValue);
  }, [inputValue]);

  const handleSelectChange = (value) => {
    valueChangedHandler(value);
    setSelectedValue(value);
  };

  return (
    <div className={styles.selectInputWrapper}>
      <div className={[styles.fieldWrapper, styles.selectInput, className].join(" ")}>
        <select
          onChange={(event) => handleSelectChange(event.target.value)}
          name={name}
          id={id}
          value={selectedValue}
          className={[styles.field, !isValidInput ? styles.selectError : ""].join(" ")}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {Object.entries(options).map(([value, label], _) => {
            return (
              <option key={value} value={value} className={styles.option}>
                {label}
              </option>
            );
          })}
        </select>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={[styles.icon, !isValidInput ? styles.inputError : ""].join(" ")}
        />
      </div>
      {!isValidInput ? (
        <div>
          <div className={styles.inputError}>Morate odabrati bar jednu opciju</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
