import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import ABOUT from "config/data/about";
import ENV from "config/env";
import { DonationList } from "components/donation-list/donationList";
import { useState } from "react";
import DonationService from "./api/donationsService";
import PostTitle from "shared-components/post-title/post-title";
import PostFilters from "shared-components/post-filters/post-filters";
import { Pager } from "shared-components";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Donations(props) {
  const {
    pathname,
    data: {
      title,
      items,
      pagination,
      pageSize,
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
  const { total_items, total_pages } = pagination;
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(total_pages);
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
        />
        <PostFilters changeFilterText={changeTextFilter} changeFilterType={changeFilterType} />
        <DonationList
          pageSize={pageSize}
          activePageNumber={activepageNumber}
          changeNumberOfPages={changeNumberOfPages}
          filterText={filterText}
          filterType={filterType}
          donations={items}
        />
        <Pager
          changePage={setactivepageNumber}
          numberOfPages={numberOfPages}
          pageNum={activepageNumber}
        />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const responseData = await DonationService.getDonations(process.env.POST_PAGE_SIZE, 1, "", "");
  return { props: { data: { ...responseData.data, ...{ pageSize: process.env.POST_PAGE_SIZE }, ...ABOUT }, pathname: resolvedUrl } };
}

export default Donations;
