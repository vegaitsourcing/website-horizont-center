import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import { ENV } from "config/env";
import { useCallback, useEffect, useState } from "react";
import { Pagination, ProfileFilters } from "shared-components";
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

  const [activePageNumber, setActivePageNumber] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filters, setFilters] = useState({
    contains: null,
    gender: null,
    city: null,
  });

  useEffect(() => {
    async function fetchBeneficiaries() {
      const response = await BeneficiariesService.getBeneficiaries(
        ITEMS_PER_PAGE,
        activePageNumber,
        filters.contains,
        filters.gender,
        filters.city
      );
      setBeneficiaries(response.data.items);
      setNumberOfPages(response.data.pagination.total_pages);
    }

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
