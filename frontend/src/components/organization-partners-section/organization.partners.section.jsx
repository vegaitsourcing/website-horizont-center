import React, { useEffect, useState } from "react";
import styles from "./organization.partners.section.module.scss";
import { OrganizationPartnersService } from "../../pages/api/organizationParnersService";

export function OrganizationPartnersSection () {
	const [isLoading, setIsLoading] = useState(true);
	const [organizationPartners, setOrganizationPartners] = useState([]);

	useEffect(() => {
		if (isLoading) {
			OrganizationPartnersService.getOrganizationPartners().then(response => {
				setOrganizationPartners(response.data.items);
				setIsLoading(false);
			});
		}
	}, [isLoading]);

	return (
		<div className={styles.partnersGrid}>
			{organizationPartners.map(partner => (
				<a key={partner.id} className={styles.partnerCard} href={partner.url}>
					<img src={partner.image} alt={partner.name}/>
				</a>
			))}
		</div>
	);
}
