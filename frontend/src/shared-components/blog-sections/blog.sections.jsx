import React from "react";

import styles from "./blog.sections.module.scss";

export const BlogSections = ({ sections }) => {
	const MediaBlock = ({ type, url }) => {
		if (type === "image") return <img className={styles.image} src={url} alt="blog section image"/>;

		return (
			<iframe
				className={styles.iframe}
				src={url.replace("watch?v=", "embed/")}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe>
		);
	};

	return sections.map((section) => (
		<section key={section.id} className={styles.blogDetails}>
			<h2 className={styles.h2}>{section.title}</h2>
			<p className={styles.p1}>{section.description}</p>
			<MediaBlock type={section.media_type} url={section.media_url}/>
		</section>
	));
};
