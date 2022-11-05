import React from "react";
import styles from "./blog.list.module.scss";
import { ResourceCard } from "../resource-card/resource.card";
import { createResourceCardSecondaryTag } from "../../utils";

function prepareBlog(blog) {
	return {
		...blog,
		resourceURL: `/blogs/${blog.id}`,
		secondaryTags: blog.categories.map(category => createResourceCardSecondaryTag(category)),
	};
}

export const BlogList = ({ blogs }) => {
	const preparedBlogs = blogs.map(blog => prepareBlog(blog))

	return (
		<div className={styles.blogListWrapper}>
			<ul className={styles.blogList}>
				{preparedBlogs.map((blog) => (
					<ResourceCard
						key={blog.id}
						resourceURL={blog.resourceURL}
						image={blog.image}
						secondaryTags={blog.secondaryTags}
						title={blog.title}
						teaserText={blog.description}
						date={blog.created}
					/>
				))}
			</ul>
		</div>
	);
};
