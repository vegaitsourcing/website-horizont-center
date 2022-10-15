import styles from "./card.module.scss";
import { LongButton } from "../long-button/long.button";

export const Card = ({ image, categories, title, description, date, onClick }) => {
  return (
    <li className={styles.cardItem}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.content}>
        <div>
          {categories.map((category) => (
            <span className={styles.category}>{category.name}</span>
          ))}
        </div>
        <div className={styles.description}>
          <h4 className={styles.h4}>{title}</h4>
          <p className={styles.p1}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.button}>
          <LongButton
            value="Saznaj više"
            type="filled"
            onclick={onClick}
            style={{ marginTop: "16px", display: "inline-flex" }}
          />
        </div>
      </div>
    </li>
  );
};
