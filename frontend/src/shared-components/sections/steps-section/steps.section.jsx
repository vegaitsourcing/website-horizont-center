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
		const rowItemCount = steps.length < 3 ? steps.length : 3;
		const columnGapPercentage = rowItemCount === 1 ? 0 : rowItemCount === 2 ? 10 : 5;
		const totalColumnGapPercentage = columnGapPercentage * (rowItemCount - 1);
		const stepWith = `calc((100% - ${totalColumnGapPercentage}%) / ${rowItemCount})`;
		const style = {
			gridTemplateColumns: `repeat(${rowItemCount}, ${stepWith})`,
			columnGap: `${columnGapPercentage}%`,
		};

		return (
			<div className={styles.steps} style={style}>
				{steps.map((step, index) => (
					<div className={styles.step} key={index}>
						{withStepNumbers && (<div className={styles.stepNumber}>0{index + 1}</div>)}
						<h3 className={styles.h4}>{step.title}</h3>
						<p className={styles.p1}>{step.text}</p>
					</div>
				))}
			</div>
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
			{steps && <SectionSteps/>}
		</section>
	);
}
