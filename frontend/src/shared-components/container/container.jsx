import React from "react";

import styles from "./container.module.scss";

export const Container = ({ styledClass, children }) => {
  return <div className={styles[`${styledClass}`]}>{children}</div>;
};
