import React, { useEffect, useState } from "react";

import styles from "./donationList.module.scss";

import { Card } from "shared-components";
import DonationService from "pages/api/donationsService";

export const DonationsList = ({
  initialDonations,
  pathname,
  activePageNumber,
  filterText,
  filterType,
  changeNumberOfPages,
}) => {
  const [donations, setdonations] = useState(initialDonations);
  function fetchData() {
    DonationService.getAllMockDonations(3, activePageNumber, filterText, filterType).then(({ data }) => {
      const { results, total, pageSize } = data;
      console.log("data", data);
      setdonations([...results]);
      changeNumberOfPages(total, pageSize);
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
