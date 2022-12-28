import { ValidationError } from "../../../errors/validation.error";
import { getSerbianCitySelectOptions } from "../../../utils";

export function filterProfileTypeSpecificFields(fieldsets, profileType) {
	return {
		...fieldsets.common.fields,
		...fieldsets.additional.fields,
		...fieldsets[profileType].fields,
	};
}

export function applyAPIValidationErrorsToFieldsets(fieldsets, apiValidationErrors) {
	const preparedFieldsets = {};
	Object.entries(fieldsets).forEach(([fieldsetName, fieldset]) => {
		const preparedFieldset = { ...fieldset };
		Object.entries(fieldset.fields).forEach(([fieldName, field]) => {
			const preparedField = { ...field };
			if (field.parentFieldName && apiValidationErrors[field.parentFieldName]) {
				preparedField.apiValidationErrors = apiValidationErrors[field.parentFieldName][fieldName] || [];
			} else {
				preparedField.apiValidationErrors = apiValidationErrors[fieldName] || [];
			}
			preparedFieldset.fields[fieldName] = preparedField;
		});
		preparedFieldsets[fieldsetName] = preparedFieldset;
	});
	return preparedFieldsets;
}

export function prepareFieldsets(fieldsets) {
	const preparedFieldsets = {};
	Object.entries(fieldsets).forEach(([fieldsetName, fieldset]) => {
		preparedFieldsets[fieldsetName] = _prepareFieldset(fieldset);
	});
	return preparedFieldsets;
}

function _prepareFieldset(fieldset) {
	const preparedFieldset = { ...fieldset };
	Object.entries(fieldset.fields).forEach(async ([fieldName, field]) => {
		if (fieldName === "city") {
			preparedFieldset.fields[fieldName] = await _prepareCitiesField(field);
		} else {
			preparedFieldset.fields[fieldName] = _prepareField(field);
		}
	});
	return preparedFieldset;
}

async function _prepareCitiesField(field) {
	const preparedField = _prepareField(field);
	preparedField.options = await getSerbianCitySelectOptions();
	return preparedField;
}

function _prepareField(field) {
	const preparedField = { ...field };
	preparedField.validators = _getFieldValidators(field);
	return preparedField;
}

function _getFieldValidators(field) {
	const validators = [];
	if (field.required) {
		validators.push(_validateRequired);
	}
	if (typeof field.minLength === "number") {
		validators.push((value) => _validateMinLength(field.minLength, value));
	}
	if (typeof field.maxLength === "number") {
		validators.push((value) => _validateMaxLength(field.maxLength, value));
	}
	return validators;
}

function _validateRequired(value) {
	if ([null, undefined, ""].indexOf(value) >= 0) {
		throw new ValidationError("Ovo polje je obavezno");
	}
}

function _validateMinLength(minLength, value) {
	if (value.length < minLength) {
		throw new ValidationError(`Potrebno je uneti najmanje ${minLength} karaktera`);
	}
}

function _validateMaxLength(maxLength, value) {
	if (value.length > maxLength) {
		throw new ValidationError(`Nije dozvoljeno više od ${maxLength} karaktera`);
	}
}
