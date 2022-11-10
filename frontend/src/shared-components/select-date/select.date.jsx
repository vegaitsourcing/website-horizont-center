import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import styles from "./select.date.module.scss";

export const SelectDate = ({ inputValue, valueChangedHandler, isValidInput = true }) => {
  const [datePickerValue, setDatePickerValue] = useState(inputValue);

  useEffect(() => {
    setDatePickerValue(inputValue);
  }, [inputValue]);

  const handleDatePickerChange = (event) => {
    valueChangedHandler(moment(event).format("YYYY-MM-DD"));
    setDatePickerValue(moment(event).format("YYYY-MM-DD"));
  };

  return (
    <div className={[styles.datePicker, !isValidInput ? styles.error : ""].join(" ")}>
      <DatePicker
        placeholderText={inputValue != "" ? inputValue : "Datum rođenja Dan/Mesec/Godina**"}
        dateFormat="dd/MM/yyyy"
        id="start-date"
        autoComplete="off"
        selected={Date.parse(datePickerValue) ?? new Date()}
        onChange={(event) => handleDatePickerChange(event)}
      />
      {!isValidInput ? <div className={styles.textError}>Morate odabrati datum</div> : ""}
    </div>
  );
};
