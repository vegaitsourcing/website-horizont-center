import { defaultField } from "./default.field";

export const commonProfileFieldset = {
	title: "ISKUSTVO I STRUČNA SPREMA",
	fields: {
		profile_type: {
			...defaultField,
			type: "dropdown",
			label: "Tip profile",
			placeholder: "Izaberite tip profila",
			options: { caregiver: "Negovatelj", beneficiary: "Negovan" }
		},
		first_name: {
			...defaultField,
			label: "Ime",
			placeholder: "Unesite Vaše ime",
			parentFieldName: "user",
		},
		last_name: {
			...defaultField,
			label: "Prezime",
			placeholder: "Unesite Vaše prezime",
			parentFieldName: "user",
		},
		email: {
			...defaultField,
			type: "email",
			label: "E-mail",
			placeholder: "Unesite Vaš E-mail",
			parentFieldName: "user",
		},
		phone_number: {
			...defaultField,
			label: "Broj telefona",
			placeholder: "Unesite Vaš primarni broj telefona",
			parentFieldName: "user",
		},
		second_phone_number: {
			...defaultField,
			label: "Broj telefona 2",
			placeholder: "Unesite Vaš rezervni broj telefona",
			parentFieldName: "user",
			required: false,
		},
		password: {
			...defaultField,
			type: "password",
			label: "Lozinka",
			placeholder: "Unesite Vašu lozinku",
			minLength: 8,
			remember: false,
			parentFieldName: "user",
		},
		postal_code: {
			...defaultField,
			type: "number",
			label: "Poštanski broj",
			placeholder: "Poštanski broj",
		},
		city: {
			...defaultField,
			type: "dropdown",
			label: "Mesto stanovanja",
			placeholder: "Mesto stanovanja",
			options: {}, // Should be set in other location in the code
		},
		gender: {
			...defaultField,
			type: "dropdown",
			label: "Pol",
			placeholder: "Pol",
			options: { male: "muški", female: "ženski" },
		}
	}
};
