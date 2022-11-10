/* env */
import { ENV } from "./src/config/env";

// Default Next-Seo meta tags
const DEFAULT_SEO = {
	// Default meta tags
	metas: {
		titleTemplate: `%s | ${ENV.NAME}`,
		title: ENV.TITLE,
		description: ENV.DESCRIPTION,
		canonical: ENV.BASE_URL,
		openGraph: {
			images: [
				{
					url: `${ENV.BASE_URL}${ENV.STATIC_DIR}${ENV.IMAGE_SHARE}`,
					width: 800,
					height: 800,
					alt: ENV.TITLE,
				},
			],
		},
		twitter: {
			handle: "@handle",
			site: ENV.TITLE,
			cardType: "summary_large_image",
		},
		additionalMetaTags: [
			{
				httpEquiv: "x-ua-compatible",
				content: "IE=edge; chrome=1",
			},
			{
				name: "theme-color",
				content: "#EEF4FF",
			},
			{
				name: "google-site-verification",
				content: "vjLLPOfUtWqkaiBhrojLlAAjsQgFYR14MJwj8baLCXo",
			},
		],
	},
	// Default json-ld microdata
	microdatas: {
		LocalBusinessJsonLd: {
			type: "Organization",
			id: `${ENV.BASE_URL}/#organization`,
			name: ENV.NAME,
			description: ENV.DESCRIPTION,
			url: ENV.BASE_URL,
			telephone: ENV.PHONE,
			address: [
				{
					streetAddress: ENV.ADDRESS,
					addressLocality: ENV.COUNTRY,
					addressRegion: ENV.REGION,
					postalCode: ENV.POSTAL_CODE,
					addressCountry: ENV.LOCALE,
				},
			],
			logo: {
				type: "ImageObject",
				id: `${ENV.BASE_URL}/#logo`,
				inLanguage: ENV.LOCALE,
				url: `${ENV.BASE_URL}${ENV.LOGO}`,
				width: 112,
				height: 112,
				caption: ENV.NAME,
			},
			image: {
				id: `${ENV.BASE_URL}#logo`,
			},
			sameAs: [ENV.FACEBOOK_URL, ENV.TWITTER_URL, ENV.INSTAGRAM_URL, ENV.LINKEDIN_URL],
			slogan: ENV.SLOGAN,
		},
	},
};

export default DEFAULT_SEO;
