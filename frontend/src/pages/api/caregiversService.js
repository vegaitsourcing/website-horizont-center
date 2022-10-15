import ABOUT from "config/data/about";
const caregiversService = {
  getAllCaregivers: (pageSize, pageNumber, textFilter, genderFilter, cityFilter) => {
    return new Promise((resolve, reject) => {
      var filteredData = mockData.results.filter(
        ({ city, work_application, gender }) =>
          gender.includes(genderFilter) && city.includes(cityFilter) && work_application.includes(textFilter)
      );
      var responseData = {
        results: filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
        pageNumber: pageNumber,
        pageSize: pageSize,
        total: filteredData.length,
      };
      resolve({ ...responseData, ...ABOUT });
    });
  },
};

var mockData = {
  results: [
    {
      id: "1",
      work_application: "Negovatelj sa stečenim stručnim zvanjem",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-14",
      city: "Novi Sad",
      gender: "male",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Marko",
      last_name: "Puzovic",
    },
    {
      id: "2",
      work_application: "Negovatelj",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-9",
      city: "Novi Sad",
      gender: "male",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Petar",
      last_name: "Petrovic",
    },
    {
      id: "3",
      work_application: "Medicinska sestra",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-2",
      city: "Novi Sad",
      gender: "male",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Zoran",
      last_name: "Mihajlovic",
    },
    {
      id: "4",
      work_application: "Medicinska sestra",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-1",
      city: "Novi Sad",
      gender: "male",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Stefan",
      last_name: "Peric",
    },
    {
      id: "5",
      work_application: "Negovatelj sa stečenim stručnim zvanjem",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-09-14",
      gender: "male",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Luka",
      last_name: "Lukic",
    },
  ],
  pageNumber: 1,
  pageSize: 20,
  total: 200,
};

export default caregiversService;
