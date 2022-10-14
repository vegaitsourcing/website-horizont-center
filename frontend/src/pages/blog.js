import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";

import { LongButton, ShortButton } from "shared-components";

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

  // Primer callback funkcije za dugmice
  // const alert = () => {
  //   alert("nest");
  // };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <LongButton value="SAZNAJ VIŠE" type="border" />
        <LongButton value="SAZNAJ VIŠE" type="filled" />
        <ShortButton onclick={alert} type="next" />
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
