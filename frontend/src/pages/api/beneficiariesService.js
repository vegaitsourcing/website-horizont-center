import API from "./baseApi";
import { ProfileService } from "./profileService";
const BASE_RESOURCE_NAME = "beneficiaries";

const beneficiariesService = {
  getBeneficiaries: (pageSize, pageNumber, contains, gender, city) => {
    return ProfileService.getProfiles(BASE_RESOURCE_NAME, pageSize, pageNumber, contains, gender, city);
  },

  getBeneficiaryById: (beneficiaryId, token) => {
    return API.getResourceById(BASE_RESOURCE_NAME, beneficiaryId, token);
  },
};

export default beneficiariesService;
