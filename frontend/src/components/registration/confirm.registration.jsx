import styles from "./registration.form.module.scss";

export const ConfirmRegistration = ({ email }) => {
  return (
    <div className={styles.createAccount}>
      <div className={styles.createAccountBox}>
        <div className={styles.createAccountHeader}>
          <h4 className={styles.h4}>Vaš profil je uspešno kreiran</h4>
        </div>
        <div className={[styles.createAccountBody, styles.alignCenter].join(" ")}>
          <p>
            Kako biste bili u mogućnosti da se prijavite, morate prvo da aktivirate profil koji ste upravo kreirali.
            E-mail za aktivaciju profila je poslat na vašu e-mail adresu <span className={styles.email}>{email}</span>.
            Molimo Vas da ispratite uputsva u tom e-mailu kako biste aktivirali profil.
          </p>
        </div>
        <div className={styles.createAccountFooter}></div>
      </div>
    </div>
  );
};
