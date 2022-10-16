import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import { PaymentSlip } from "components";

import ENV from "config/env";

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
        <PaymentSlip
          uplatilacValue="Mirko"
          svrhaUplateValue="testiranje"
          primalacValue="Rajko"
          sifraPlacanjaValue="289"
          valutaValue="RSD"
          iznosValue="2000"
          racunaPrimaocaValue="912837928379123871923"
          modelValue="nesto"
          pozivNaBrojValue="nesto"
        />
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
