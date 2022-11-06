import { BlogSections, AboutAuthor, PageHeader } from "shared-components";
import BlogsService from "pages/api/blogsService";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const BlogDetails = ({ blogId }) => {
	const [blog, setBlog] = useState(null);

	const router = useRouter();

	useEffect(() => {
		async function getBlog(blogId) {
			try {
				const response = await BlogsService.getBlogById(blogId);
				setBlog(response.data);
			} catch (error) {
				if (error.response.status === 404) await router.replace("/404");
			}
		}

		if (!blog) {
			getBlog(blogId);
		}
	}, [router, blog, blogId]);

	if (!blog) return;

	return (
		<>
			<PageHeader
				isNarrow
				title={blog.title}
				image={blog.image}
			/>
			<BlogSections sections={blog.sections}/>
			{blog.author ? <AboutAuthor author={blog.author}/> : null}
		</>
	);
};
