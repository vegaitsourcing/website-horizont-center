export const caregiverEditList = [
  {
    title: "IME",
    fieldName: "first_name",
    type: "text",
    placeholder: "Vaše ime*",
  },
  {
    title: "PREZIME",
    fieldName: "last_name",
    type: "text",
    placeholder: "Vaše prezime*",
  },
  {
    title: "PROFESIJA",
    fieldName: "work_application",
    type: "text",
    styleClass: "fullWidth",
    placeholder: "Vaša profesija",
  },
  {
    title: "OPŠTE INFORMACIJE",
    fieldName: "description",
    type: "textArea",
    width: "full",
    styleClass: "textArea",
    placeholder: "Unesite kratak opis o negovanoj osobi",
  },
  {
    title: "BROJ TELEFONA",
    fieldName: "phone_number",
    type: "text",
    placeholder: "Vaš primarni broj telefona",
  },
  {
    title: "BROJ TELEFONA 2",
    fieldName: "second_phone_number",
    type: "text",
    placeholder: "Vaš rezervni broj telefona",
  },
  {
    title: "EMAIL",
    fieldName: "email",
    type: "text",
    placeholder: "Vaša e-mail adresa",
  },
  {
    title: "DRUŠTVENE MREŽE",
    fieldName: "social_networks",
    fields: [
      { fieldName: "facebook_url", placeholder: "Link do vaseg facebook profila" },
      { fieldName: "instagram_url", placeholder: "Link do vaseg instagram profila" },
    ],
    type: "text",
  },
  {
    title: "ISKUSTVO",
    fieldName: "experience",
    type: "text",
    placeholder: "Vaše iskustvo",
  },
  {
    title: "DOSTUPNOST",
    fieldName: "weekly_days",
    type: "text",
    placeholder: "Koliko ste dostupni?",
  },
  {
    title: "SATI NEDELJNO",
    fieldName: "daily_hours",
    type: "text",
    placeholder: "Koliko sati nedeljno? (0-24h)",
  },
];
