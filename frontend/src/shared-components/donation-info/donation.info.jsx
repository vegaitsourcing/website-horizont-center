import React from "react";
import { PaymentSlip } from "components";
import styles from "./donation.info.module.scss";

export const DonationInfo = ({ donation }) => {
  let financialInfo = donation.financial_info
    ? [
        { title: "Svrha uplate", value: donation.financial_info.payment_purpose },
        { title: "Primalac", value: donation.financial_info.payment_receiver },
        { title: "Šifra plaćanja", value: donation.financial_info.payment_code },
        { title: "Račun primaoca", value: donation.financial_info.payment_bank_account },
        { title: "Model", value: donation.financial_info.payment_model },
        { title: "Poziv na broj", value: donation.financial_info.payment_reference_number },
      ]
    : null;

  return (
    <div className={styles.donationBox}>
      <h2 className={styles.h2}>{donation.subtitle}</h2>
      <div className={styles.donationFlex}>
        <div className={styles.donationGeneralDescription}>
          <h3 className={styles.h4}>Opšte informacije</h3>
          <ul className={styles.categoryList}>
            <li className={styles.category}>{donation.financial_info ? "Finansijska donacija" : "Robna donacija"}</li>
          </ul>
          <p className={styles.p1}>{donation.description}</p>
        </div>
        {donation.financial_info ? (
          <div className={styles.donationInfo}>
            <h3 className={styles.h4}>Informacije za uplatu</h3>
            <ul className={styles.infoList}>
              {financialInfo.map((singleInfo) => (
                <li>
                  <span>{singleInfo.title}:</span> <span className={styles.infoValue}>{singleInfo.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {donation.financial_info ? (
        <PaymentSlip
          linkText={"Izgled uplatnice"}
          uplatilacValue={""}
          svrhaUplateValue={donation.financial_info.payment_purpose}
          primalacValue={donation.financial_info.payment_receiver}
          sifraPlacanjaValue={donation.financial_info.payment_code}
          valutaValue={""}
          iznosValue={""}
          racunaPrimaocaValue={donation.financial_info.payment_bank_account}
          modelValue={donation.financial_info.payment_model}
          pozivNaBrojValue={donation.financial_info.payment_reference_number}
        />
      ) : null}
    </div>
  );
};
