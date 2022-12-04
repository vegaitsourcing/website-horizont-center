import styles from "./section.with.image.module.scss";

export function SectionWithImage ({ imageSrc, title, paragraphs, paragraphItems, hasImageFirst = false }) {

	function TextSide ({ className }) {
		return (
			<div className={className}>
				{title && <h2 className={styles.title}>{title}</h2>}
				<div className={styles.p1}>{paragraphs}</div>
				{paragraphItems && (
					<ul className={styles.paragraphItems}>
						{paragraphItems.map((item, index) => (<li key={index}>{item}</li>))}
					</ul>
				)}
			</div>
		);
	}

	function ImageSide ({ className }) {
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
