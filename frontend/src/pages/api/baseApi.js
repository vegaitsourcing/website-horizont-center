import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8000/api/v1",
});

const API = {
	getAllResources: (resource, queryParams = "") => {
		return api.get(`${resource}/?${queryParams}`);
	},
	getResourceById: (resource, resourceId) => {
		return api.get(`${resource}/${resourceId}`);
	},
	post: (url, data, config) => {
		return api.post(url, data, config);
	},
};

export default API;
