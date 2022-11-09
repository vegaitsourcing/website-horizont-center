import API from "./baseApi";
import { ProfileService } from "./profileService";

const BASE_RESOURCE_NAME = "caregivers";

const caregiversService = {
  getCaregivers: (pageSize, pageNumber, contains, gender, city) => {
    return ProfileService.getProfiles(BASE_RESOURCE_NAME, pageSize, pageNumber, contains, gender, city);
  },
  getCaregiverById: (caregiverId, token) => {
    return API.getResourceById(BASE_RESOURCE_NAME, caregiverId, token);
  },
};

export default caregiversService;
