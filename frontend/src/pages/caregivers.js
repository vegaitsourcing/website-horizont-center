import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import env from "config/env";
import { useCallback, useEffect, useState } from "react";
import { Pagination, ProfileFilters } from "shared-components";
import CaregiversService from "./api/caregiversService";
import { CaregiverList } from "../components";

function Caregivers(props) {
	const { pathname, pageSize } = props;
	const SEOS = {
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
	const [caregivers, setCaregivers] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		gender: null,
		city: null,
	});

	useEffect(() => {
		async function fetchBeneficiaries() {
			const response = await CaregiversService.getCaregivers(
				pageSize,
				activePageNumber,
				filters.contains,
				filters.gender,
				filters.city
			);
			setCaregivers(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
		}

		fetchBeneficiaries();
	}, [activePageNumber, filters, pageSize]);

	const updateFilters = useCallback((newFilters) => {
		const updatedFilters = { ...filters, ...newFilters };
		setActivePageNumber(1);
		setFilters(updatedFilters);
	}, [filters]);

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault pathname={pathname}>
				<ProfileFilters onChange={updateFilters}/>
				<CaregiverList profiles={caregivers}/>
				<Pagination
					onPageChange={setActivePageNumber}
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
	return {
		props: {
			pageSize: pageSize,
			pathname: resolvedUrl
		}
	};
}

export default Caregivers;
