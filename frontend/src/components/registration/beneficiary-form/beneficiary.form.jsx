import { useState, useEffect } from "react";

import { Input } from "shared-components";
import { generalInformations, personWhoNeedsCare } from "./hooks/beneficiary.form";

import styles from "./beneficiary.form.module.scss";

export const BeneficiaryForm = ({ stepNumber, valueChangedHandler }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
  }, [stepNumber]);

  return (
    <form className={styles.form}>
      <div className={styles.formTop}>
        <label>Vaše informacije</label>
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
                inputValue={formData?.data?.beneficiary?.[input.name] ?? ""}
                valueChangedHandler={(e) => valueChangedHandler(e, input.name)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.formBottom}>
        <label>Informacije osobe kojoj je potrebna nega</label>
        <div className={styles.formGrid}>
          {personWhoNeedsCare.map((input) => {
            return (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
                inputValue={formData?.data?.beneficiary?.[input.name] ?? ""}
                valueChangedHandler={(e) => valueChangedHandler(e, input.name)}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};
