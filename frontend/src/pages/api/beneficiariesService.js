import API from "./baseApi";
import { ProfileService } from "./profileService";
const BASE_RESOURCE_NAME = "beneficiaries";

export const BeneficiariesService = {
  getBeneficiaries: (pageSize, pageNumber, contains, gender, city) => {
    return ProfileService.getProfiles(BASE_RESOURCE_NAME, pageSize, pageNumber, contains, gender, city);
  },
  getBeneficiaryById: (beneficiaryId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, beneficiaryId);
  },
  editBeneficiaryById: (beneficiaryId, editedData) => {
    return API.patch(`caregivers/${beneficiaryId}/`, editedData);
  },
};
