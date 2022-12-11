import Link from "next/link";
import styles from "./desktop.navigation.module.scss";
import { LongButton } from "shared-components/long-button/long.button";
import { LogoButton } from "../logo-button/logo.button";
import { mainNavItems, LOGIN_NAV_ITEM, REGISTRATION_NAV_ITEM, PROFILE_NAV_ITEM } from "../../../config/navigation";

function AuthenticatedMenu ({ onLogout, user }) {
	return (
		<div className={styles.authenticatedMenu}>
			<img className={styles.avatar} src={user.image || "/images/avatar.svg"} alt="avatar"/>
			<div className={styles.userMenu}>
				<div className={styles.userMenuOptions}>
					<Link href={`/${PROFILE_NAV_ITEM.pathname}`} passHref>
						<div className={styles.tabLabel}>{PROFILE_NAV_ITEM.name}</div>
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
	const navItems = [
		{ ...LOGIN_NAV_ITEM, buttonType: "border" },
		{ ...REGISTRATION_NAV_ITEM, buttonType: "filled" },
	];

	return (
		<div className={styles.anonymousMenu}>
			{navItems.map(navItem => (
				<Link key={navItem.pathname} href={`/${navItem.pathname}`}>
					<div>
						<LongButton value={navItem.name} type={navItem.buttonType}/>
					</div>
				</Link>
			))}
		</div>
	);
}

function MainMenu () {
	return (
		<div className={styles.middleMenu}>
			{mainNavItems.map((tab, index) => (
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
