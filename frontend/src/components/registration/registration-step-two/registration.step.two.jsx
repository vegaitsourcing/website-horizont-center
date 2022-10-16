import { useState, useEffect } from "react";
import { Input } from "shared-components";

import { CaregiverForm } from "../caregiver-form/caregiver.form";
import { BeneficiaryForm } from "../beneficiary-form/beneficiary.form";

import styles from "./registration.step.two.module.scss";

export const RegistrationStepTwo = ({ stepNumber, valueChangedHandler }) => {
  const [userType, setUserType] = useState();

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setUserType(registrationForm.formStep1?.data?.profileType);
  }, [stepNumber]);

  return (
    <div className={styles.registerAccount}>
      {userType === "Negovatelj" ? (
        <CaregiverForm
          stepNumber={stepNumber}
          valueChangedHandler={(e, itemType) => valueChangedHandler(e, itemType)}
        />
      ) : (
        <BeneficiaryForm
          stepNumber={stepNumber}
          valueChangedHandler={(e, itemType) => valueChangedHandler(e, itemType)}
        />
      )}
      <div className={styles.notRobotBox}>
        {/*TODO: <div className={styles.reCaptcha}>not robot</div>*/}
        <div className={styles.notRobotText}>
          <p className={styles.p1}>
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
