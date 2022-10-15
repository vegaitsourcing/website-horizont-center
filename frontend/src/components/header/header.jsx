import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LongButton } from "shared-components/long-button/long.button";

/* routes */
import { tabItems } from "./tabItems";

import styles from "./header.module.scss";

export const Header = () => {
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
      <div className={styles.buttons}>
        <Link href="/login" passHref>
          <LongButton value="Prijava" type="border" />
        </Link>
        <Link href="/registration" passHref>
          <LongButton value="Registracija" type="filled" />
        </Link>
      </div>
    </header>
  );
};
