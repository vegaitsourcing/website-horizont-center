import React from "react";

import Image from "next/image";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <>
      <section className={styles["about-section-1"]}>
        <div className={styles.container}>
          <h2 className={styles.h2}>O nama</h2>
          <p className={styles.p1}>
            Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna
            cursus.
          </p>
        </div>
      </section>
      <section className={styles["about-section-2"]}>
        <div className={styles.content}>
          <h2 className={styles.h2}>Adipiscing platea aliquet</h2>
          <p className={styles.p1}>
            Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
            ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
            tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
          </p>
        </div>
        <div className={styles.img}>
          <Image src="/images/contact_page1.png" width="640" height="550" alt="about us" />
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
        <div className={styles.container}>
          <div className={styles["centered-text"]}>
            <strong className={styles.strong}>scelerisque</strong>
            <h2 className={styles.h2}>Naša misija</h2>
            <p className={styles.p1}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste quos natus vel iure distinctio veniam
              alias nisi blanditiis incidunt!
            </p>
          </div>
          <ul className={styles["about-list"]}>
            <li>
              <strong className={styles.strong}>01</strong>
              <h4 className={styles.h4}>Lorem, ipsum dolor.</h4>
              <p className={styles.p1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
                dignissimos quidem in explicabo? Sapiente, natus.
              </p>
            </li>
            <li>
              <strong className={styles.strong}>02</strong>
              <h4 className={styles.h4}>Lorem, ipsum dolor.</h4>
              <p className={styles.p1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
                dignissimos quidem in explicabo? Sapiente, natus.
              </p>
            </li>
            <li>
              <strong className={styles.strong}>03</strong>
              <h4 className={styles.h4}>Lorem, ipsum dolor.</h4>
              <p className={styles.p1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui, non aspernatur nostrum nemo
                dignissimos quidem in explicabo? Sapiente, natus.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles["about-section-5"]}>
        <div className={styles["images-box"]}>
          <div className={[styles.flex_img_container + " " + styles.up]}>
            <img src="/images/contact_page2.jpeg" className={styles.big} />
            <img src="/images/contact_page3.jpeg" className={styles.small} />
          </div>
          <div className={[styles.flex_img_container + " " + styles.down]}>
            <img src="/images/contact_page4.jpeg" className={styles.small} />
            <img src="/images/contact_page1.jpeg" className={styles.big} />
          </div>
        </div>
        <div className={styles.content}>
          <strong className={styles.strong}>scelerisque</strong>
          <h2 className={styles.h2}>Adipiscing platea aliquet</h2>

          <p className={styles.p1}>
            Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt.
            Faucibus molestie in tincidunt ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla
            arcu elit nisi imperdiet integer tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
          </p>
        </div>
      </section>
      <section className={styles["about-section-6"]}>
        <div className={styles.content}>
          <strong className={styles.strong}>scelerisque</strong>
          <h2 className={styles.h2}>Adipiscing</h2>

          <p className={styles.p1}>
            Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
            ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
            tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
          </p>
        </div>
        <div className={styles.images}>
          <img src="/images/about_page1.png" className={styles.img} />
          <img src="/images/about_page2.png" className={styles.img} />
        </div>
      </section>
    </>
  );
};
