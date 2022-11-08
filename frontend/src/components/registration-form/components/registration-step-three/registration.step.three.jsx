import React, { useState, useEffect } from "react";

import styles from "./registration.step.three.module.scss";

export const RegistrationStepThree = ({ stepNumber, valueChangedHandler }) => {
  const defaultImg = "../../images/default_profile_image.svg";
  const [countValue, setCount] = useState(0);
  const [isValidImg, setIsValidImg] = useState(false);
  const [isValidTextArea, setIsValidTextArea] = useState(false);
  const [formStep3Data, setFormStep3Data] = useState();

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormStep3Data(registrationForm?.formStep3);
    validateInputs(registrationForm?.formStep3);
    setCount(registrationForm?.formStep3.data.description.length);
  }, [stepNumber]);

  const changeHandler = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (upload) => {
      valueChangedHandler(upload.target.result, "image");
      setIsValidImg(true);
      setFormStep3Data({ data: { image: upload.target.result } });
    };
  };

  const validateInputs = (regForm) => {
    if (regForm.data.image !== "") {
      setIsValidImg(true);
    }
    if (regForm.data.description.length >= 100) {
      setIsValidTextArea(true);
    }
  };

  const openFileExplorer = () => {
    var fileupload = document.getElementById("image");
    fileupload.click();
  };

  const count = () => {
    var field = document.getElementById("description");
    setCount(field.value.length);
    setIsValidTextArea(field.value.length >= 100 ? true : false);
    valueChangedHandler(field.value, "description");
  };

  return (
    <div className={styles.imageUpload}>
      <div className={[styles.imageField, !isValidImg ? styles.error : ""].join(" ")}>
        <img
          src={formStep3Data?.data?.image !== "" ? formStep3Data?.data?.image : defaultImg}
          className={styles.image}
        />
        <input
          onChange={changeHandler}
          type="file"
          accept="image/png, image/gif, image/jpeg"
          id="image"
          style={{ display: "none" }}
        />
        <p onClick={openFileExplorer} className={[styles.text, !isValidImg ? styles.error : ""].join(" ")}>
          Dodaj fotografiju
        </p>
      </div>
      <div className={styles.input}>
        <textarea
          id="description"
          name="description"
          onKeyUp={count}
          className={[styles.textarea, !isValidTextArea ? styles.error : ""].join(" ")}
          placeholder="Dodante informacije"
          defaultValue={formStep3Data?.data?.description}
        ></textarea>
        <p id="counter" className={[styles.charCount, !isValidTextArea ? styles.error : ""].join(" ")}>
          <span>{countValue}/500 karaktera</span>
          <br />
          {!isValidTextArea ? <span className={styles.textError}>Potrebno je uneti minimum 100 karaktera</span> : ""}
        </p>
      </div>
    </div>
  );
};
