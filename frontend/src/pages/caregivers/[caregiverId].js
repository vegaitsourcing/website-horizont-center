import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import env from "config/env";

function Caregivers(props) {
  console.log("PROPS:", props);

  const {
    pathname,
    pageSize,
    data: { title, items, pagination, metaDescription },
  } = props;
  const SEOS = {
    title,
    description: metaDescription,
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
        <div className="">
          {/* {caregivers.map(({ id, work_application, image, created, city, description, user }) => (
            <ProfileListItem
              firstName={user.first_name}
              lastName={user.last_name}
              body={description}
              city={city}
              createdDate={created}
              image={image}
              title={work_application}
              key={id}
              url="#" // TODO
            />
          ))} */}
        </div>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  console.log(ctx);
  const pageSize = process.env.POST_PAGE_SIZE;
  //   const response = await CaregiversService.getCaregivers(pageSize, 1);
  return {
    props: {
      data: {},
      pageSize: pageSize,
      pathname: resolvedUrl,
    },
  };
}

export default Caregivers;
