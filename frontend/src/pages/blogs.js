import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import { PageHeader, Pagination } from "shared-components";
import { ENV } from "config/env";
import { BlogFilters, BlogList } from "components";
import BlogsService from "./api/blogsService";
import { useCallback, useEffect, useState } from "react";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

const ITEMS_PER_PAGE = 3;

function Blogs(props) {
	const { pathname } = props;
	const SEOS = {
		canonical: `${BASE_URL}${pathname}`,
		openGraph: [
			{
				url: BASE_URL,
				images: { url: `${BASE_URL}${STATIC_DIR}images/logo.png` },
				site_name: AUTHOR,
			},
		],
		...BASE_SEO,
	};
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [blogs, setBlogs] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [filters, setFilters] = useState({
		contains: null,
		category: null,
	});

	useEffect(() => {
		async function fetchBlogs() {
			const response = await BlogsService.getBlogs(
				ITEMS_PER_PAGE,
				activePageNumber,
				filters.contains,
				filters.category,
			);
			setBlogs(response.data.items);
			setNumberOfPages(response.data.pagination.total_pages);
		}

		fetchBlogs();
	}, [activePageNumber, filters]);

	const updateFilters = useCallback((newFilters) => {
		const updatedFilters = { ...filters, ...newFilters };
		setActivePageNumber(1);
		setFilters(updatedFilters);
	}, [filters]);

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault pathname={pathname}>
				<PageHeader
					withBackground
					title={"Podrška"}
					text={
						"Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
						"Faucibus nunc, auctor arcu magna cursus "
					}
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
			pathname: resolvedUrl
		}
	};
}

export default Blogs;
