import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { RegistrationConfirm } from "components";
import { prepareSEO } from "../utils";

function ConfirmRegistration({ pathname, email }) {
  const SEO = prepareSEO(pathname);

  return (
    <>
      <NextSeo {...SEO} />
      <LayoutDefault pathname={pathname}>
        <RegistrationConfirm email={email} />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { query, resolvedUrl } = ctx;
  const email = query.email ?? null;

  return {
    props: {
      email: email,
      pathname: resolvedUrl,
    },
  };
}

export default ConfirmRegistration;
