import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { AboutAuthor, DonationDetails, PageHeader } from "../../shared-components";
import { useSingleResource } from "../../hooks";
import DonationsService from "../api/donationsService";
import { prepareSingleResourceSEO } from "../../utils";
import { useEffect, useState } from "react";

const SingleDonation = ({ pathname, donationId }) => {
	const [donation, errorPage] = useSingleResource(() => DonationsService.getDonationById(donationId));
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (donation) setSEO(prepareSingleResourceSEO(donation.id, donation.title));
	}, [donation]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				{errorPage || donation && (
					<>
						<PageHeader isNarrow title={donation.title} image={donation.image}/>
						<DonationDetails donation={donation}/>
						{donation.company && <AboutAuthor author={donation.company}/>}
					</>
				)}
			</LayoutDefault>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { params, resolvedUrl } = ctx;
	return {
		props: {
			donationId: params.donationId,
			pathname: resolvedUrl,
		},
	};
}

export default SingleDonation;
