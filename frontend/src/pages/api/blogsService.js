import API from "./baseApi";

const BASE_RESOURCE_NAME = "blogs";

export const BlogsService = {
  getPublishedBlogs: (pageSize, pageNumber, contains, category) => {
    let queryParams = `ipp=${pageSize}&page=${pageNumber}&is_published=true`;
    if (contains) queryParams += `&contains=${contains}`;
    if (category) queryParams += `&category_name=${category}`;
    return API.getAllResources(BASE_RESOURCE_NAME, queryParams);
  },

  getBlogById: (blogId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, blogId);
  },

  getAllBlogCategories: () => {
    return API.getAllResources("blog-categories");
  },
};
