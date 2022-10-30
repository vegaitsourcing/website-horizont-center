import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import env from "config/env";
import { useState } from "react";
import { Pager, ProfileFilters } from "shared-components";
import CaregiversService from "./api/caregiversService";
import { CaregiverList } from "../components";

function Caregivers(props) {
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
		canonical: `${env.BASE_URL}${pathname}`,
		openGraph: [
			{
				url: env.BASE_URL,
				images: { url: `${env.BASE_URL}${env.STATIC_DIR}logo-share.jpg` },
				site_name: env.AUTHOR,
			},
		],
		...env.BASE_SEO,
	};

	const [activePageNumber, setActivePageNumber] = useState(1);
	const [caregivers, setCaregivers] = useState(items);
	const [numberOfPages, setNumberOfPages] = useState(pagination.total_pages);

	async function getCaregivers(pageNumber, contains = null, gender = null, city = null) {
		setActivePageNumber(pageNumber);
		const response = await CaregiversService.getCaregivers(pageSize, pageNumber, contains, gender, city);
		setCaregivers(response.data.items);
		setNumberOfPages(response.data.pagination.total_pages);
	}

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault pathname={pathname}>
				<ProfileFilters onChange={getCaregivers}/>
				<CaregiverList caregivers={caregivers}/>
				<Pager
					onPageChange={getCaregivers}
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
	const response = await CaregiversService.getCaregivers(pageSize, 1);
	return {
		props: {
			data: { ...response.data },
			pageSize: pageSize,
			pathname: resolvedUrl
		}
	};
}

export default Caregivers;
