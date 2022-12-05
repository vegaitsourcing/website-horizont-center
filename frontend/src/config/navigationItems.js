export const HOME_PATHNAME = "";
export const BLOGS_PATHNAME = "blogs";
export const DONATIONS_PATHNAME = "donations";
export const CAREGIVERS_PATHNAME = "caregivers";
export const BENEFICIARIES_PATHNAME = "beneficiaries";
export const CONTACT_PATHNAME = "contact";
export const PRIVACY_POLICY_PATHNAME = "/documents/privacyPolicy.pdf";
export const TERMS_AND_CONDITIONS_PATHNAME = "/documents/termsAndConditions.pdf";

export const HOME_NAV_ITEM = {
  name: "Zajednica",
  pathname: HOME_PATHNAME,
  active: true,
};
export const CAREGIVERS_NAV_ITEM = {
  name: "Negovatelji",
  pathname: CAREGIVERS_PATHNAME,
  active: false,
};
export const BENEFICIARIES_NAV_ITEM = {
  name: "Negovani",
  pathname: BENEFICIARIES_PATHNAME,
  active: false,
};
export const BLOGS_NAV_ITEM = {
  name: "Podrška",
  pathname: BLOGS_PATHNAME,
  active: false,
};
export const DONATIONS_NAV_ITEM = {
  name: "Donacije",
  pathname: DONATIONS_PATHNAME,
  active: false,
};
export const CONTACT_NAV_ITEM = {
  name: "Kontakt",
  pathname: CONTACT_PATHNAME,
  active: false,
};
export const TERMS_AND_CONDITIONs_NAV_ITEM = {
  name: "Uslovi korišćena sajta",
  pathname: TERMS_AND_CONDITIONS_PATHNAME,
  active: false,
};
export const PRIVACY_POLICY_NAV_ITEM = {
  name: "Politika privatnosti",
  pathname: PRIVACY_POLICY_PATHNAME,
  active: false,
};

export const navigationItems = [
  HOME_NAV_ITEM,
  CAREGIVERS_NAV_ITEM,
  BENEFICIARIES_NAV_ITEM,
  BLOGS_NAV_ITEM,
  DONATIONS_NAV_ITEM,
  CONTACT_NAV_ITEM,
];

export const footerNavItems = [
  CAREGIVERS_NAV_ITEM,
  BENEFICIARIES_NAV_ITEM,
  DONATIONS_NAV_ITEM,
  CONTACT_NAV_ITEM,
  HOME_NAV_ITEM,
  BLOGS_NAV_ITEM,
  TERMS_AND_CONDITIONs_NAV_ITEM,
  PRIVACY_POLICY_NAV_ITEM,
];
