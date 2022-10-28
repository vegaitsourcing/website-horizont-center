import React from "react";
import styles from "./donationList.module.scss";
import { DonationCard } from "components/donation-card/donation-card";

export const DonationList = ({ donations }) => {

  return (
    <div className={styles.blogBody}>
      <ul className={styles.blogList}>
        {donations.map(({ id, financial_info, description, title, created, image }) => (
          <DonationCard
            key={id}
            financialInfo={financial_info}
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
