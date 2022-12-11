export const getUserData = () => {
  const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
  const userType = registrationForm.formStep1.data.profileType === "Negovatelj" ? "caregiver" : "beneficiary";
  const formStep2 = registrationForm.formStep2.data[userType];
  const formStep3 = registrationForm.formStep3.data;
  const userData = {
    user: {
      email: formStep2.email,
      first_name: formStep2.first_name,
      last_name: formStep2.last_name,
      phone_number: formStep2.phone_number,
      password: formStep2.password,
    },
    gender: formStep2.gender === "muški" ? "male" : "female",
    postal_code: parseInt(formStep2.postal_code),
    city: formStep2.city,
    description: formStep3.description,
    birthdate: formStep2.birthdate,
    work_application: formStep2.work_application,
    experience: formStep2.experience,
    weekly_days: formStep2.weekly_days,
    daily_hours: parseFloat(formStep2.daily_hours),
    image: formStep3.image,
    beneficiary_person: formStep2.beneficiary_person,
    helping_period: formStep2.helping_period,
    care_type: formStep2.care_type,
    facebook_url: formStep2.facebook_url,
    instagram_url: formStep2.instagram_url,
  };
  return { userType: userType, userData: userData };
};

export const validateRegistrationForm = (stepNumber) => {
  const registrationForm = JSON.parse(localStorage.getItem("registrationForm"));
  let isFormValid = false;

  if (stepNumber === 1) {
    registrationForm.formStep1.isCompleted = false;
    if (registrationForm.formStep1.data.profileType !== "") {
      registrationForm.formStep1.isCompleted = true;
      isFormValid = true;
    }
  }

  if (stepNumber === 2) {
    registrationForm.formStep2.isCompleted = false;
    const userType = registrationForm.formStep1.data.profileType === "Negovatelj" ? "caregiver" : "beneficiary";
    const user = registrationForm.formStep2.data[userType];
    isFormValid = true;
    for (let key in user) {
      if (user[key] === "" && !["facebook_url", "instagram_url"].includes(key)) {
        isFormValid = false;
      }
    }
    if (isFormValid) {
      registrationForm.formStep2.isCompleted = true;
    }
  }

  if (stepNumber === 3) {
    registrationForm.formStep3.isCompleted = false;
    const formStep3data = registrationForm.formStep3.data;

		isFormValid = (
			formStep3data.description?.length >= 100
			|| formStep3data.description?.length <= 500
			|| formStep3data.image !== ""
		)
    if (isFormValid) {
      registrationForm.formStep3.isCompleted = true;
    }
  }

  localStorage.setItem("registrationForm", JSON.stringify(registrationForm));
  return isFormValid;
};
