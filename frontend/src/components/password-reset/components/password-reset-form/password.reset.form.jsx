import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "pages/api/authService";

import styles from "./password.reset.form.module.scss";

export const PasswordResetForm = () => {
  const [passwordResetSucces, setPasswordResetSuccess] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState("");
  const [passwordConfirmErrors, setPasswordConfirmErrors] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    validatePassword();
    validatePasswordConfirmation();
  }, [formData]);

  async function resetPassword() {
    await AuthService.resetPassword(hash, formData.password).then((response) => {
      if (response.status === 200) {
        setPasswordResetSuccess(true);
      }
    });
  }

  const updateFormData = (newFormData, type) => {
    console.log({ ...formData, [type]: newFormData });
    setFormData({ ...formData, [type]: newFormData });
  };

  const validatePassword = (type) => {
    let password = "";
    if (formData.password.length < 8) {
      password = "Lozinka mora imati najmanje 6 karaktera";
    }
    if (formData.password !== formData.passwordConfirm) {
      password = password + "\nLozinke moraju biti jednake";
    }
    setPasswordErrors(password);
  };

  const validatePasswordConfirmation = () => {
    let passwordConfirm = "";
    if (formData.passwordConfirm.length < 8) {
      passwordConfirm = "Lozinka mora imati najmanje 6 karaktera";
    }
    if (formData.password !== formData.passwordConfirm) {
      passwordConfirm = passwordConfirm + "\nLozinke moraju biti jednake";
    }
    setPasswordConfirmErrors(passwordConfirm);
  };

  return (
    <div className={styles.passwordResetForm}>
      {passwordResetSucces ? (
        <div className={styles.loginFormInputs}>
          <p>Lozinka je uspešno izmenjena! Pokušajte da se prijavite s sa novom lozinkom.</p>
        </div>
      ) : (
        <div>
          <div className={styles.loginFormInputs}>
            <Input
              className={styles.fieldWrapper}
              id="password"
              type="password"
              label="Nova lozinka"
              placeholder="Unesite Vašu novu lozinku"
              valueChangedHandler={(value) => updateFormData(value, "password")}
              errorMessage={passwordErrors}
            />
            <Input
              className={styles.fieldWrapper}
              id="passwordConfirm"
              type="password"
              label="Potvrdi novu lozinku"
              placeholder="Potvrdite Vašu novu lozinku"
              valueChangedHandler={(value) => updateFormData(value, "passwordConfirm")}
              errorMessage={passwordConfirmErrors}
            />
          </div>
          <div className={styles.loginFormButtons}>
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
              isDisabled={passwordErrors.length > 0 || passwordConfirmErrors.length > 0}
            />
          </div>
        </div>
      )}
    </div>
  );
};
