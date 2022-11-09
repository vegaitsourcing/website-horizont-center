import { useEffect, useState } from "react";

import { AboutAuthor, BlogSections, PageHeader } from "shared-components";
import BlogsService from "pages/api/blogsService";

export const BlogDetails = ({ blogId }) => {
	const [isLoadingBlog, setIsLoadingBlog] = useState(true);
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		async function getBlog() {
			await BlogsService.getBlogById(blogId).then((response) => {
				setBlog(response.data);
				setIsLoadingBlog(false);
			});
		}

		if (isLoadingBlog) {
			getBlog();
		}
	}, [blogId, isLoadingBlog]);

	if (isLoadingBlog) return null;

	return (
		<>
			<PageHeader isNarrow title={blog.title} image={blog.image}/>
			<BlogSections sections={blog.sections}/>
			{blog.author ? <AboutAuthor author={blog.author}/> : null}
		</>
	);
};
