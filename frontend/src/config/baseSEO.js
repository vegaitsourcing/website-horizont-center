import { ENV } from "./env";

export const BASE_SEO = {
	openGraph: [
		{
			url: ENV.BASE_URL,
			images: { url: `${ENV.BASE_URL}${ENV.STATIC_DIR}logo.png` },
			site_name: ENV.AUTHOR,
		},
	],
	...ENV.BASE_SEO,
};
