import { BlogSections, AboutAuthor, PageHeader } from "shared-components";
import BlogsService from "pages/api/blogsService";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthService from "pages/api/authService";

export const BlogDetails = ({ blogId }) => {
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [blog, setBlog] = useState(null);

  async function getBlog(token) {
    await BlogsService.getBlogById(blogId, token).then((response) => {
      if (response.status === 401) {
        //TO DO: Handle 401 error page
        return alert("Ne mozete pristupiti ovoj stranici, morate biti ulogovani!");
      }
      setBlog(response.data);
      setIsLoadingBlog(false);
    });
  }

  useEffect(() => {
    if (isLoadingBlog) {
      const token = AuthService.getUser()?.token;
      getBlog(token);
    }
  }, [isLoadingBlog]);

  if (isLoadingBlog) return null;

  return (
    <>
      <PageHeader isNarrow title={blog.title} image={blog.image} />
      {console.log("Blog:", blog)}
      <BlogSections sections={blog.sections} />
      {blog.author ? <AboutAuthor author={blog.author} /> : null}
    </>
  );
};
