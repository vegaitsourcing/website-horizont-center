import React, { useCallback, useEffect } from "react";
import styles from "./fields.module.scss";
import { ErrorMessages } from "./error.messages/error.messages";
import { useFormField } from "../../hooks";
import { FieldLabel } from "./field.label/field.label";
import { FIELD_WITH_ERRORS_CLASS_NAME } from "./index";

export const TextArea = ({
	id,
	onChange,
	label,
	infoText,
	placeholder = "",
	defaultValue = "",
	shouldValidate = false,
	required = false,
	validators = [],
	extraErrorMessages = [],
}) => {
	const [fieldValue, fieldErrorMessages, updateFieldValue] = useFormField(
		defaultValue,
		shouldValidate,
		validators,
		extraErrorMessages
	);

	useEffect(() => {
		if (shouldValidate && extraErrorMessages.length) updateFieldValue(fieldValue);
	}, [fieldValue, updateFieldValue, shouldValidate, extraErrorMessages]);

	const updateValue = useCallback((value) => {
		onChange(value);
		updateFieldValue(value);
	}, [onChange, updateFieldValue]);

	const wrapperClassNames = [
		styles.fieldWrapper,
		fieldErrorMessages.length ? `${styles.fieldWrapperWithError} ${FIELD_WITH_ERRORS_CLASS_NAME}` : "",
	].join(" ");

	return (
		<div className={wrapperClassNames}>
			{label && <FieldLabel label={label} required={required} infoText={infoText}/>}
			<textarea
				id={id}
				name={id}
				onKeyUp={event => updateValue(event.target.value)}
				className={[styles.field, styles.textarea].join(" ")}
				placeholder={placeholder}
				defaultValue={defaultValue}
			></textarea>
			<p id="counter" className={styles.charCount}>
				<span>{fieldValue.length}/500 karaktera</span>
				<br/>
			</p>
			<ErrorMessages errorMessages={fieldErrorMessages} errorClassName={styles.errorMessageRightAligned}/>
		</div>
	);
};
