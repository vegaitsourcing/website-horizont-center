import { useState, useEffect } from "react";

import { UserForm } from "../user-form/user.form";
import { caregiverFormFields } from "../../hooks/caregiver.form";
import { beneficiaryFormFields } from "../../hooks/beneficiary.form";

import styles from "./registration.step.two.module.scss";

export const RegistrationStepTwo = ({ stepNumber, valueChangedHandler, isFormValid }) => {
  const [userType, setUserType] = useState();

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setUserType(registrationForm.formStep1?.data?.profileType === "Negovani" ? "beneficiary" : "caregiver");
  }, [stepNumber]);

  return (
    <div className={styles.registerAccount}>
      <UserForm
        stepNumber={stepNumber}
        valueChangedHandler={(e, itemType) => valueChangedHandler(e, itemType, userType)}
        isFormValid={isFormValid}
        formInputFields={userType === "caregiver" ? caregiverFormFields : beneficiaryFormFields}
        userFormType={userType}
      />
      <div className={styles.notRobotBox}>
        {/*TODO: <div className={styles.reCaptcha}>not robot</div>*/}
        <div className={styles.notRobotText}>
          <p className={[styles.p1, styles.alignCetner].join(" ")}>
            Slanjem aplikacije prihvatate da budete kontaktirani za razgovor sa sa zainteresovanim osobama za traženje
            pomoći u nezi. Platofrma NEGOVATELJI.RS je namenjena kreiranju zajednice i povezivanju osoba koje pružaju
            pomoć i onih kojima je ta pomoć neophodna i ne preuzima odgovornost za pregovaranje, ugovaranje niti
            kvalitet posla koji nudi aplikant niti uslove rada i proces selekcije koji sprovodi i traži zainteresovana
            strana.
          </p>
        </div>
      </div>
    </div>
  );
};
