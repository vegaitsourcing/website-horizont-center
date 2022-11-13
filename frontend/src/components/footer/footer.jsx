import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import { navigationItems } from "../../config/navigationItems";

export const Footer = ({ isHidden }) => {
	return (
		<footer className={[styles.footer, isHidden ? styles.hidden : ""].join(" ")}>
			<section className={styles.logoSection}>
				<img src="/images/logo.white.svg" alt="Negovatelji logo" className={styles.logo}/>
			</section>
			<section className={styles.mainSection}>
				<div className={styles.leftSide}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae pariatur mollitia voluptatibus ab quis?
						Deserunt eum libero qui dolores.
					</p>
					<div className={styles.socialMediaButtons}>
						<a href="#" target="_blank">
							<Image src="/images/facebookIconWhite.svg" width="16.11" height="30" alt="link to our facebook"/>
						</a>
						<a href="#" target="_blank">
							<Image src="/images/twitterIconWhite.svg" width="30" height="24" alt="link to our twitter"/>
						</a>
						<a href="#" target="_blank">
							<Image src="/images/linkedinIconWhite.svg" width="26" height="26" alt="link to our linkedin"/>
						</a>
					</div>
				</div>
				<div className={styles.rightSide}>
					{navigationItems.map(item => (
						<Link key={item.pathname} href={`/${item.pathname}`}>
							<p className={styles.linkItem}>{item.name}</p>
						</Link>
					))}
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
