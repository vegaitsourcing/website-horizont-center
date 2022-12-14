import { defaultField } from "./default.field";

export const additionalProfileFieldset = {
	title: "",
	fields: {
		image: {
			...defaultField,
			type: "image",
			label: "Dodaj fotografiju",
			placeholder: "/images/profile.image.placeholder.svg",
			remember: false,
		},
		description: {
			...defaultField,
			type: "textarea",
			placeholder: "Dodatne informacije",
			minLength: 100,
			maxLength: 500,
		},
	},
};
