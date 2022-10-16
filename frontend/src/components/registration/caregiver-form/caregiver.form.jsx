import { useState, useEffect } from "react";

import { Input } from "shared-components";

import styles from "./caregiver.form.module.scss";

export const CaregiverForm = ({ stepNumber, valueChangedHandler }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormData(registrationForm.formStep2);
  }, [stepNumber]);

  const generalInformations = [
    { id: "first_name", type: "text", name: "first_name", placeholder: "Unesite Vaše ime*" },
    { id: "last_name", type: "text", name: "last_name", placeholder: "Unesite Vaše prezime*" },
    { id: "email", type: "email", name: "email", placeholder: "Unesite Vaš E-mail*" },
    { id: "phone_number", type: "text", name: "phone_number", placeholder: "Unesite Vaš broj telefona*" },
    {
      id: "postal_code",
      type: "dropdown",
      name: "postal_code",
      placeholder: "Poštanski broj*",
      options: ["21000", "11000"],
    },
    { id: "city", type: "text", name: "city", placeholder: "Mesto stanovanja*" },
    { id: "birthdate", type: "text", name: "birthdate", placeholder: "Dan / Mesec / Godina rodjenja*" },
    {
      id: "gender",
      type: "dropdown",
      name: "gender",
      placeholder: "Pol*",
      options: ["muški", "ženski"],
    },
  ];

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
                inputValue={formData?.data?.[input.name]}
                valueChangedHandler={(e) => valueChangedHandler(e, input.name)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.formBottom}>
        <label>Iskustvo i stručna sprema</label>
        <div className={styles.formGrid}>
          <Input
            id="work_application"
            name="work_application"
            type="dropdown"
            options={["prijava-rad"]}
            placeholder="Prijava za rad*"
            inputValue={formData?.data?.["work_application"]}
            valueChangedHandler={(e) => valueChangedHandler(e, "work_application")}
          />
          <Input
            id="experience"
            name="experience"
            type="text"
            placeholder="Iskustvo*"
            inputValue={formData?.data?.["experience"]}
            valueChangedHandler={(e) => valueChangedHandler(e, "experience")}
          />
          <Input
            id="weekly_days"
            name="weekly_days"
            type="dropdown"
            options={["1", "2", "3", "4", "5", "6", "7"]}
            placeholder="Dostupnost*"
            inputValue={formData?.data?.["weekly_days"]}
            valueChangedHandler={(e) => valueChangedHandler(e, "weekly_days")}
          />
          <Input
            id="daily_hours"
            name="daily_hours"
            type="text"
            placeholder="Koliko sati dnevno*"
            inputValue={formData?.data?.["daily_hours"]}
            valueChangedHandler={(e) => valueChangedHandler(e, "daily_hours")}
          />
        </div>
      </div>
    </form>
  );
};
