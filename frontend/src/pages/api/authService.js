import API from "./baseApi";

const AuthService = {
  login: async (email, password) => {
    const response = await API.post("login/", {
      email: email,
      password: password,
    });
    const userDataString = JSON.stringify({
      token: response.data.token,
      id: response.data.id,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      profileType: response.data.profile_type,
      profileID: response.data.profile_id,
    });
    localStorage.setItem("user", userDataString);
  },
  isAuthenticated: () => {
    return !!AuthService.getUser();
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  getAuthorizationHeaders: () => {
    const userJSON = localStorage.getItem("user");
    const user = userJSON ? JSON.parse(userJSON) : null;
    return user ? { Authorization: `Bearer ${user?.token}` } : {};
  },
  logout: async () => {
    try {
      await API.post("logout/", null, { headers: AuthService.getAuthorizationHeaders() });
    } catch (e) {}
    localStorage.removeItem("user");
  },
  register: (userData, type) => {
    return API.post(`register-${type}/`, userData);
  },
  forgotPassword: (email) => {
    return API.post("/password-forgotten/", { email: email });
  },
  resetPassword: (hash, password) => {
    return API.post(`/password-reset/${hash}/`, { password: password });
  },
};
export default AuthService;
