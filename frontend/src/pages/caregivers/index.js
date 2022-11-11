import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { useCallback, useEffect, useState } from "react";
import { Pagination, ProfileFilters, Spinner } from "shared-components";
import CaregiversService from "../api/caregiversService";
import { CaregiverList } from "../../components";
import { prepareSEO } from "../../utils";

const ITEMS_PER_PAGE = 3;

function Caregivers(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	const [isLoading, setIsLoading] = useState(true);
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [caregivers, setCaregivers] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		gender: null,
		city: null,
	});

	useEffect(() => {
		async function fetchCaregivers() {
			const response = await CaregiversService.getCaregivers(
				ITEMS_PER_PAGE,
				activePageNumber,
				filters.contains,
				filters.gender,
				filters.city
			);
			setCaregivers(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
			setIsLoading(false);
		}

		fetchCaregivers();
	}, [activePageNumber, filters]);

	const updateFilters = useCallback(
		(newFilters) => {
			const updatedFilters = { ...filters, ...newFilters };
			setActivePageNumber(1);
			setFilters(updatedFilters);
		},
		[filters]
	);

	if (isLoading) {
		return (
			<LayoutDefault>
				<Spinner/>
			</LayoutDefault>
		);
	}

	return (
		<>
			<NextSeo {...SEO} />
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

	return {
		props: {
			pathname: resolvedUrl,
		},
	};
}

export default Caregivers;
