import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { Input } from "shared-components";
import CitiesService from "pages/api/countriesService";

import styles from "./profile.details.module.scss";

export const ProfileDetails = ({ profile, editList, authUser }) => {
  const [editEnabled, setEditEnabled] = useState(true);
  const [cityOptions, setCityOptions] = useState({});

  async function prepareCityOptions() {
    const serbianCities = await CitiesService.getAllSerbianCities();
    const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
    setCityOptions(serbianCityOptions);
  }

  const handleValueChange = (value) => {
    console.log("New value:", value);
  };

  useEffect(() => {
    if (profile.id === authUser.id) {
      setEditEnabled(true);
    }
    prepareCityOptions();
  }, [profile, authUser]);

  console.log("EDIT enabled:", editEnabled);

  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.userDetailsSection}>
        <div className={styles.imageSection}>
          <img
            className={[styles.roundedImage, editEnabled ? styles.editEnabled : ""].join(" ")}
            src={profile.image ?? "/images/profile.image.placeholder.svg"}
            alt="profile image"
          />
          {editEnabled ? (
            <div className={styles.editImageOverlay}>
              <FontAwesomeIcon icon={faPenToSquare} className={styles.editImgIcon} />
            </div>
          ) : null}
          <div className={styles.profileName}>{`${profile.user.first_name} ${profile.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            {editEnabled ? (
              <Input
                className={styles.editCityInput}
                id={"city"}
                type={"dropdown"}
                name={"first_name"}
                options={cityOptions}
                inputValue={profile.city}
                valueChangedHandler={(e) => handleValueChange(e)}
                isValidInput={true}
              />
            ) : (
              <div>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <span className={styles.city}>{profile.city}</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.descriptionSection}>
          <div className={`${styles.p2} ${styles.createdDate}`}>
            {new Date(profile.user.created).toLocaleDateString("nl")}
          </div>
          {editEnabled ? (
            <div>
              <Input
                id={"first_name"}
                type={"text"}
                name={"first_name"}
                inputValue={profile.user.first_name ?? ""}
                valueChangedHandler={(e) => handleValueChange(e)}
                isValidInput={true}
              />
              <Input
                id={"last_name"}
                type={"text"}
                name={"last_name"}
                inputValue={profile.user.last_name ?? ""}
                valueChangedHandler={(e) => handleValueChange(e)}
                isValidInput={true}
              />
            </div>
          ) : (
            <h4 className={`${styles.h4} ${styles.title}`}>{`${profile.user.first_name} ${profile.user.last_name}`}</h4>
          )}
          {editEnabled ? (
            <Input
              id={"work_application"}
              type={"text"}
              name={"work_application"}
              inputValue={profile.work_application ?? ""}
              valueChangedHandler={(e) => handleValueChange(e.target.value)}
              isValidInput={true}
            />
          ) : (
            <div className={styles.workApplication}>{profile.work_application}</div>
          )}
          <div className={""}>
            <h5 className={styles.h5}>
              OPŠTE INFORMACIJE
              {editEnabled ? <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} /> : null}
            </h5>
            <p className={styles.p1}>{profile.description}</p>
          </div>
          <div className={styles.userDetails}>
            {editList.map((item, index) => {
              return (
                <div key={index} className={styles.elementInfo}>
                  <h5 className={styles.h5}>
                    {item.title}
                    {editEnabled ? <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} /> : null}
                  </h5>
                  {item.title === "DRUŠTVENE MREŽE" ? (
                    <div>
                      {editEnabled ? (
                        <div>
                          <Input
                            id={"facebook_url"}
                            type={"text"}
                            name={"facebook_url"}
                            placeholder={"Link do vaseg facebook profila"}
                            inputValue={profile.facebook_url}
                            valueChangedHandler={(e) => handleValueChange(e.target.value)}
                            isValidInput={true}
                          />
                          <Input
                            id={"instagram_url"}
                            type={"text"}
                            name={"work_application"}
                            placeholder={"Link do vaseg instagram profila"}
                            inputValue={profile.instagram_url}
                            valueChangedHandler={(e) => handleValueChange(e.target.value)}
                            isValidInput={true}
                          />
                        </div>
                      ) : (
                        <div>
                          <a className={styles.socialMediaLink} href={profile.facebook_url ?? "http://facebook.com"}>
                            <img src={"/images/facebookIconBlue.svg"} alt={item.fieldName} />
                          </a>
                          <a className={styles.socialMediaLink} href={profile.instagram_url ?? "http://instagram.com"}>
                            <img src={"/images/instagramIconBlue.svg"} alt={item.fieldName2} />
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className={styles.p1}>
                      {editEnabled ? (
                        <Input
                          id={item.fieldName}
                          type={item.type}
                          name={"work_application"}
                          inputValue={profile.user[item.fieldName] ?? profile[item.fieldName]}
                          valueChangedHandler={(e) => handleValueChange(e.target.value)}
                          isValidInput={true}
                        />
                      ) : (
                        profile.user[item.fieldName] ?? profile[item.fieldName]
                      )}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
