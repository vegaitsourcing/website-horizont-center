import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";
import beneficiariesService from "./api/beneficiariesService";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

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

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault>
        {results.map(({ id, care_type, image, created, city, description, first_name, last_name, helping_period }) => (
          <ProfileListItem
            body={description}
            city={city}
            createdDate={created}
            firstName={first_name}
            image={image}
            lastName={last_name}
            title={care_type}
            key={id}
            url={`${pathname}/${id}`}
            period={helping_period}
          ></ProfileListItem>
        ))}
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const responseData = await beneficiariesService.getAllBeneficiaries();
  return { props: { data: responseData, pathname: resolvedUrl } };
}

export default GettingStarted;
