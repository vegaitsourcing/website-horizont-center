import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./profile-list-item.module.scss";
import Link from "next/link";

export const ProfileListItem = ({ firstName, lastName, city, createdDate, title, body, image, url, period }) => {
  return (
    <div className={styles.profileListItem}>
      <div className={styles.profileImageSection}>
        <img className={styles.roundedImage} src={image} alt="profile image" />
        <div className={`${styles.profileName} ${styles.p1}`}>{`${firstName} ${lastName}`}</div>
        <div className={`${styles.profileLocation} ${styles.p2}`}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <span className={styles.city}>{city}</span>
        </div>
      </div>
      <div className={styles.profileDescriptionSection}>
        <div className={`${styles.p2} ${styles.createdDate}`}>
					{new Date(createdDate).toLocaleDateString("nl")}
				</div>
        <div className={`${styles.h4} ${styles.title}`}>{title}</div>
        <div className={`${styles.p1} ${styles.textBody}`}>{body}</div>
        {period && (
          <div className={`${styles.profilePeriod} ${styles.p2}`}>
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
            <span className={styles.period}>{period}</span>
          </div>
        )}
        <Link href={url} passHref>
          <span className={`${styles.p2} ${styles.link}`}>Prikaži više</span>
        </Link>
      </div>
    </div>
  );
};
