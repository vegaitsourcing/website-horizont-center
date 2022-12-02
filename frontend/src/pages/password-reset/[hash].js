import { NextSeo } from "next-seo";
import { PasswordReset } from "components";
import { LayoutDefault } from "layouts";
import { Spinner } from "shared-components";
import { CaregiversService } from "../api/caregiversService";
import { useSingleResource } from "../../hooks";
import { useEffect, useState } from "react";
import { prepareSEO } from "../../utils";
import { useRouter } from "next/router";

function PasswordResetWithHash(props) {
  const { pathname } = props;
  const SEO = prepareSEO(pathname);

  const router = useRouter();

  console.log("hash", router.query);

  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     if (isLoading) {
  //       if (AuthService.isAuthenticated()) redirectToHomePage();
  //       else setIsLoading(false);
  //     }
  //   }, [isLoading]);

  //   if (isLoading) {
  //     return (
  //       <LayoutDefault>
  //         <Spinner />
  //       </LayoutDefault>
  //     );
  //   }

  return (
    <>
      <NextSeo {...SEO} />
      <LayoutDefault>
        <PasswordReset hash={router.query.hash} />
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

export default PasswordResetWithHash;
