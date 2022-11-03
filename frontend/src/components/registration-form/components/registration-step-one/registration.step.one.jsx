import { useState, useEffect } from "react";

import styles from "./registration.step.one.module.scss";
import { Input } from "shared-components";

export const RegistrationStepOne = ({ stepNumber, valueChangedHandler, isFormValid }) => {
  const [formStep1Data, setFormStep1Data] = useState();

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormStep1Data(registrationForm.formStep1);
  }, [stepNumber]);

  return (
    <div className={styles.registerAccount}>
      <p className={styles.p1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas animi distinctio est sunt. Saepe
        earum id corporis vero voluptatum.
      </p>
      <div className={styles.profileOption}>
        <Input
          id="tipProfila"
          name="tipProfila"
          type="dropdown"
          placeholder="Tip profila*"
          hasError={false}
          options={["Negovatelj", "Negovani"]}
          inputValue={formStep1Data?.data?.profileType}
          valueChangedHandler={(e) => valueChangedHandler(e)}
          isValidInput={isFormValid}
        />
      </div>
    </div>
  );
};
