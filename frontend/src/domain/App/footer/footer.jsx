import React from "react";

import Image from "next/image";

import styles from "./footer.module.scss";

export const Footer = ({ props }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageWrapper}>
        <Image src="/caregivers_footer.svg" alt="Negovatelji img" width={144} height={60} className={styles.image} />
      </div>
      <div className={styles["footer__body"]}>
        <p className={styles.p1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae pariatur mollitia voluptatibus ab quis?
          Deserunt eum libero qui dolores.
        </p>
        <div>
          <ul className={styles["contact-list"]}>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
            <li className={styles.p1}>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <ul className={styles["social-links"]} aria-label="linkovi do drustvenih mreza">
        <li>
          <a href="#" target="_blank">
            <Image src="/images/facebookIcon.png" width="16.11" height="30" alt="link to our facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image src="/images/twitterIcon.png" width="30" height="24" alt="link to our twitter" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image src="/images/linkedinIcon.png" width="26" height="26" alt="link to our linkedin" />
          </a>
        </li>
      </ul>
      <div className={styles["copyrights"]}>
        <p className={styles.p1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia nisi ducimus accusamus vitae qui a debitis
          inventore?
        </p>
        <p className={styles.p1} style={{ textTransform: "uppercase" }}>
          lorem ipsum 2022
        </p>
      </div>
    </footer>
  );
};
