import React from "react";

import Image from "next/image";

import styles from "./footer.module.scss";

export const Footer = ({ props }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageWrapper}>
        <Image src="/caregivers_footer.svg" alt="Negovatelji img" width={144} height={60} className={styles.image} />
      </div>
    </footer>
  );
};
