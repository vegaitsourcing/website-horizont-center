import Link from "next/link";
import React from "react";
import styles from "./logo.button.module.scss";

export function LogoButton() {
	return (
		<Link href="/" passHref>
			<div className={styles.logoWrapper}>
				<img src="/caregivers.svg" alt="Logo"/>
			</div>
		</Link>
	);
}
