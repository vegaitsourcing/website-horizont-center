import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import env from "config/env";

import { LayoutDefault } from "layouts";
import { UserDetails } from "components";

import caregiversService from "../api/caregiversService";
import { caregiverEditList } from "components/user/hooks/caregiverEditList";

function CaregiverProfile(props) {
  const {
    pathname,
    pageSize,
    // data: { title, items, pagination, metaDescription },
  } = props;
  const SEOS = {
    // title,
    // description: metaDescription,
    canonical: `${env?.BASE_URL}${pathname}`,
    openGraph: [
      {
        url: env?.BASE_URL,
        images: { url: `${env?.BASE_URL}${env?.STATIC_DIR}logo-share.jpg` },
        site_name: env?.AUTHOR,
      },
    ],
    ...env?.BASE_SEO,
  };

  const [isLoadingCaregiver, setIsLoadingCaregiver] = useState(true);
  const [caregiver, setCaregiver] = useState();

  async function getCaregiver() {
    await caregiversService.getCaregiverById(props.params.caregiverId).then((response) => {
      setCaregiver(response.data);
      setIsLoadingCaregiver(false);
    });
  }

  useEffect(() => {
    if (isLoadingCaregiver) {
      getCaregiver();
    }
  }, [isLoadingCaregiver]);

  if (isLoadingCaregiver) return null;

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <UserDetails user={caregiver} editList={caregiverEditList} />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  return {
    props: {
      params: params,
    },
  };
}

export default CaregiverProfile;
