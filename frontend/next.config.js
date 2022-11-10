module.exports = {
	publicRuntimeConfig: {
		// Will be available on both server and client
		// Pass through env variables
		baseUrl: process.env.BASE_URL,
		baseApiUrl: process.env.API_URL,
		staticFolder: process.env.STATIC_DIR,
		// Will be used for per SEO page default
		baseSeo: {
			robotsProps: {
				maxSnippet: -1,
				maxImagePreview: "none",
				maxVideoPreview: -1,
			},
		},
		name: "Negovatelji", // TODO
		title: "Negovatelji u Srbiji",
		slogan: "Negujmo one koji su i nas nekada negovali", // TODO (is it even used)
		description: "Negovatelji i osobe koje traže negu u Srbiji", // TODO
		author: process.env.AUTHOR, // TODO?
		logo: `images/logo.svg`, // TODO
		imageShare: `images/static.2.jpg`, // TODO
		facebookUrl: "https://negovatelji.rs", // TODO
		twitterUrl: "https://negovatelji.rs", // TODO
		instagramUrl: "https://negovatelji.rs", // TODO
		linkedInUrl: "https://negovatelji.rs", // TODO
		phone: "+381000000000", // TODO
		address: "Novi Sad", // TODO
		region: "Vojvodina",
		country: "RS",
		postalCode: "21000",
		locale: "sr",
	},
};
