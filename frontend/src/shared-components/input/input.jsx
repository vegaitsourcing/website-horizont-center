import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../select/select";
import { SelectDate } from "shared-components";

import styles from "./input.module.scss";

export const Input = ({
  id,
  name,
  type,
  step,
  placeholder,
  inputValue,
  valueChangedHandler,
  options,
  className,
  isValidInput = true,
  withSearchIcon = false,
}) => {
  if (type === "dropdown")
    return (
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        options={options}
        inputValue={inputValue}
        valueChangedHandler={valueChangedHandler}
        className={className}
        isValidInput={isValidInput}
      />
    );

  if (type === "datepicker")
    return <SelectDate inputValue={inputValue} valueChangedHandler={valueChangedHandler} isValidInput={isValidInput} />;

  return (
    <div className={styles.inputWrapper}>
      <div className={[styles.fieldWrapperWide, styles.inputField, className].join(" ")}>
        <input
          defaultValue={inputValue ?? ""}
          type={type}
          name={name}
          id={id}
          step={step}
          min={"0.1"}
          onChange={(event) => valueChangedHandler(event.target.value)}
          placeholder={placeholder}
          className={[styles.field, !isValidInput ? styles.inputError : ""].join(" ")}
        />
        {withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
      </div>
      {!isValidInput ? <div className={styles.textError}>Morate popuniti polje</div> : ""}
    </div>
  );
};
