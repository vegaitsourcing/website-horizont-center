export const beneficiaryFormFields = [
  //General information
  [
    { id: "first_name", type: "text", name: "first_name", placeholder: "Unesite Vaše ime*" },
    { id: "last_name", type: "text", name: "last_name", placeholder: "Unesite Vaše prezime*" },
    { id: "email", type: "email", name: "email", placeholder: "Unesite Vaš E-mail*" },
    { id: "phone_number", type: "text", name: "phone_number", placeholder: "Unesite Vaš broj telefona*" },
    { id: "password", type: "text", name: "password", placeholder: "Unesite Vašu lozinku*" },
  ],
  //Beneficiary fields
  [
    {
      id: "postal_code",
      type: "dropdown",
      name: "postal_code",
      placeholder: "Poštanski broj*",
      options: ["21000", "11000"],
    },
    {
      id: "city",
      type: "dropdown",
      name: "city",
      placeholder: "Grad*",
      options: ["Novi Sad", "Beograd"],
    },
    { id: "beneficiary_person", type: "text", name: "beneficiary_person", placeholder: "Kome je potrebna nega*" },
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
      options: ["muški", "ženski"],
    },
    {
      id: "weekly_days",
      type: "dropdown",
      name: "weekly_days",
      placeholder: "Dani u nedelji*",
      options: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: "daily_hours",
      type: "number",
      name: "daily_hours",
      placeholder: "Sati dnevno*",
    },
    {
      id: "care_type",
      type: "text",
      name: "care_type",
      placeholder: "Vrsta pomoći*",
    },
  ],
];
