import styles from "./field.label.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export function FieldLabel({ label, required, infoText }) {
	return (
		<label className={styles.fieldLabel}>
			{infoText && (
				<div className={styles.tooltip}>
					<FontAwesomeIcon icon={faInfoCircle} className={styles.infoIcon}/>
					<span className={styles.tooltiptext}>{infoText}</span>
				</div>
			)}
			{label}
			{required && <span className={styles.requiredSymbol}>*</span>}
		</label>
	);
}
