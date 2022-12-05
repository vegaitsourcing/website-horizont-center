import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "../../pages/api/authService";

import styles from "./password.reset.module.scss";

export const PasswordReset = ({ hash }) => {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showResetSucces, setShowResetSuccess] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState("");
  const [passwordConfirmErrors, setPasswordConfirmErrors] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    validatePassword("password");
    validatePassword("passwordConfirm");
  }, [formData]);

  async function submit() {
    try {
      await AuthService.login(formData.email, formData.password);
      await router.push("/");
    } catch (error) {
      console.log("Handle form validation errors:", error.response.data); // TODO
    }
  }

  async function resetPassword() {
    await AuthService.resetPassword(hash, formData.password).then((response) => {
      if (response.status === 200) {
        setShowResetSuccess(true);
      }
    });
  }

  async function forgotPassword() {
    await AuthService.forgotPassword(formData.email).then((response) => {
      if (response.status === 200) {
        setShowConfirm(true);
      }
    });
  }

  const validatePassword = (type) => {
    let password = "";
    let passwordConfirm = "";

    console.log("password", formData.password);
    console.log("confirmPassword", formData.passwordConfirm);

    if (type === "password") {
      if (formData.password.length < 8) {
        password = "Lozinka mora imati najmanje 6 karaktera";
      }
    }
    if (type === "passwordConfirm") {
      if (formData.passwordConfirm.length < 8) {
        passwordConfirm = "Lozinka mora imati najmanje 6 karaktera";
      }
    }
    if (formData.password !== formData.passwordConfirm) {
      password = password + "\nLozinke moraju biti jednake";
      passwordConfirm = passwordConfirm + "\nLozinke moraju biti jednake";
    }
    console.log(password);
    console.log(passwordConfirm);
    if (type === "password") return setPasswordErrors(password);
    return setPasswordConfirmErrors(passwordConfirm);
  };

  const updateFormData = (newFormData, type) => {
    setFormData({ ...formData, [type]: newFormData });
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormHeader}>
        <h4 className={styles.h4}>Resetuj lozinku</h4>
      </div>
      {showConfirm ? (
        <div className={styles.confirmEmail}>
          <p>
            Vaš zahtev za resetovanje lozinke je poslat na email adresu.{" "}
            <span className={styles.email}>{formData.email}</span>. Molimo Vas da ispratite uputsva u tom e-mailu kako
            biste resetovali vašu lozinku.
          </p>
        </div>
      ) : hash ? (
        <div className={styles.loginFormInputs}>
          {showResetSucces ? (
            <div className={styles.confirmEmail}>
              <p>Lozinka je uspešno izmenjena! Možete se prijaviti sa novom lozinkom.</p>
            </div>
          ) : (
            <div>
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
          )}
        </div>
      ) : (
        <div className={styles.loginFormInputs}>
          <Input
            className={styles.fieldWrapper}
            id="email"
            type="email"
            label="E mail adresa"
            placeholder="Unesite Vašu E-mail adresu"
            valueChangedHandler={(value) => updateFormData({ email: value })}
          />
        </div>
      )}
      <div className={styles.loginFormButtons}>
        <div className={styles.registrationLinkWrapper}>
          <Link href="/login" className={styles.registrationLink}>
            Nazad na Prijavu
          </Link>
        </div>
        <LongButton
          className={styles.loginButton}
          onClick={hash ? resetPassword : forgotPassword}
          value={hash ? "Resetuj lozinku" : "Pošalji zahtev"}
          type="button"
          isDisabled={passwordErrors.length > 0 || passwordConfirmErrors.length > 0}
        />
      </div>
    </div>
  );
};
