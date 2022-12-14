import styles from "./error.messages.module.scss";
import React from "react";

export function ErrorMessages({ errorMessages, errorClassName = "" }) {
	const classNames = [styles.errorMessage, errorClassName].join(" ");
	return errorMessages.map((message, index) => (
		<p key={index} className={classNames}>{message}</p>
	));
}
