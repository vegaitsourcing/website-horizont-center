import { SectionHeader, BlogSections, AboutAuthor, Container } from "shared-components";
import BlogsService from "pages/api/blogsService";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const buffer = {
  id: 0,
  sections: [],
  categories: [],
  author: {
    id: 0,
    created: "",
    modified: "",
    first_name: "",
    last_name: "",
    description: "",
    facebook_url: "",
    image: null,
    instagram_url: "",
    blog: 0,
  },
  created: "",
  modified: "",
  title: "",
  image: "",
  description: "",
};

export const SingleBlog = ({ blogId }) => {
  const [blog, setBlog] = useState(buffer);

  const router = useRouter();

  useEffect(() => {
    async function getBlog(blogId) {
      const response = await BlogsService.getBlogById(blogId).catch((error) => {
        if (error.response.status == 404) router.replace("/404");
      });
      try {
        setBlog(response.data);
      } catch (e) {}
    }
    if (blog === buffer) {
      getBlog(blogId);
    }
  }, [blog, blogId]);

  return (
    <>
      <Container>
        <SectionHeader title={blog.title} imageSrc={blog.image} />
      </Container>
      <Container styledClass={"singleBlogContainer"}>
        <BlogSections sections={blog.sections} />
      </Container>
      <Container styledClass={"singleBlogContainer"}>
        {blog.author ? <AboutAuthor author={blog.author} /> : null}
      </Container>
    </>
  );
};
