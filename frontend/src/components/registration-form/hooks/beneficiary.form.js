export const beneficiaryFormFields = [
  //General information
  [
    { id: "first_name", type: "text", name: "first_name", placeholder: "Unesite Vaše ime*" },
    { id: "last_name", type: "text", name: "last_name", placeholder: "Unesite Vaše prezime*" },
    { id: "email", type: "email", name: "email", placeholder: "Unesite Vaš E-mail*" },
    { id: "phone_number", type: "text", name: "phone_number", placeholder: "Unesite Vaš broj telefona*" },
    { id: "password", type: "password", name: "password", placeholder: "Unesite Vašu lozinku*" },
  ],
  //Beneficiary fields
  [
    // TO DO: APi postanski brojevi
    {
      id: "postal_code",
      type: "number",
      name: "postal_code",
      placeholder: "Poštanski broj*",
    },
    // TO DO: API gradovi
    {
      id: "city",
      type: "text",
      name: "city",
      placeholder: "Grad*",
    },
    { id: "beneficiary_person", type: "text", name: "beneficiary_person", placeholder: "Kome je potrebna nega*" },
    //text polje
    {
      id: "helping_period",
      type: "text",
      name: "helping_period",
      placeholder: "Period pružanja pomoći*",
    },
    {
      id: "gender",
      type: "dropdown",
      name: "gender",
      placeholder: "Pol*",
      options: { male: "muški", female: "ženski" },
    },
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
    {
      id: "care_type",
      type: "text",
      name: "care_type",
      placeholder: "Vrsta pomoći*",
    },
  ],
];