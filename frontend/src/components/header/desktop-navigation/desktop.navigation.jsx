import Link from "next/link";
import styles from "./desktop.navigation.module.scss";
import { LongButton } from "shared-components/long-button/long.button";
import { LogoButton } from "../logo-button/logo.button";
import { navigationItems } from "../../../config/navigationItems";

function AuthenticatedMenu ({ onLogout, user }) {
	return (
		<div className={styles.authenticatedMenu}>
			<img className={styles.avatar} src={user.image || "/images/avatar.svg"} alt="avatar"/>
			<div className={styles.userMenu}>
				<div className={styles.userMenuOptions}>
					<Link href="/profile" passHref>
						<div className={styles.tabLabel}>Izmeni profil</div>
					</Link>
					<div className={styles.tabLabel} onClick={onLogout}>
						Odjavi se
					</div>
				</div>
			</div>
		</div>
	);
}

function AnonymousMenu () {
	return (
		<div className={styles.anonymousMenu}>
			<Link href="/login">
				<div>
					<LongButton value="Prijava" type="border"/>
				</div>
			</Link>
			<Link href="/registration">
				<div>
					<LongButton value="Registracija" type="filled"/>
				</div>
			</Link>
		</div>
	);
}

function MainMenu () {
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

export const DesktopNavigation = ({ onLogout, isLoadingUser, user }) => {
	return (
		<nav className={styles.desktopNavigation}>
			<LogoButton/>
			<MainMenu/>
			{!isLoadingUser && (user ? <AuthenticatedMenu onLogout={onLogout} user={user}/> : <AnonymousMenu/>)}
		</nav>
	);
};
