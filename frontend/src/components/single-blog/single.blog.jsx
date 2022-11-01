import { SectionHeader, BlogArticles, AboutDetails, Container } from "shared-components";
import BlogsService from "pages/api/blogsService";
import { useState, useEffect } from "react";

var loaded = false;
var currentBlogId = 0;

var buffer = {
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

  async function getBlog(blogId) {
    const response = await BlogsService.getBlogById(blogId);
    setBlog(response.data);
  }
  if (blogId != undefined && (!loaded || currentBlogId != blogId)) {
    currentBlogId = blogId;
    getBlog(blogId);
    loaded = !loaded;
  }

  return (
    <>
      <Container>
        <SectionHeader title={blog.title} imageSrc={blog.image} />
      </Container>
      <Container className={"singleBlogContainer"}>
        <BlogArticles articles={blog.sections} />
      </Container>
      <Container className={"singleBlogContainer"}>
        {blog.author ? (
          <AboutDetails
            imageSrc={blog.author.image ?? "/images/aboutDetailsImage.png"}
            name={blog.author.first_name + " " + blog.author.last_name}
            type={"author"}
            text={blog.author.description}
            socialLinks={[
              blog.author.facebook_url != null
                ? {
                    url: blog.author.facebook_url,
                    iconPath: "/images/facebookIconAboutDetails.svg",
                  }
                : null,
              blog.author.instagram_url != null
                ? {
                    url: blog.author.instagram_url,
                    iconPath: "/images/instagramIconAboutDetails.svg",
                  }
                : null,
            ]}
          />
        ) : null}
      </Container>
    </>
  );
};
