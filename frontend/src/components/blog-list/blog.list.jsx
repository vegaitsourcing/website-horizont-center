import React from "react";
import styles from "./blog.list.module.scss";
import { BlogCard } from "../blog-card/blog.card";

export const BlogList = ({ blogs }) => {
	return (
		<div className={styles.blogListWrapper}>
			<ul className={styles.blogList}>
				{blogs.map((blog) => (<BlogCard key={blog.id} blog={blog} />))}
			</ul>
		</div>
	);
};
