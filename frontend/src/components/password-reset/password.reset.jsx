import React from "react";
import { PasswordForgotForm, PasswordResetForm } from "./components";

import styles from "./password.reset.module.scss";

export const PasswordReset = ({ hash }) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormHeader}>
        <h4 className={styles.h4}>{hash ? "Resetuj lozinku" : "Zaboravljena lozinka"}</h4>
      </div>
      {hash ? <PasswordResetForm /> : <PasswordForgotForm />}
    </div>
  );
};
