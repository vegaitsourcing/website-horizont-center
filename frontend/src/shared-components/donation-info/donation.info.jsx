import React from "react";

import styles from "./donation.info.module.scss";

export const DonationInfo = ({ title, categories, text, donationInfos }) => {
  return (
    <div className={styles.donationBox}>
      <h2 className={styles.h2}>Adipiscing platea aliquet</h2>
      <div className={styles.donationFlex}>
        <div className={styles.donationGeneralDescription}>
          <h3 className={styles.h4}>{title}</h3>
          <ul className={styles.categoryList}>
            <li className={styles.category}>Finansijska pomoć</li>
          </ul>
          <p className={styles.p1}>{text}</p>
        </div>
        <div className={styles.donationInfo}>
          <h3 className={styles.h4}>Informacije za uplatu</h3>
          <ul className={styles.infoList}>
            {donationInfos.map((info, index) => (
              <li key={index}>
                <span>{info.title}:</span> <span className={styles.infoValue}>{info.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="#">Izgled uplatnice</a>
    </div>
  );
};
