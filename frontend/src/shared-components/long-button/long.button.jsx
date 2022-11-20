import React from "react";
import styles from "./long.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function LongButton ({ value, type, onClick, direction, className = "", isDisabled = false }) {
	const buttonClassName = [
		styles.button,
		type === "border" ? styles.border : styles.filled,
		className,
		isDisabled ? styles.disabledButton : "",
	].join(" ");
	return (
		<button onClick={onClick} className={buttonClassName} disabled={isDisabled}>
			{direction === "left" && <FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/>}
			<span>{value}</span>
			{direction === "right" && <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>}
		</button>
	);
}
