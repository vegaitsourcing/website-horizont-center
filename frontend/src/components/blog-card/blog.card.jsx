import styles from "./blog.card.module.scss";
import Link from "next/link";
import { hex2rgba } from "../../utils";
import { LongButton } from "../../shared-components";

export const BlogCard = ({ blog }) => {
  return (
    <li className={styles.cardItem} key={blog.id}>
      <img src={blog.image} alt="blog image" className={styles.image} />
      <div className={styles.description}>
        <div className={styles.blogInfo}>
          {blog.categories.map((category) => (
            <span
              key={category.name}
              style={{ color: category.color, backgroundColor: hex2rgba(category.color, 0.2) }}
              className={styles.category}
            >
              {category.name}
            </span>
          ))}
          <div className={styles.description}>
            <h4 className={styles.blogTitle}>{blog.title}</h4>
            <p className={styles.teaserText}>
              {blog.description.substring(0, 200)}
              {blog.description.length > 200 && "..."}
            </p>
            <p className={styles.date}>{new Date(blog.created).toLocaleDateString("nl")}</p>
          </div>
        </div>
        <div className={styles.buttonRow}>
          <Link href={"/blogs/" + blog.id} passHref>
            <LongButton value="Saznaj više" type="filled" />
          </Link>
        </div>
      </div>
    </li>
  );
};
