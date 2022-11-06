import styles from "./section.with.image.module.scss";

export function SectionWithImage({ imageSrc, title, paragraph, paragraphItems, hasImageFirst = false }) {

	function TextSide({ className }) {
		return (
			<div className={className}>
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

	function ImageSide({ className }) {
		return (
			<div className={className}>
				<img className={styles.image} src={imageSrc} alt="section image"/>
			</div>
		);
	}

	return (
		<section className={styles.narrowSection}>
			{hasImageFirst ? <ImageSide className={styles.leftSide}/> : <TextSide className={styles.leftSide}/>}
			{hasImageFirst ? <TextSide className={styles.rightSide}/> : <ImageSide className={styles.rightSide}/>}
		</section>
	);
}
