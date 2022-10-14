import styles from "./card.module.scss";
import Image from "next/image";
import { LongButton } from "../long-button/long.button";

export const Card = ({ category, smallDescription, description, date, onClick }) => {
  return (
    <div className={styles.cardItem}>
      <Image src="/images/rectangle55.png" alt="" width={544} height={370} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <div className={styles.description}>
          <h4 className={styles.h4}>{smallDescription}</h4>
          <p className={styles.p1}>{description}</p>
          <p className={styles.p1}>{date}</p>
        </div>

        <LongButton
          value="Saznaj više"
          type="filled"
          onclick={onClick}
          style={{ marginTop: "16px", display: "inline-flex" }}
        ></LongButton>
      </div>
    </div>
  );
};
