import axios from "axios";
import AuthService from "./authService";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const API = {
  getAllResources: (resource, queryParams = "") => {
    return api.get(`${resource}/?${queryParams}`);
  },
  getResourceById: (resource, resourceId, token) => {
    console.log(token);
    return api.get(`${resource}/${resourceId}`, { headers: { Authorization: `Bearer ${token}` } });
  },
  post: (url, data, config) => {
    return api.post(url, data, config);
  },
};

export default API;
