import API from "./baseApi";
import { ProfileService } from "./profileService";

const BASE_RESOURCE_NAME = "beneficiaries";

export const BeneficiariesService = {
	// TODO: put all filters in an object
	getBeneficiaries: (pageSize, pageNumber, contains, gender, city) => {
		return ProfileService.getProfiles(BASE_RESOURCE_NAME, pageSize, pageNumber, contains, gender, city);
	},
	getBeneficiaryById: (beneficiaryId) => {
		return API.getProtectedResourceById(BASE_RESOURCE_NAME, beneficiaryId);
	},
	editBeneficiaryById: (beneficiaryId, editedData) => {
		return API.patch(`caregivers/${beneficiaryId}/`, editedData);
	},
	getBeneficiaryCount: () => {
		return ProfileService.getProfileCount(BASE_RESOURCE_NAME);
	},
};
