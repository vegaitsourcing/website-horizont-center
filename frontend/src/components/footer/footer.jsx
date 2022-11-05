import React from "react";

import Image from "next/image";

import styles from "./footer.module.scss";

export const Footer = ({ isHidden }) => {
	return (
		<footer className={[styles.footer, isHidden ? styles.hidden : ""].join(" ")}>
			<section className={styles.logoSection}>
				<img src="/caregivers_footer.svg" alt="Negovatelji logo" className={styles.logo}/>
			</section>
			<section className={styles.mainSection}>
				<div className={styles.leftSide}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae pariatur mollitia voluptatibus ab quis?
						Deserunt eum libero qui dolores.
					</p>
					<div className={styles.socialMediaButtons}>
						<a href="#" target="_blank">
							<Image src="/images/facebookIcon.png" width="16.11" height="30" alt="link to our facebook"/>
						</a>
						<a href="#" target="_blank">
							<Image src="/images/twitterIcon.png" width="30" height="24" alt="link to our twitter"/>
						</a>
						<a href="#" target="_blank">
							<Image src="/images/linkedinIcon.png" width="26" height="26" alt="link to our linkedin"/>
						</a>
					</div>
				</div>
				<div className={styles.rightSide}>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
					<a className={styles.linkItem} href="#">Lorem, ipsum.</a>
				</div>
			</section>
			<section className={styles.copyrightsSection}>
				<p className={styles.leftSide}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia nisi ducimus accusamus vitae qui a debitis
					inventore?
				</p>
				<p className={styles.rightSide}>
					LOREM IPSUM
				</p>
			</section>
		</footer>
	);
};
