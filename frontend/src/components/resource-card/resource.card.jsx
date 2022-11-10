import styles from "./resource.card.module.scss";
import Link from "next/link";
import { ImageTag, LongButton } from "../../shared-components";

/**
 * @param resourceURL: local path string to the specific resource details page
 * @param image: sting (URL)
 * @param imageTag: object with "name" (string) and "style" (object) properties
 * @param secondaryTags: array with objects with "name" (string) and "style" (object)
 * @param title: string
 * @param teaserText: string
 * @param date: string
 * @returns {JSX.Element}
 */
export const ResourceCard = ({ resourceURL, image, imageTag, secondaryTags = [], title, teaserText, date }) => {

	function SecondaryTags() {
		return (
			secondaryTags.map((tag) => (
				<span key={tag.name} style={tag.style} className={styles.secondaryTag}>
					{tag.name}
				</span>
			))
		);
	}

	return (
		<div className={styles.card} key={resourceURL}>
			{imageTag && <ImageTag tag={imageTag}/>}
			<img src={image} alt="blog image" className={styles.image}/>
			<div className={styles.description}>
				<div className={styles.info}>
					<SecondaryTags/>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.teaserText}>
						{teaserText.substring(0, 200)}{teaserText.length > 200 && "..."}
					</p>
					<p className={styles.date}>{new Date(date).toLocaleDateString("nl")}</p>
				</div>
				<div className={styles.buttonRow}>
					<Link href={resourceURL} passHref>
						<LongButton value="Saznaj više" type="filled"/>
					</Link>
				</div>
			</div>
		</div>
	);
};
