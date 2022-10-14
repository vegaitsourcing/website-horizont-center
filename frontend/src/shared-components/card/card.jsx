import styles from "./card.module.scss";
import Image from "next/image";
import { LongButton } from "../long-button/long.button";
export const Card = () => {
  return (
    <div className={styles.cardItem}>
      <Image src="/images/rectangle55.png" alt="" width={544} height={370} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.title}>Tempor</span>
        <div className={styles.description}>
          <h4 className={styles.h4}>Morbi sem pharetra varius porttitor amet, nulla arcu massa tempor ridiculus.</h4>
          <p className={styles.p1}>
            Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursu
          </p>
          <p className={styles.p1}>20.09.2022</p>
        </div>

        <LongButton
          value="Saznaj više"
          type="filled"
          onclick={() => {}}
          style={{ marginTop: "16px", display: "inline-flex" }}
        ></LongButton>
      </div>
    </div>
  );
};
