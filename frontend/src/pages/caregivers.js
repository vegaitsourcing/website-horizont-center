import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";

import { ENV } from "config/env";

import { LayoutDefault } from "layouts";
import { Pagination, ProfileFilters, Spinner } from "shared-components";

import CaregiversService from "./api/caregiversService";
import { CaregiverList } from "components";

const ITEMS_PER_PAGE = 3;

function Caregivers(props) {
  const { pathname } = props;
  const SEOS = {
    canonical: `${ENV.BASE_URL}${pathname}`,
    openGraph: [
      {
        url: ENV.BASE_URL,
        images: { url: `${ENV.BASE_URL}${ENV.STATIC_DIR}logo-share.jpg` },
        site_name: ENV.AUTHOR,
      },
    ],
    ...ENV.BASE_SEO,
  };

  const [isLoading, setIsLoading] = useState(true);
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [caregivers, setCaregivers] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filters, setFilters] = useState({
    contains: null,
    gender: null,
    city: null,
  });

  async function fetchCaregivers() {
    await CaregiversService.getCaregivers(
      ITEMS_PER_PAGE,
      activePageNumber,
      filters.contains,
      filters.gender,
      filters.city
    ).then((response) => {
      setCaregivers(response.data.items);
      setNumberOfPages(response.data.pagination.total_pages);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchCaregivers();
  }, [activePageNumber, filters]);

  const updateFilters = useCallback(
    (newFilters) => {
      const updatedFilters = { ...filters, ...newFilters };
      setActivePageNumber(1);
      setFilters(updatedFilters);
    },
    [filters]
  );

  if (isLoading) {
    return (
      <LayoutDefault>
        <Spinner />
      </LayoutDefault>
    );
  }

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <ProfileFilters onChange={updateFilters} />
        <CaregiverList profiles={caregivers} />
        <Pagination
          onPageChange={setActivePageNumber}
          numberOfPages={numberOfPages}
          activePageNumber={activePageNumber}
        />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;

  return {
    props: {
      pathname: resolvedUrl,
    },
  };
}

export default Caregivers;
