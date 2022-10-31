import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});
const API = {
  getAllResources: (resource, queryParams = "") => {
    console.log(process.env.API_URL);
    return api.get(`${resource}/?${queryParams}`);
  },
  getResourceById: (resource, resourceId, token) => {
    return api.get(`${resource}/${resourceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  registerUser: (resource, userData, userType) => {
    return api.post(`${resource}-${userType}/`, userData);
  },
  loginUser: (resource, userData) => {
    return api.post(`/${resource}/`, userData);
  },
};
export default API;
