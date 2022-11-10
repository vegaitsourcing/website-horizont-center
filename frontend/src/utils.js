import { ENV } from "./config/env";
import { navigationItems } from "./config/navigationItems";
import { BASE_SEO } from "./config/baseSEO";

export function hex2rgba(hex, alpha = 1) {
	const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
}

export function createResourceCardSecondaryTag({ name, color }) {
	return {
		name,
		style: {
			color: color,
			backgroundColor: hex2rgba(color, 0.2),
		},
	};
}

export function prepareSEO(pathname) {
	const navigationItem = navigationItems.filter(item => item.pathname === pathname);
	return {
		title: navigationItem.name,
		canonical: `${ENV.BASE_URL}${pathname}`,
		...BASE_SEO,
	};
}

export function prepareSingleResourceSEO(resourceID, title) {
	return {
		title: title,
		canonical: `${ENV.BASE_URL}${resourceID}`,
		...BASE_SEO,
	};
}
