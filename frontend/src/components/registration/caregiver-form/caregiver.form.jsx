import { useState, useEffect } from "react";

import { Input } from "shared-components";

import styles from "./caregiver.form.module.scss";

export const CaregiverForm = ({ stepNumber, valueChangedHandler }) => {
  const [formStep2Data, setFormStep2Data] = useState();

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormStep2Data(registrationForm.formStep2);
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
                id={input.id}
                type={input.type}
                options={input.options}
                name={input.name}
                placeholder={input.placeholder}
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
            id="prijavaRad"
            name="prijavaRad"
            type="dropdown"
            options={["prijava-rad"]}
            placeholder="Prijava za rad*"
            value={""}
            valueChangedHandler={(e) => valueChangedHandler(e)}
          />
          <Input
            id="iskustvo"
            name="iskustvo"
            type="text"
            placeholder="Iskustvo*"
            value={""}
            valueChangedHandler={(e) => valueChangedHandler(e)}
          />
          <Input
            id="dostupnost"
            name="dostupnost"
            type="dropdown"
            options={["sad", "posle"]}
            placeholder="Dostupnost*"
            value={""}
            valueChangedHandler={(e) => valueChangedHandler(e)}
          />
          <Input
            id="satiDnevno"
            name="satiDnevno"
            type="text"
            placeholder="Koliko sati dnevno*"
            value={""}
            valueChangedHandler={(e) => valueChangedHandler(e)}
          />
        </div>
      </div>
    </form>
  );
};
