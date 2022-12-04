import styles from "./counters.section.module.scss";
import { BeneficiariesService } from "../../pages/api/beneficiariesService";
import { CaregiversService } from "../../pages/api/caregiversService";
import { DonationsService } from "../../pages/api/donationsService";
import { useEffect, useState } from "react";

export function CountersSection () {
	const [isLoading, setIsLoading] = useState(true);
	const [counters, setCounters] = useState({
		members: { label: "Članovi zajednice", number: 0 },
		caregivers: { label: "Broj registrovanih negovatelja", number: 0 },
		donations: { label: "Zahtevi za donacije", number: 0 },
	});

	useEffect(() => {
		if (isLoading) {
			Promise.all([
				BeneficiariesService.getActiveBeneficiaryCount(),
				CaregiversService.getActiveCaregiverCount(),
				DonationsService.getActiveDonationCount(),
			]).then(([beneficiaryCount, caregiverCount, donationCount]) => {
				setCounters({
					members: { ...counters.members, number: beneficiaryCount + caregiverCount },
					caregivers: { ...counters.caregivers, number: caregiverCount },
					donations: { ...counters.donations, number: donationCount },
				});
				setIsLoading(false);
			});
		}
	}, [isLoading, counters]);

	return (
		<div className={styles.counterList}>
			{Object.values(counters).map(counter => (
				<div key={counter.label} className={styles.counter}>
					<div className={styles.number}>{counter.number}</div>
					<p className={styles.label}>{counter.label}</p>
				</div>
			))}
		</div>
	);
}
