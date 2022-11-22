import React, { useState, useEffect } from "react";
import { TextArea } from "shared-components";
import styles from "./registration.step.three.module.scss";

export const RegistrationStepThree = ({ stepNumber, valueChangedHandler }) => {
  const defaultImg = "../../images/profile.image.placeholder.svg";
  const [isValidImg, setIsValidImg] = useState(false);
  const [formStep3Data, setFormStep3Data] = useState({});

  useEffect(() => {
    const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
    setFormStep3Data(registrationForm?.formStep3);
    validateInputs(registrationForm?.formStep3);
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
  };

  const openFileExplorer = () => {
    const fileupload = document.getElementById("image");
    fileupload.click();
  };

  return (
    <div className={styles.imageUpload}>
      <div className={[styles.imageField, !isValidImg ? styles.error : ""].join(" ")}>
        <img
          src={formStep3Data?.data?.image !== "" ? formStep3Data?.data?.image : defaultImg}
          alt="profile image"
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
      <TextArea defaultValue={formStep3Data?.data?.description ?? ""} valueChangedHandler={valueChangedHandler} />
    </div>
  );
};
