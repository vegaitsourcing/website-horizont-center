import { NextSeo } from "next-seo";
import caregiversService from "./api/caregiversService";
import { LayoutDefault } from "layouts";

import env from "config/env";
import CaregiversList from "components/caregivers/caregiversList";
import { useState } from "react";
import { CardPagination } from "shared-components";
import ProfileFilters from "shared-components/profile-filters/profile-filters";
import ABOUT from "config/data/about";
function About(props) {
  const {
    pathname,
    data: { title, items, pageSize, pagination, metaTitle, description, metaDescription, header, slug, block_top },
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
  const { total_pages, total_items } = pagination;
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(total_pages);
  const [textFilter, settextFilter] = useState("");
  const [cityFilter, setcityFilter] = useState("");
  const [genderFilter, setgenderFilter] = useState("");
  function changeNumberOfPages(totalRecords, pageSize) {
    var numberOfPages = Math.ceil(totalRecords / pageSize);
    setNumberOfPages(numberOfPages);
    numberOfPages < activepageNumber && setactivepageNumber(1);
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
      <LayoutDefault pathname={pathname}>
        <ProfileFilters
          changeCityFilterHandler={changeCityFilter}
          changeTextFilterHandler={changeTextFilter}
          changeGenderFilterHandler={changeGenderFilter}
        ></ProfileFilters>
        <CaregiversList
          pageSize={pageSize}
          changeNumberOfPages={changeNumberOfPages}
          intialCaregivers={items}
          pathname={pathname}
          activepageNumber={activepageNumber}
          cityFilter={cityFilter}
          textFilter={textFilter}
          genderFilter={genderFilter}
        ></CaregiversList>
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
  var responseData = await caregiversService.getAllMockCaregivers(process.env.PROFILE_PAGE_SIZE, 1, "", "", "");
  return {
    props: {
      data: { ...responseData.data, ...{ pageSize: process.env.PROFILE_PAGE_SIZE }, ...ABOUT },
      pathname: resolvedUrl,
    },
  };
}

export default About;
