import { SingleBlog } from "components";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <NextSeo />
      <LayoutDefault>
        <SingleBlog blogId={slug} />
      </LayoutDefault>
    </>
  );
};

export default Post;
