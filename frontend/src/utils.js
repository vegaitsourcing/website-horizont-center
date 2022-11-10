import { ENV } from "./config/env";
import { BASE_SEO } from "./config/baseSEO";
import { navigationItems } from "./config/navigationItems";

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
	const pages = [
		...navigationItems,
		{ pathname: "login", name: "Login" },
		{ pathname: "registration", name: "Registracija" },
	];
	const navigationItem = pages.find(page => page.pathname === pathname.slice(1));
	return {
		title: navigationItem?.name,
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
