import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import { LayoutDefault } from "layouts";
import { PageHeader, Pagination, Spinner } from "shared-components";
import { BlogFilters, BlogList } from "components";
import { BlogsService } from "../api/blogsService";
import { prepareSEO } from "../../utils";

const ITEMS_PER_PAGE = 6;

function Blogs(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	const [isLoading, setIsLoading] = useState(true);
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [blogs, setBlogs] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		category: null,
	});

	useEffect(() => {
		async function fetchBlogs() {
			const response = await BlogsService.getPublishedBlogs(
				ITEMS_PER_PAGE,
				activePageNumber,
				filters.contains,
				filters.category
			);
			setBlogs(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
			setIsLoading(false);
		}

		fetchBlogs();
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
					title={"Podrška"}
				/>
				<BlogFilters onChange={updateFilters}/>
				<BlogList blogs={blogs}/>
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

export default Blogs;
