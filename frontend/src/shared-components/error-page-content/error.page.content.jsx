import styles from "./error.page.content.module.scss";

const ERROR_MESSAGES = {
	401: "Pristup ovom sadržaju je zabranjen. Pokušajte ponovo nakon prijave.",
	404: "Sadržaj nije pronađen.",
	500: "Desila se greška.",
};

export function ErrorPageContent({ statusCode }) {
	return (
		<div className={styles.errorPageContent}>
			<p>{ERROR_MESSAGES[statusCode] || statusCode}</p>
		</div>
	);
}
