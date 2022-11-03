import { useCallback, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./donation.filters.module.scss";

export function DonationFilters({ onChange }) {
  const [filters, setFilters] = useState({
    contains: null,
    isActive: null,
  });

  const applyFilters = useCallback(
    (newFilters) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      onChange(1, updatedFilters.contains, updatedFilters.isActive);
    },
    [filters, onChange]
  );

  return (
    <div className={styles.filters}>
      <Input
        withSearchIcon
        id="donationContains"
        name="donationContains"
        placeholder="Pretraži..."
        valueChangedHandler={(value) => applyFilters({ contains: value })}
      />
      <Select
        id="donationStatus"
        name="donationStatus"
        options={{ true: "u toku", false: "završeno" }}
        placeholder="Status..."
        valueChangedHandler={(value) => applyFilters({ isActive: value })}
      />
    </div>
  );
}
