import React from "react";

import styles from "./border.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const BorderButton = ({ value, type }) => {
  return (
    <button type="submit" className={styles.button}>
      {value}
      <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
    </button>
  );
};
