import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import env from "config/env";

import { LayoutDefault } from "layouts";
import { UserDetails } from "components";

import AuthService from "../api/authService";
import beneficiariesService from "../api/beneficiariesService";

import { beneficiaryEditList } from "components/user/hooks/beneficiaryEditList";

function Beneficiaries(props) {
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

  const [isLoadingBeneficiary, setIsLoadingBeneficiary] = useState(true);
  const [beneficiary, setBeneficiary] = useState();

  async function getBeneficiary(token) {
    await beneficiariesService.getBeneficiaryById(props.params.beneficiaryId, token).then((response) => {
      if (response.status === 401) {
        //TO DO: Handle 401 error page
        return alert("Ne mozete pristupiti ovoj stranici, morate biti ulogovani!");
      }
      setBeneficiary(response.data);
      setIsLoadingBeneficiary(false);
    });
  }

  useEffect(() => {
    if (isLoadingBeneficiary) {
      const token = AuthService.getUser()?.token;
      getBeneficiary(token);
    }
  }, [isLoadingBeneficiary]);

  if (isLoadingBeneficiary) return null;

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <UserDetails user={beneficiary} editList={beneficiaryEditList} />
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

export default Beneficiaries;
