import React from "react";
import styles from "./post-title.module.scss";

function PostTitle({ title, text }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p1}>{text}</p>
    </div>
  );
}

export default PostTitle;
