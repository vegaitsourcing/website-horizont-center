import { useState, useEffect } from "react";

import { Input } from "shared-components";

import styles from "./beneficiary.form.module.scss";

export const BeneficiaryForm = () => {
  // const [generalInformation, setGeneralInformation] = useState("");

  useEffect(() => {}, []);

  return (
    <form className={styles.form}>
      <div className={styles.formTop}>
        <label>Vaše informacije</label>
        <div className={styles.formGrid}>
          <Input
            id="vaseIme"
            type="text"
            name="vaseIme"
            placeholder="Unesite Vaše ime*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="vasePrezime"
            type="text"
            name="vasePrezime"
            placeholder="Unesite Vaše prezime*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="vasEmail"
            type="email"
            name="vasEmail"
            placeholder="Unesite Vaš E-mail*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="vasTelefon"
            type="text"
            name="vasTelefon"
            placeholder="Unesite Vaš broj telefona*"
            valueChangedHandler={(e) => setUserType(e)}
          />
        </div>
      </div>
      <div className={styles.formBottom}>
        <label>Informacije osobe kojoj je potrebna nega</label>
        <div className={styles.formGrid}>
          <Input
            id="postanskiBroj"
            type="dropdown"
            options={["21000", "11000"]}
            name="postanskiBroj"
            placeholder="Poštanski broj*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="komeJePotrebnaNega"
            type="text"
            name="komeJePotrebnaNega"
            placeholder="Kome je potrebna nega*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="rokPruzanjaPomoci"
            type="text"
            name="rokPruzanjaPomoci"
            placeholder="Rok pružanja pomoći*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="pol"
            type="dropdown"
            options={["muški", "ženski"]}
            name="pol"
            placeholder="Pol * "
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input
            id="daniUNedelji"
            type="dropdown"
            options={["Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja"]}
            name="daniUNedelji"
            placeholder="Dani u nedelji*"
            valueChangedHandler={(e) => setUserType(e)}
          />
          <Input id="satiDnevno" name="satiDnevno" type="dropdown" options={["8", "20"]} placeholder="Sati dnevno*" />
          <Input
            id="vrstaPomoci"
            name="vrstaPomoci"
            type="dropdown"
            options={["velika", "mala"]}
            placeholder="Vrsta pomoći*"
            valueChangedHandler={(e) => setUserType(e)}
          />
        </div>
      </div>
    </form>
  );
};
