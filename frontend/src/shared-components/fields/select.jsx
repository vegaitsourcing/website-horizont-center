import React, { useCallback, useEffect } from "react";
import styles from "./fields.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormField } from "../../hooks";
import { ErrorMessages } from "./error.messages/error.messages";
import { FieldLabel } from "./field.label/field.label";
import { FIELD_WITH_ERRORS_CLASS_NAME } from "./index";

export const Select = ({
	id,
	name,
	label,
	placeholder,
	options,
	onChange,
	infoText,
	className = "",
	inputValue = "",
	required = true,
	shouldValidate = true,
	validators = [],
	extraErrorMessages = [],
}) => {
	const [fieldValue, fieldErrorMessages, updateFieldValue] = useFormField(
		inputValue,
		shouldValidate,
		validators,
		extraErrorMessages,
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
		className,
		fieldErrorMessages.length ? `${styles.fieldWrapperWithError} ${FIELD_WITH_ERRORS_CLASS_NAME}` : "",
	].join(" ");

	return (
		<div className={wrapperClassNames}>
			{label && <FieldLabel label={label} required={required} infoText={infoText}/>}
			<div className={styles.fieldInnerWrapper}>
				<select
					onChange={(event) => updateValue(event.target.value)}
					name={name}
					id={id}
					value={fieldValue}
					className={styles.field}
				>
					{placeholder && <option key={placeholder} value="">{placeholder}</option>}
					{Object.entries(options).map(([value, label], _) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				<FontAwesomeIcon icon={faChevronDown} className={styles.icon}/>
			</div>
			<ErrorMessages errorMessages={fieldErrorMessages}/>
		</div>
	);
};
