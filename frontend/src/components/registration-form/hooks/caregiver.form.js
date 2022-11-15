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
      type: "text",
      name: "weekly_days",
      placeholder: "Dostupnost tokom nedelje*",
    },
    {
      id: "daily_hours",
      type: "number",
      name: "daily_hours",
      step: ".01",
      placeholder: "Koliko sati dnevno*",
    },
    {
      id: "facebook_url",
      type: "facebook_url",
      name: "daily_hours",
      placeholder: "Link do vašeg facebook profila*",
      unrequired: true,
    },
    {
      id: "instagram_url",
      type: "facebook_url",
      name: "daily_hours",
      placeholder: "Link do vašeg instagram profila*",
      unrequired: true,
    },
  ],
];
