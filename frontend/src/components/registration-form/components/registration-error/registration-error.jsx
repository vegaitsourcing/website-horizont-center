import styles from "./registration.error.module.scss";
import React, { useEffect } from "react";
import Link from "next/link";
import { CONTACT_PATHNAME } from "../../../../config/navigation";
import { LongButton } from "../../../../shared-components";

export const RegistrationError = () => {

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});

	return (
		<div className={styles.background}>
			<div className={styles.box}>
				<div className={styles.boxHeader}>
					<h4 className={styles.h4}>Desila se greška</h4>
				</div>
				<p className={styles.registrationErrorText}>
					Trenutno nismo u mogućnosti da Vas registrujemo. Molimo Vas da pokušate ponovo kasnije.
					<br/>
					Ukoliko Vam se ova greška opet pojavi, možete nas kontaktirati putem
					naše <Link href={`/${CONTACT_PATHNAME}`}>kontak stranice</Link> kako biste prijavili ovaj problem.
				</p>
				<div className={styles.boxFooter}>
					<LongButton
						className={styles.submitButton}
						value="Zatvori"
						type="button"
						onClick={() => location.reload()}
					/>
				</div>
			</div>
		</div>
	);
};
