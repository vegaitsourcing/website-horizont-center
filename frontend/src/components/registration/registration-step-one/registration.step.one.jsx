import { useState, useEffect } from "react";

import styles from "./registration.step.one.module.scss";
import { Input } from "shared-components";

export const RegistrationStepOne = () => {
  const [userType, setUserType] = useState("");

  // function setUserTypeFunction(e) {
  //   console.log("new user type");
  //   console.log(e);
  // }

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    console.log(registrationForm);
    registrationForm.push({ userType: userType });
    localStorage.setItem("registrationForm", JSON.stringify(registrationForm));
  }, [userType]);

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
          valueChangedHandler={(e) => setUserType(e)}
        />
      </div>
    </div>
  );
};
