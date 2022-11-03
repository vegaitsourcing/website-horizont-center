import React from "react";
import styles from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../select/select";

export const Input = (props) => {
	const { id, name, type, placeholder, inputValue, onChange, withSearchIcon = false, className = "" } = props;

	const classes = [styles.fieldWrapper, className].join(" ");

	if (type === "dropdown") return <Select {...props} />;

	return (
		<div className={classes}>
			<input
				value={inputValue}
				type={type}
				name={name}
				id={id}
				onChange={(event) => onChange && onChange(event.currentTarget.value)}
				placeholder={placeholder}
				className={[styles.field, styles.input].join(" ")}
			/>
			{withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>}
		</div>
	);
};
