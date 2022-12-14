import { registrationFormFieldsets } from "./hooks/useRegistrationForm";

const LOCAL_STORAGE_KEY = "registrationFormFieldsets";

export const RegistrationFormFieldsetsService = {

	saveFieldsets (fieldsets) {
		const fieldsetsCopy = JSON.parse(JSON.stringify(fieldsets));
		Object.values(fieldsetsCopy).forEach(fieldset => {
			Object.entries(fieldset.fields).forEach(([fieldName, field]) => {
				if (!field.remember) {
					fieldset.fields[fieldName].value = "";
				}
				delete fieldset.fields[fieldName].validators;
				delete fieldset.fields[fieldName].apiValidationErrors;
			});
		});
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fieldsetsCopy));
	},

	getOrCreateFieldsets () {
		let storageFieldsets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (!storageFieldsets) {
			storageFieldsets = registrationFormFieldsets;
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageFieldsets));
		}
		return storageFieldsets;
	},

	deleteFieldsets () {
		localStorage.removeItem(LOCAL_STORAGE_KEY);
	},

};
