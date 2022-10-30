import { useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./donation-filters.module.scss";

export function DonationFilters({ onChange }) {

	const [contains, setContains] = useState(null);
	const [isActive, setIsActive] = useState(null);

	function applyContainsFilter(contains) {
		setContains(contains);
		onChange(1, contains, isActive);
	}

	function applyIsActiveFilter(isActive) {
		setIsActive(isActive);
		onChange(1, contains, isActive);
	}

	return (
		<div className={styles.filters}>
			<Input
				withSearchIcon
				id="donationContains"
				name="donationContains"
				placeholder="Pretraži..."
				onChange={applyContainsFilter}
			/>
			<Select
				id="donationStatus"
				name="donationStatus"
				options={{ true: "u toku", false: "završeno" }}
				placeholder="Status..."
				onChange={applyIsActiveFilter}
			/>
		</div>
	);
}
