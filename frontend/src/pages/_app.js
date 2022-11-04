// global styles
import "styles/main.scss";

// seos
import { DefaultSeo, LocalBusinessJsonLd, SocialProfileJsonLd } from "next-seo";

import SEO from "../../next-seo.config";
import Head from "next/head";

const { metas, microdatas } = SEO;

export default function Application({ Component, pageProps }) {
  return (
    <>
      <Head ><link rel="icon" href="caregivers_icon.svg" type="image/x-icon" /></Head>
      <DefaultSeo {...metas} />
      <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
      {/* <SocialProfileJsonLd {...microdatas.SocialProfileJsonLd} /> */}
      <Component {...pageProps} />
    </>
  );
}
