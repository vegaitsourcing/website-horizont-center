import styles from "./error.page.content.module.scss";
import Link from "next/link";

function Message401 () {
	return (
		<div>
			<p>Pristup ovom sadržaju omogućen je samo registrovanim korisnicima.</p>
			<p><Link href="/registration">Registrujte se</Link> i pokušajte ponovo nakon prijave.</p>
		</div>
	);
}

function Message500 () {
	return (
		<div>
			<p>Trenutna greška na serveru.</p>
			<p>Molimo vas za strpljenje i nadamo se da će greška biti uskoro otklonjena.</p>
		</div>
	);
}

const ERROR_MESSAGES = {
	401: <Message401/>,
	404: <p>Sadržaj nije pronađen.</p>,
	500: <Message500/>,
};

export function ErrorPageContent ({ statusCode }) {
	return (
		<div className={styles.errorPageContent}>
			{ERROR_MESSAGES[statusCode] || statusCode}
		</div>
	);
}
