import React from "react";
import styles from "./about.author.module.scss";

const socialLinkMappings = [
	{
		fieldName: "facebook_url",
		iconURL: "/images/facebookIconBlue.svg",
	},
	{
		fieldName: "instagram_url",
		iconURL: "/images/instagramIconBlue.svg",
	},
	{
		fieldName: "linkedin_url",
		iconURL: "/images/linkedinIconBlue.svg",
	},
	{
		fieldName: "twitter_url",
		iconURL: "/images/twitterIconBlue.svg",
	},
];

export const AboutAuthor = ({ author }) => {
	const socialLinks = socialLinkMappings.map(mapping => {
		if (author[mapping.fieldName]) {
			return { ...mapping, socialMediaURL: author[mapping.fieldName], imgAlt: mapping.fieldName };
		}
	}).filter(item => !!item);

	return (
		<section className={styles.aboutAuthorSection}>
			<div className={styles.aboutAuthorWrapper}>
				<div className={styles.leftSide}>
					{author.image && <img className={styles.authorImage} src={author.image} alt="author"/>}
					<h3 className={styles.authorName}>{author.name || author.first_name + " " + author.last_name}</h3>
				</div>
				<div className={styles.rightSide}>
					<h4 className={styles.h4}>O autoru</h4>
					<p className={styles.authorInfo}>{author.description}</p>
					<div className={styles.socialMediaLinks}>
						{socialLinks.map((link, index) => (
							<a className={styles.socialMediaLink} key={index} href={link.socialMediaURL}>
								<img src={link.iconURL} alt={link.imgAlt}/>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
