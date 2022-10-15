import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";

<<<<<<< HEAD
import { LongButton, ShortButton, Input } from "shared-components";

import {Blog} from 'components';

=======
>>>>>>> 51b5a3adee7ba7425b1c36725c62bf0ca5aeb81c
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
        <Blog />
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
