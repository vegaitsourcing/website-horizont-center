import axios from "axios";
import { ENV } from "config/env";
import Router from "next/router";

import AuthService from "./authService";

const api = axios.create({
	baseURL: ENV.BASE_API_URL,
});

console.log("ENV.BASE_API_URL:", ENV.BASE_API_URL); // TODO: REMOVE when hosting server is configured

const API = {
	getAllResources: (resource, queryParams = "") => {
		return api.get(`${resource}/?${queryParams}`);
	},
	getResourceById: (resource, resourceId) => {
		const config = {};
		try {
			config.headers = AuthService.getAuthorizationHeaders();
		} catch (error) {
			// Can raise ReferenceError because localStorage (used by AuthService.getAuthorizationHeaders)
			// is not defined. This can happen if this code is run on a server (and not a browser).
		}
		return api.get(`${resource}/${resourceId}`, config);
	},
	post: (url, data, config) => {
		return api.post(url, data, config);
	},
};

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			return Router.push("/401");
		}
		if (error.response.status === 404) {
			return Router.push("/404");
		}
		return error.response;
	}
);

export default API;
