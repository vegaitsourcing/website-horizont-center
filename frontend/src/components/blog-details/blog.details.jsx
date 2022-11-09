import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { BlogSections, AboutAuthor, PageHeader } from "shared-components";
import BlogsService from "pages/api/blogsService";

export const BlogDetails = ({ blogId }) => {
  const router = useRouter();
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [blog, setBlog] = useState(null);

  async function getBlog() {
    await BlogsService.getBlogById(blogId).then((response) => {
      // if (response.status === 404) {
      //   return router.push("/404");
      // }
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
