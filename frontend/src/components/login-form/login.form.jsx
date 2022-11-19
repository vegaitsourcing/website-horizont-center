import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./login.form.module.scss";
import { Input, LongButton } from "shared-components";
import Link from "next/link";
import AuthService from "../../pages/api/authService";

export const LoginForm = () => {
  const router = useRouter();
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
          placeholder="Unesite Vašu E-mail adresu"
          valueChangedHandler={(value) => updateFormData({ email: value })}
        />
        <Input
          className={styles.fieldWrapper}
          id="password"
          type="password"
          placeholder="Unesite Vašu lozinku"
          valueChangedHandler={(value) => updateFormData({ password: value })}
        />
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
