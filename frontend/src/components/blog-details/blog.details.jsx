import { BlogSections, AboutAuthor, PageHeader } from "shared-components";
import BlogsService from "pages/api/blogsService";
import { useState, useEffect } from "react";

export const BlogDetails = ({ blogId }) => {
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [blog, setBlog] = useState(null);

  async function getBlog() {
    await BlogsService.getBlogById(blogId).then((response) => {
      setBlog(response.data);
      setIsLoadingBlog(false);
    });
  }

  useEffect(() => {
    if (isLoadingBlog) {
      getBlog();
    }
  }, [isLoadingBlog]);

  if (isLoadingBlog) return null;

  return (
    <>
      <PageHeader isNarrow title={blog.title} image={blog.image} />
      <BlogSections sections={blog.sections} />
      {blog.author ? <AboutAuthor author={blog.author} /> : null}
    </>
  );
};
