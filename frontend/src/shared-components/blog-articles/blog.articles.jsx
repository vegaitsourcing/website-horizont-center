import React from "react";

import styles from "./blog.articles.module.scss";

export const BlogArticles = ({ articles }) => {
  const showVideo = (src) => {
    if (src) {
      var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
      if (isYoutube) {
        return (
          <iframe
            src={src.replace("watch?v=", "embed/")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        );
      }
    }
    return <video src={src} alt={article.title} type="video/mp4" />;
  };

  return (
    <section className={styles.singleBlogMain}>
      {articles.map((article, index) => (
        <article key={index} className={styles.singleBlogMainArticle}>
          <h2 className={styles.h2}>{article.title}</h2>
          <p className={styles.p1}>{article.description}</p>
          {article.media_type == "image" ? (
            <img src={article.media_url} alt={article.title} />
          ) : (
            showVideo(article.media_url)
          )}
        </article>
      ))}
    </section>
  );
};
