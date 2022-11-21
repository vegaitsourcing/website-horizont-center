import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { Input, TextArea, LongButton } from "shared-components";
import CitiesService from "pages/api/countriesService";
import { CaregiversService } from "pages/api/caregiversService";
import { BeneficiariesService } from "pages/api/beneficiariesService";

import styles from "./profile.details.edit.module.scss";

export const ProfileDetailsEdit = ({ profile, editList, userType }) => {
  const router = useRouter();
  const [cityOptions, setCityOptions] = useState({});
  const [editedData, setEditedData] = useState({});

  async function prepareCityOptions() {
    const serbianCities = await CitiesService.getAllSerbianCities();
    const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
    setCityOptions(serbianCityOptions);
  }

  const handleValueChange = (value, field) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const validateInputs = () => {
    for (let field in editedData) {
      if (editedData[field] === "") {
        return false;
      }
      if (field === "description" && (500 <= editedData[field].length || editedData[field].length <= 100)) {
        return false;
      }
    }
    return true;
  };

  async function editProfile() {
    if (validateInputs() == false) return false;
    if (userType === "caregiver") {
      await CaregiversService.editCaregiverById(profile.id, editedData).then(() => {
        router.reload();
      });
    }
    await BeneficiariesService.editBeneficiaryById(profile.id, editedData).then(() => {
      router.reload();
    });
  }

  useEffect(() => {
    prepareCityOptions();
    setEditedData({
      first_name: profile.user.first_name,
      last_name: profile.user.last_name,
      city: profile.city,
      work_application: profile.work_application,
      description: profile.description,
      phone_number: profile.user.phone_number,
      second_phone_number: profile.user.second_phone_number,
      email: profile.user.email,
      facebook_url: profile.facebook_url,
      instagram_url: profile.instagram_url,
      experience: profile.experience,
      weekly_days: profile.weekly_days,
      daily_hours: profile.daily_hours,
    });
  }, [profile, userType]);

  const renderInput = (item) => {
    if (item.fieldName === "description") {
      return (
        <div>
          <TextArea
            defaultValue={profile.description}
            valueChangedHandler={(e) => handleValueChange(e, "description")}
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
              valueChangedHandler={(e) => handleValueChange(e, element.fieldName)}
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
          valueChangedHandler={(e) => handleValueChange(e, item.fieldName)}
          errorMessage={editedData[item.fieldName] === "" ? "Ovo polje je obavezno" : ""}
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
            src={profile.image ?? "/images/profile.image.placeholder.svg"}
            alt="profile image"
          />
          <div className={styles.editImageOverlay}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.editImgIcon} />
          </div>
          <div className={styles.profileName}>{`${profile.user.first_name} ${profile.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            <Input
              className={styles.editCityInput}
              id={"city"}
              type={"dropdown"}
              name={"city"}
              options={cityOptions}
              inputValue={profile.city}
              valueChangedHandler={(e) => handleValueChange(e, "city")}
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
