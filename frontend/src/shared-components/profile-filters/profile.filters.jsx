import { useCallback, useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./profile.filters.module.scss";
import CitiesService from "../../pages/api/countriesService";

export function ProfileFilters({ onChange }) {
	const [filters, setFilters] = useState({
		contains: null,
		gender: null,
		city: null,
	});
	const [cityOptions, setCityOptions] = useState({});

	useEffect(() => {
		async function prepareCityOptions() {
			const serbianCities = await CitiesService.getAllSerbianCities();
			const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
			setCityOptions(serbianCityOptions);
		}
		prepareCityOptions();
	}, []);

	const applyFilters = useCallback((newFilters) => {
		const updatedFilters = { ...filters, ...newFilters };
		setFilters(updatedFilters);
		onChange(1, updatedFilters.contains, updatedFilters.gender, updatedFilters.city);
	}, [filters, onChange]);

	return (
		<div className={styles.filters}>
			<Input
				withSearchIcon
				id="profileContains"
				name="profileContains"
				placeholder="Pretraži..."
				onChange={value => applyFilters({ contains: value })}
			/>
			<Select
				id="profileGender"
				name="profileGender"
				options={{ male: "Muško", female: "Žensko" }}
				placeholder="Pol..."
				onChange={value => applyFilters({ gender: value })}
			/>
			<Select
				id="profileCity"
				name="profileCity"
				options={cityOptions}
				placeholder="Mesto..."
				onChange={value => applyFilters({ city: value })}
			/>
		</div>
	);
}
