import ABOUT from "config/data/about";
const caregiversService = {
  getAllCaregivers: (pageSize, pageNumber) => {
    return new Promise((resolve, reject) => {
      resolve({ ...mockData, ...ABOUT });
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
