import React, { useCallback, useEffect, useState } from "react";
import AuthService from "../../pages/api/authService";
import { DesktopNavigation } from "./desktop-navigation/desktop.navigation";
import { MobileNavigation } from "./mobile-navigation/mobile.navigation";

export const Header = ({ hasOpenedMobileMenu, onToggleMobileMenu }) => {
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		if (isLoadingUser) {
			setIsAuthenticated(AuthService.isAuthenticated());
			setIsLoadingUser(false);
		}
	}, [isLoadingUser]);

	const logout = useCallback(async () => {
		await AuthService.logout();
		setIsAuthenticated(false);
	}, []);

	if (isLoadingUser) return null;

	return (
		<header>
			<DesktopNavigation onLogout={isAuthenticated ? logout : null}/>
			<MobileNavigation
				isOpened={hasOpenedMobileMenu}
				onToggle={onToggleMobileMenu}
				onLogout={isAuthenticated ? logout : null}
			/>
		</header>
	);
};
