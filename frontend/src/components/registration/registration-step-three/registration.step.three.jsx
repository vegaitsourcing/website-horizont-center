import React, { useState, Component } from "react";

import styles from "./registration.step.three.module.scss";
export const RegistrationStepThree = () => {
  const [img, setImg] = useState("../../images/default_profile_image.svg");
  const [countValue, setCount] = useState(0);

  const count = () => {
    var field = document.getElementById("aboutField");
    setCount(field.value.length);
  };

  function checkIt() {
    // Check if the number of files
    // is not zero
    if (target.value.length) {
      alert("Files Loaded");
    }
    // Alert the user if the number
    // of file is zero
    else {
      alert("Cancel clicked");
    }
    document.body.onfocus = null;
    console.log("checked");
  }

  const changeHandler = (event) => {
    if (event?.target?.files.length > 0) setImg(URL.createObjectURL(event.target.files[0]));
  };

  const openFileExplorer = () => {
    var fileupload = document.getElementById("imgupload");

    fileupload.click();
  };

  return (
    <div className={styles.imageUpload}>
      <div className={styles.imageField}>
        <img src={img} className={styles.image} />
        <input
          onChange={changeHandler}
          type="file"
          accept="image/png, image/gif, image/jpeg"
          id="imgupload"
          style={{ display: "none" }}
        />
        <p onClick={openFileExplorer} className={styles.text}>
          Dodaj fotografiju
        </p>
      </div>
      <div className={styles.input}>
        <textarea
          onKeyUp={count}
          name="about"
          id="aboutField"
          className={styles.textarea}
          placeholder="Dodante informacije"
        ></textarea>
        <p id="counter" className={styles.charCount}>
          {countValue}/500 karaktera
        </p>
      </div>
    </div>
  );
};
