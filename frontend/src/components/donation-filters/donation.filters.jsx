import { Input, Select } from "../../shared-components";
import styles from "./../../styles/filters.module.scss";

export function DonationFilters({ onChange }) {
  return (
    <div className={styles.filters}>
      <Input
        withSearchIcon
        id="donationContains"
        name="donationContains"
        placeholder="Pretraži..."
        valueChangedHandler={(value) => onChange({ contains: value })}
      />
      <Select
        id="donationStatus"
        name="donationStatus"
        options={{ true: "u toku", false: "završeno" }}
        placeholder="Status..."
        valueChangedHandler={(value) => onChange({ isActive: value })}
      />
    </div>
  );
}
