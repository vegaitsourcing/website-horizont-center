import { useCallback, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./profile.filters.module.scss";

export function ProfileFilters({ onChange }) {
  const [filters, setFilters] = useState({
    contains: null,
    gender: null,
    city: null,
  });

  const applyFilters = useCallback(
    (newFilters) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      onChange(1, updatedFilters.contains, updatedFilters.gender, updatedFilters.city);
    },
    [filters, onChange]
  );

  return (
    <div className={styles.filters}>
      <Input
        withSearchIcon
        id="profileContains"
        name="profileContains"
        placeholder="Pretraži..."
        valueChangedHandler={(value) => applyFilters({ contains: value })}
      />
      <Select
        id="profileGender"
        name="profileGender"
        options={{ male: "Muško", female: "Žensko" }}
        placeholder="Pol..."
        valueChangedHandler={(value) => applyFilters({ gender: value })}
      />
      <Select
        id="profileCity"
        name="profileCity"
        options={{ "Novi Sad": "Novi Sad" }} // TODO: fetch cities from an API
        placeholder="Mesto..."
        valueChangedHandler={(value) => applyFilters({ city: value })}
      />
    </div>
  );
}
