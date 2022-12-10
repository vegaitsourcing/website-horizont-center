import API from "./baseApi";

export const ProfileService = {
	getProfiles: (resource, pageSize, pageNumber, contains, gender, city) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (gender) queryParams += `&gender=${gender}`;
		if (city) queryParams += `&city=${city}`;
		return API.getAllResources(resource, queryParams);
	},
	getActiveProfileCount: async (resource) => {
		let queryParams = `ipp=${0}&page=${1}&is_active=true`;
		const response = await API.getAllResources(resource, queryParams);
		return response.data.pagination.total_items;
	},
};
