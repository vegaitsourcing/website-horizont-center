import React from "react";

import styles from "./about.details.module.scss";

export const AboutDetails = ({ imageSrc, name, type, text, socialLinks }) => {
  return (
    <section className={styles.aboutDetails}>
      <div className={styles.aboutMain}>
        <div className={styles.authorName}>
          <img src={imageSrc} alt="" />
          <h3 className={styles.aboutHeading}>{name}</h3>
        </div>
        <div className={styles.authorAbout}>
          <h3 className={styles.aboutHeading}>
            {type === "author" && "O autoru"}
            {type === "company" && "O kompaniji"}
          </h3>
          <p className={styles.aboutParagraph}>{text}</p>
          <ul className={styles.aboutSocialLinks}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url}>
                <img src={link.iconPath} alt="" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
