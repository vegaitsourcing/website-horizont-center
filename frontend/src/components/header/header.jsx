import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DesktopNavigation } from "./desktop-navigation/desktop.navigation";
import { MobileNavigation } from "./mobile-navigation/mobile.navigation";
import AuthService from "../../pages/api/authService";

export const Header = ({ hasOpenedMobileMenu, onToggleMobileMenu }) => {
	const router = useRouter();
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		if (isLoadingUser) {
			setUser(AuthService.getUser());
			setIsLoadingUser(false);
		}
	}, [isLoadingUser]);

	useEffect(() => {
	}, [isLoadingUser]);

	const logout = useCallback(async () => {
		await AuthService.logout();
		router.reload();
	}, [router]);

	return (
		<header>
			<DesktopNavigation
				onLogout={logout}
				isLoadingUser={isLoadingUser}
				user={user}
			/>
			<MobileNavigation
				isOpened={hasOpenedMobileMenu}
				onToggle={onToggleMobileMenu}
				onLogout={logout}
				user={user}
			/>
		</header>
	);
};
