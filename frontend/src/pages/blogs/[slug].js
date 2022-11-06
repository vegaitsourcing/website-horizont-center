import { BlogDetails } from "components";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const SingleBlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <BlogDetails blogId={slug} />
      </LayoutDefault>
    </>
  );
};

export default SingleBlogDetails;
