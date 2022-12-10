import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input, LongButton } from "shared-components";
import { AuthService } from "pages/api/authService";
import { isValidInput } from "../../utils/formValidation";

import styles from "./password.reset.form.module.scss";

export const PasswordResetForm = ({ hash }) => {
  const [passwordErrors, setPasswordErrors] = useState("");
  const [isSuccessfulReset, setIsSuccessfulReset] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    setPasswordErrors("");
  }, [formData]);

  async function resetPassword() {
    try {
      await AuthService.resetPassword(hash, formData.password).then((response) => {
        if (response.status === 200) {
          setIsSuccessfulReset(true);
        }
      });
    } catch (error) {
      setPasswordErrors(error.response?.data?.errors?.non_field_errors?.join("\n"));
    }
  }

  const updateFormData = (newFormData, type) => {
    setFormData({ ...formData, [type]: newFormData });
  };

  return (
    <>
      {isSuccessfulReset ? (
        <div className={styles.passwordResetForm}>
          <div className={styles.formInputs}>
            <p className={styles.p1}>
              Lozinka je uspešno izmenjena! Sada možete da se prijavljujete sa novom lozinkom.
            </p>
          </div>
          <div className={styles.formButtons}></div>
        </div>
      ) : (
        <div className={styles.passwordResetForm}>
          <div className={styles.formInputs}>
            <div className={styles.formGrid}>
              <Input
                className={styles.fieldWrapper}
                id="password"
                type="password"
                label="Nova lozinka"
                placeholder="Unesite Vašu novu lozinku"
                valueChangedHandler={(value) => updateFormData(value, "password")}
                errorMessage={isValidInput(formData, "password")}
              />
              <Input
                className={styles.fieldWrapper}
                id="passwordConfirm"
                type="password"
                label="Potvrdi novu lozinku"
                placeholder="Potvrdite Vašu novu lozinku"
                valueChangedHandler={(value) => updateFormData(value, "passwordConfirm")}
                errorMessage={isValidInput(formData, "passwordConfirm")}
              />
            </div>
            {passwordErrors.length > 0 ? (
              <p className={[styles.p1, styles.error].join(" ")}>
                {passwordErrors}. Molimo Vas da pokušate ponovo da kliknete na e-mail za reset lozinke. Ukoliko dobijate
                istu grešku pošaljite ponovo zahtev za promenu lozinke.
              </p>
            ) : null}
          </div>
          <div className={styles.formButtons}>
            <div className={styles.registrationLinkWrapper}>
              <Link href="/login" className={styles.registrationLink}>
                Nazad na Prijavu
              </Link>
            </div>
            <LongButton
              className={styles.loginButton}
              onClick={resetPassword}
              value={"Resetuj lozinku"}
              type="button"
              isDisabled={
                isValidInput(formData, "password").length > 0 || isValidInput(formData, "passwordConfirm").length > 0
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
