import React from "react";

import { SectionHeader, BlogArticles, AboutDetails, Container } from "shared-components";

export const SingleBlog = () => {
  return (
    <>
      <SectionHeader
        title={"In interdum sit urna nam varius diam venenatis gravida arcu."}
        imageSrc={"/images/singleBlogtTitle.png"}
      />
      <Container className={"singleBlogContainer"}>
        <BlogArticles
          articles={[
            {
              title: "Adipiscing platea aliquet",
              text: "Eget et id at cras enim enim nunc pellentesque. Quam sit mi odio amet, volutpat malesuada eros pellentesque ut. Enim egestas sollicitudin egestas aliquet interdum a. Vestibulum posuere nulla diam ac maecenas etiam varius et sociis. Praesent a lacus ipsum cras at justo. Morbi donec porttitor et amet tellus. Id feugiat sit pretium ullamcorper et lectus vitae diam iaculis. Magna ultrices fermentum tempus accumsan. Lorem nisi, dignissim turpis pellentesque laoreet. Nibh at id id a dictumst sed. Maecenas feugiat blandit ut massa nisl, posuere magnis. Egestas facilisis vitae cras lobortis semper cursus ante habitasse. Odio et ut id molestie sem. Ut mi ac etiam egestas in vulputate eget non ante. Felis, ut sed tortor id diam amet dolor. Metus enim egestas semper enim bibendum sem morbi. Commodo, nulla vel odio tellus eu. Aenean justo, turpis turpis sagittis nec, iaculis cursus nec. Hac orci sed scelerisque rutrum maecenas pellentesque. Sed felis in laoreet nulla gravida consectetur ut sed lectus.",
              image: null,
            },
            {
              title: "Adipiscing platea aliquet",
              text: "Felis, ut sed tortor id diam amet dolor. Metus enim egestas semper enim bibendum sem morbi. Commodo, nulla vel odio tellus eu. Aenean justo, turpis turpis sagittis nec, iaculis cursus nec. Hac orci sed scelerisque rutrum maecenas pellentesque. Sed felis in laoreet nulla gravida consectetur ut sed lectus.",
              image: "/images/singleBlogMain.png",
            },
            {
              title: "Eleifend",
              text: "Vitae consectetur nisi id in nibh. Nec dictumst nunc leo lacus, mollis. Justo vitae lorem in fermentum neque, sollicitudin tristique nunc. Sed quam fames semper ipsum nam. Tristique leo neque, elit proin metus. Nisi, magna cras sed aliquam rhoncus. Nunc consequat, morbi platea eu dictum adipiscing nulla tincidunt. Eu imperdiet id amet, nunc et orci, porta nunc. Laoreet augue ut gravida tincidunt nulla etiam.Aliquam senectus arcu aliquam, cursus mauris. Nulla viverra tincidunt morbi sagittis augue ut malesuada.",
              image: null,
            },
          ]}
        />
      </Container>
      <Container className={"singleBlogContainer"}>
        <AboutDetails
          imageSrc={"/images/aboutDetailsImage.png"}
          name={"Zorana Radulović"}
          type={"author"}
          text={
            "Vitae consectetur nisi id in nibh. Nec dictumst nunc leo lacus, mollis. Justo vitae lorem in fermentum neque, sollicitudin tristique nunc. Sed quam fames semper ipsum nam. Tristique leo neque, elit proin metus. Nisi, magna cras sed aliquam rhoncus"
          }
          socialLinks={[
            {
              url: "#",
              iconPath: "/images/facebookIconAboutDetails.svg",
            },
            {
              url: "#",
              iconPath: "/images/instagramIconAboutDetails.svg",
            },
            {
              url: "#",
              iconPath: "/images/linkedinIconAboutDetails.svg",
            },
          ]}
        />
      </Container>
    </>
  );
};
