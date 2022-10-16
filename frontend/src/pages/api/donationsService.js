import API from "./baseApi";
const BASE_RESOURCE_NAME = "donations";
const DonationService = {
  getAllDonations: (pageSize, pageNumber, filterText, filterType) => {
    return API.getAllResources(
      BASE_RESOURCE_NAME,
      `pageSize=${pageSize}&pageNumber=${pageNumber}&fiterText=${filterText}&filterType=${filterType}`
    );
  },
  getDonationById: (donationId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, donationId, localStorage.getItem("token"));
  },
};
export default DonationService;
