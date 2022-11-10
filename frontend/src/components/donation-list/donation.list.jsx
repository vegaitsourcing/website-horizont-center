import React from "react";
import styles from "./donation.list.module.scss";
import { ResourceCard } from "../resource-card/resource.card";
import { createResourceCardSecondaryTag } from "../../utils";

function prepareDonation(donation) {
	return {
		...donation,
		resourceURL: `/donations/${donation.id}`,
		secondaryTags: [
			createResourceCardSecondaryTag({
				name: donation.financial_info ? "Finansijska pomoć" : "Robna pomoć",
				color: donation.financial_info ? "#0075FF" : "#F87024",
			}),
		],
		imageTag: {
			name: donation.is_active ? "U TOKU" : "ZAVRŠENO",
			style: {
				color: donation.is_active ? "#FFFFFF" : "#0075FF",
				backgroundColor: donation.is_active ? "#0075FF" : "#FFFFFF",
			},
		},
	};
}

export const DonationList = ({ donations }) => {
	const preparedDonations = donations.map((donation) => prepareDonation(donation));

	return (
		<div className={styles.donationListWrapper}>
			<ul className={styles.donationList}>
				{preparedDonations.map((donation) => (
					<ResourceCard
						key={donation.id}
						resourceURL={donation.resourceURL}
						image={donation.image}
						imageTag={donation.imageTag}
						secondaryTags={donation.secondaryTags}
						title={donation.title}
						teaserText={donation.description}
						date={donation.created}
					/>
				))}
			</ul>
		</div>
	);
};
