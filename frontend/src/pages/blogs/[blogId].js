import { BlogDetails } from "components";

import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const SingleBlogDetails = (props) => {
  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <BlogDetails blogId={props.params.blogId} />
      </LayoutDefault>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  return {
    props: {
      params: params,
    },
  };
}

export default SingleBlogDetails;
