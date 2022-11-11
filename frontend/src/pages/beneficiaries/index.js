import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import { LayoutDefault } from "layouts";
import { Pagination, ProfileFilters, Spinner } from "shared-components";
import { BeneficiariesService } from "../api/beneficiariesService";
import { BeneficiaryList } from "components";
import { prepareSEO } from "../../utils";

const ITEMS_PER_PAGE = 3;

function Beneficiaries(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	const [isLoading, setIsLoading] = useState(true);
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [beneficiaries, setBeneficiaries] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		gender: null,
		city: null,
	});

	useEffect(() => {
		async function fetchBeneficiaries() {
			const response = await BeneficiariesService.getBeneficiaries(
				ITEMS_PER_PAGE,
				activePageNumber,
				filters.contains,
				filters.gender,
				filters.city
			);
			setBeneficiaries(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
			setIsLoading(false);
		}

		fetchBeneficiaries();
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
			<LayoutDefault>
				<ProfileFilters onChange={updateFilters}/>
				<BeneficiaryList profiles={beneficiaries}/>
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

export default Beneficiaries;
