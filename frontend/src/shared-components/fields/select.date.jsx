import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import styles from "./fields.module.scss";

export const SelectDate = ({ inputValue, label, valueChangedHandler, className = "", errorMessage = "" }) => {
  const [datePickerValue, setDatePickerValue] = useState(inputValue);

  useEffect(() => {
    setDatePickerValue(inputValue);
  }, [inputValue]);

  const handleDatePickerChange = (event) => {
    valueChangedHandler(moment(event).format("YYYY-MM-DD"));
    setDatePickerValue(moment(event).format("YYYY-MM-DD"));
  };

  const wrapperClassNames = [styles.fieldWrapper, className, errorMessage ? styles.fieldWrapperWithError : ""].join(
    " "
  );

  return (
    <div className={wrapperClassNames}>
      {label ? <label className={styles.fieldLabel}>{label}</label> : null}
      <DatePicker
        placeholderText={inputValue !== "" ? inputValue : "Datum rođenja Dan/Mesec/Godina**"}
        dateFormat="dd/MM/yyyy"
        id="start-date"
        autoComplete="off"
        selected={Date.parse(datePickerValue) ?? new Date()}
        onChange={(event) => handleDatePickerChange(event)}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
