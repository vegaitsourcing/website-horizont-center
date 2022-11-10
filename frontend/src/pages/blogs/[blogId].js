import { BlogDetails } from "components";
import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { prepareSingleResourceSEO } from "../../utils";

const SingleBlogDetails = ({ params }) => {
	const { blogId } = params;
	const SEO = prepareSingleResourceSEO(blogId, `Blog ${blogId}`);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<BlogDetails blogId={blogId}/>
			</LayoutDefault>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { params } = ctx;
	return {
		props: {
			params: params,
		},
	};
}

export default SingleBlogDetails;
