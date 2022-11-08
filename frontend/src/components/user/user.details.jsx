import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { caregiverEditList } from "./hooks/caregiverEditList";

import styles from "./user.details.module.scss";

export const UserDetails = ({ user }) => {
  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.profileListItem}>
        <div className={styles.profileImageSection}>
          <img className={styles.roundedImage} src={user.image} alt="profile image" />
          <div className={styles.profileName}>{`${user.user.first_name} ${user.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <span className={styles.city}>{user.city}</span>
          </div>
        </div>
        <div className={styles.profileDescriptionSection}>
          <div className={`${styles.p2} ${styles.createdDate}`}>
            {new Date(user.user.created).toLocaleDateString("nl")}
          </div>
          <h4 className={`${styles.h4} ${styles.title}`}>{`${user.user.first_name} ${user.user.last_name}`}</h4>
          <div className={styles.workApplication}>{user.work_application}</div>
          <div className={""}>
            <h5 className={styles.h5}>OPŠTE INFORMACIJE</h5>
            <p className={styles.p1}>{user.description}</p>
          </div>
          <div className={styles.userDetails}>
            {caregiverEditList.map((item, index) => {
              {
                console.log(item);
              }
              return (
                <div key={index} className={styles.elementInfo}>
                  <h5 className={styles.h5}>{item.title}</h5>
                  {item.title === "DRUŠTVENE MREŽE" ? (
                    <div>
                      <a className={styles.socialMediaLink} href={""}>
                        <img src={"/images/facebookIconBlue.svg"} alt={item.fieldName} />
                      </a>
                      <a className={styles.socialMediaLink} href={""}>
                        <img src={"/images/instagramIconBlue.svg"} alt={item.fieldName2} />
                      </a>
                    </div>
                  ) : (
                    <p className={styles.p1}>{user.user[item.fieldName] ?? user[item.fieldName]}</p>
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
