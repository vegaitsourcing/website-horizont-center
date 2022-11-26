export const HOME_PATHNAME = "";
export const BLOGS_PATHNAME = "blogs";
export const DONATIONS_PATHNAME = "donations";
export const CAREGIVERS_PATHNAME = "caregivers";
export const BENEFICIARIES_PATHNAME = "beneficiaries";
export const CONTACT_PATHNAME = "contact";

export const navigationItems = [
	{
		name: "Zajednica",
		pathname: HOME_PATHNAME,
		active: true,
	},
	{
		name: "Negovatelji",
		pathname: CAREGIVERS_PATHNAME,
		active: false,
	},
	{
		name: "Negovani",
		pathname: BENEFICIARIES_PATHNAME,
		active: false,
	},
	{
		name: "Podrška",
		pathname: BLOGS_PATHNAME,
		active: false,
	},
	{
		name: "Donacije",
		pathname: DONATIONS_PATHNAME,
		active: false,
	},
	{
		name: "Kontakt",
		pathname: CONTACT_PATHNAME,
		active: false,
	},
];
