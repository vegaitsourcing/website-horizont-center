import React from "react";
import styles from "./about.module.scss";
import { CenteredSection, PageHeader, SectionWithImage } from "../../shared-components";
import { ImageLinksSection } from "../image-links-section/image.links.section";
import { CountersSection } from "../counters-section/counters.section";
import { OrganizationPartnersSection } from "../organization-partners-section/organization.partners.section";

export const About = () => {

	return (
		<div className={styles.aboutContent}>
			<PageHeader
				withBackground
				title={"Zajednica"}
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.7.jpg"
				title="Adipiscing platea aliquet"
				paragraphs={
					<>
						<p>Zajednica brižnih</p>
						<p>Pomoć i nega za bližnje</p>
						<p>Povežite se - Osnažite se - Informišite se</p>
						<p>Pokrenite kampanju podrške</p>
					</>
				}
			/>
			<ImageLinksSection/>
			<SectionWithImage
				imageSrc="/images/static.1.jpg"
				paragraphs={
					<>
						<p className={styles.bold}>Vizija</p>
						<p>
							<span className={[styles.bold, styles.italic].join(" ")}>
								Društvo koje ceni, podržava i osnažuje porodične negovatelje
							</span> – željena je budućnost Centra HORIZONT 21 i platforme NEGOVATELJI.RS
						</p>
						<p className={styles.bold}>Misija</p>
						<p>
							Platforma NEGOVETELJI.RS podržava i osnažuje porodične negovatelje, naročito žene, da se razviju i
							napreduju kod kuće, na poslu i u životu, povezujući u zajednicu pojedince, institucije, civilno društvo i
							kompanije spremne da doprinesu dobrobiti negovatelja i osoba o kojima se brinu.
						</p>
					</>
				}
			/>
			<CenteredSection
				withBackground
				title="Zajednica negovatelja"
				paragraph={
					<>
						<p>
							Negovatelji.rs je platforma za povezivanje, osnaživanje i podršku svima koji neguju
							bližnje, nemoćne, zavisne osobe… za sve kojima je potrebna pomoć za kućnu negu
							bolesnika, dece, supružnika, roditelja, prijatelja…
						</p>
						<p>
							Negovatelji.rs je mesto i za sve koji žele da se angažuju, obrazuju ili uključe u
							podršku osobama u brizi za bližnje.
						</p>
						<p>
							Pojedinaci, organizacije, institucije, kompanije i mediji koji žele da podrže
							negovatelje i osobe o kojima brinu, takođe su deo naše zajednice i dobrodišlli ste.
						</p>
					</>
				}
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.2.jpg"
				title={"Zajednica negovatelja okupljena na platformi NEGOVATELJI.RS posotoji, jer želimo da:"}
				paragraphs={
					<>
						<p>Podižemo pažnju javnosti na:</p>
						<ul>
							<li>
								neplaćeni rad neformalnih negovatelja/ica, ali i potrebnu brigu za očuvanje
								i njihovog zdravlja
							</li>
							<li>
								negovatelje/negovateljice: srodnike, komšije, prijatelje, decu… koji brinu o
								svojim bližnjima, bez stručnih znanja, sistemske podrške i uz malo razumevanja
								i okoline, a često i onih o kojima brinu, za njihove probleme, pritiske i potrebe
							</li>
							<li>
								mogućnosti koje donosioci odluka mogu da učine i olakšaju život i rad neformalnih
								negovateljima
							</li>
						</ul>
					</>
				}
			/>
			<CountersSection/>
			<OrganizationPartnersSection/>
		</div>
	);
};
