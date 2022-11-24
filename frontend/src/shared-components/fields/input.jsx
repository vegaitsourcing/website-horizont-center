import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Select } from "./select";
import { SelectDate } from "shared-components";
import styles from "./fields.module.scss";

export const Input = ({
  id,
  name,
  type,
  step,
  label,
  placeholder,
  inputValue,
  valueChangedHandler,
  options,
  className = "",
  errorMessage = "",
  withSearchIcon = false,
  infoText,
}) => {
  if (type === "dropdown")
    return (
      <Select
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        options={options}
        inputValue={inputValue}
        valueChangedHandler={valueChangedHandler}
        errorMessage={errorMessage}
      />
    );

  if (type === "datepicker")
    return (
      <SelectDate
        inputValue={inputValue}
        label={label}
        infoText={infoText}
        valueChangedHandler={valueChangedHandler}
        errorMessage={errorMessage}
      />
    );

  const wrapperClassNames = [styles.fieldWrapper, className, errorMessage ? styles.fieldWrapperWithError : ""].join(
    " "
  );

  return (
    <div className={wrapperClassNames}>
      {label ? (
        <label className={styles.fieldLabel}>
          {label}
          {infoText ? (
            <div className={styles.tooltip}>
              <FontAwesomeIcon icon={faInfoCircle} className={styles.infoIcon} />
              <span className={styles.tooltiptext}>{infoText}</span>
            </div>
          ) : null}
        </label>
      ) : null}
      <div className={styles.fieldInnerWrapper}>
        <input
          id={id}
          defaultValue={inputValue ?? ""}
          type={type}
          name={name}
          step={step}
          min={"1"}
          onChange={(event) => valueChangedHandler(event.target.value)}
          placeholder={placeholder}
          className={styles.field}
        />
        {withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
      </div>
      {errorMessage && <pre className={styles.errorMessage}>{errorMessage}</pre>}
    </div>
  );
};
