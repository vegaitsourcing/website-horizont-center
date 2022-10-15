import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./card.pagionation.module.scss";

export const CardPagination = ({ pageNum, numberOfPages, changePage }) => {
  return (
    <div className={styles.paginationWrapper}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
      </button>
      {Array.apply(null, Array(numberOfPages)).map((_, i) => (
        <button className={styles.button + " " + (pageNum === i + 1 ? styles["button--active"] : null)}>{i + 1}</button>
      ))}
      <button className={styles.button}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </button>
    </div>
  );
};
