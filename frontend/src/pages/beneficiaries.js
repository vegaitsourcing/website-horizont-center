import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";
import ENV from "config/env";
import { useState } from "react";
import { Pagination, ProfileFilters } from "shared-components";
import BeneficiariesService from "./api/beneficiariesService";
import { BeneficiaryList } from "../components";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Beneficiaries(props) {
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
	const [beneficiaries, setBeneficiaries] = useState(items);
	const [numberOfPages, setNumberOfPages] = useState(pagination.total_pages);

	async function getBeneficiaries(pageNumber, contains, gender, city) {
		setActivePageNumber(pageNumber);
		const response = await BeneficiariesService.getBeneficiaries(pageSize, pageNumber, contains, gender, city);
		setBeneficiaries(response.data.items);
		setNumberOfPages(response.data.pagination.total_pages);
	}

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault>
				<ProfileFilters onChange={getBeneficiaries}/>
				<BeneficiaryList beneficiaries={beneficiaries}/>
				<Pagination
					onPageChange={getBeneficiaries}
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
	const response = await BeneficiariesService.getBeneficiaries(pageSize, 1);
	return {
		props: {
			data: { ...response.data },
			pageSize: pageSize,
			pathname: resolvedUrl
		}
	};
}

export default Beneficiaries;
