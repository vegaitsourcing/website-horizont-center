import React from "react";
import styles from "./beneficiary.list.module.scss";
import { ProfileListItem } from "../../shared-components";

export function BeneficiaryList({ beneficiaries }) {
	return (
		<div className={styles.beneficiaries}>
			{beneficiaries.map(({ id, care_type, image, created, city, description, helping_period, user }) => (
					<ProfileListItem
						firstName={user.first_name}
						lastName={user.last_name}
						body={description}
						city={city}
						createdDate={created}
						image={image}
						title={care_type}
						key={id}
						period={helping_period}
						url={`/beneficiaries/${id}`}
					/>
				)
			)}
		</div>
	);
}
