import { defaultField } from "./default.field";

export const caregiverProfileFieldset = {
	title: "ISKUSTVO I STRUČNA SPREMA",
	fields: {
		birthdate: {
			...defaultField,
			type: "datepicker",
			label: "Datum rođenja",
			placeholder: "Dan / Mesec / Godina rodjenja",
			infoText: "Datum rođenja u formatu: DD/MM/YYYY",
		},
		work_application: {
			...defaultField,
			label: "Profesija",
			placeholder: "Profesija",
		},
		experience: {
			...defaultField,
			label: "Iskustvo",
			placeholder: "Iskustvo",
		},
		weekly_days: {
			...defaultField,
			label: "Dostupnost tokom nedelje",
			placeholder: "Dostupnost tokom nedelje",
		},
		daily_hours: {
			...defaultField,
			type: "number",
			label: "Koliko sati ste dostupni?",
			placeholder: "Koliko sati dnevno (0-24h)",
			infoText: "Koliko sati dnenvno ste dostupni da pružite pomoć (0-24h). Primer: 5h",
		},
		facebook_url: {
			...defaultField,
			label: "Facebook profil link",
			placeholder: "Link do vašeg facebook profila",
			required: false,
		},
		instagram_url: {
			...defaultField,
			label: "Instagram profil link",
			placeholder: "Link do vašeg instagram profila",
			required: false,
		}
	}
};
