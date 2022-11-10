import styles from "./image.tag.module.scss";

export function ImageTag({ tag }) {
	return (
		<span className={styles.imageTag} style={tag.style}>
			{tag.name}
		</span>
	);
}
