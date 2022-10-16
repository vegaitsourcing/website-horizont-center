import React, { useEffect, useState } from "react";

import styles from "./donationList.module.scss";

import { Card } from "shared-components";
import DonationService from "pages/api/donationsService";

export const DonationsList = ({
	pageSize,
  initialDonations,
  pathname,
  activePageNumber,
  filterText,
  filterType,
  changeNumberOfPages,
}) => {
  const [donations, setdonations] = useState(initialDonations);
  function fetchData() {
    DonationService.getAllDonations(pageSize, activePageNumber, filterText, filterType).then(({ data }) => {
      const { items, pagination } = data;
			const {total_items}=pagination;
      console.log("data", data);
      setdonations([...items]);
      changeNumberOfPages(total_items, pageSize);
    });
  }
  useEffect(() => fetchData(), [activePageNumber, filterType, filterText]);

  return (
    <div className={styles.blogBody}>
      <ul className={styles.blogList}>
        {donations.map(({ id, financial_info, description, title, created, image }) => (
          <Card
            key={id}
            categories={[financial_info ? { name: "Finansijska pomoć" } : { name: "Robna pomoć" }]}
            description={description}
            title={title}
            date={created}
            image={image}
          />
        ))}
      </ul>
    </div>
  );
};
