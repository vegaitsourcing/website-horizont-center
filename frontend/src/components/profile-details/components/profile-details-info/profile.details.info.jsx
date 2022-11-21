import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./profile.details.info.module.scss";

export const ProfileDetailsInfo = ({ profile, infoList }) => {
  console.log("profile", profile);

  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.userDetailsSection}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.roundedImage}
              src={profile.image ?? "/images/profile.image.placeholder.svg"}
              alt="profile image"
            />
            <div className={styles.profileName}>{`${profile.user.first_name} ${profile.user.last_name}`}</div>
            <div className={`${styles.profileLocation} ${styles.p2}`}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <span className={styles.city}>{profile.city}</span>
            </div>
          </div>
        </div>
        <div className={styles.descriptionSection}>
          <div className={`${styles.p2} ${styles.createdDate}`}>
            {new Date(profile.user.created).toLocaleDateString("nl")}
          </div>
          <h4 className={`${styles.h4} ${styles.title}`}>{`${profile.user.first_name} ${profile.user.last_name}`}</h4>
          <div className={styles.workApplication}>{profile.work_application}</div>
          <div className={""}>
            <h5 className={styles.h5}>OPŠTE INFORMACIJE</h5>
            <p className={styles.p1}>{profile.description}</p>
          </div>
          <div className={styles.userDetails}>
            {infoList.map((item, index) => {
              return (
                <div key={index} className={styles.elementInfo}>
                  <h5 className={styles.h5}>{item.title}</h5>
                  {item.title === "DRUŠTVENE MREŽE" ? (
                    <div>
                      <div>
                        <a className={styles.socialMediaLink} href={profile.facebook_url ?? "http://facebook.com"}>
                          <img src={"/images/facebookIconBlue.svg"} alt={item.fieldName} />
                        </a>
                        <a className={styles.socialMediaLink} href={profile.instagram_url ?? "http://instagram.com"}>
                          <img src={"/images/instagramIconBlue.svg"} alt={item.fieldName2} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className={styles.p1}>{profile.user[item.fieldName] ?? profile[item.fieldName]}</p>
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
