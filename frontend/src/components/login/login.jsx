import React, { useState } from "react";

import { LongButton, Input } from "shared-components";

import styles from "./login.module.scss";

export const LoginForm = ({}) => {
  const [emailValid, setEmailValidity] = useState(false);
  const [passValid, setPassValidity] = useState(false);

  const submit = () => {
    var inputText = document.getElementById("email");
    var passText = document.getElementById("password");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }

    if (passText.value != "") {
      setPassValidity(false);
    } else {
      setPassValidity(true);
    }

    if (!emailValid && !passValid && inputText.value != "" && passText.value != "") alert("Nastavi login");
  };

  return (
    <div className={styles.loginCard}>
      <div className={styles.createAccountHeader}>
        <h4 className={styles.h4}>Prijavite se</h4>
      </div>
      <div className={styles.loginForm}>
        <Input
          type="email"
          placeholder="Unesite Vaš E-mail"
          className={styles.input}
          id="email"
          hasError={emailValid}
        />
        <Input
          type="password"
          placeholder="Unesite Vašu lozinku"
          className={styles.input}
          id="password"
          hasError={passValid}
        />
      </div>
      <div className={styles.createAccountFooter}>
        <div className={styles.registrationButton}>
          <p className={styles.p1}>nemate nalog?</p>
          <a href="/registration" className={styles.p1}>
            registrujete se
          </a>
        </div>
        <LongButton onClick={submit} value="Sledeći korak" type="button" />
      </div>
    </div>
  );
};
