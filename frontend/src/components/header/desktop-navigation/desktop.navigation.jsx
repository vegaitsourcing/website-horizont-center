import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./desktop.navigation.module.scss";
import { LongButton } from "shared-components/long-button/long.button";
import { LogoButton } from "../logo-button/logo.button";
import { navigationItems } from "../../../config/navigationItems";
import AuthService from "../../../pages/api/authService";

function AuthenticatedMenu({ onLogout }) {
	const [avatarURL, setAvatarURL] = useState("/images/avatar.svg");

	useEffect(() => {
		const user = AuthService.getUser();
		if (user.imageURL) {
			setAvatarURL(user.imageURL);
		}
	}, []);

	return (
		<div className={styles.authenticatedMenu}>
			<img className={styles.avatar} src={avatarURL} alt="avatar"/>
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
				{navigationItems.map((tab, index) => (
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
