import ABOUT from "config/data/about";
import API from "./baseApi";
const BASE_RESOURCE_NAME = "beneficiaries";
const beneficiariesService = {
  getAllBeneficiaries: (pageSize, pageNumber, textFilter, genderFilter, cityFilter) => {
    return API.getAllResources(
      BASE_RESOURCE_NAME,
      `ipp=${pageSize}&page=${pageNumber}&content=${textFilter}&filterGender=${genderFilter}&filterCity=${cityFilter}`
    );
  },
  getBeneficiaryById: (beneficiaryId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, beneficiaryId, localStorage.getItem("token"));
  },
  getAllMockBeneficiaries: (pageSize, pageNumber, textFilter, genderFilter, cityFilter) => {
    return new Promise((resolve, reject) => {
      var filteredData = mockData.results.filter(
        ({ city, care_type, gender }) =>
          gender.includes(genderFilter) && city.includes(cityFilter) && care_type.includes(textFilter)
      );
      var responseData = {
        items: filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
        pagination: {
          total_items: filteredData.length,
          total_pages: 2,
        },
        total: 2,
      };
      resolve({ data: { ...responseData, ...ABOUT } });
    });
  },
};
var mockData = {
  results: [
    {
      id: "1",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-14",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Marko",
      last_name: "Puzovic",
      care_type: "Potrebna pomoć ZA VOŽNJU NA PREGLEDE I OBAVLJANJE POSLOVA NABAVKE",
      gender: "male",
    },
    {
      id: "2",
      helping_period: "1 godina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-9",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Petar",
      last_name: "Petrovic",
      care_type: "Potrebna pomoć ZA VOŽNJU NA PREGLEDE I OBAVLJANJE POSLOVA NABAVKE",
      gender: "female",
    },
    {
      id: "3",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-2",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Zoran",
      last_name: "Mihajlovic",
      care_type: "Potrebna SPECIJALNA NEGA",
      gender: "male",
    },
    {
      id: "4",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-1",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Stefan",
      last_name: "Peric",
      care_type: "Potrebana SOCIJALIZACIJA I EMOTIVNA PODRŠKA",
      gender: "male",
    },
    {
      id: "5",
      helping_period: "2 meseca",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-09-14",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Luka",
      last_name: "Lukic",
      care_type: "Potrebana SOCIJALIZACIJA I EMOTIVNA PODRŠKA",
      gender: "male",
    },
  ],
  pageNumber: 1,
  pageSize: 20,
  total: 200,
};
export default beneficiariesService;
