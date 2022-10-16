import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";
import ENV from "config/env";
import beneficiariesService from "./api/beneficiariesService";
import BeneficiariesList from "components/beneficiaries/beneficiariesList";
import { useState } from "react";
import ProfileFilters from "shared-components/profile-filters/profile-filters";
import { CardPagination } from "shared-components";
import ABOUT from "config/data/ABOUT";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function GettingStarted(props) {
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
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(total / pageSize));
  const [textFilter, settextFilter] = useState("");
  const [cityFilter, setcityFilter] = useState("");
  const [genderFilter, setgenderFilter] = useState("");
  function changeNumberOfPages(totalRecords, pageSize) {
    setNumberOfPages(Math.ceil(totalRecords / pageSize));
  }
  let searchTimeout;
  function changeCityFilter(city) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => setcityFilter(city), 500);
  }
  function changeTextFilter(text) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => settextFilter(text), 500);
  }
  function changeGenderFilter(gender) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => setgenderFilter(gender), 500);
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
          changeNumberOfPages={changeNumberOfPages}
          cityFilter={cityFilter}
          genderFilter={genderFilter}
          textFilter={textFilter}
          intialBeneficiaries={results}
          pathname={pathname}
          activePageNumber={activepageNumber}
        ></BeneficiariesList>
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
  const responseData = await beneficiariesService.getAllBeneficiaries(process.env.PROFILE_PAGE_SIZE, 1);
  return { props: { data: { ...responseData.data, ...ABOUT }, pathname: resolvedUrl } };
}

export default GettingStarted;
