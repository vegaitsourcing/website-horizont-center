import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { LayoutDefault } from "layouts";
import { LoginForm } from "components";
import { Spinner } from "shared-components";

import { ENV } from "config/env";

import AuthService from "./api/authService";

const { BASE_URL = "", STATIC_DIR = "", AUTHOR } = ENV;

function Login(props) {
  const {
    pathname,
    data: { title },
  } = props;

  const SEOS = {
    title,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
        site_name: AUTHOR,
      },
    ],
  };

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function redirectToHomePage() {
      await router.push("/");
    }

    if (isLoading) {
      if (AuthService.isAuthenticated()) redirectToHomePage();
      else setIsLoading(false);
    }
  }, [isLoading, router]);

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
      <LayoutDefault>
        <LoginForm />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  return { props: { data: {}, pathname: resolvedUrl } };
}

export default Login;
