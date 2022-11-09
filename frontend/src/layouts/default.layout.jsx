import { useCallback, useState } from "react";
import { Footer, Header } from "components";

import styles from "./default.layout.module.scss";

export const LayoutDefault = ({ pathname, children }) => {
  const [hasOpenedMobileMenu, setHasOpenedMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setHasOpenedMobileMenu(!hasOpenedMobileMenu);
  }, [hasOpenedMobileMenu]);

  return (
    <>
      <Header pathname={pathname} hasOpenedMobileMenu={hasOpenedMobileMenu} onToggleMobileMenu={toggleMobileMenu} />
      <main className={[styles.main, hasOpenedMobileMenu ? styles.hidden : ""].join(" ")}>{children}</main>
      <Footer isHidden={hasOpenedMobileMenu} />
    </>
  );
};
