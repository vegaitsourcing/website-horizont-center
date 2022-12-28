import { defaultField } from "./default.field";

export const beneficiaryProfileFieldset = {
	title: "IFORMACIJE OSOBE KOJOJ JE POTREBNA NEGA",
	fields: {
		beneficiary_person: {
			...defaultField,
			label: "Kome je potrebna nega?",
			placeholder: "Kome je potrebna nega?",
		},
		helping_period: {
			...defaultField,
			label: "Period pružanja pomoći",
			placeholder: "Period pružanja pomoći",
			infoText: "Primeri: ovog meseca, od xx datuma do xx datuma, tokom xx meseca, tokom xx godine...",
		},
		weekly_days: {
			...defaultField,
			label: "Broj dana nedeljno",
			placeholder: "Broj dana nedeljno",
		},
		daily_hours: {
			...defaultField,
			type: "number",
			label: "Koliko sati dnevno?",
			placeholder: "Koliko sati dnevno (0-24h)",
			infoText: "Potrebna pomoć na dnevnom nivou u satima (0-24h). Primer: 5h",
		},
		care_type: {
			...defaultField,
			label: "Vrsta pomoći",
			placeholder: "Vrsta pomoći",
		}
	}
};
