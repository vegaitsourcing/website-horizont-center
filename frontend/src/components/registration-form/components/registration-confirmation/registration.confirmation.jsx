import styles from "./registration.confirmation.module.scss";
import React, { useEffect } from "react";

export const RegistrationConfirmation = ({ email }) => {

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});

	return (
		<div className={styles.background}>
			<div className={styles.box}>
				<div className={styles.boxHeader}>
					<h4 className={styles.h4}>Vaš profil je uspešno kreiran</h4>
				</div>
				<p className={styles.registrationConfirmationText}>
					Kako biste bili u mogućnosti da se prijavite, morate prvo da aktivirate profil koji ste upravo kreirali.
					E-mail za aktivaciju profila je poslat na vašu e-mail adresu <span className={styles.email}>{email}</span>.
					Molimo Vas da ispratite uputsva u tom e-mailu kako biste aktivirali profil.
				</p>
			</div>
		</div>
	);
};
