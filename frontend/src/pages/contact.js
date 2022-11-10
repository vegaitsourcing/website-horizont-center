import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { ContactPageContent } from "components";
import { prepareSEO } from "../utils";

function Contact(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<ContactPageContent/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return { props: { pathname: resolvedUrl } };
}

export default Contact;
