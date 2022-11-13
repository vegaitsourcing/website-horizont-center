import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { prepareSingleResourceSEO } from "../../utils";
import BlogsService from "../api/blogsService";
import { AboutAuthor, BlogSections, PageHeader } from "../../shared-components";
import { useEffect, useState } from "react";
import { useSingleResource } from "../../hooks";

const SingleBlogDetails = ({ blogId }) => {
	const [blog, errorPage] = useSingleResource(blogId, BlogsService.getBlogById);
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (blog) setSEO(prepareSingleResourceSEO(blog.id, blog.title));
	}, [blog]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				{errorPage || blog && (
					<>
						<PageHeader isNarrow title={blog.title} image={blog.image}/>
						<BlogSections sections={blog.sections}/>
						{blog.author && <AboutAuthor author={blog.author}/>}
					</>
				)}
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
