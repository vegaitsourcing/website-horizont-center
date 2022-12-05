import API from "./baseApi";
import { ProfileService } from "./profileService";
const BASE_RESOURCE_NAME = "caregivers";

export const CaregiversService = {
	getCaregivers: (pageSize, pageNumber, contains, gender, city) => {
		return ProfileService.getProfiles(BASE_RESOURCE_NAME, pageSize, pageNumber, contains, gender, city);
	},
	getCaregiverById: (caregiverId) => {
		return API.getProtectedResourceById(BASE_RESOURCE_NAME, caregiverId);
	},
	editCaregiverById: (caregiverId, editedData) => {
		return API.patch(`caregivers/${caregiverId}/`, editedData);
	},
};
