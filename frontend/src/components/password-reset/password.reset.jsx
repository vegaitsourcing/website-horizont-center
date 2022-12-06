import React from "react";
import { PasswordForgotForm, PasswordResetForm } from "./components";

import styles from "./password.reset.module.scss";

export const PasswordReset = ({ hash }) => {
  return (
    <div className={styles.passwordResetWrapper}>
      <div className={styles.passwordReset}>
        <div className={styles.passwordResetHeader}>
          <h4 className={styles.h4}>{hash ? "Resetuj lozinku" : "Zaboravljena lozinka"}</h4>
        </div>
        {hash ? <PasswordResetForm hash={hash} /> : <PasswordForgotForm />}
      </div>
    </div>
  );
};
