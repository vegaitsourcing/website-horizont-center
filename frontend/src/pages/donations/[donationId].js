import { SingleDonation } from "components";

import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const SingleDonationDetails = (props) => {
  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <SingleDonation donationId={props.params.donationId} />
      </LayoutDefault>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  return {
    props: {
      params: params,
    },
  };
}

export default SingleDonationDetails;
