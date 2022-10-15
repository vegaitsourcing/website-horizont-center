import ABOUT from "config/data/about";
const beneficiariesService = {
  getAllBeneficiaries: () => {
    return new Promise((resolve, reject) => {
      resolve({ ...mockData, ...ABOUT });
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
    },
  ],
  pageNumber: 1,
  pageSize: 20,
  total: 200,
};
export default beneficiariesService;
