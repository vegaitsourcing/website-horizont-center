import styles from "./resource.card.module.scss";
import Link from "next/link";
import { hex2rgba } from "../../utils";
import { LongButton } from "../../shared-components";

/**
 * @param resourceURL: local path string to the specific resource details page
 * @param image: sting (URL)
 * @param tags: array with objects that have "name" (string) and "color" (string)
 * properties - "color" should be a hex color code (e.g. #FFFFFF)
 * @param title: string
 * @param teaserText: string
 * @param date: string
 * @returns {JSX.Element}
 */
export const ResourceCard = ({ resourceURL, image, tags, title, teaserText, date }) => {

	const preparedTags = tags.map(tag => ({
		...tag,
		style: {
			color: tag.color,
			backgroundColor: hex2rgba(tag.color, 0.2),
		},
	}));

	return (
		<div className={styles.card} key={resourceURL}>
			<img src={image} alt="blog image" className={styles.image}/>
			<div className={styles.description}>
				<div className={styles.info}>
					{preparedTags.map((tag) => (
						<span key={tag.name} style={tag.style} className={styles.label}>
              {tag.name}
            </span>
					))}
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
