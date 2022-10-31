import styles from "./donation.card.module.scss";
import { LongButton } from "../../shared-components";

export const DonationCard = ({ id, image, title, description, date, onClick, financialInfo }) => {
	const donationTypeConf = {
		style: [styles.type, financialInfo ? styles.financialType : styles.goodsType].join(' '),
		label: financialInfo ? "Finansijska pomoć" : "Robna pomoć"
	}

	return (
		<li className={styles.cardItem} key={id}>
			<img src={image} alt="" className={styles.image} />
			<div className={styles.content}>
				<div>
					<span className={donationTypeConf.style}>{donationTypeConf.label}</span>
				</div>
				<div className={styles.description}>
					<h4 className={styles.h4}>{title}</h4>
					<p className={styles.p1}>{description.substring(0, 200)}{description.length > 200 && "..."}</p>
					<p className={styles.date}>{new Date(date).toLocaleDateString("nl")}</p>
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
