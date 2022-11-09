import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";

import { ENV } from "config/env";

import { LayoutDefault } from "layouts";
import { DonationFilters, DonationList } from "components";
import { PageHeader, Pagination, Spinner } from "shared-components";

import DonationsService from "./api/donationsService";

const { BASE_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

const ITEMS_PER_PAGE = 3;

function Donations(props) {
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
  const [donations, setDonations] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filters, setFilters] = useState({
    contains: null,
    isActive: null,
  });

  async function fetchDonations() {
    await DonationsService.getDonations(ITEMS_PER_PAGE, activePageNumber, filters.contains, filters.isActive).then(
      (response) => {
        setDonations(response.data.items);
        setNumberOfPages(response.data.pagination.total_pages);
        setIsLoading(false);
      }
    );
  }

  useEffect(() => {
    fetchDonations();
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
        <PageHeader
          withBackground
          title={"Prikupljenje donacija"}
          text={
            "Felis lectus tortor massa a eget viverra integer faucibus adipiscing. " +
            "Faucibus nunc, auctor arcu magna cursus "
          }
        />
        <DonationFilters onChange={updateFilters} />
        <DonationList donations={donations} />
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

export default Donations;
