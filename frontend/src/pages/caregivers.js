import { NextSeo } from "next-seo";
import caregiversService from "./api/caregiversService";
import { LayoutDefault } from "layouts";

import env from "config/env";
import CaregiversList from "components/caregivers/caregiversList";
import { useState } from "react";

function About(props) {
  const {
    pathname,
    data: {
      title,
      results,
      pageNumber,
      pageSize,
      total,
      metaTitle,
      description,
      metaDescription,
      header,
      slug,
      block_top,
    },
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
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(total / pageSize));
  function changeNumberOfPages(totalRecords, pageSize) {
    setNumberOfPages(Math.ceil(totalRecords / pageSize));
  }
  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <CaregiversList
          intialCaregivers={results}
          pathname={pathname}
          activepageNumber={activepageNumber}
        ></CaregiversList>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  var responseData = await caregiversService.getAllCaregivers(process.env.PROFILE_PAGE_SIZE, 1);
  return { props: { data: responseData, pathname: resolvedUrl } };
}

export default About;
