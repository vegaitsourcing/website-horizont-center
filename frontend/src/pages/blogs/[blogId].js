import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { prepareSingleResourceSEO } from "../../utils";
import BlogsService from "../api/blogsService";
import { AboutAuthor, BlogSections, PageHeader } from "../../shared-components";
import { useEffect, useState } from "react";
import { useSingleResource } from "../../hooks";

const SingleBlog = ({ pathname, blogId }) => {
	const [blog, errorPage] = useSingleResource(() => BlogsService.getBlogById(blogId));
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (blog) setSEO(prepareSingleResourceSEO(blog.id, blog.title));
	}, [blog]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
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
	const { params, resolvedUrl } = ctx;
	return {
		props: {
			blogId: params.blogId,
			pathname: resolvedUrl,
		},
	};
}

export default SingleBlog;
