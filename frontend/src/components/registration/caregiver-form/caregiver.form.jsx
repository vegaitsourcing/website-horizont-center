import { useState, useEffect } from "react";

import { Input } from "shared-components";
import { generalInformations, experienceAndQualifications } from "./hooks/caregiver.form";

import styles from "./caregiver.form.module.scss";

export const CaregiverForm = ({ stepNumber, valueChangedHandler }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
  }, [stepNumber]);

  return (
    <form className={styles.form}>
      <div className={styles.formTop}>
        <label>Opšte informacije</label>
        <div className={styles.formGrid}>
          {generalInformations.map((input) => {
            return (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
                inputValue={formData?.data?.caregiver?.[input.name] ?? ""}
                valueChangedHandler={(e) => valueChangedHandler(e, input.name)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.formBottom}>
        <label>Iskustvo i stručna sprema</label>
        <div className={styles.formGrid}>
          {experienceAndQualifications.map((input) => {
            return (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
                inputValue={formData?.data?.caregiver?.[input.name] ?? ""}
                valueChangedHandler={(e) => valueChangedHandler(e, input.name)}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};
