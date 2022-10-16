import axios from "axios";
axios.defaults.baseURL = process.env.BASE_URL;
const API = {
  getAllResources: (resource, queryParams) => {
    return axios.get(`${resource}?${queryParams}`);
  },
  getResourceById: (resource, resourceId, token) => {
    return axios.get(`${resource}/${resourceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default API;
