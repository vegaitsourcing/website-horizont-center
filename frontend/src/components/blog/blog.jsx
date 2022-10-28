import React, { useEffect, useState } from "react";

import styles from "./blog.module.scss";

import { Input, Card, Pager } from "shared-components";
import BlogsService from "pages/api/blogsService";

export const Blog = ({
  pageSize,
  intialBlogs,
  pathname,
  activePageNumber,
  filterText,
  filterType,
  changeNumberOfPages,
}) => {
  const [blogs, setblogs] = useState(intialBlogs);
  function fetchData() {
    BlogsService.getAllMockBlogs(pageSize, activePageNumber, filterText, filterType).then(({ data }) => {
      const { items, pagination } = data;
      const { total_items } = pagination;
      setblogs([...items]);
      changeNumberOfPages(total_items, pageSize);
    });
  }
  useEffect(() => fetchData(), [activePageNumber, filterType, filterText]);
  return (
    <div className={styles.blogBody}>
      <ul className={styles.blogList}>
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            categories={blog.categories}
            description={blog.description}
            title={blog.title}
            date={blog.created}
            image={blog.image}
          />
        ))}
      </ul>
    </div>
  );
};
