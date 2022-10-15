import { useState, useCallback, useEffect } from "react";

import { RegistrationStepOne } from "../registration-step-one/registration.step.one";
import { RegistrationStepTwo } from "../registration-step-two/registration.step.two";
import { ImageUpload } from "shared-components";
import { LongButton } from "shared-components";

import styles from "./registration.form.module.scss";

export const RegistrationForm = ({}) => {
  const [stepNumber, setStepNumber] = useState(1);

  useEffect(() => {
    console.log("Step number", stepNumber);
  }, [stepNumber]);

  const switchToStep = (direction) => {
    direction === "next"
      ? stepNumber !== 3
        ? setStepNumber(++stepNumber)
        : 0
      : stepNumber !== 1
      ? setStepNumber(--stepNumber)
      : 0;
  };

  const renderStep = () => {
    console.log("render step");
    console.log(stepNumber);
    if (stepNumber === 1) {
      return <RegistrationStepOne />;
    }
    if (stepNumber === 2) {
      return <RegistrationStepTwo />;
    }
    return <ImageUpload />;
  };

  return (
    <div className={styles.createAccount}>
      {console.log("render")}
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
