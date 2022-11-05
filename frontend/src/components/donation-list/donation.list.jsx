import React from "react";
import styles from "./donation.list.module.scss";
import { ResourceCard } from "../resource-card/resource.card";

export const DonationList = ({ donations }) => {
	return (
		<div className={styles.donationListWrapper}>
			<ul className={styles.donationList}>
				{donations.map((donation) => (
					<ResourceCard
						key={donation.id}
						resourceURL={`/donations/${donation.id}`}
						image={donation.image}
						tags={[
							{
								name: donation.financial_info ? "Finansijska pomoć" : "Robna pomoć",
								color: donation.financial_info ? "#0075FF" : "#F87024",
							},
						]}
						title={donation.title}
						teaserText={donation.description}
						date={donation.created}
					/>
				))}
			</ul>
		</div>
	);
};
