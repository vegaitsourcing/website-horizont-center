import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DesktopNavigation } from "./desktop-navigation/desktop.navigation";
import { MobileNavigation } from "./mobile-navigation/mobile.navigation";
import AuthService from "../../pages/api/authService";

export const Header = ({ hasOpenedMobileMenu, onToggleMobileMenu }) => {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setIsAuthenticated(AuthService.isAuthenticated());
	}, []);

	const logout = useCallback(async () => {
		await AuthService.logout();
		router.reload();
	}, [router]);

	return (
		<header>
			<DesktopNavigation onLogout={logout} isAuthenticated={isAuthenticated}/>
			<MobileNavigation
				isOpened={hasOpenedMobileMenu}
				onToggle={onToggleMobileMenu}
				onLogout={logout}
				isAuthenticated={isAuthenticated}
			/>
		</header>
	);
};
