import React from "react";
import styles from "./steps.section.module.scss";

export function StepsSection({
	title,
	description,
	steps,
	withStepNumbers = false,
	withBackground = false
}) {

	function SectionSteps() {
		return (
			<ul className={styles.steps}>
				{steps.map((step, index) => (
					<li key={index}>
						{withStepNumbers && (<div className={styles.stepNumber}>0{index + 1}</div>)}
						<h3 className={styles.h4}>{step.title}</h3>
						<p className={styles.p1}>{step.text}</p>
					</li>
				))}
			</ul>
		);
	}

	function SectionHeader() {
		return (
			<div className={styles.header}>
				{title && <h2 className={styles.h2}>{title}</h2>}
				{description && <p className={styles.p1}>{description}</p>}
			</div>
		);
	}

	const sectionClasses = [styles.stepsSection, withBackground ? styles.lightBlueBackground : ""].join(" ");

	return (
		<section className={sectionClasses}>
			{(title || description) && <SectionHeader/>}
			<SectionSteps/>
		</section>
	);
}
