import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./user.details.module.scss";

export const UserDetails = ({ user }) => {
  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.profileListItem}>
        <div className={styles.profileImageSection}>
          <img className={styles.roundedImage} src={user.image} alt="profile image" />
          <div className={`${styles.profileName} ${styles.p1}`}>{`${user.user.first_name} ${user.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <span className={styles.city}>{user.city}</span>
          </div>
        </div>
        <div className={styles.profileDescriptionSection}>
          <div className={`${styles.p2} ${styles.createdDate}`}>
            {new Date(user.user.created).toLocaleDateString("nl")}
          </div>
          <div className={`${styles.h4} ${styles.title}`}>{user.work_application}</div>
          <div className={`${styles.p1} ${styles.textBody}`}>{"Body"}</div>
        </div>
      </div>
    </div>
  );
};
