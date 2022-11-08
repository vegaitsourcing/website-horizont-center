import React, { useState, useEffect } from "react";
import styles from "./registration.step.three.module.scss";

export const RegistrationStepThree = ({ stepNumber, valueChangedHandler }) => {
	const [countValue, setCount] = useState(0);
	const [formStep3Data, setFormStep3Data] = useState();

	useEffect(() => {
		const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
		setFormStep3Data(registrationForm?.formStep3);
	}, [stepNumber]);

	const changeHandler = (event) => {
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (upload) => {
			valueChangedHandler(upload.target.result, "profile_image");
			setFormStep3Data({ data: { profile_image: upload.target.result } });
		};
	};

	const openFileExplorer = () => {
		var fileupload = document.getElementById("imgupload");
		fileupload.click();
	};

	const count = () => {
		var field = document.getElementById("description");
		setCount(field.value.length);
		valueChangedHandler(field.value, "description");
	};

	return (
		<div className={styles.imageUpload}>
			<div className={styles.imageField}>
				<img
					className={styles.image}
					src={formStep3Data?.data?.profile_image ?? "/images/profile.image.placeholder.svg"}
				/>
				<input
					onChange={changeHandler}
					type="file"
					accept="image/png, image/gif, image/jpeg"
					id="imgupload"
					style={{ display: "none" }}
				/>
				<p onClick={openFileExplorer} className={styles.text}>
					Dodaj fotografiju
				</p>
			</div>
			<div className={styles.input}>
        <textarea
					id="description"
					name="description"
					onKeyUp={count}
					className={styles.textarea}
					placeholder="Dodante informacije"
					value={formStep3Data?.data?.description}
				></textarea>
				<p id="counter" className={styles.charCount}>
					{countValue}/500 karaktera
				</p>
			</div>
		</div>
	);
};
