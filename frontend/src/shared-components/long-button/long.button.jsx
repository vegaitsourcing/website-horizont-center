import React from "react";
import styles from "./long.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const LongButton = React.forwardRef(({ value, type, onClick, style, direction, href }, ref) => {
	return (
		<button
			onClick={onClick}
			className={styles.button + " " + (type === "border" ? styles.border : styles.filled)}
			style={style}
			href={href}
			ref={ref}
		>
			{direction === "left" ? <FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/> : ""}
			{value}
			{direction === "right" ? <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/> : ""}
		</button>
	);
});
