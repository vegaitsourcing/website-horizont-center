import axios from "axios";
import { ENV } from "config/env";
import AuthService from "./authService";

console.log("ENV.BASE_API_URL:", ENV.BASE_API_URL); // TODO: REMOVE when hosting server is configured

const api = axios.create({
  baseURL: ENV.BASE_API_URL,
});

const API = {
  getAllResources: (resource, queryParams = "") => {
    return api.get(`${resource}/?${queryParams}`);
  },
  getResourceById: (resource, resourceId) => {
    const config = {};
    config.headers = AuthService.getAuthorizationHeaders();
    return api.get(`${resource}/${resourceId}`, config);
  },
  post: (url, data, config) => {
    return api.post(url, data, config);
  },
  patch: (url, data) => {
    const config = {};
    config.headers = AuthService.getAuthorizationHeaders();
    return api.patch(url, data, config);
  },
};

export default API;
