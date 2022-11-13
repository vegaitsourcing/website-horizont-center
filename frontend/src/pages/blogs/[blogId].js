import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { prepareSingleResourceSEO } from "../../utils";
import BlogsService from "../api/blogsService";
import { AboutAuthor, BlogSections, PageHeader } from "../../shared-components";
import { useEffect, useState } from "react";
import ErrorPage from "next/error";
import { useSingleResource } from "../../hooks";

const SingleBlogDetails = ({ blogId }) => {
	const [blog, statusCode] = useSingleResource(blogId, BlogsService.getBlogById);
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (blog) setSEO(prepareSingleResourceSEO(blog.id, blog.title));
	}, [statusCode, blog]);

	function PageBody() {
		if (!statusCode) return null;

		if (blog) {
			return (
				<>
					<PageHeader isNarrow title={blog.title} image={blog.image}/>
					<BlogSections sections={blog.sections}/>
					{blog.author && <AboutAuthor author={blog.author}/>}
				</>
			);
		}

		const errorCodes = [401, 404, 500];
		if (errorCodes.includes(statusCode)) return <ErrorPage statusCode={statusCode} withDarkMode={false}/>;
	}

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<PageBody/>
			</LayoutDefault>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { params } = ctx;
	return {
		props: {
			blogId: params.blogId,
		},
	};
}

export default SingleBlogDetails;
