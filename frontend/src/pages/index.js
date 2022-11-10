import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { About } from "components";
import { prepareSEO } from "../utils";

const Home = (props) => {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				<About/>
			</LayoutDefault>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return { props: { data: {}, pathname: resolvedUrl } };
}

export default Home;
