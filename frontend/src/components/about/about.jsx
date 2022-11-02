import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import { LongButton, PageHeader } from "../../shared-components";
import Link from "next/link";

function FirstSection() {
	return (
		<section className={styles.narrowSection}>
			<div className={styles.leftSide}>
				<h2 className={styles.h2}>Adipiscing platea aliquet</h2>
				<p className={styles.p1}>
					Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
				</p>
			</div>
			<div className={styles.rightSide}>
				<Image src="/images/contact_page1.png" width={640} height={550} alt="about us"/>
			</div>
		</section>
	);
}

function SecondSection() {
	return (
		<section className={styles.wideSection}>
			<a className={styles.imageLink} href={"/caregivers"}>
				<p className={styles.upperText}>NEGOVATELJI</p>
				<img className={styles.bgImage} src="/images/contact_page1.png" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>Title</p>
					<p className={styles.description}>
						Felis lectus tortor massa a eget viverra integer faucibus adipiscing.
						Faucibus nunc, auctor arcu magna cursu.
					</p>
				</div>
				<img className={styles.goToIcon} src="/goToIcon.svg" alt="go to"/>
			</a>
			<a className={styles.imageLink} href={"/beneficiaries"}>
				<p className={styles.upperText}>NEGOVANI</p>
				<img className={styles.bgImage} src="/images/contact_page1.png" alt="about us"/>
				<div className={styles.bottomText}>
					<p className={styles.title}>Title</p>
					<p className={styles.description}>
						Felis lectus tortor massa a eget viverra integer faucibus adipiscing.
						Faucibus nunc, auctor arcu magna cursu.
					</p>
				</div>
				<img className={styles.goToIcon} src="/goToIcon.svg" alt="go to"/>
			</a>
		</section>
	);
}

function ThirdSection() {
	return (
		<section className={styles.centeredNarrowSection}>
			<h3 className={styles.h2}>Sekcija za kontakt stranicu</h3>
			<p className={styles.description}>
				Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
				ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
				tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
			</p>
			<div className={styles.buttonWrapper}>
				<Link href="/blogs">
					<LongButton value="Saznaj više"/>
				</Link>
			</div>
		</section>
	);
}

function ForthSection() {
	return (
		<section className={styles.narrowSection}>
			<div className={styles.leftSide}>
				<Image src="/images/contact_page1.png" width={640} height={550} alt="about us"/>
			</div>
			<div className={styles.rightSide}>
				<h2 className={styles.h2}>Adipiscing platea aliquet</h2>
				<p className={styles.p1}>
					Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.
				</p>
			</div>
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
			<FirstSection/>
			<SecondSection/>
			<ThirdSection/>
			<ForthSection/>
		</div>
	);
};
