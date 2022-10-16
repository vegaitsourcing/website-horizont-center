import axios from "axios";
const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});
const API = {
  getAllResources: (resource, queryParams = '') => {
	console.log(process.env.BASE_API_URL)
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
