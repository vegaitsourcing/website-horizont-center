import API from "./baseApi";

export const ProfileService = {
	// TODO: put all filters in an object
	getProfiles: (resource, pageSize, pageNumber, contains, gender, city) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (gender) queryParams += `&gender=${gender}`;
		if (city) queryParams += `&city=${city}`;
		return API.getAllResources(resource, queryParams);
	},
	getProfileCount: async (resource) => {
		// TODO: filter by is_active (first, filter needs to be added in BE)
		const response = await ProfileService.getProfiles(resource, 0, 1);
		return response.data.pagination.total_items;
	},
};
