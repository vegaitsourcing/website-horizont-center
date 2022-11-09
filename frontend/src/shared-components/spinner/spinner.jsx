import styles from "./spinner.module.scss";

export const Spinner = function () {
  return (
    <>
      <div className={styles.spinnerBackground}></div>
      <div className={styles.loadingContentLocation}></div>
      <div className={styles.loader}></div>
    </>
  );
};
