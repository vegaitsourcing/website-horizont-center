import styles from "./registration.form.fieldset.module.scss";
import React from "react";
import { RegistrationFormFieldFactory } from "../../registrationFormFieldFactory";

export function RegistrationFormFieldset ({
	title,
	fields,
	onFieldValueChange,
	isGrid = true,
	shouldValidate = false,
}) {
	const registrationFormFieldFactory = new RegistrationFormFieldFactory();

	return (
		<>
			{title && <p className={styles.title}>{title}</p>}
			<div className={isGrid ? styles.fieldsetGrid : styles.fieldsetRow}>
				{Object.entries(fields).map(([fieldName, field], _) => {
					return registrationFormFieldFactory.create(fieldName, field, onFieldValueChange, shouldValidate);
				})}
			</div>
		</>
	);
}
