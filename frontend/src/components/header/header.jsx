import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LongButton } from "shared-components/long-button/long.button";

/* routes */
import { tabItems } from "./tabItems";

import styles from "./header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <Link href="/login" passHref>
        <LongButton value="Prijava" type="border" />
      </Link>
      <Link href="/registration" passHref>
        <LongButton value="Registracija" type="filled" />
      </Link>
    </div>
  );
}

export const Header = () => {
  const [toggleState, settoggleState] = useState(true);

  const toggleNav = () => {
    settoggleState(!toggleState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Image src="/caregivers.svg" alt="Logo" width={144} height={60} className="image" />
      </div>
      <div className={styles.navbar}>
        {tabItems.map((tab, index) => {
          return (
            <div key={index} className={styles.tabItem}>
              <Link href={tab.pathname} passHref>
                <span className={styles.tabName}>{tab.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <Buttons />
      <div className={styles.responsiveNav}>
        {toggleState ? (
          <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={toggleNav} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={toggleNav} />
        )}

        <div className={styles.nav + " " + (!toggleState ? styles.show : null)}>
          {tabItems.map((tab, index) => {
            return (
              <div key={index} className={styles.tabItem}>
                <Link href={tab.pathname} passHref>
                  <span className={styles.tabName}>{tab.name}</span>
                </Link>
              </div>
            );
          })}
          <Buttons />
        </div>
      </div>
    </header>
  );
};
