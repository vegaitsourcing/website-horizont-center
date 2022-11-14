import React from "react";
import styles from "./donation.details.module.scss";

function PaymentSlipItem({ label, value }) {
	return (
		<div className={styles.paymentSlipItem}>
			<span className={styles.paymentSlipItemLabel}>{label}</span>
			<span className={styles.paymentSlipItemValue}>{value || ""}</span>
		</div>
	);
}

function FinancialInfo({ financialInfo }) {

	return (
		<div className={styles.rightSide}>
			<h3 className={styles.paymentSlipTitle}>Informacije za uplatu</h3>
			<PaymentSlipItem label="Svrha uplate:" value={financialInfo.payment_purpose}/>
			<PaymentSlipItem label="Primalac:" value={financialInfo.payment_receiver}/>
			<PaymentSlipItem label="Šifra plaćanja:" value={financialInfo.payment_code}/>
			<PaymentSlipItem label="Račun primaoca:" value={financialInfo.payment_bank_account}/>
			<PaymentSlipItem label="Model:" value={financialInfo.payment_model}/>
			<PaymentSlipItem label="Poziv na broj:" value={financialInfo.payment_reference_number}/>
		</div>
	);
}

export const DonationDetails = ({ donation }) => {
	const shouldShowFinancialInfo = donation.is_active && donation.financial_info

	return (
		<>
			<h2 className={styles.h2}>{donation.subtitle}</h2>
			<div className={styles.donationDetails}>
				<div className={shouldShowFinancialInfo ? styles.leftSide: styles.leftSideOnly}>
					<h3 className={styles.leftSideTitle}>Opšte informacije</h3>
					<div className={styles.donationTypeTag}>
						{donation.financial_info ? "Finansijska pomoć" : "Robna pomoć"}
					</div>
					<p className={styles.p1}>{donation.description}</p>
				</div>
				{shouldShowFinancialInfo && <FinancialInfo financialInfo={donation.financial_info}/>}
			</div>
			{/*	TODO: ADD Payment Slip LINK */}
		</>
	);
};
