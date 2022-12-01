import { useEffect, useState } from "react";
import { Input } from "shared-components";
import { CitiesService } from "pages/api/countriesService";
import { isValidInput } from "../../utils/inputValidation";
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
    <form>
      <div>
        <label>{userFormType === "caregiver" ? "Opšte informacije" : "Vaše informacije"}</label>
        <div className={styles.formGrid}>
          {formInputFields[0].map((input) => {
            const inputValue = formData?.data?.[userFormType]?.[input.name] ?? "";
            return (
              <Input
                key={input.id}
                className={styles.fieldWrapper}
                id={input.id}
                type={input.type}
                options={input.name === "city" ? cityOptions : input.options}
                name={input.name}
                label={input.label}
                placeholder={input.placeholder}
                infoText={input.infoText}
                inputValue={inputValue}
                valueChangedHandler={(e) => handleValueChange(e, input.name)}
                errorMessage={isValidInput(inputValue, input)}
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
            const inputValue = formData?.data?.[userFormType]?.[input.name] ?? "";
            return (
              <Input
                key={input.id}
                className={styles.fieldWrapper}
                id={input.id}
                type={input.type}
                options={input.name === "city" ? cityOptions : input.options}
                name={input.name}
                step={input.step}
                label={input.label}
                placeholder={input.placeholder}
                infoText={input.infoText}
                inputValue={inputValue}
                valueChangedHandler={(e) => handleValueChange(e, input.name)}
                errorMessage={isValidInput(inputValue, input)}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};
