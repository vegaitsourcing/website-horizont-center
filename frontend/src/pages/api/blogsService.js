import API from "./baseApi";

const BASE_RESOURCE_NAME = "blogs";

const BlogsService = {
  getBlogs: (pageSize, pageNumber, contains, category) => {
    let queryParams = `ipp=${pageSize}&page=${pageNumber}`;
    if (contains) queryParams += `&contains=${contains}`;
    if (category) queryParams += `&category_name=${category}`;
    return API.getAllResources(BASE_RESOURCE_NAME, queryParams);
  },

  getBlogById: (blogId, token) => {
    return API.getResourceById(BASE_RESOURCE_NAME, blogId, token);
  },

  getAllBlogCategories: () => {
    return API.getAllResources("blog-categories");
  },
};
export default BlogsService;
