import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./fields.module.scss";

export const Select = ({
  id,
  name,
  placeholder,
  options,
  valueChangedHandler,
  className = "",
  inputValue = "",
  errorMessage = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(inputValue);

  useEffect(() => {
    setSelectedValue(inputValue);
  }, [inputValue]);

  const handleSelectChange = (value) => {
    valueChangedHandler(value);
    setSelectedValue(value);
  };

  const wrapperClassNames = [styles.fieldWrapper, className, errorMessage ? styles.fieldWrapperWithError : ""].join(
    " "
  );

  return (
    <div className={wrapperClassNames}>
      <div className={styles.fieldInnerWrapper}>
        <select
          onChange={(event) => handleSelectChange(event.target.value)}
          name={name}
          id={id}
          value={selectedValue}
          className={styles.field}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {Object.entries(options).map(([value, label], _) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
