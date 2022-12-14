import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, LongButton, Select, TextArea } from "shared-components";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CitiesService } from "pages/api/countriesService";
import { CaregiversService } from "pages/api/caregiversService";
import { BeneficiariesService } from "pages/api/beneficiariesService";
import styles from "./profile.details.edit.module.scss";

export const ProfileDetailsEdit = ({ profile, editList, profileType }) => {
  const router = useRouter();
  const [cityOptions, setCityOptions] = useState({});
  const [editedData, setEditedData] = useState({});

  async function prepareCityOptions() {
    const serbianCities = await CitiesService.getAllSerbianCities();
    const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
    setCityOptions(serbianCityOptions);
  }

  async function editProfile() {
    if (!validateInputs()) return false;
    if (profileType === "caregiver") {
      await CaregiversService.editCaregiverById(profile.id, editedData).then(() => {
        updateAuthUserImage();
        router.reload();
      });
    }
    await BeneficiariesService.editBeneficiaryById(profile.id, editedData).then(() => {
      updateAuthUserImage();
      router.reload();
    });
  }

  useEffect(() => {
    prepareCityOptions();
  }, [profile, profileType]);

  const handleValueChange = (value, field, user) => {
    const updatedValue = user ? { user: { [field]: value } } : { [field]: value };
    setEditedData({ ...editedData, ...updatedValue });
  };

  const imageChangeHandler = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (upload) => {
      setEditedData({ ...editedData, image: upload.target.result });
    };
  };

  const openFileExplorer = () => {
    const fileupload = document.getElementById("image");
    fileupload.click();
  };

  const updateAuthUserImage = () => {
    if (editedData.image) {
      const user = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("user", JSON.stringify({ ...user, image: editedData.image }));
    }
  };

  const displayErrorMessage = (item) => {
    if (item.fieldName === "second_phone_number") return "";
    const validateItem = editedData.user?.[item.fieldName] ?? editedData[item.fieldName];
    return validateItem === "" ? "Ovo polje je obavezno" : "";
  };

  const validateInputs = () => {
    for (let field in editedData) {
      const user = editedData.user ?? {};
      if (editedData[field] === "") return false;
      if (field === "description" && (editedData[field].length > 500 || editedData[field].length < 100)) return false;
      for (let item in user) {
        if (item !== "second_phone_number" && user[item] === "") return false;
      }
    }
    return true;
  };

  const renderInput = (item) => {
    if (item.fieldName === "description") {
      return (
        <div>
          <TextArea
            defaultValue={profile.description}
            onChange={(e) => handleValueChange(e, "description")}
          />
        </div>
      );
    }
    if (item.fieldName === "social_networks") {
      return item.fields.map((element, index) => {
        return (
          <div key={index}>
            <Input
              id={element.fieldName}
              type={item.type}
              name={element.fieldName}
              placeholder={element.placeholder}
              inputValue={profile[element.fieldName]}
              onChange={(e) => handleValueChange(e, element.fieldName)}
              isValidInput={true}
            />
          </div>
        );
      });
    }
    return (
      <div className={styles.p1}>
        <Input
          id={item.fieldName}
          type={item.type}
          name={item.fieldName}
          placeholder={item.placeholder}
          inputValue={profile.user[item.fieldName] ?? profile[item.fieldName]}
          onChange={(e) => handleValueChange(e, item.fieldName, item.user)}
          errorMessage={displayErrorMessage(item)}
        />
      </div>
    );
  };

  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.userDetailsSection}>
        <div className={styles.imageSection}>
          <img
            className={[styles.roundedImage, styles.editEnabled].join(" ")}
            src={editedData.image ?? profile.image ?? "/images/profile.image.placeholder.svg"}
            alt="profile image"
            onClick={openFileExplorer}
          />
          <div className={styles.editImageOverlay}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.editImgIcon} />
          </div>
          <input
            className={styles.imageUpload}
            onChange={imageChangeHandler}
            type="file"
            accept="image/png, image/gif, image/jpeg"
            id="image"
            style={{ display: "none" }}
          />
          <div className={styles.profileName}>{`${profile.user.first_name} ${profile.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            <Select
              className={styles.editCityInput}
              id={"city"}
              type={"dropdown"}
              name={"city"}
              options={cityOptions}
              inputValue={profile.city}
              onChange={(e) => handleValueChange(e, "city")}
            />
          </div>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.userDetails}>
            {editList.map((item, index) => {
              return (
                <div key={index} className={[styles.elementInfo, styles[item.styleClass]].join(" ")}>
                  <h5 className={styles.h5}>
                    {item.title}
                    <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} />
                  </h5>
                  {renderInput(item)}
                </div>
              );
            })}
          </div>
          <LongButton value="Sačuvaj izmene" type="filled" onClick={editProfile} />
        </div>
      </div>
    </div>
  );
};
