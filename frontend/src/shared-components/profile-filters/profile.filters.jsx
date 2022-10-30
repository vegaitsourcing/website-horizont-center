import { useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./profile.filters.module.scss";

export function ProfileFilters({ onChange }) {

	const [contains, setContains] = useState(null);
	const [gender, setGender] = useState(null);
	const [city, setCity] = useState(null);

	function applyContainsFilter(contains) {
		setContains(contains);
		onChange(1, contains, gender, city);
	}

	function applyGenderFilter(gender) {
		setGender(contains);
		onChange(1, contains, gender, city);
	}

	function applyCityFilter(city) {
		setCity(contains);
		onChange(1, contains, gender, city);
	}

	return (
		<div className={styles.filters}>
			<Input
				withSearchIcon
				id="profileContains"
				name="profileContains"
				placeholder="Pretraži..."
				onChange={applyContainsFilter}
			/>
			<Select
				id="profileGender"
				name="profileGender"
				options={{ male: "Muško", female: "Žensko" }}
				placeholder="Pol..."
				onChange={applyGenderFilter}
			/>
			<Select
				id="profileCity"
				name="profileCity"
				options={{ "Novi Sad": "Novi Sad" }} // TODO: fetch cities from an API
				placeholder="Mest..."
				onChange={applyCityFilter}
			/>
		</div>
	);
}
