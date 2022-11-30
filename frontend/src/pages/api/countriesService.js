import axios from "axios";

const BASE_URL = "https://countriesnow.space/api/v0.1/countries";

export const CitiesService = {
	getAllSerbianCities: async () => {
		let serbianCitiesString = localStorage.getItem("serbianCities");
		const isFirstOfTheMonth = new Date().getDate() === 1;
		if (!isFirstOfTheMonth && serbianCitiesString) return serbianCitiesString.split(",");
		const response = await axios.post(`${BASE_URL}/cities`, { country: "serbia" });
		localStorage.setItem("serbianCities", response.data.data);
		return localStorage.getItem("serbianCities").split(",");
	},
};
