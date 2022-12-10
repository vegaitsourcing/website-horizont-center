import styles from "./centered.section.module.scss";
import Link from "next/link";
import { LongButton } from "../../long-button/long.button";
import React from "react";

export function CenteredSection ({
	title,
	paragraph,
	buttonHref,
	buttonLabel = "Saznaj više",
	withBackground = false,
}) {
	const sectionClasses = [styles.centeredSection, withBackground ? styles.lightBlueBackground : ""].join(" ");

	return (
		<section className={sectionClasses}>
			<h3 className={styles.h2}>{title}</h3>
			<div className={styles.description}>{paragraph}</div>
			{buttonHref && (
				<div className={styles.buttonWrapper}>
					<Link href={buttonHref}>
						<div>
							<LongButton value={buttonLabel}/>
						</div>
					</Link>
				</div>
			)}
		</section>
	);
}
