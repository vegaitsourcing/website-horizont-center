import React from "react";
import styles from "./image.links.section.module.scss";

export function ImageLinksSection () {
	return (
		<section className={styles.imageLinksSection}>
			<a className={styles.imageLink} href={"/caregivers"}>
				<p className={styles.upperText}>NEGOVATELJI</p>
				<img className={styles.bgImage} src="/images/static.3.jpg" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>NUDIM POMOĆ</p>
					<p className={styles.description}>
						Pridruži se zajednici - Oglasi koje usluge nudiš - Javi nam rezultate
					</p>
				</div>
				<img className={styles.ctaIcon} src="/images/cta.svg" alt="go to"/>
			</a>
			<a className={styles.imageLink} href={"/beneficiaries"}>
				<p className={styles.upperText}>NEGOVANI</p>
				<img className={styles.bgImage} src="/images/static.5.jpg" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>TRAŽIM POMOĆ</p>
					<p className={styles.description}>
						Oglasi kakvu pomoć tražiš - Podeli svoju priču - Napravi promenu
					</p>
				</div>
				<img className={styles.ctaIcon} src="/images/cta.svg" alt="go to"/>
			</a>
		</section>
	);
}
