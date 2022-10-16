import API from "./baseApi";
const BASE_RESOURCE_NAME = "blogs";
const BlogService = {
  getAllBlogs: (pageSize, pageNumber, filterText, filterType) => {
    return API.getAllResources(
      BASE_RESOURCE_NAME,
      `pageSize=${pageSize}&pageNumber=${pageNumber}&fiterText=${filterText}&filterType=${filterType}`
    );
  },
  getBlogById: (blogId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, blogId, localStorage.getItem("token"));
  },
};
export default BlogService;
