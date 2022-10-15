import React from "react";

import styles from "./registration.step.one.module.scss";
import { Input } from "shared-components";

export const RegistrationStepOne = () => {
  return (
    <div className={styles.registerAccount}>
      <p className={styles.p1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas animi distinctio est sunt. Saepe
        earum id corporis vero voluptatum.
      </p>
      <Input
        id="tipProfila"
        name="tipProfila"
        type="dropdown"
        placeholder="Tip profila*"
        hasError={false}
        options={["Negovatelj", "Negovani"]}
      />
    </div>
  );
};
