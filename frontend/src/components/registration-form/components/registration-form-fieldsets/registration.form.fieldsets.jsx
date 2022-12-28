import React from "react";
import { RegistrationFormFieldset } from "../registration-form-fieldset/registration.form.fieldset";

export function RegistrationFormFieldsets ({ profileType, fieldsets, onFieldUpdate, shouldValidate }) {
	return (
		<>
			<RegistrationFormFieldset
				title={fieldsets.common.title}
				fields={fieldsets.common.fields}
				onFieldValueChange={
					(fieldName, value) => onFieldUpdate("common", fieldName, value)
				}
				shouldValidate={shouldValidate}
			/>
			{profileType &&
				<>
					<RegistrationFormFieldset
						title={fieldsets[profileType].title}
						fields={fieldsets[profileType].fields}
						onFieldValueChange={
							(fieldName, value) => onFieldUpdate(profileType, fieldName, value)
						}
						shouldValidate={shouldValidate}
					/>
					<RegistrationFormFieldset
						isGrid={false}
						title={fieldsets.additional.title}
						fields={fieldsets.additional.fields}
						onFieldValueChange={
							(fieldName, value) => onFieldUpdate("additional", fieldName, value)
						}
						shouldValidate={shouldValidate}
					/>
				</>
			}
		</>
	);
}
