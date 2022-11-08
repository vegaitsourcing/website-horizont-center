import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./profile-card.module.scss";
import Link from "next/link";

export const ProfileCard = ({ firstName, lastName, city, createdDate, title, body, image, url, period }) => {
	const profileImageURL = image || "/images/profile.image.placeholder.svg";

	return (
		<div className={styles.profileCard}>
			<div className={styles.leftSide}>
				<div className={styles.imageWrapper}>
					<img className={styles.image} src={profileImageURL} alt="profile image"/>
				</div>
				<div className={styles.nameAndCity}>
					<div className={`${styles.name} ${styles.p1}`}>{`${firstName} ${lastName}`}</div>
					<div className={`${styles.location} ${styles.p2}`}>
						<FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
						<span className={styles.city}>{city}</span>
					</div>
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={`${styles.p2} ${styles.createdDate}`}>
					{new Date(createdDate).toLocaleDateString("nl")}
				</div>
				<div className={`${styles.h4} ${styles.title}`}>{title}</div>
				<div className={`${styles.p1} ${styles.textBody}`}>{body}</div>
				{period && (
					<div className={`${styles.periodWrapper} ${styles.p2}`}>
						<FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
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
