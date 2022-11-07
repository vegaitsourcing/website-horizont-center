import axios from "axios";
import { ENV } from "config/env";

const api = axios.create({
	baseURL: ENV.BASE_API_URL,
});

console.log("ENV.BASE_API_URL:", ENV.BASE_API_URL); // TODO: REMOVE when hosting server is configured

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
