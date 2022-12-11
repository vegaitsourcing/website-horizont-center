import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import { footerNavItems } from "../../config/navigation";

export const Footer = ({ isHidden }) => {
  return (
    <footer className={[styles.footer, isHidden ? styles.hidden : ""].join(" ")}>
      <section className={styles.logoSection}>
        <img src="/images/logo.white.svg" alt="Negovatelji logo" className={styles.logo} />
      </section>
      <section className={styles.mainSection}>
        <div className={styles.leftSide}>
          <p>
            Društvo koje ceni, podržava i osnažuje porodične negovatelje željena je budućnost Centra HORIZONT 21 i
            platforme NEGOVATELJI.RS kreirane uz podršku podršku VEGAT IT kompanije i projekta Code For Couse.
          </p>
          <div className={styles.socialMediaButtons}>
            <a href="https://www.facebook.com/groups/270285275225942/" target="_blank" rel="noreferrer">
              <Image src="/images/facebookIconWhite.svg" width="16.11" height="30" alt="link to our facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCS5gh6FEudKxWeUPIzL_Kog" target="_blank" rel="noreferrer">
              <Image src="/images/youtubeIconWhite.svg" width="30" height="30" alt="link to our youtube" />
            </a>
            <a href="https://instagram.com/negovatelji?igshid=MWI4MTIyMDE=" target="_blank" rel="noreferrer">
              <Image src="/images/instagramIconWhite.svg" width="25" height="30" alt="link to our instagram" />
            </a>
          </div>
        </div>
        <div className={styles.rightSide}>
          {footerNavItems.map((item) => (
            <Link key={item.pathname} href={`/${item.pathname}`}>
              <p className={styles.linkItem}>{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.copyrightsSection}>
        <p className={styles.leftSide}>© Copyright 2022 Negovatelji.rs - Sva prava zadržana</p>
        <p className={styles.rightSide}>Designed by VEGA IT</p>
      </section>
    </footer>
  );
};
