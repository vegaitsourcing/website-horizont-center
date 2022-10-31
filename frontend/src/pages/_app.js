// global styles
import "styles/main.scss";
import "react-datepicker/dist/react-datepicker.css";

// seos
import { DefaultSeo, LocalBusinessJsonLd, SocialProfileJsonLd } from "next-seo";

import SEO from "../../next-seo.config";

const { metas, microdatas } = SEO;

export default function Application({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...metas} />
      <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
      {/* <SocialProfileJsonLd {...microdatas.SocialProfileJsonLd} /> */}
      <Component {...pageProps} />
    </>
  );
}
