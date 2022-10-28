import API from "./baseApi";
import ABOUT from "config/data/about";
const BASE_RESOURCE_NAME = "donations";
const DonationService = {
  getDonations: (pageSize, pageNumber, filterText, filterType) => {
    return API.getAllResources(
      BASE_RESOURCE_NAME,
      `ipp=${pageSize}&page=${pageNumber}&contains=${filterText}&filterType=${filterType}`
    );
  },
  getDonationById: (donationId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, donationId, localStorage.getItem("token"));
  },
  getAllMockDonations: (pageSize, pageNumber, filterText, filterType) => {
    return new Promise((resolve, reject) => {
      var filteredData = mockData.results.filter((data) =>
        data[filterType ? filterType : "title"].includes(filterText)
      );
      var responseData = {
        results: filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
        pageNumber: pageNumber,
        pageSize: pageSize,
        total: filteredData.length,
      };
      resolve({ data: { ...responseData, ...ABOUT } });
    });
  },
};

export default DonationService;
