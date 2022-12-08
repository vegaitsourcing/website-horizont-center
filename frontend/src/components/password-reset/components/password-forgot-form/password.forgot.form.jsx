import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Input, LongButton } from "shared-components";
import { isValidInput } from "../../utils/formValidation";
import AuthService from "pages/api/authService";

import styles from "./password.forgot.form.module.scss";

export const PasswordForgotForm = () => {
  const [emailErrors, setEmailErrors] = useState("");
  const [hasSuccessfulPasswordForgot, setHasSuccessfulPasswordForgot] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  useEffect(() => {
    setEmailErrors("");
  }, [formData]);

  async function forgotPassword() {
    try {
      await AuthService.forgotPassword(formData.email).then((response) => {
        if (response.status === 200) {
          return setHasSuccessfulPasswordForgot(true);
        }
      });
    } catch (error) {
      if (error.response.data.errors?.email?.join("").includes("blank")) return;
      setEmailErrors(error.response.data.errors.email.join("\n"));
    }
  }

  return (
    <>
      {hasSuccessfulPasswordForgot ? (
        <div className={styles.passwordForgotForm}>
          <div className={styles.formInputs}>
            <p className={styles.p1}>
              Vaš zahtev za promenu lozinke je poslat na email adresu
              <span className={styles.email}> {formData.email}</span>. Molimo Vas da ispratite uputsva u tom e-mailu
              kako biste resetovali vašu lozinku.
            </p>
          </div>
          <div className={styles.formButtons}></div>
        </div>
      ) : (
        <div className={styles.passwordForgotForm}>
          <div className={styles.formInputs}>
            <div className={styles.formGrid}>
              <Input
                className={styles.fieldWrapper}
                id="email"
                type="email"
                label="E mail adresa"
                placeholder="Unesite Vašu E-mail adresu"
                valueChangedHandler={(value) => setFormData({ email: value })}
                errorMessage={isValidInput(formData.email, "email")}
              />
            </div>
            <p className={styles.p1}>
              Unesite Vašu e-mail adresu na koju želite da dobijete zahtev za promenu lozinke.
            </p>
            {emailErrors.length > 0 ? <p className={[styles.p1, styles.error].join(" ")}>{emailErrors}</p> : null}
          </div>
          <div className={styles.formButtons}>
            <div className={styles.registrationLinkWrapper}>
              <Link href="/login" className={styles.registrationLink}>
                Nazad na Prijavu
              </Link>
            </div>
            <LongButton
              className={styles.loginButton}
              onClick={forgotPassword}
              value={"Pošalji zahtev"}
              type="button"
              isDisabled={isValidInput(formData.email, "email").length > 0}
            />
          </div>
        </div>
      )}
    </>
  );
};
