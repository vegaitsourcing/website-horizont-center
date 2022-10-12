import { Header } from "domain/App";
import { Footer } from "domain/App";

import styles from "./default.layout.module.scss";

export const LayoutDefault = ({ pathname, children }) => {
  return (
    <>
      <Header pathname={pathname} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
