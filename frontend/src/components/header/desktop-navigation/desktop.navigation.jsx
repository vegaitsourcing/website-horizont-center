import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./desktop.navigation.module.scss";
import { LongButton } from "shared-components/long-button/long.button";
import { LogoButton } from "../logo-button/logo.button";
import { navigationItems } from "../../../config/navigationItems";
import AuthService from "../../../pages/api/authService";

function AuthenticatedMenu({ onLogout, avatarURL }) {
	return (
		<div className={styles.authenticatedMenu}>
			<img className={styles.avatar} src={avatarURL || "/images/avatar.svg"} alt="avatar"/>
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

function MainMenu() {
	return (
		<div className={styles.middleMenu}>
			{navigationItems.map((tab, index) => (
				<div key={index} className={styles.tabItem}>
					<Link href={`/${tab.pathname}`} passHref>
						<span className={styles.tabLabel}>{tab.name}</span>
					</Link>
				</div>
			))}
		</div>
	);
}

export const DesktopNavigation = ({ onLogout, isAuthenticated }) => {
	const [avatarURL, setAvatarURL] = useState("/images/avatar.svg");
	const [isLoadingUser, setIsLoadingUser] = useState(true);

	useEffect(() => {
		if (isLoadingUser) {
			const user = AuthService.getUser();
			setAvatarURL(user?.imageURL);
			setIsLoadingUser(false);
		}
	}, [isLoadingUser]);

	return (
		<nav className={styles.desktopNavigation}>
			<LogoButton/>
			<MainMenu/>
			{!isLoadingUser && (
				isAuthenticated ? <AuthenticatedMenu onLogout={onLogout} avatarURL={avatarURL}/> : <AnonymousMenu/>
			)}
		</nav>
	);
};
