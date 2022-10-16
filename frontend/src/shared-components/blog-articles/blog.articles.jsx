import React from "react";

import styles from "./blog.articles.module.scss";

export const BlogArticles = ({ articles }) => {
  return (
    <section className={styles.singleBlogMain}>
      {articles.map((article) => (
        <article className={styles.singleBlogMainArticle}>
          <h2 className={styles.h2}>{article.title}</h2>
          <p className={styles.p1}>{article.text}</p>
          {article.image && <img src={article.image} alt="" />}
        </article>
      ))}
    </section>
  );
};
