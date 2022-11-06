import API from "./baseApi";

const BASE_URL = process.env.BASE_URL;

const AuthService = {

	login: async (email, password) => {
		const response = await API.post("login/", {
			email: email,
			password: password,
		});
		const userDataString = JSON.stringify({
			token: response.data.token,
			id: response.data.id,
			firstName: response.data.first_name,
			lastName: response.data.last_name,
			imageURL: response.data.image,
		});
		localStorage.setItem("user", userDataString);
	},

	isAuthenticated: () => {
		return !!AuthService.getUser();
	},

	getUser: () => {
		return JSON.parse(localStorage.getItem("user"));
	},

	getAuthorizationHeaders: () => {
		const userJSON = localStorage.getItem("user");
		const user = userJSON ? JSON.parse(userJSON) : null;
		return user ? { "Authorization": `Bearer ${user?.token}` } : {};
	},

	logout: async () => {
		await API.post("logout/", null, { headers: AuthService.getAuthorizationHeaders() });
		localStorage.removeItem("user");
	},

	register: (body, type) => {
		return API.post(`${BASE_URL}/register-${type}/`, body);
	},

	registerCaregiver: ({
		email,
		firstName,
		lastName,
		phoneNumber,
		password,
		gender,
		postCode,
		city,
		description,
		birthdate,
		workApplication,
		experience,
		weeklyDays,
		dailyHours,
		profileImage,
	}) => {
		return register(
			{
				email: email,
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNumber,
				password: password,
				profile: {
					gender: gender,
					postal_code: postCode,
					city: city,
					description: description,
					birthdate: birthdate,
					work_application: workApplication,
					experience,
					weekly_days: weeklyDays,
					daily_hours: dailyHours,
					image: profileImage,
				},
			},
			"caregiver"
		);
	},
	registerBeneficiary: ({
		email,
		firstName,
		lastName,
		phoneNumber,
		password,
		gender,
		postCode,
		city,
		description,
		birthdate,
		helpingPeriod,
		careType,
		beneficiaryPerson,
		weeklyDays,
		dailyHours,
		profileImage,
	}) => {
		return register(
			{
				email: email,
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNumber,
				password: password,
				profile: {
					gender: gender,
					postal_code: postCode,
					city: city,
					description: description,
					birthdate: birthdate,
					beneficiary_person: beneficiaryPerson,
					helping_period: helpingPeriod,
					care_type: careType,
					weekly_days: weeklyDays,
					daily_hours: dailyHours,
					image: profileImage,
				},
			},
			"beneficiary"
		);
	},
};
export default AuthService;
