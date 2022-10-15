import { NextSeo } from "next-seo";
import caregiversService from "./api/caregiversService";
import { LayoutDefault } from "layouts";

import env from "config/env";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

function About(props) {
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
      header,
      slug,
      block_top,
    },
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

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <div style={{ display: "grid", justifyContent: "center" }}>
          {results.map(({ id, work_application, image, created, city, description, first_name, last_name }) => (
            <ProfileListItem
              body={description}
              city={city}
              createdDate={created}
              firstName={first_name}
              image={image}
              lastName={last_name}
              title={work_application}
              key={id}
              url={`${pathname}/${id}`}
            ></ProfileListItem>
          ))}
        </div>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  var responseData = await caregiversService.getAllCaregivers();
  return { props: { data: responseData, pathname: resolvedUrl } };
}

export default About;
