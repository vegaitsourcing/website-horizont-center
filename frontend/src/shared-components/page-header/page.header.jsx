import React from "react";
import styles from "./page.header.module.scss";

export function PageHeader({ title, text, image, withBackground = false, isNarrow = false }) {
	const classNames = [
		image ? styles.pageHeaderWithImage : styles.pageHeader,
		withBackground ? styles.lightBlueBackground : null,
		isNarrow ? styles.narrowPageHeader : null
	].filter(className => !!className);
	return (
		<div className={classNames.join(" ")}>
			<h2 className={styles.h2}>{title}</h2>
			{text && <p className={styles.p1}>{text}</p>}
			{image && <img className={styles.image} src={image} alt="image"/>}
		</div>
	);
}
