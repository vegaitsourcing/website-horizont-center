import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import { LayoutDefault } from "layouts";
import { DonationFilters, DonationList } from "components";
import { PageHeader, Pagination, Spinner } from "shared-components";
import { DonationsService } from "../api/donationsService";
import { prepareSEO } from "../../utils";

const ITEMS_PER_PAGE = 3;

function Donations(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	const [isLoading, setIsLoading] = useState(true);
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [donations, setDonations] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		isActive: null,
	});

	useEffect(() => {
		async function fetchDonations() {
			const response = await DonationsService.getDonations(
				ITEMS_PER_PAGE,
				activePageNumber,
				filters.contains,
				filters.isActive
			);
			setDonations(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
			setIsLoading(false);
		}

		fetchDonations();
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
				<PageHeader
					withBackground
					title={"Prikupljenje donacija"}
				/>
				<DonationFilters onChange={updateFilters}/>
				<DonationList donations={donations}/>
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

export default Donations;
