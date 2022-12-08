import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./login.form.module.scss";
import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "../../pages/api/authService";
import { isValidInput } from "./loginFormValidation";

export const LoginForm = () => {
  const router = useRouter();
  const [responseError, setResponseError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setResponseError("");
  }, [formData]);

  async function login() {
    try {
      await AuthService.login(formData.email, formData.password);
      await router.push("/");
    } catch (error) {
      setResponseError(error.response?.data?.errors?.non_field_errors);
    }
  }

  const updateFormData = (newFormData, type) => {
    setFormData({ ...formData, [type]: newFormData });
  };

  return (
    <div className={styles.loginFormWrapper}>
      <div className={styles.loginForm}>
        <div className={styles.loginFormHeader}>
          <h4 className={styles.h4}>Prijavite se</h4>
        </div>
        <div className={styles.loginFormInputs}>
          <div className={styles.formGrid}>
            <Input
              className={styles.fieldWrapper}
              id="email"
              type="email"
              label="E-mail adresa"
              placeholder="Unesite Vašu E-mail adresu"
              valueChangedHandler={(value) => updateFormData(value, "email")}
              errorMessage={isValidInput(formData.email, "email")}
            />
            <Input
              className={styles.fieldWrapper}
              id="password"
              type="password"
              label="Lozinka"
              placeholder="Unesite Vašu lozinku"
              valueChangedHandler={(value) => updateFormData(value, "password")}
              errorMessage={isValidInput(formData.password, "password")}
            />
          </div>
          {responseError && <div className={`${styles.errorText} ${styles.p1}`}>{responseError}.</div>}
        </div>
        <div className={styles.loginFormButtons}>
          <div className={styles.registrationLinkWrapper}>
            <p className={styles.registrationQuestion}>nemate nalog?</p>
            <Link href="/registration" className={styles.registrationLink}>
              REGISTRUJTE SE
            </Link>
            <p className={styles.registrationQuestion}>Zavoravljena lozinka?</p>
            <Link href="/password-reset" className={styles.registrationLink}>
              RESETUJ LOZINKU
            </Link>
          </div>
          <LongButton
            className={styles.loginButton}
            onClick={login}
            value="Login"
            type="button"
            isDisabled={
              isValidInput(formData.email, "email").length > 0 || isValidInput(formData.password, "password").length > 0
            }
          />
        </div>
      </div>
    </div>
  );
};
