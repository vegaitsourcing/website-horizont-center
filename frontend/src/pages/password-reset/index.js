import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { PasswordReset } from "components";
import { prepareSEO } from "../../utils";

function PasswordResetPage(props) {
  const { pathname } = props;
  const SEO = prepareSEO(pathname);

  return (
    <>
      <NextSeo {...SEO} />
      <LayoutDefault>
        <PasswordReset />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  return { props: { data: {}, pathname: resolvedUrl } };
}

export default PasswordResetPage;
