import React from "react";
import styles from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../select/select";

export const Input = (props) => {
	const {
		id,
		name,
		type,
		placeholder,
		inputValue,
		onChange,
		withSearchIcon = false
	} = props;

	if (type === "dropdown") return <Select {...props}/>

	return (
		<div className={styles.fieldWrapper}>
			<input
				value={inputValue}
				type={type}
				name={name}
				id={id}
				onChange={event => onChange(event.currentTarget.value)}
				placeholder={placeholder}
				className={[styles.field, styles.input].join(" ")}
			/>
			{withSearchIcon && <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>}
		</div>
	);
};
