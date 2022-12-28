import React, { useCallback, useEffect, useState } from "react";
import { ValidationError } from "../errors/validation.error";

export function useFormField(defaultValue, shouldValidate, validators, extraErrorMessages = []) {
	const [fieldValue, setFieldValue] = useState(defaultValue);
	const [fieldErrorMessages, setFieldErrorMessages] = useState([]);

	useEffect(() => {
		if (shouldValidate) validate(fieldValue);
	}, [fieldValue, shouldValidate, validate]);

	const validate = useCallback((value) => {
		const errorMessages = [];
		validators.forEach(validator => {
			try {
				validator(value);
			} catch (error) {
				if (!(error instanceof ValidationError)) throw error;
				errorMessages.push(error.message);
			}
		});
		setFieldErrorMessages([...errorMessages, ...extraErrorMessages]);
	}, [validators, extraErrorMessages]);

	const updateFieldValue = useCallback((value) => {
		setFieldValue(value);
		if (shouldValidate) validate(value);
	}, [validate, shouldValidate]);

	return [fieldValue, fieldErrorMessages, updateFieldValue];
}
