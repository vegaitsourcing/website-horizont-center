import { useState, useEffect } from "react";

import { Input } from "shared-components";

import styles from "./caregiver.form.module.scss";

export const CaregiverForm = ({ stepNumber, formInputFields, userFormType, valueChangedHandler }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
    console.log("Form data useEffect:", formData);
  }, [stepNumber]);

  const handleValueChange = (value, inputName) => {
    valueChangedHandler(value, inputName);
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
    console.log("Form data:", formData);
  };

  return (
    <form className={styles.form}>
      <div className={styles.formTop}>
        <label>{userFormType === "caregiver" ? "Opšte informacije" : "Vaše informacije"}</label>
        <div className={styles.formGrid}>
          {formInputFields[0].map((input) => {
            return (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
                inputValue={formData?.data?.[userFormType]?.[input.name] ?? ""}
                valueChangedHandler={(e) => handleValueChange(e, input.name)}
                isValidInput={formData?.data?.[userFormType]?.[input.name] === "" ? false : true}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.formBottom}>
        <label>
          {userFormType === "caregiver" ? "Iskustvo i stručna sprema" : "Informacije osobe kojoj je potrebna nega"}
        </label>
        <div className={styles.formGrid}>
          {formInputFields[1].map((input) => {
            return (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
                inputValue={formData?.data?.[userFormType]?.[input.name] ?? ""}
                valueChangedHandler={(e) => handleValueChange(e, input.name)}
                isValidInput={formData?.data?.[userFormType]?.[input.name] === "" ? false : true}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};
