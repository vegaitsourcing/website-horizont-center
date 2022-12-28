import { ENV } from "./config/env";
import { mainNavItems } from "./config/navigation";
import { CitiesService } from "./pages/api/countriesService";

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
		...mainNavItems,
		{ pathname: "login", name: "Login" },
		{ pathname: "registration", name: "Registracija" },
	];
	const navigationItem = pages.find(page => page.pathname === pathname.slice(1));
	return {
		...ENV.BASE_SEO,
		title: navigationItem?.name,
		canonical: `${ENV.BASE_URL}${pathname}`,
	};
}

export function prepareSingleResourceSEO(resourceID, title) {
	return {
		...ENV.BASE_SEO,
		title: title,
		canonical: `${ENV.BASE_URL}${resourceID}`,
	};
}

export async function getSerbianCitySelectOptions() {
	const serbianCities = await CitiesService.getAllSerbianCities();
	return serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
}
