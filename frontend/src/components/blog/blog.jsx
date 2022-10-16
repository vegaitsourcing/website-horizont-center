import React, { useEffect, useState } from "react";

import styles from "./blog.module.scss";

import { Input, Card, CardPagination } from "shared-components";
import BlogService from "pages/api/blogService";

export const Blog = ({ intialBlogs, pathname, activePageNumber, filterText, filterType, changeNumberOfPages }) => {
  const [blogs, setblogs] = useState([]);
  function fetchData() {
    BlogService.getAllBlogs(3, activePageNumber, filterText, filterType).then(({ data }) => {
      const { items, pagination } = data;
			const {total_items} = pagination
      setblogs([...items]);
      changeNumberOfPages(total_items, 3);
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
