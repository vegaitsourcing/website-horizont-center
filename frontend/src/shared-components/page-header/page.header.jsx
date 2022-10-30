import React from "react";
import styles from "./page.header.module.scss";

export function PageHeader({ title, text }) {
	return (
		<div className={styles.pageHeader}>
			<h2 className={styles.h2}>{title}</h2>
			<p className={styles.p1}>{text}</p>
		</div>
	);
}
