import React from "react";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";
import styles from "./caregiver.list.module.scss";

export function CaregiverList({ caregivers }) {
	return (
		<div className={styles.caregivers}>
			{caregivers.map(({ id, work_application, image, created, city, description, user }) => (
				<ProfileListItem
					firstName={user.first_name}
					lastName={user.last_name}
					body={description}
					city={city}
					createdDate={created}
					image={image}
					title={work_application}
					key={id}
					url="#" // TODO
				/>
			))}
		</div>
	);
}
