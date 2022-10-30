import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import ENV from "config/env";
import { DonationList } from "components/donation-list/donation.list";
import { useState } from "react";
import DonationsService from "./api/donationsService";
import { Pager, PageHeader } from "shared-components";
import { DonationFilters } from "components";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;


function Donations(props) {
	const {
		pathname,
		pageSize,
		data: {
			title,
			items,
			pagination,
			metaDescription,
		},
	} = props;

	const SEOS = {
		title,
		description: metaDescription,
		canonical: `${BASE_URL}${pathname}`,
		openGraph: [
			{
				url: BASE_URL,
				images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
				site_name: AUTHOR,
			},
		],
		...BASE_SEO,
	};
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [donations, setDonations] = useState(items);
	const [numberOfPages, setNumberOfPages] = useState(pagination.total_pages);

	async function getDonations(pageNumber, contains = null, isActive = null) {
		setActivePageNumber(pageNumber);
		const response = await DonationsService.getDonations(pageSize, pageNumber, contains, isActive);
		setDonations(response.data.items);
		setNumberOfPages(response.data.pagination.total_pages);
	}

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault pathname={pathname}>
				<PageHeader
					title={"Prikupljenje donacija"}
					text={
						"Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
						"Faucibus nunc, auctor arcu magna cursus "
					}
				/>
				<DonationFilters onChange={getDonations}/>
				<DonationList donations={donations}/>
				<Pager
					onPageChange={getDonations}
					numberOfPages={numberOfPages}
					activePageNumber={activePageNumber}
				/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	const pageSize = process.env.POST_PAGE_SIZE;
	const response = await DonationsService.getDonations(pageSize, 1);
	return {
		props: {
			data: { ...response.data },
			pageSize: pageSize,
			pathname: resolvedUrl
		}
	};
}

export default Donations;
