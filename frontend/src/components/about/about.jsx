import React from "react";

import Image from "next/image";
import { LongButton } from "shared-components";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <>
      <section className={styles["about-section-1"]}>
        <h1 className={styles.h1}>Kontakt</h1>
        <p className={styles.p1}>
          Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursus.
        </p>
      </section>
      <section className={styles["about-section-2"]}>
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
          <Image src="/images/contactPageImage1.png" width="640" height="550" alt="about us" />
        </div>
      </section>
      <section className={styles["about-section-4"]}>
        <div className={styles["element"]}>
          <h1 className={styles.h1}>47</h1>
          <p className={styles.p1}>Članovi zajednice</p>
        </div>
        <div className={styles["element"]}>
          <h1 className={styles.h1}>142</h1>
          <p className={styles.p1}>Broj registrovanih negovatelja</p>
        </div>
        <div className={styles["element"]}>
          <h1 className={styles.h1}>42</h1>
          <p className={styles.p1}>Broj partnera</p>
        </div>
      </section>
      <section className={styles["about-section-3"]}>
        <div className={styles["centered-text"]}>
          <strong>scelerisque</strong>
          <h2 className={styles.h2}>Objašenje koraka prijave</h2>
          <p className={styles.p1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste quos natus vel iure distinctio veniam
            alias nisi blanditiis incidunt!
          </p>
        </div>
        <ul className={styles["about-list"]}>
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
      <section className={styles["about-section-5"]}>
        <div className={styles["images-box"]}>
          <div className={styles["flex-img-container"]}>
            <Image src="/images/imageContact2.png" width="484px" height="296.5px" />
            <Image src="/images/imageContact3.png" width="139px" height="190px" />
          </div>
          <div className={styles["flex-img-container"]}>
            <Image src="/images/imageContact4.png" width="139px" height="190px" />
            <Image src="/images/imageContact5.png" width="484px" height="296.5px" />
          </div>
        </div>
        <div>
          <strong className={styles.strong}>scelerisque</strong>
          <h2 className={styles.h2}>Adipiscing platea aliquet</h2>
          <div className={styles.content}>
            <p className={styles.p1}>
              Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt.
              Faucibus molestie in tincidunt ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla
              arcu elit nisi imperdiet integer tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
