import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LongButton } from "shared-components/long-button/long.button";
import { tabItems } from "./tabItems";
import styles from "./header.module.scss";
import AuthService from "../../pages/api/authService";

function AuthenticatedMenu({ onLogout }) {

	const logout = useCallback(async () => {
		await AuthService.logout();
		onLogout();
	}, [onLogout]);

	return (
		<div className={styles.authenticatedMenu}>
			<Image src="/avatar.svg" alt="avatar" width={65} height={65}/>
			<div className={styles.logoutButton} onClick={logout}>
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

export const Header = () => {
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (isLoadingUser) {
			setUser(AuthService.getUser());
			setIsLoadingUser(false);
		}
	}, [isLoadingUser]);

	if (isLoadingUser) return null;

	return (
		<header>
			<nav className={styles.desktopNavigation}>
				<div className={styles.imageWrapper}>
					<Image src="/caregivers.svg" alt="Logo" width={144} height={60}/>
				</div>
				<div className={styles.middleMenu}>
					{tabItems.map((tab, index) => {
						return (
							<div key={index} className={styles.tabItem}>
								<Link href={tab.pathname} passHref>
									<span className={styles.tabLabel}>{tab.name}</span>
								</Link>
							</div>
						);
					})}
				</div>
				{user ? <AuthenticatedMenu onLogout={() => setUser(null)}/> : <AnonymousMenu/>}
			</nav>
		</header>
	);
};
