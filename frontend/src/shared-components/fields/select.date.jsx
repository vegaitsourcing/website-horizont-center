import React, { useCallback, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import styles from "./fields.module.scss";
import { useFormField } from "../../hooks";
import { ErrorMessages } from "./error.messages/error.messages";
import { FieldLabel } from "./field.label/field.label";
import { FIELD_WITH_ERRORS_CLASS_NAME } from "./index";

export const SelectDate = ({
	inputValue,
	label,
	infoText,
	onChange,
	className = "",
	shouldValidate = true,
	required = true,
	validators = [],
	extraErrorMessages = [],
}) => {
	const [fieldValue, fieldErrorMessages, updateFieldValue] = useFormField(
		inputValue,
		shouldValidate,
		validators,
		extraErrorMessages
	);

	useEffect(() => {
		if (shouldValidate && extraErrorMessages.length) updateFieldValue(fieldValue);
	}, [fieldValue, updateFieldValue, shouldValidate, extraErrorMessages]);

	const updateValue = useCallback((event) => {
		onChange(moment(event).format("YYYY-MM-DD"));
		updateFieldValue(moment(event).format("YYYY-MM-DD"));
	}, [onChange, updateFieldValue]);

	const wrapperClassNames = [
		styles.fieldWrapper,
		className,
		fieldErrorMessages.length ? `${styles.fieldWrapperWithError} ${FIELD_WITH_ERRORS_CLASS_NAME}` : "",
	].join(" ");

	return (
		<div className={wrapperClassNames}>
			{label && <FieldLabel label={label} required={required} infoText={infoText}/>}
			<DatePicker
				placeholderText={inputValue !== "" ? inputValue : "Datum rođenja Dan/Mesec/Godina**"}
				dateFormat="dd/MM/yyyy"
				id="start-date"
				autoComplete="off"
				selected={Date.parse(fieldValue) ?? new Date()}
				onChange={(event) => updateValue(event)}
			/>
			<ErrorMessages errorMessages={fieldErrorMessages}/>
		</div>
	);
};
