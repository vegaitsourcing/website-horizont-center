import DonationsService from "pages/api/donationsService";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SectionHeader, AboutAuthor, Container, DonationInfo } from "shared-components";

const buffer = {
  id: 0,
  financial_info: null,
  company: {
    id: 0,
    created: "",
    modified: "",
    name: "",
    image: null,
    description: "",
    facebook_url: "",
    instagram_url: "",
    donation: 0,
  },
  created: "",
  modified: "",
  title: "",
  subtitle: "",
  image: "",
  description: "",
  is_active: false,
};

export const SingleDonation = ({ donationId }) => {
  const [donation, setDonation] = useState(buffer);

  const router = useRouter();

  useEffect(() => {
    async function getDonation(donationId) {
      const response = await DonationsService.getDonationById(donationId).catch((error) => {
        if (error.response.status == 404) router.replace("/404");
      });
      try {
        setDonation(response.data);
      } catch (e) {}
    }
    if (donation === buffer) {
      getDonation(donationId);
    }
  }, [donation, donationId]);

  return (
    <>
      <Container>
        <SectionHeader title={donation.title} imageSrc={donation.image} donationActive={donation.is_active} />
      </Container>
      <Container styledClass={"singleDonationContainer"}>
        <DonationInfo donation={donation} />
      </Container>
      <Container styledClass={"singleDonationContainer"}>
        {donation.company ? <AboutAuthor type={"company"} data={donation} /> : null}
      </Container>
    </>
  );
};
