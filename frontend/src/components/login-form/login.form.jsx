import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./login.form.module.scss";
import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "../../pages/api/authService";

export const LoginForm = () => {
  const router = useRouter();

  const [responseError, setResponseError] = useState(null);

  const [formData, setFormData] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const validateFormData = () => {
    let isEmailValid = RegExp("^(.+)@(.+)$").test(formData.email.value);
    let isPasswordValid = formData.password.value ? true : false;

    setFormData({
      email: { value: formData.email.value, isValid: isEmailValid },
      password: { value: formData.password.value, isValid: isPasswordValid },
    });
  };

  async function submit() {
    try {
      validateFormData();

      if (formData.email.isValid && formData.password.isValid) {
        await AuthService.login(formData.email.value, formData.password.value);
        await router.push("/");
      }
    } catch (error) {
      setResponseError(error.response.data.errors.non_field_errors);
    }
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
        <h4 className={styles.h4}>Prijavite se</h4>
      </div>
      <div className={styles.loginFormInputs}>
        <Input
          className={styles.fieldWrapper}
          id="email"
          type="email"
          label="E-mail adresa"
          placeholder="Unesite Vašu E-mail adresu"
          errorMessage={!formData.email.isValid ? "Unesite ispravnu email adresu" : null}
          valueChangedHandler={(value) => updateFormData({ email: { value: value, isValid: formData.email.isValid } })}
        />
        <Input
          className={styles.fieldWrapper}
          id="password"
          type="password"
          label="Lozinka"
          placeholder="Unesite Vašu lozinku"
          errorMessage={!formData.password.isValid ? "Lozinka ne sme biti prazna" : null}
          valueChangedHandler={(value) =>
            updateFormData({ password: { value: value, isValid: formData.password.isValid } })
          }
        />
        {responseError && <div className={`${styles.errorText} ${styles.p1}`}>{responseError}.</div>}
      </div>
      <div className={styles.loginFormButtons}>
        <div className={styles.registrationLinkWrapper}>
          <p className={styles.registrationQuestion}>nemate nalog?</p>
          <Link href="/registration" className={styles.registrationLink}>
            REGISTRUJTE SE
          </Link>
        </div>
        <LongButton className={styles.loginButton} onClick={submit} value="Login" type="button" />
      </div>
    </div>
  );
};
