import React from "react";
import styles from "./long.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function LongButton({ value, type, onClick, direction }) {
	const className = [styles.button, (type === "border" ? styles.border : styles.filled)].join(" ");
	return (
		<button onClick={onClick} className={className}>
			{direction === "left" && <FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/>}
			{value}
			{direction === "right" && <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>}
		</button>
	);
}
