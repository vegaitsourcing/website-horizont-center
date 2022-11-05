import { SingleDonation } from "components";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const SingleDonationDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <SingleDonation donationId={slug} />
      </LayoutDefault>
    </>
  );
};

export default SingleDonationDetails;
