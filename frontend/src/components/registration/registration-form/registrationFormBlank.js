export const registrationFormBlank = {
  stepNumber: 0,
  formStep1: {
    data: {
      profileType: "",
    },
    isCompleted: false,
  },
  formStep2: {
    data: {
      caregiver: {
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        gender: "",
        postal_code: "",
        city: "",
        birthdate: "",
        work_application: "",
        experience: "",
        weekly_days: "",
        daily_hours: "",
        instagram_url: "",
        facebook_url: "",
      },
      beneficiary: {
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        gender: "",
        postal_code: "",
        beneficiary_person: "",
        helping_period: "",
        weekly_days: "",
        daily_hours: "",
        care_type: "",
        city: "",
      },
    },
    isCompleted: false,
  },
  formStep3: {
    data: {
      image: "",
      description: "",
    },
    isCompleted: false,
  },
};
