import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "../../pages/api/authService";

import styles from "./password.reset.module.scss";

export const PasswordReset = ({ hash }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function submit() {
    try {
      await AuthService.login(formData.email, formData.password);
      await router.push("/");
    } catch (error) {
      console.log("Handle form validation errors:", error.response.data); // TODO
    }
  }

  async function forgotPassword() {
    await AuthService.forgotPassword(formData.email).then((response) => {
      if (response.status === 200) {
        setShowConfirm(true);
      }
    });
  }

  const updateFormData = useCallback(
    (newFormData) => {
      const updatedFormData = { ...formData, ...newFormData };
      setFormData(updatedFormData);
    },
    [formData]
  );

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
          <Input
            className={styles.fieldWrapper}
            id="email"
            type="email"
            label="Nova lozinka"
            placeholder="Unesite Vašu novu lozinku"
            valueChangedHandler={(value) => updateFormData({ email: value })}
          />
          <Input
            className={styles.fieldWrapper}
            id="password"
            type="password"
            label="Potvrdi novu lozinku"
            placeholder="Potvrdite Vašu novu lozinku"
            valueChangedHandler={(value) => updateFormData({ password: value })}
          />
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
          onClick={forgotPassword}
          value={showPassword ? "Potvrdi lozinku" : "Posalji zahtev"}
          type="button"
        />
      </div>
    </div>
  );
};
