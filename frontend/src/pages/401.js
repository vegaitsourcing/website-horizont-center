import ErrorPage from "next/error";
import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const Code404Page = () => {
  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <ErrorPage statusCode={401} withDarkMode={false} />
      </LayoutDefault>
    </>
  );
};

export default Code404Page;
