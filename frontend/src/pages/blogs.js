import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import { PageHeader, Pagination } from "shared-components";
import ENV from "config/env";
import { BlogFilters, BlogList } from "components";
import BlogsService from "./api/blogsService";
import { useState } from "react";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Blogs(props) {
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
				images: { url: `${BASE_URL}${STATIC_DIR}images/logo.png` },
				site_name: AUTHOR,
			},
		],
		...BASE_SEO,
	};
	const [activePageNumber, setActivePageNumber] = useState(1);
	const [blogs, setBlogs] = useState(items);
	const [numberOfPages, setNumberOfPages] = useState(pagination.total_pages);

	async function getBlogs(pageNumber, contains, category) {
		setActivePageNumber(pageNumber);
		const response = await BlogsService.getBlogs(pageSize, pageNumber, contains, category);
		setBlogs(response.data.items);
		setNumberOfPages(response.data.pagination.total_pages);
	}

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault pathname={pathname}>
				<PageHeader
					title={"Podrška"}
					text={
						"Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
						"Faucibus nunc, auctor arcu magna cursus "
					}
				/>
				<BlogFilters onChange={getBlogs}/>
				<BlogList blogs={blogs}/>
				<Pagination
					onPageChange={getBlogs}
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
	const response = await BlogsService.getBlogs(pageSize, 1);
	return {
		props: {
			data: { ...response.data },
			pageSize: pageSize,
			pathname: resolvedUrl
		}
	};
}

export default Blogs;
