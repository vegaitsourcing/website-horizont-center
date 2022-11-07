import { useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./profile.filters.module.scss";
import CitiesService from "../../pages/api/countriesService";

export function ProfileFilters({ onChange }) {
	const [cityOptions, setCityOptions] = useState({});

	useEffect(() => {
		async function prepareCityOptions() {
			const serbianCities = await CitiesService.getAllSerbianCities();
			const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
			setCityOptions(serbianCityOptions);
		}

		prepareCityOptions();
	}, []);

	return (
		<div className={styles.filters}>
			<div className={styles.leftSide}>
				<Input
					withSearchIcon
					className={styles.leftFilterField}
					id="profileContains"
					name="profileContains"
					placeholder="Pretraži..."
					onChange={value => onChange({ contains: value })}
				/>
			</div>
			<div className={styles.rightSide}>
				<Select
					className={styles.rightFilterField}
					id="profileGender"
					name="profileGender"
					options={{ male: "Muško", female: "Žensko" }}
					placeholder="Pol..."
					onChange={value => onChange({ gender: value })}
				/>
				<Select
					className={styles.rightFilterField}
					id="profileCity"
					name="profileCity"
					options={cityOptions}
					placeholder="Mesto..."
					onChange={value => onChange({ city: value })}
				/>
			</div>
		</div>
	);
}
