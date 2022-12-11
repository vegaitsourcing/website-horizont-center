import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./mobile.navigation.module.scss";
import {
	mainNavItems,
	LOGIN_NAV_ITEM,
	REGISTRATION_NAV_ITEM,
	PROFILE_NAV_ITEM,
} from "../../../config/navigation";
import { LogoButton } from "../logo-button/logo.button";

function MobileMenu ({ onItemClick, onLogout, user }) {
	const logout = useCallback(async () => {
		onLogout();
		onItemClick();
	}, [onItemClick, onLogout]);

	function MenuItems () {
		let menuItems = [...mainNavItems];
		if (!user) {
			menuItems = menuItems.concat([
				LOGIN_NAV_ITEM,
				REGISTRATION_NAV_ITEM,
			]);
		}

		const menuItemsJSX = menuItems.map(navItem => (
			<Link key={navItem.pathname} href={`/${navItem.pathname}`} passHref>
				<div className={styles.tabItem} onClick={onItemClick}>
					<span className={styles.tabLabel}>{navItem.name}</span>
				</div>
			</Link>
		));

		if (user) {
			menuItemsJSX.push(
				<Link key={PROFILE_NAV_ITEM.pathname} href={`/${PROFILE_NAV_ITEM.pathname}`} passHref>
					<div className={styles.tabItem}>
						<span className={styles.tabLabel}>{PROFILE_NAV_ITEM.name}</span>
					</div>
				</Link>,
			);
			menuItemsJSX.push(
				<div key="logout" className={styles.tabItem} onClick={logout}>
					<span className={styles.tabLabel}>Odjavi se</span>
				</div>,
			);
		}

		return menuItemsJSX;
	}

	return (
		<div className={styles.mobileMenu}>
			<MenuItems/>
		</div>
	);
}

export const MobileNavigation = ({ isOpened, onToggle, onLogout, user }) => {
	return (
		<nav className={styles.mobileNavigation}>
			<LogoButton/>
			{!isOpened && (
				<div className={styles.openMobileMenuButton} onClick={onToggle}>
					<FontAwesomeIcon icon={faBars}/>
				</div>
			)}
			{isOpened && (
				<div className={styles.closeMobileMenuButton} onClick={onToggle}>
					<FontAwesomeIcon icon={faXmark}/>
				</div>
			)}
			{isOpened && <MobileMenu onItemClick={onToggle} onLogout={onLogout} user={user}/>}
		</nav>
	);
};
