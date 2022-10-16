import { LayoutDefault } from "layouts";

import ABOUT from "config/data/about";
import { NextSeo } from "next-seo";

import { CardPagination, Input } from "shared-components";

import ENV from "config/env";

import { Blog } from "components";
import BlogService from "./api/blogService";
import { useState } from "react";
import PostFilters from "shared-components/post-filters/post-filters";
import PostTitle from "shared-components/post-title/post-title";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function Service(props) {
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
        images: { url: `${BASE_URL}${STATIC_DIR}logo.png` },
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
          title={"Podrška"}
          text={
            "Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursus "
          }
        ></PostTitle>
        <PostFilters changeFilterText={changeTextFilter} changeFilterType={changeFilterType}></PostFilters>
        <Blog
          pageSize={pageSize}
          intialBlogs={items}
          changeNumberOfPages={changeNumberOfPages}
          activePageNumber={activepageNumber}
          filterText={filterText}
          filterType={filterType}
          pathname={pathname}
        />
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
  const responseData = await BlogService.getAllBlogs(process.env.POST_PAGE_SIZE, 1, "", "");
  return {
    props: {
      data: { ...responseData.data, ...{ pageSize: process.env.POST_PAGE_SIZE }, ...ABOUT },
      pathname: resolvedUrl,
    },
  };
}

export default Service;
