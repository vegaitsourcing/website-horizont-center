import React from "react";

import styles from "./about.author.module.scss";

export const AboutAuthor = ({ blog, type }) => {
  let socialLinks = [
    blog.author.facebook_url != null
      ? {
          url: blog.author.facebook_url,
          iconPath: "/images/facebookIconAboutDetails.svg",
        }
      : null,
    blog.author.instagram_url != null
      ? {
          url: blog.author.instagram_url,
          iconPath: "/images/instagramIconAboutDetails.svg",
        }
      : null,
  ];

  return (
    <section className={styles.aboutDetails}>
      <div className={styles.aboutMain}>
        <div className={styles.authorName}>
          <img src={blog.author.image} alt="" />
          <h3 className={styles.aboutHeading}>{blog.author.first_name + " " + blog.author.last_name}</h3>
        </div>
        <div className={styles.authorAbout}>
          <h3 className={styles.aboutHeading}>
            {type === "author" && "O autoru"}
            {type === "company" && "O kompaniji"}
          </h3>
          <p className={styles.aboutParagraph}>{blog.author.description}</p>
          <ul className={styles.aboutSocialLinks}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url}>
                <img src={link.iconPath} alt="" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
