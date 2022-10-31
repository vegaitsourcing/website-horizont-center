import API from "./baseApi";
const REGISTER_USER = "register";
const LOGIN_USER = "login";
const LOGOUT_USER = "logout";

const userService = {
  registerUser: (userData, userType) => {
    return API.registerUser(REGISTER_USER, userData, userType);
  },
  loginUser: (userData) => {
    return API.loginUser(LOGIN_USER, userData);
  },
  logoutUser: (userData) => {
    return API.logoutUser(LOGOUT_USER, userData);
  },
};

export default userService;
