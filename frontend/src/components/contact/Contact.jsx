import React from "react";

import Image from "next/image";
import { BorderButton } from "shared-components";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <>
      <section className={styles["contact-section-1"]}>
        <h1 className={styles.h1}>Kontakt</h1>
        <p className={styles.p1}>
          Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursus.
        </p>
      </section>
      <section className={styles["contact-section-2"]}>
        <div>
          <strong>scelerisque</strong>
          <h2 className={styles.h2}>Lorem ipsum dolor sit.</h2>
          <p className={styles.p1}>
            Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
            ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
            tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
          </p>
        </div>
        <div>
          <Image src="/images/contactPageImage1.png" width="640" height="550" alt="contact us" />
        </div>
      </section>
      <section className={styles["contact-section-3"]}>
        <div className={styles["centered-text"]}>
          <strong>scelerisque</strong>
          <h2 className={styles.h2}>Objašenje koraka prijave</h2>
          <p className={styles.p1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste quos natus vel iure distinctio veniam
            alias nisi blanditiis incidunt!
          </p>
        </div>
        <ul className={styles["contact-list"]}>
          <li>
            <strong>01</strong>
            <h3 className={styles.h4}>Lorem, ipsum dolor.</h3>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
              dignissimos quidem in explicabo? Sapiente, natus.
            </p>
          </li>
          <li>
            <strong>02</strong>
            <h3 className={styles.h4}>Lorem, ipsum dolor.</h3>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
              dignissimos quidem in explicabo? Sapiente, natus.
            </p>
          </li>
          <li>
            <strong>03</strong>
            <h3 className={styles.h4}>Lorem, ipsum dolor.</h3>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
              dignissimos quidem in explicabo? Sapiente, natus.
            </p>
          </li>
        </ul>
      </section>
      <section className={styles["contact-section-4"]}>
        <div className={styles["centered-text"]}>
          <strong>scelerisque</strong>
          <h2 className={styles.h2}>Napravi profil cta</h2>
          <p className={styles.p1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis nihil. Quaerat alias deserunt,
            et libero dolorum aperiam tenetur iste minus odio. In quae facilis sunt corrupti impedit debitis,
            consectetur, aperiam molestiae vel deleniti iste rerum veniam, quam facere explicabo!
          </p>
          <BorderButton value="napravi profil" />
        </div>
      </section>
      <section className={styles["contact-section-5"]}>
        <div className={styles["grid-container"]}></div>
        <div>
          <strong>scelerisque</strong>
          <h2 className={styles.h2}>Lorem, ipsum dolor.</h2>
          <div className={styles.lists}>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
