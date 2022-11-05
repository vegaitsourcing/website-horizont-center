import React from "react";
import styles from "./blog.list.module.scss";
import { ResourceCard } from "../resource-card/resource.card";

export const BlogList = ({ blogs }) => {
	return (
		<div className={styles.blogListWrapper}>
			<ul className={styles.blogList}>
				{blogs.map((blog) => (
					<ResourceCard
						key={blog.id}
						resourceURL={`/blogs/${blog.id}`}
						image={blog.image}
						tags={blog.categories}
						title={blog.title}
						teaserText={blog.description}
						date={blog.created}
					/>
				))}
			</ul>
		</div>
	);
};
