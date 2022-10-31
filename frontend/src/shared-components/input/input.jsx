import { useEffect, useState } from "react";
import styles from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../select/select";
import DatePicker from "react-datepicker";
import moment from "moment";

export const Input = (props) => {
  const { id, name, type, placeholder, inputValue, valueChangedHandler, withSearchIcon = false } = props;
  const [datePickerValue, setDatePickerValue] = useState(inputValue);

  useEffect(() => {
    setDatePickerValue(inputValue);
  }, [inputValue]);

  const handleDatePickerChange = (event) => {
    valueChangedHandler(moment(event).format("YYYY-MM-DD"));
    setDatePickerValue(moment(event).format("YYYY-MM-DD"));
  };

  if (type === "dropdown") return <Select {...props} />;

  if (type === "datepicker") {
    console.log("Date picker:", datePickerValue);
    return (
      <DatePicker
        className={styles.datePicker}
        placeholderText={inputValue ?? "Datum rođenja*"}
        dateFormat="yyyy-mm-dd"
        id="start-date"
        autoComplete="off"
        selected={Date.parse(datePickerValue) ?? new Date()}
        onChange={(event) => handleDatePickerChange(event)}
      />
    );
  }

  return (
    <div className={styles.fieldWrapper}>
      <input
        defaultValue={inputValue ?? ""}
        type={type}
        name={name}
        id={id}
        onChange={(event) => valueChangedHandler(event.target.value)}
        placeholder={placeholder}
        className={[styles.field, styles.input].join(" ")}
      />
      {withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />}
    </div>
  );
};
