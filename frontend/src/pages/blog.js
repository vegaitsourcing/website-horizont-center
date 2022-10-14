import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";

import { BorderButton, Input } from "shared-components";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Service(props) {
  const {
    pathname,
    data: { title, metaTitle, description, metaDescription, slug, services, block_top = {} },
  } = props;

  const SEOS = {
    title,
    description: metaDescription,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo.png` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <BorderButton value="SAZNAJ VIŠE" type="border" />
        <Input type="text" id="vaseIme" name="vaseIme" placeholder="Unesite Vaše ime*" hasError={false} />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/service`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Service;
