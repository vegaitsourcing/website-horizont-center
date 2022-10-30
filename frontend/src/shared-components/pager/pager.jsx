import React from "react";
import styles from "./pager.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function PageButtons({ numberOfPages, activePageNumber, onPageChange }) {
	const pageNumbers = Array(numberOfPages).fill(null).map((_, i) => i + 1);
	return pageNumbers.map(number => (
		<button
			key={number}
			onClick={_ => onPageChange(number)}
			className={[styles.button, (number === activePageNumber ? styles.activeButton : "")].join(" ")}
		>
			{number}
		</button>
	));
}

export const Pager = ({ activePageNumber, numberOfPages, onPageChange }) => {
	return (
		<div className={styles.paginationWrapper}>
			{activePageNumber > 1 && (
				<button className={styles.button} onClick={_ => onPageChange(activePageNumber - 1)}>
					<FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/>
				</button>
			)}
			<PageButtons
				activePageNumber={activePageNumber}
				numberOfPages={numberOfPages}
				onPageChange={onPageChange}
			/>
			{activePageNumber < numberOfPages && (
				<button className={styles.button} onClick={_ => onPageChange(activePageNumber + 1)}>
					<FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
				</button>
			)}
		</div>
	);
};
