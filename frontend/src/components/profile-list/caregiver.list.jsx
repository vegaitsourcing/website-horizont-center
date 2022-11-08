import React from "react";
import styles from "./profile.list.module.scss";
import { ProfileCard } from "../../shared-components";

export function CaregiverList({ profiles }) {
	return (
		<div className={styles.profileList}>
			{profiles.map(profile => (
				<ProfileCard
					firstName={profile.user.first_name}
					lastName={profile.user.last_name}
					body={profile.description}
					city={profile.city}
					createdDate={profile.created}
					image={profile.image}
					title={profile.work_application}
					key={profile.id}
					url={`/caregivers/${profile.id}`}
				/>
			))}
		</div>
	);
}
