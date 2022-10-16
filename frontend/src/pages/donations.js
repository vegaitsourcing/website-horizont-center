import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ABOUT from "config/data/about";
import ENV from "config/env";
import { DonationsList } from "components/donationList/donationList";
import { useState } from "react";
import BlogService from "./api/blogService";
import DonationService from "./api/donationsService";
import PostTitle from "shared-components/post-title/post-title";
import PostFilters from "shared-components/post-filters/post-filters";
import { CardPagination } from "shared-components";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Contact(props) {
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
      block_top = {},
    },
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
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(total / pageSize));
  const [filterType, setfilterType] = useState("");
  const [filterText, setfilterText] = useState("");
  function changeNumberOfPages(totalRecords, pageSize) {
    setNumberOfPages(Math.ceil(totalRecords / pageSize));
  }
  let searchTimeout;
  function changeFilterType(type) {
    setfilterType(type);
  }
  function changeTextFilter(text) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => setfilterText(text), 500);
  }
  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <PostTitle
          title={"Prikupljenje donacija"}
          text={
            "Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursus "
          }
        ></PostTitle>
        <PostFilters changeFilterText={changeTextFilter} changeFilterType={changeFilterType}></PostFilters>
        <DonationsList
          activePageNumber={activepageNumber}
          changeNumberOfPages={changeNumberOfPages}
          filterText={filterText}
          filterType={filterType}
          initialDonations={results}
        ></DonationsList>
        <CardPagination
          changePage={setactivepageNumber}
          numberOfPages={numberOfPages}
          pageNum={activepageNumber}
        ></CardPagination>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const responseData = await DonationService.getAllMockDonations(process.env.POST_PAGE_SIZE, 1, "", "");
  return { props: { data: { ...responseData.data, ...ABOUT }, pathname: resolvedUrl } };
}

export default Contact;
