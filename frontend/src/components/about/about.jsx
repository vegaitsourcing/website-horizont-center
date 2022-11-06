import React from "react";
import styles from "./about.module.scss";
import { CenteredSection, PageHeader, SectionWithImage } from "../../shared-components";

function ImageLinksSection() {
	return (
		<section className={styles.imageLinksSection}>
			<a className={styles.imageLink} href={"/caregivers"}>
				<p className={styles.upperText}>NEGOVATELJI</p>
				<img className={styles.bgImage} src="/images/static.3.jpg" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>Title</p>
					<p className={styles.description}>
						Felis lectus tortor massa a eget viverra integer faucibus adipiscing.
						Faucibus nunc, auctor arcu magna cursu.
					</p>
				</div>
				<img className={styles.ctaIcon} src="/images/cta.svg" alt="go to"/>
			</a>
			<a className={styles.imageLink} href={"/beneficiaries"}>
				<p className={styles.upperText}>NEGOVANI</p>
				<img className={styles.bgImage} src="/images/static.5.jpg" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>Title</p>
					<p className={styles.description}>
						Felis lectus tortor massa a eget viverra integer faucibus adipiscing.
						Faucibus nunc, auctor arcu magna cursu.
					</p>
				</div>
				<img className={styles.ctaIcon} src="/images/cta.svg" alt="go to"/>
			</a>
		</section>
	);
}

export const About = () => {
	return (
		<div className={styles.aboutContent}>
			<PageHeader
				title={"O nama"}
				text={
					"Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
					"Faucibus nunc, auctor arcu magna cursus."
				}
			/>
			<SectionWithImage
				imageSrc="/images/static.1.jpg"
				title="Adipiscing platea aliquet"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.`
				}
			/>
			<ImageLinksSection/>
			<CenteredSection
				withBackground
				title="Centered section title"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nuncdfadfasf.`
				}
				buttonHref="/"
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.2.jpg"
				title="Adipiscing platea aliquet"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nuncdfadfasf.`
				}
			/>
		</div>
	);
};
