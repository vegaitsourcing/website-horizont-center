import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import env from "config/env";

import { ProfileDetails } from "components";
import { LayoutDefault } from "layouts";

import caregiversService from "../api/caregiversService";

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
      if (response.status === 401) {
        //TO DO: Handle 401 error page
        return alert("Ne mozete pristupiti ovoj stranici, morate biti ulogovani!");
      }
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
        <ProfileDetails profile={caregiver} />
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
