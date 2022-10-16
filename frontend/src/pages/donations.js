import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";

import { SingleBlog } from "components";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Contact(props) {
  const {
    pathname,
    data: { title, metaTitle, description, metaDescription, header, slug, block_top = {} },
  } = props;

  const SEOS = {
    title,
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
        {/* Stranica donacije... */}
        <SingleBlog />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/contact`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Contact;
