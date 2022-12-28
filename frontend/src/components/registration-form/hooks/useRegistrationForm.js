import { useCallback, useEffect, useState } from "react";
import { commonProfileFieldset } from "../fieldsets/common.profile.fieldset";
import { beneficiaryProfileFieldset } from "../fieldsets/beneficiary.profile.fieldset";
import { caregiverProfileFieldset } from "../fieldsets/caregiver.profile.fieldset";
import { additionalProfileFieldset } from "../fieldsets/additional.profile.fieldset";
import { applyAPIValidationErrorsToFieldsets, filterProfileTypeSpecificFields, prepareFieldsets } from "./utils";
import { ValidationError } from "../../../errors/validation.error";
import { RegistrationFormFieldsetsService } from "../registrationFormFieldsetsService";

export const registrationFormFieldsets = {
	common: commonProfileFieldset,
	beneficiary: beneficiaryProfileFieldset,
	caregiver: caregiverProfileFieldset,
	additional: additionalProfileFieldset,
};

export function useRegistrationForm () {
	const [fieldsets, setFieldsets] = useState(null);
	const [profileType, setProfileType] = useState("");

	useEffect(() => {
		if (!fieldsets) {
			const storageFieldsets = RegistrationFormFieldsetsService.getOrCreateFieldsets();
			setFieldsets(prepareFieldsets(storageFieldsets));
			setProfileType(storageFieldsets.common.fields.profile_type.value);
		}
	}, [fieldsets]);

	const updateField = useCallback((fieldsetKey, fieldKey, value) => {
		const updatedFieldsets = { ...fieldsets };
		updatedFieldsets[fieldsetKey].fields[fieldKey].value = value;
		setFieldsets(updatedFieldsets);
		RegistrationFormFieldsetsService.saveFieldsets(updatedFieldsets);
		if (fieldKey === "profile_type") setProfileType(value);
	}, [fieldsets]);

	function hasErrors () {
		const profileType = fieldsets.common.fields.profile_type.value;
		if (!profileType) return true;

		const fields = filterProfileTypeSpecificFields(fieldsets, profileType);
		const fieldWithErrors = Object.values(fields).find(field => {
			const validationError = field.validators.find(validator => {
				try {
					validator(field.value);
				} catch (error) {
					if (error instanceof ValidationError) return true;
				}
			});
			return !!validationError;
		});
		return !!fieldWithErrors;
	}

	function getAPIRequestData () {
		const requestData = {
			user: {},
		};
		const fields = filterProfileTypeSpecificFields(fieldsets, profileType);
		Object.entries(fields).forEach(([key, field]) => {
			if (field.parentFieldName === "user") {
				requestData.user[key] = field.value;
			} else {
				requestData[key] = field.value;
			}
		});
		return requestData;
	}

	const setAPIValidationErrors = useCallback((apiValidationErrors) => {
		const processedFieldsets = applyAPIValidationErrorsToFieldsets(fieldsets, apiValidationErrors);
		setFieldsets(processedFieldsets);
		RegistrationFormFieldsetsService.saveFieldsets(processedFieldsets);
	}, [fieldsets]);

	return { fieldsets, profileType, updateField, hasErrors, getAPIRequestData, setAPIValidationErrors };
}
