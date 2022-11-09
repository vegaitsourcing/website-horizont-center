import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import env from "config/env";

import { UserDetails } from "components";

import AuthService from "../api/authService";
import caregiversService from "../api/caregiversService";
import { useState, useEffect } from "react";

function Caregivers(props) {
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

  async function getCaregiver(token) {
    await caregiversService.getCaregiverById(props.params.caregiverId, token).then((response) => {
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
      const token = AuthService.getUser()?.token;
      getCaregiver(token);
    }
  }, [isLoadingCaregiver]);

  if (isLoadingCaregiver) return null;

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <UserDetails user={caregiver} />
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

export default Caregivers;