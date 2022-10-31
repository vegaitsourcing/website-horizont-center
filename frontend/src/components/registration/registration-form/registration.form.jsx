import { useState, useCallback, useEffect } from "react";

import { RegistrationStepOne } from "../registration-step-one/registration.step.one";
import { RegistrationStepTwo } from "../registration-step-two/registration.step.two";
import { RegistrationStepThree } from "../registration-step-three/registration.step.three";
import authService from "pages/api/authService";
import { LongButton } from "shared-components";

import styles from "./registration.form.module.scss";

export const RegistrationForm = ({}) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [regForm, setRegistrationForm] = useState({
    stepNumber: stepNumber,
    formStep1: { data: {}, isCompleted: false },
    formStep2: { data: {}, isCompleted: false },
    formStep3: { data: {}, isCompleted: false },
  });

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    if (registrationForm !== null) {
      return;
    }
    localStorage.setItem("registrationForm", JSON.stringify(regForm));
    setRegistrationForm(registrationForm);
  }, []);

  const handleRegistrationChange = (newData, form, itemType, userForm) => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    if (form === "formStep1") {
      registrationForm.formStep1 = { data: { profileType: newData }, isCompleted: true };
    }
    if (form === "formStep2") {
      const historyData = registrationForm.formStep2?.data;
      registrationForm.formStep2 = {
        data: { ...historyData, [userForm]: { ...historyData?.[userForm], [itemType]: newData } },
        isCompleted: true,
      };
    }
    if (form === "formStep3") {
      const historyData = registrationForm.formStep3?.data;
      registrationForm.formStep3 = { data: { ...historyData, [itemType]: newData }, isCompleted: true };
    }
    console.log(registrationForm);
    localStorage.setItem("registrationForm", JSON.stringify(registrationForm));
  };

  async function registerUser() {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    const userType = registrationForm.formStep1.data.profileType === "Negovatelj" ? "caregiver" : "beneficiary";
    const formStep2 = registrationForm.formStep2.data[userType];
    const formStep3 = registrationForm.formStep3.data;
    const userData = {
      user: {
        email: formStep2.email,
        first_name: formStep2.first_name,
        last_name: formStep2.last_name,
        phone_number: formStep2.phone_number,
        password: formStep2.password,
      },
      gender: formStep2.gender === "muški" ? "male" : "female",
      postal_code: parseInt(formStep2.postal_code),
      city: formStep2.city,
      description: formStep3.description,
      birthdate: formStep2.birthdate,
      work_application: formStep2.work_application,
      experience: formStep2.experience,
      weekly_days: parseInt(formStep2.weekly_days),
      daily_hours: parseFloat(formStep2.daily_hours),
      image: formStep3.image,
    };
    console.log("Register api");
    console.log(userData);

    return await authService.registerCaregiver(userData, userType);
  }

  const switchToStep = (direction) => {
    if (stepNumber === 3) registerUser();
    direction === "next"
      ? stepNumber !== 3
        ? setStepNumber(++stepNumber)
        : 0
      : stepNumber !== 1
      ? setStepNumber(--stepNumber)
      : 0;
  };

  const renderStep = () => {
    if (stepNumber === 1) {
      return (
        <RegistrationStepOne
          stepNumber={stepNumber}
          valueChangedHandler={(e) => handleRegistrationChange(e, "formStep1")}
        />
      );
    }
    if (stepNumber === 2) {
      return (
        <RegistrationStepTwo
          stepNumber={stepNumber}
          valueChangedHandler={(e, itemType, userForm) => handleRegistrationChange(e, "formStep2", itemType, userForm)}
        />
      );
    }
    return (
      <RegistrationStepThree
        stepNumber={stepNumber}
        valueChangedHandler={(e, itemType) => handleRegistrationChange(e, "formStep3", itemType)}
      />
    );
  };

  return (
    <div className={styles.createAccount}>
      <div className={styles.createAccountHeader}>
        <h4 className={styles.h4}>Napravi profil</h4>
      </div>
      <div className={styles.createAccountBody}>
        <div className={styles.steps}>
          <span className={stepNumber === 1 ? styles.p1 : styles.p2}>1</span>
          <hr className={styles.dottedLine} />
          <span className={stepNumber === 2 ? styles.p1 : styles.p2}>2</span>
          <hr className={styles.dottedLine} />
          <span className={stepNumber === 3 ? styles.p1 : styles.p2}>3</span>
        </div>
        {renderStep()}
      </div>
      <div className={styles.createAccountFooter}>
        <LongButton value="Prethodni korak" type="button" direction="left" onClick={() => switchToStep("back")} />
        <LongButton value="Sledeći korak" type="button" direction="right" onClick={() => switchToStep("next")} />
      </div>
    </div>
  );
};
