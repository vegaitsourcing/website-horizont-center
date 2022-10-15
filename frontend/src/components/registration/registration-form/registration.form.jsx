import { useState } from "react";

import { RegistrationStepOne } from "../registration-step-one/registration.step.one";
import { RegistrationStepTwo } from "../registration-step-two/registration.step.two";
import { LongButton } from "shared-components";

import styles from "./registration.form.module.scss";

export const RegistrationForm = ({}) => {
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <div className={styles.createAccount}>
      <div className={styles.createAccountHeader}>
        <h4 className={styles.h4}>Napravi profil</h4>
      </div>
      <div className={styles.createAccountBody}>
        <div className={styles.steps}>
          <span className={styles.p1}>1</span>
          <hr className={styles.dottedLine} />
          <span className={styles.p1}>2</span>
          <hr className={styles.dottedLine} />
          <span className={styles.p1}>3</span>
        </div>
        {stepNumber === 1 ? <RegistrationStepOne /> : <RegistrationStepTwo />}
      </div>
      <div className={styles.createAccountFooter}>
        <LongButton value="Sledeći korak" type="button" />
      </div>
    </div>
  );
};
