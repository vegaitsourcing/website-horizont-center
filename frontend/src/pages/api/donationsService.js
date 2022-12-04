import API from "./baseApi";

const BASE_RESOURCE_NAME = "donations";

export const DonationsService = {
	// TODO: put all filters in an object
	getDonations: (pageSize, pageNumber, contains, isActive) => {
		let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
		if (contains) queryParams += `&contains=${contains}`;
		if (isActive !== null) queryParams += `&is_active=${isActive}`;
		return API.getAllResources(BASE_RESOURCE_NAME, queryParams);
	},
	getDonationById: (donationId) => {
		return API.getResourceById(BASE_RESOURCE_NAME, donationId);
	},
	getActiveDonationCount: async () => {
		const response = await DonationsService.getDonations(0, 1, '', true);
		return response.data.pagination.total_items;
	},
};
