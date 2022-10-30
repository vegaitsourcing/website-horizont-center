const { default: axios } = require("axios");
const BASE_URL = process.env.BASE_URL;
const AuthService = {
  login: (email, password) => {
    return axios.post(`${BASE_URL}/login/`, {
      email: email,
      password: password,
    });
  },
  logout: () => {
    return axios.post(`${BASE_URL}/logout/`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  register: (body, type) => {
    return axios.post(`${BASE_URL}/register-${type}/`, body);
  },
  registerCaregiver: ({
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
    gender,
    postCode,
    city,
    description,
    birthdate,
    workApplication,
    experience,
    weeklyDays,
    dailyHours,
    profileImage,
  }) => {
    return register(
      {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        password: password,
        profile: {
          gender: gender,
          postal_code: postCode,
          city: city,
          description: description,
          birthdate: birthdate,
          work_application: workApplication,
          experience,
          weekly_days: weeklyDays,
          daily_hours: dailyHours,
          image: profileImage,
        },
      },
      "caregiver"
    );
  },
  registerBeneficiary: ({
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
    gender,
    postCode,
    city,
    description,
    birthdate,
    helpingPeriod,
    careType,
    beneficiaryPerson,
    weeklyDays,
    dailyHours,
    profileImage,
  }) => {
    return register(
      {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        password: password,
        profile: {
          gender: gender,
          postal_code: postCode,
          city: city,
          description: description,
          birthdate: birthdate,
          beneficiary_person: beneficiaryPerson,
          helping_period: helpingPeriod,
          care_type: careType,
          weekly_days: weeklyDays,
          daily_hours: dailyHours,
          image: profileImage,
        },
      },
      "beneficiary"
    );
  },
};
export default AuthService;
