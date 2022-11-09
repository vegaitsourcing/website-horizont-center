import React from "react";
import { LayoutDefault } from "layouts";
import { About } from "components/about/about";
import { NextSeo } from "next-seo";
import { ENV } from "config/env";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

const Home = (props) => {
	const {
		pathname,
		data: { title, metaDescription, },
	} = props;

	const SEOS = {
		title: title,
		description: metaDescription,
		canonical: `${BASE_URL}${pathname}`,
		openGraph: [
			{
				url: BASE_URL,
				images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
				site_name: AUTHOR,
			},
		],
		...BASE_SEO,
	};

	return (
		<>
			<NextSeo {...SEOS} />
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
