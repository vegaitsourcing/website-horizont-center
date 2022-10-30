import API from "./baseApi";

const BASE_RESOURCE_NAME = "caregivers";
const caregiversService = {
	getCaregivers: (pageSize, pageNumber, contains, gender, city) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (gender) queryParams += `&gender=${gender}`;
		if (city) queryParams += `&city=${city}`;
		return API.getAllResources(BASE_RESOURCE_NAME, queryParams);
	},

	getCaregiverById: (beneficiaryId) => {
		return API.getResourceById(BASE_RESOURCE_NAME, beneficiaryId, localStorage.getItem("token"));
	},
};

export default caregiversService;
