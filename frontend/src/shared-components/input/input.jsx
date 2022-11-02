import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../select/select";
import { SelectDate } from "shared-components";

import styles from "./input.module.scss";

export const Input = (props) => {
  const { id, name, type, placeholder, inputValue, valueChangedHandler, isValidInput, withSearchIcon = false } = props;

  if (type === "dropdown") return <Select {...props} />;

  if (type === "datepicker") return <SelectDate {...props} />;

  return (
    <div className={styles.fieldWrapper}>
      <input
        defaultValue={inputValue ?? ""}
        type={type}
        name={name}
        id={id}
        onChange={(event) => valueChangedHandler(event.target.value)}
        placeholder={placeholder}
        className={[styles.field, !isValidInput ? styles.inputError : ""].join(" ")}
      />
      {withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
      {!isValidInput ? <div className={styles.textError}>Morate popuniti polje</div> : ""}
    </div>
  );
};
