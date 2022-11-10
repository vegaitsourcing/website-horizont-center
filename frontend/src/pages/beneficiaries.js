import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";

import { ENV } from "config/env";

import { LayoutDefault } from "layouts";
import { Pagination, ProfileFilters, Spinner } from "shared-components";

import BeneficiariesService from "./api/beneficiariesService";
import { BeneficiaryList } from "components";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

const ITEMS_PER_PAGE = 3;

function Beneficiaries(props) {
  const { pathname } = props;
  const SEOS = {
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

  const [isLoading, setIsLoading] = useState(true);
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filters, setFilters] = useState({
    contains: null,
    gender: null,
    city: null,
  });

  async function fetchBeneficiaries() {
    await BeneficiariesService.getBeneficiaries(
      ITEMS_PER_PAGE,
      activePageNumber,
      filters.contains,
      filters.gender,
      filters.city
    ).then((response) => {
      setBeneficiaries(response.data.items);
      setNumberOfPages(response.data.pagination.total_pages);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchBeneficiaries();
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
      <LayoutDefault>
        <ProfileFilters onChange={updateFilters} />
        <BeneficiaryList profiles={beneficiaries} />
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

export default Beneficiaries;
