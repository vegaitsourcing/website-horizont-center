import { useEffect, useState } from "react";
import { ConfirmRegistration } from "./confirm.registration";
import { RegistrationStepOne, RegistrationStepThree, RegistrationStepTwo } from "./components";
import { LongButton } from "shared-components";
import { registrationFormBlank } from "./hooks/registrationFormBlank";
import { getUserData, validateRegistrationForm } from "./utils/registrationUtils";
import { AuthService } from "pages/api/authService";
import styles from "./registration.form.module.scss";

export const RegistrationForm = () => {
	const [stepNumber, setStepNumber] = useState(1);
	const [confirmEmail, setConfirmationEmail] = useState("");
	const [isFormStep1Valid, setIsFormStep1Valid] = useState(false);
	const [isFormStep2Valid, setIsFormStep2Valid] = useState(false);
	const [isFormStep3Valid, setIsFormStep3Valid] = useState(false);

	useEffect(() => {
		const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
		if (!registrationForm) {
			localStorage.setItem("registrationForm", JSON.stringify(registrationFormBlank));
		}
		const isFormValid = validateRegistrationForm(stepNumber);
		setIsFormValid(isFormValid, stepNumber);
	}, [stepNumber]);

	const handleRegistrationChange = (newData, form, itemType, userForm) => {
		const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
		if (form === "formStep1") {
			registrationForm.formStep1 = { data: { profileType: newData }, isCompleted: false };
		}
		if (form === "formStep2") {
			const historyData = registrationForm.formStep2?.data;
			registrationForm.formStep2 = {
				data: { ...historyData, [userForm]: { ...historyData?.[userForm], [itemType]: newData } },
				isCompleted: false,
			};
		}
		if (form === "formStep3") {
			const historyData = registrationForm.formStep3?.data;
			registrationForm.formStep3 = { data: { ...historyData, [itemType]: newData }, isCompleted: false };
		}
		localStorage.setItem("registrationForm", JSON.stringify(registrationForm));
		const isFormValid = validateRegistrationForm(stepNumber);
		setIsFormValid(isFormValid, stepNumber);
	};

	async function registerUser() {
		const userType = getUserData().userType;
		const userData = getUserData().userData;
		try {
			await AuthService.register(userData, userType);
			localStorage.setItem("registrationForm", JSON.stringify(registrationFormBlank));
			setConfirmationEmail(userData.user.email);
			setStepNumber(4);
		} catch (error) {
			if (error.response?.status === 400) {
				const errors = { ...error.response.data.errors, ...error.response.data.errors.user };
				delete errors.user;
				console.log("ERRORS:", errors);
				localStorage.setItem("registrationFormErrors", JSON.stringify(errors));
			}
		}
	}

	const checkForm = (stepNumber) => {
		if (stepNumber === 1) {
			return isFormStep1Valid;
		}
		if (stepNumber === 2) {
			return isFormStep2Valid;
		}
		if (stepNumber === 3) {
			return isFormStep3Valid;
		}
	};

	const setIsFormValid = (isFormValid, stepNumber) => {
		if (stepNumber === 1) {
			setIsFormStep1Valid(isFormValid);
		}
		if (stepNumber === 2) {
			setIsFormStep2Valid(isFormValid);
		}
		if (stepNumber === 3) {
			setIsFormStep3Valid(isFormValid);
		}
	};

	const switchToStep = (direction) => {
		if (direction === "back") return stepNumber !== 1 ? setStepNumber(stepNumber - 1) : 0;
		if (checkForm(stepNumber)) {
			if (stepNumber === 3 && direction === "next") registerUser();
			return stepNumber !== 3 ? setStepNumber(stepNumber + 1) : 0;
		}
	};

	const renderStep = () => {
		if (stepNumber === 1) {
			return (
				<RegistrationStepOne
					stepNumber={stepNumber}
					valueChangedHandler={(e) => handleRegistrationChange(e, "formStep1")}
					isFormValid={isFormStep1Valid}
				/>
			);
		}
		if (stepNumber === 2) {
			return (
				<RegistrationStepTwo
					stepNumber={stepNumber}
					valueChangedHandler={(e, itemType, userForm) => handleRegistrationChange(e, "formStep2", itemType, userForm)}
					isFormValid={isFormStep2Valid}
				/>
			);
		}
		return (
			<RegistrationStepThree
				stepNumber={stepNumber}
				valueChangedHandler={(e, itemType) => handleRegistrationChange(e, "formStep3", itemType)}
			/>
		);
	};

	if (stepNumber === 4) {
		return <ConfirmRegistration email={confirmEmail}/>;
	}

	return (
		<div className={styles.createAccount}>
			<div className={styles.createAccountBox}>
				<div className={styles.createAccountHeader}>
					<h4 className={styles.h4}>Napravi profil</h4>
				</div>
				<div className={styles.createAccountBody}>
					<div className={styles.steps}>
						<span className={stepNumber === 1 ? styles.p1 : styles.p2}>1</span>
						<hr className={styles.dottedLine}/>
						<span className={stepNumber === 2 ? styles.p1 : styles.p2}>2</span>
						<hr className={styles.dottedLine}/>
						<span className={stepNumber === 3 ? styles.p1 : styles.p2}>3</span>
					</div>
					{renderStep()}
				</div>
				<div className={styles.createAccountFooter}>
					<LongButton
						isDisabled={stepNumber === 1}
						value="Prethodni korak"
						type="button"
						direction="left"
						onClick={() => switchToStep("back")}
					/>
					<LongButton value="Sledeći korak" type="button" direction="right" onClick={() => switchToStep("next")}/>
				</div>
			</div>
		</div>
	);
};
