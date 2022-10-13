import { NextSeo } from "next-seo";

import { LayoutDefault } from "layouts";

import env from "config/env";

function About(props) {
  const {
    pathname,
    data: { title, metaTitle, description, metaDescription, header, slug, block_top },
  } = props;

  const disc = 4;
  const SEOS = {
    title,
    description: metaDescription.replace(/(<([^>]+)>)/gi, ""),
    canonical: `${env.BASE_URL}${pathname}`,
    openGraph: [
      {
        url: env.BASE_URL,
        images: { url: `${env.BASE_URL}${env.STATIC_DIR}logo-share.jpg` },
        site_name: env.AUTHOR,
      },
    ],
    ...env.BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>Stranica negovatelji...</LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${env.BASE_API_URL}/api/about`);
  const json = await res.json();

  return { props: { data: json, pathname: resolvedUrl } };
}

export default About;
