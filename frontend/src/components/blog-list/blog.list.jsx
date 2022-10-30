import React from "react";
import styles from "./blog.list.module.scss";
import { Card } from "shared-components";

export const BlogList = ({ blogs }) => {
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
