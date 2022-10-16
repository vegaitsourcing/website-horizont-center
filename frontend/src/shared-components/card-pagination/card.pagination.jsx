import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./card.pagionation.module.scss";

export const CardPagination = ({ pageNum, numberOfPages, changePage }) => {
  return (
    <div className={styles.paginationWrapper}>
      {pageNum > 1 && (
        <button className={styles.button} onClick={(e) => changePage(pageNum - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
        </button>
      )}
      {Array.apply(null, Array(numberOfPages)).map((_, i) => (
        <button
          onClick={(e) => changePage(i + 1)}
          className={styles.button + " " + (pageNum === i + 1 ? styles["button--active"] : null)}
        >
          {i + 1}
        </button>
      ))}
      {pageNum < numberOfPages && (
        <button className={styles.button} onClick={(e) => changePage(pageNum + 1)}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
        </button>
      )}
    </div>
  );
};
