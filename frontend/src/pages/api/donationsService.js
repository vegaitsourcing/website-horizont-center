import API from "./baseApi";

const BASE_RESOURCE_NAME = "donations";

const DonationsService = {
	getDonations: (pageSize, pageNumber, contains = null, isActive = null) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (isActive !== null) queryParams += `&is_active=${isActive}`;
		return API.getAllResources(BASE_RESOURCE_NAME, queryParams);
	},
	getDonationById: (donationId) => {
		return API.getResourceById(BASE_RESOURCE_NAME, donationId);
	},
};

export default DonationsService;
