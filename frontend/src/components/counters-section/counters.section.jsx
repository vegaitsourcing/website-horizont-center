import styles from "./counters.section.module.scss";
import { BeneficiariesService } from "../../pages/api/beneficiariesService";
import { CaregiversService } from "../../pages/api/caregiversService";
import { DonationsService } from "../../pages/api/donationsService";
import { useEffect, useState } from "react";

export function CountersSection () {
	const [counters, setCounters] = useState({
		beneficiaries: { label: "Članovi zajednice", number: 0 },
		caregivers: { label: "Broj registrovanih negovatelja", number: 0 },
		donations: { label: "Zahtevi za donacije", number: 0 },
	});

	useEffect(() => {
		Promise.all([
			BeneficiariesService.getBeneficiaryCount(),
			CaregiversService.getCaregiverCount(),
			DonationsService.getActiveDonationCount(),
		]).then(counts => {
			setCounters({
				beneficiaries: { ...counters.beneficiaries, number: counts[0] },
				caregivers: { ...counters.caregivers, number: counts[1] },
				donations: { ...counters.donations, number: counts[2] },
			});
		});
	}, [counters]);

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
