import { useEffect, useState } from "react";
import styles from "./profile.filters.module.scss";
import CitiesService from "../../pages/api/countriesService";
import { Input, Select } from "../fields";

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
          id="profileContains"
          name="profileContains"
          placeholder="Pretraži..."
          valueChangedHandler={(value) => onChange({ contains: value })}
        />
      </div>
      <div className={styles.rightSide}>
        <Select
          className={styles.rightFilterField}
          id="profileGender"
          name="profileGender"
          options={{ male: "Muško", female: "Žensko" }}
          placeholder="Pol..."
          valueChangedHandler={(value) => onChange({ gender: value })}
        />
        <Select
          className={styles.rightFilterField}
          id="profileCity"
          name="profileCity"
          options={cityOptions}
          placeholder="Mesto..."
          valueChangedHandler={(value) => onChange({ city: value })}
        />
      </div>
    </div>
  );
}
