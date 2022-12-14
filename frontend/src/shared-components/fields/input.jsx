import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./fields.module.scss";
import { useFormField } from "../../hooks";
import { ErrorMessages } from "./error.messages/error.messages";
import { FieldLabel } from "./field.label/field.label";
import { FIELD_WITH_ERRORS_CLASS_NAME } from "./index";

export const Input = ({
	id,
	name,
	type,
	step,
	label,
	placeholder,
	inputValue,
	onChange,
	className = "",
	infoText = "",
	required = true,
	withSearchIcon = false,
	shouldValidate = false,
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
		updateFieldValue(value);
		onChange(value);
	}, [updateFieldValue, onChange]);

	const wrapperClassNames = [
		styles.fieldWrapper,
		className,
		fieldErrorMessages.length ? `${styles.fieldWrapperWithError} ${FIELD_WITH_ERRORS_CLASS_NAME}` : "",
	].join(" ");

	return (
		<div className={wrapperClassNames}>
			{label && <FieldLabel label={label} required={required} infoText={infoText}/>}
			<div className={styles.fieldInnerWrapper}>
				<input
					id={id}
					defaultValue={fieldValue || ""}
					type={type}
					name={name}
					step={step}
					min={"1"}
					onChange={(event) => updateValue(event.target.value)}
					placeholder={placeholder}
					className={styles.field}
				/>
				{withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>}
			</div>
			<ErrorMessages errorMessages={fieldErrorMessages}/>
		</div>
	);
};
