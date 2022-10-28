import React from "react";
import styles from "./pager.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function PageButtons({ totalPages, activePageNumber, changePage }) {
  const pageNumbers = Array(totalPages).fill(null).map((_, i) => i + 1)
  return pageNumbers.map(number => (
    <button
      key={number}
      onClick={_ => changePage(number)}
      className={styles.button + " " + (number == activePageNumber ? styles["button--active"] : null)}
    >
      {number}
    </button>
  ))
}

export const Pager = ({ pageNum, numberOfPages, changePage }) => {
  return (
    <div className={styles.paginationWrapper}>
      {pageNum > 1 && (
        <button className={styles.button} onClick={(e) => changePage(pageNum - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
        </button>
      )}
      <PageButtons
        activePageNumber={pageNum}
        totalPages={numberOfPages}
        changePage={changePage}
      />
      {pageNum < numberOfPages && (
        <button className={styles.button} onClick={(e) => changePage(pageNum + 1)}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
        </button>
      )}
    </div>
  );
};
