import { useState, useEffect } from "react";

import { Input } from "shared-components";

import CitiesService from "pages/api/countriesService";

import styles from "./user.form.module.scss";

export const UserForm = ({ stepNumber, formInputFields, userFormType, valueChangedHandler }) => {
  const [formData, setFormData] = useState({});
  const [cityOptions, setCityOptions] = useState({});

  async function prepareCityOptions() {
    const serbianCities = await CitiesService.getAllSerbianCities();
    const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
    setCityOptions(serbianCityOptions);
  }

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
    prepareCityOptions();
  }, [stepNumber]);

  const handleValueChange = (value, inputName) => {
    valueChangedHandler(value, inputName);
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
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
                options={input.name === "city" ? cityOptions : input.options}
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
                step={input.step}
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
