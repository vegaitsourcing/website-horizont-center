import styles from "./section.with.image.module.scss";

export function SectionWithImage({ imageSrc, title, paragraph, paragraphItems, hasImageFirst = false }) {

	function TextSide({ isFirst = true }) {
		return (
			<div className={isFirst ? styles.leftSide : styles.rightSide}>
				<h2 className={styles.h2}>{title}</h2>
				<p className={styles.p1}>{paragraph}</p>
				{paragraphItems && (
					<ul className={styles.paragraphItems}>
						{paragraphItems.map((item, index) => (<li key={index}>{item}</li>))}
					</ul>
				)}
			</div>
		);
	}

	function ImageSide({ isFirst = false }) {
		return (
			<div className={isFirst ? styles.rightSide : styles.leftSide}>
				<img src={imageSrc} alt="section image"/>
			</div>
		);
	}

	return (
		<section className={styles.narrowSection}>
			{hasImageFirst ? <ImageSide/> : <TextSide/>}
			{hasImageFirst ? <TextSide/> : <ImageSide/>}
		</section>
	);
}
