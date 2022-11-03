import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./desktop.navigation.module.scss";
import { LongButton } from "shared-components/long-button/long.button";
import { LogoButton } from "../logo-button/logo.button";
import { tabItems } from "../tabItems";

function AuthenticatedMenu({ onLogout }) {
	return (
		<div className={styles.authenticatedMenu}>
			<Image src="/avatar.svg" alt="avatar" width={65} height={65}/>
			<div className={styles.logoutButton} onClick={onLogout}>
				<span className={styles.tabLabel}>Logout</span>
			</div>
		</div>
	);
}

function AnonymousMenu() {
	return (
		<div className={styles.anonymousMenu}>
			<Link href="/login" passHref>
				<LongButton value="Prijava" type="border"/>
			</Link>
			<Link href="/registration" passHref>
				<LongButton value="Registracija" type="filled"/>
			</Link>
		</div>
	);
}

export const DesktopNavigation = ({ onLogout }) => {

	function MainMenu() {
		return (
			<div className={styles.middleMenu}>
				{tabItems.map((tab, index) => (
					<div key={index} className={styles.tabItem}>
						<Link href={tab.pathname} passHref>
							<span className={styles.tabLabel}>{tab.name}</span>
						</Link>
					</div>
				))}
			</div>
		);
	}

	return (
		<nav className={styles.desktopNavigation}>
			<LogoButton/>
			<MainMenu/>
			{onLogout ? <AuthenticatedMenu onLogout={onLogout}/> : <AnonymousMenu/>}
		</nav>
	);
};
