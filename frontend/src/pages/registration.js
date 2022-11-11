import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { RegistrationForm } from "components";
import { prepareSEO } from "../utils";

function Registration(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<RegistrationForm/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return { props: { data: {}, pathname: resolvedUrl } };
}

export default Registration;
