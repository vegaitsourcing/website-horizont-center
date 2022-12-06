import { NextSeo } from "next-seo";
import { PasswordReset } from "components";
import { LayoutDefault } from "layouts";
import { prepareSEO } from "../../utils";
import { useRouter } from "next/router";

function PasswordResetWithHash(props) {
  const { pathname } = props;
  const router = useRouter();
  const SEO = prepareSEO(pathname);

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
  return { props: { data: {}, pathname: resolvedUrl } };
}

export default PasswordResetWithHash;
