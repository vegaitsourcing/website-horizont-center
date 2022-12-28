import { ImageUpload, Input, Select, SelectDate, TextArea } from "../../shared-components";
import React from "react";

export class RegistrationFormFieldFactory {
	create = (fieldName, field, onFieldValueChange, shouldValidate) => {
		if (field.type === "image") {
			return this._createImageUploadField(fieldName, field, onFieldValueChange, shouldValidate);
		}
		if (field.type === "textarea") {
			return this._createTextAreaField(fieldName, field, onFieldValueChange, shouldValidate);
		}
		if (field.type === "dropdown") {
			return this._createSelectField(fieldName, field, onFieldValueChange, shouldValidate);
		}
		if (field.type === "datepicker") {
			return this._createSelectDateField(fieldName, field, onFieldValueChange, shouldValidate);
		}
		const inputFieldSupportedTypes = ["text", "number", "email", "password"];
		if (inputFieldSupportedTypes.includes(field.type)) {
			return this._createInputField(fieldName, field, onFieldValueChange, shouldValidate);
		}
		throw new Error(`Unsupported field type ${field.type}.`);
	};

	_createImageUploadField = (fieldName, field, onFieldValueChange, shouldValidate) => {
		return (
			<ImageUpload
				key={fieldName}
				id={fieldName}
				defaultBase64Image={field.value}
				defaultValue={field.placeholder}
				placeholderImagePath={field.placeholder}
				onChange={value => onFieldValueChange(fieldName, value)}
				shouldValidate={shouldValidate}
				validators={field.validators}
				extraErrorMessages={field.apiValidationErrors}
			/>
		);
	};

	_createTextAreaField = (fieldName, field, onFieldValueChange, shouldValidate) => {
		return (
			<TextArea
				key={fieldName}
				id={fieldName}
				label={field.label}
				required={field.required}
				placeholder={field.placeholder}
				defaultValue={field.value}
				onChange={value => onFieldValueChange(fieldName, value)}
				shouldValidate={shouldValidate}
				validators={field.validators}
				extraErrorMessages={field.apiValidationErrors}
			/>
		);
	};

	_createSelectField = (fieldName, field, onFieldValueChange, shouldValidate) => {
		return (
			<Select
				key={fieldName}
				id={fieldName}
				label={field.label}
				name={fieldName}
				placeholder={field.placeholder}
				options={field.options}
				onChange={value => onFieldValueChange(fieldName, value)}
				inputValue={field.value}
				shouldValidate={shouldValidate}
				validators={field.validators}
				extraErrorMessages={field.apiValidationErrors}
			/>
		);
	};

	_createSelectDateField = (fieldName, field, onFieldValueChange, shouldValidate) => {
		return (
			<SelectDate
				key={fieldName}
				id={fieldName}
				label={field.label}
				inputValue={field.value}
				infoText={field.infoText}
				onChange={value => onFieldValueChange(fieldName, value)}
				shouldValidate={shouldValidate}
				validators={field.validators}
				extraErrorMessages={field.apiValidationErrors}
			/>
		);
	};

	_createInputField = (fieldName, field, onFieldValueChange, shouldValidate) => {
		return (
			<Input
				key={fieldName}
				id={fieldName}
				type={field.type}
				name={fieldName}
				label={field.label}
				placeholder={field.placeholder}
				infoText={field.infoText}
				inputValue={field.value}
				required={field.required}
				shouldValidate={shouldValidate}
				onChange={value => onFieldValueChange(fieldName, value)}
				validators={field.validators}
				extraErrorMessages={field.apiValidationErrors}
			/>
		);
	};
}
