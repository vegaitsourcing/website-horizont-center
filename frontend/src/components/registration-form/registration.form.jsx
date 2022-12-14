import React, { useCallback, useState } from "react";
import styles from "./registration.form.module.scss";
import { AuthService } from "../../pages/api/authService";
import { LongButton } from "shared-components";
import { RegistrationConfirmation, RegistrationError, RegistrationFormFieldsets } from "./components";
import { useRegistrationForm } from "./hooks/useRegistrationForm";
import { scrollFirstFieldWithErrorsIntoView } from "./utils";
import { RegistrationFormFieldsetsService } from "./registrationFormFieldsetsService";

export const RegistrationForm = () => {
	const registrationForm = useRegistrationForm();
	const [shouldValidate, setShouldValidate] = useState(false);
	const [hasServerError, setHasServerError] = useState(false);
	const [successfullyRegisteredUserEmail, setSuccessfullyRegisteredUserEmail] = useState("");

	const handleRegistrationError = useCallback((error) => {
		if (error.response?.status === 400) {
			registrationForm.setAPIValidationErrors(error.response.data.errors);
			scrollFirstFieldWithErrorsIntoView();
		} else {
			setHasServerError(true);
		}
	}, [registrationForm]);

	const register = useCallback(async () => {
		const data = registrationForm.getAPIRequestData();
		try {
			await AuthService.register(data, registrationForm.profileType);
			RegistrationFormFieldsetsService.deleteFieldsets();
			setSuccessfullyRegisteredUserEmail(registrationForm.fieldsets.common.fields.email.value);
		} catch (error) {
			handleRegistrationError(error);
		}
	}, [handleRegistrationError, registrationForm]);

	const submit = useCallback(async () => {
		setShouldValidate(true);
		if (registrationForm.hasErrors()) {
			scrollFirstFieldWithErrorsIntoView();
		} else {
			await register();
		}
	}, [register, registrationForm]);

	if (hasServerError) return <RegistrationError/>;

	if (successfullyRegisteredUserEmail) return <RegistrationConfirmation email={successfullyRegisteredUserEmail}/>;

	if (!registrationForm.fieldsets) return null;

	return (
		<div className={styles.background}>
			<div className={styles.box}>
				<div className={styles.boxHeader}>
					<h4 className={styles.h4}>Napravi profil</h4>
				</div>
				<form>
					<RegistrationFormFieldsets
						profileType={registrationForm.profileType}
						fieldsets={registrationForm.fieldsets}
						onFieldUpdate={registrationForm.updateField}
						shouldValidate={shouldValidate}
					/>
				</form>
				{/*TODO: ADD NOT ROBOT */}
				<p className={styles.formDescription}>
					Slanjem aplikacije prihvatate da budete kontaktirani za razgovor sa zainteresovanim osobama za traženje
					pomoći u nezi. Platofrma NEGOVATELJI.RS je namenjena kreiranju zajednice i povezivanju osoba koje
					pružaju
					pomoć i onih kojima je ta pomoć neophodna i ne preuzima odgovornost za pregovaranje, ugovaranje niti
					kvalitet posla koji nudi aplikant niti uslove rada i proces selekcije koji sprovodi i traži
					zainteresovana
					strana.
				</p>
				<div className={styles.boxFooter}>
					<LongButton
						className={styles.submitButton}
						value="Registruj me"
						type="button"
						onClick={submit}
					/>
				</div>
			</div>
		</div>
	);
};
