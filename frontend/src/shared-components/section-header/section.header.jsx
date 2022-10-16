import React from "react";

import styles from "./section.header.module.scss";

export const SectionHeader = ({ title, imageSrc }) => {
  return (
    <section className={styles.singleBlogTitle}>
      <div className={styles.singleBlogContainer}>
        <h1 className={styles.h1}>{title}.</h1>
        <div className={styles.singleBlogTitleImg}>
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </section>
  );
};
