import API from "./baseApi";

export const ProfileService = {
	getProfiles: (resource, pageSize, pageNumber, contains, gender, city) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (gender) queryParams += `&gender=${gender}`;
		if (city) queryParams += `&city=${city}`;
		return API.getAllResources(resource, queryParams);
	},
};
