import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";

const { BASE_URL = "", BASE_API_URL = "", STATIC_DIR = "", AUTHOR } = ENV;

function Documentation(props) {
  const {
    pathname,
    data: { title, metaTitle, description, metaDescription, header, slug, block_top = {} },
  } = props;

  const SEOS = {
    title,
    description: description.replace(/(<([^>]+)>)/gi, ""),
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
        site_name: AUTHOR,
      },
    ],
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault>Stranica kontakt...</LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/service`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Documentation;
