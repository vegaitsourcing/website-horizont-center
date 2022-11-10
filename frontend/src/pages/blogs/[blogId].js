import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { prepareSingleResourceSEO } from "../../utils";
import BlogsService from "../api/blogsService";
import { AboutAuthor, BlogSections, PageHeader } from "../../shared-components";

const SingleBlogDetails = ({ blog }) => {
	const SEO = prepareSingleResourceSEO(blog.id, blog.title);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<PageHeader isNarrow title={blog.title} image={blog.image}/>
				<BlogSections sections={blog.sections}/>
				{blog.author && <AboutAuthor author={blog.author}/>}
			</LayoutDefault>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { params } = ctx;
	const response = await BlogsService.getBlogById(params.blogId);
	return {
		props: {
			blog: response.data,
		},
	};
}

export default SingleBlogDetails;
