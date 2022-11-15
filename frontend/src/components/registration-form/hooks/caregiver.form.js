export const caregiverFormFields = [
  //General information
  [
    { id: "first_name", type: "text", name: "first_name", placeholder: "Unesite Vaše ime*" },
    { id: "last_name", type: "text", name: "last_name", placeholder: "Unesite Vaše prezime*" },
    { id: "email", type: "email", name: "email", placeholder: "Unesite Vaš E-mail*" },
    { id: "phone_number", type: "text", name: "phone_number", placeholder: "Unesite Vaš broj telefona*" },
    { id: "password", type: "password", name: "password", placeholder: "Unesite Vašu lozinku*" },
    {
      id: "postal_code",
      type: "number",
      name: "postal_code",
      placeholder: "Poštanski broj*",
    },
    { id: "city", type: "dropdown", name: "city", placeholder: "Mesto stanovanja*", options: {} },
    { id: "birthdate", type: "datepicker", name: "birthdate", placeholder: "Dan / Mesec / Godina rodjenja*" },
    {
      id: "gender",
      type: "dropdown",
      name: "gender",
      placeholder: "Pol*",
      options: { male: "muški", female: "ženski" },
    },
  ],
  //Caregiver fields
  [
    {
      id: "work_application",
      type: "text",
      name: "work_application",
      placeholder: "Profesija*",
    },
    { id: "experience", type: "text", name: "experience", placeholder: "Iskustvo*" },
    {
      id: "weekly_days",
      type: "dropdown",
      name: "weekly_days",
      placeholder: "Dostupnost broja dana nedeljno*",
      options: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" },
    },
    {
      id: "daily_hours",
      type: "number",
      name: "daily_hours",
      step: ".01",
      placeholder: "Koliko sati dnevno*",
    },
  ],
];
