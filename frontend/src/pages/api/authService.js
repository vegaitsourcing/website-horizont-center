import axios from "axios";
const API_URL = process.env.API_URL;
console.log(API_URL);

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

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
  registerCaregiver: (userData, type) => {
    return api.post(`/register-${type}/`, userData);
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
