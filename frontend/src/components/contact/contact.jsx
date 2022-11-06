import React from "react";
import { CenteredSection, PageHeader, SectionWithImage, StepsSection } from "shared-components";
import styles from "./contact.module.scss";

export const Contact = () => {
	return (
		<div className={styles.contactPageContent}>
			<PageHeader
				withBackground
				title={"Kontakt"}
				text={
					"Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
					"Faucibus nunc, auctor arcu magna cursus."
				}
			/>
			<SectionWithImage
				imageSrc="/images/static.4.jpg"
				title="Adipiscing platea aliquet"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.`
				}
				paragraphItems={[
					"E-mail adresa: caregivers@example.com",
					"Telefon 1: +381 064 111 222",
					"Telefon 2: +381 064 333 444",
				]}
			/>
			<CenteredSection
				title="Adipiscing platea aliquet"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.`
				}
				buttonHref="/"
			/>
			<StepsSection
				withBackground
				withStepNumbers
				title="Sekcija sa koracima"
				description="Opis sekcije sa koracima, opis sekcije sa koracima, opis sekcije sa koracima, opis sekcije sa koracima"
				steps={[
					{
						title: "Prvi korak",
						text: "Opis prvog koraka. Opis prvog koraka. Opis prvog koraka. Opis prvog koraka.",
					},
					{
						title: "Drugi korak",
						text: "Opis drugog koraka. Opis drugog koraka. Opis drugog koraka. Opis drugog koraka. Opis drugog koraka. Opis drugog koraka.",
					},
					{
						title: "Treći korak",
						text: "Opis trećeg koraka. Opis trećeg koraka. Opis trećeg koraka. Opis trećeg koraka.",
					},
				]}
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.6.jpg"
				title="Adipiscing platea aliquet"
				paragraph={
					`Ornare pulvinar ullamcorper in non elit leo, duis cursus. Adipiscing non faucibus molestie in tincidunt
					ridiculus senectus. Molestie nunc et sed ut id urna, lectus nullaringilla arcu elit nisi imperdiet integer
					tortor semper venenatis. Bibendum sagittis pellentesque dignissim nunc.`
				}
			/>
		</div>
	);
};
