import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";
import ENV from "config/env";
import beneficiariesService from "./api/beneficiariesService";
import BeneficiariesList from "components/beneficiaries/beneficiariesList";
import { useState } from "react";
import ProfileFilters from "shared-components/profile-filters/profile.filters";
import { Pager } from "shared-components";
import ABOUT from "config/data/about";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function GettingStarted(props) {
  const {
    pathname,
    data: {
      title,
      items,
      pageSize,
      pagination,
      metaTitle,
      description,
      metaDescription,
      slug,
      services,
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
  const { total_pages, total_items } = pagination;
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(total_pages);
  const [textFilter, settextFilter] = useState("");
  const [cityFilter, setcityFilter] = useState("");
  const [genderFilter, setgenderFilter] = useState("");
  function changeNumberOfPages(totalRecords, pageSize) {
    setNumberOfPages(Math.ceil(totalRecords / pageSize));
  }
  let searchTimeout;
  function changeCityFilter(city) {
    setcityFilter(city);
  }
  function changeTextFilter(text) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => settextFilter(text), 500);
  }
  function changeGenderFilter(gender) {
    setgenderFilter(gender);
  }
  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault>
        <ProfileFilters
          changeCityFilterHandler={changeCityFilter}
          changeGenderFilterHandler={changeGenderFilter}
          changeTextFilterHandler={changeTextFilter}
        ></ProfileFilters>
        <BeneficiariesList
          pageSize={pageSize}
          changeNumberOfPages={changeNumberOfPages}
          cityFilter={cityFilter}
          genderFilter={genderFilter}
          textFilter={textFilter}
          intialBeneficiaries={items}
          pathname={pathname}
          activePageNumber={activepageNumber}
        ></BeneficiariesList>
        <Pager
          changePage={setactivepageNumber}
          numberOfPages={numberOfPages}
          pageNum={activepageNumber}
        ></Pager>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const responseData = await beneficiariesService.getAllMockBeneficiaries(process.env.PROFILE_PAGE_SIZE, 1, "", "", "");
  return {
    props: {
      data: { ...responseData.data, ...{ pageSize: process.env.PROFILE_PAGE_SIZE }, ...ABOUT },
      pathname: resolvedUrl,
    },
  };
}

export default GettingStarted;
