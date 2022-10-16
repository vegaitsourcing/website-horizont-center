import axios from "axios";
const api = axios.create({
  baseURL: process.env.API_URL,
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
};
export default API;
