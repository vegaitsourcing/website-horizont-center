import API from "./baseApi";
import ABOUT from "config/data/about";
const BASE_RESOURCE_NAME = "donations";
const DonationService = {
  getAllDonations: (pageSize, pageNumber, filterText, filterType) => {
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
var mockData = {
  results: [
    {
      id: "1",
      title: "Donation 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-14",
      financial_info: "Finansijska pomoc",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      is_active: true,
    },
    {
      id: "2",
      title: "Donation 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
      created: "2022-09-13",
      financial_info: null,
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      is_active: true,
    },
    {
      id: "3",
      title: "Donation 1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
      created: "2022-10-12",
      financial_info: "Robna pomoc",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      is_active: true,
    },
    {
      id: "4",
      title: "Donation 3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
      created: "2022-10-11",
      financial_info: "Robna pomoc",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      is_active: true,
    },
    {
      id: "5",
      title: "Donation 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
      created: "2022-10-10",
      financial_info: "",
      description:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      is_active: true,
    },
  ],
  pagination: {
    total_items: 5,
    total_pages: 2,
  },
};
export default DonationService;
