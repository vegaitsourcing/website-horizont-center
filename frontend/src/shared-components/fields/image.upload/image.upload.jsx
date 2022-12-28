import styles from "./image.upload.module.scss";
import React, { useCallback, useEffect } from "react";
import { useFormField } from "../../../hooks";
import { ErrorMessages } from "../error.messages/error.messages";
import { FieldLabel } from "../field.label/field.label";
import { FIELD_WITH_ERRORS_CLASS_NAME } from "../index";

export function ImageUpload({
	id,
	onChange,
	placeholderImagePath,
	infoText,
	defaultBase64Image = "",
	required = true,
	buttonText = "Dodaj sliku",
	alt = "upload image",
	shouldValidate = false,
	validators = [],
	extraErrorMessages = []
}) {
	const [fieldValue, fieldErrorMessages, updateFieldValue] = useFormField(
		defaultBase64Image,
		shouldValidate,
		validators,
		extraErrorMessages
	);

	useEffect(() => {
		if (shouldValidate && extraErrorMessages.length) updateFieldValue(fieldValue);
	}, [fieldValue, updateFieldValue, shouldValidate, extraErrorMessages]);

	const updateValue = useCallback((event) => {
		let fileReader = new FileReader();
		fileReader.readAsDataURL(event.target.files[0]);
		fileReader.onload = (upload) => {
			const base65Image = upload.target.result.toString();
			updateFieldValue(base65Image);
			onChange(base65Image);
		};
	}, [updateFieldValue, onChange]);

	function openFileExplorer() {
		const fileupload = document.getElementById("image");
		fileupload.click();
	}

	const wrapperClassNames = [
		styles.imageField,
		fieldErrorMessages.length ? `${styles.imageFieldWithErrors} ${FIELD_WITH_ERRORS_CLASS_NAME}` : "",
	].join(" ");

	return (
		<div className={wrapperClassNames}>
			<div className={styles.imageFieldInnerContainer}>
				<img
					src={fieldValue || placeholderImagePath}
					alt={alt}
					className={styles.uploadedImage}
				/>
				<input
					id={id}
					type="file"
					style={{ display: "none" }}
					accept="image/png, image/gif, image/jpeg"
					onChange={updateValue}
				/>
				<div onClick={openFileExplorer} className={styles.button}>
					<FieldLabel label={buttonText} required={required} infoText={infoText}/>
				</div>
			</div>
			<ErrorMessages errorMessages={fieldErrorMessages}/>
		</div>
	);
}
