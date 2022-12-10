import API from "./baseApi";

const BASE_RESOURCE_NAME = "organization-partners";

export const OrganizationPartnersService = {
  getOrganizationPartners: () => {
    return API.getAllResources(BASE_RESOURCE_NAME);
  },
};
