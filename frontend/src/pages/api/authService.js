import axios from "axios";

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
  register: (userData, type) => {
    return api.post(`register-${type}/`, userData);
  },
};
export default AuthService;
