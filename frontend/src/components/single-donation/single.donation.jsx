import React from "react";

import { SectionHeader, AboutDetails, Container, DonationInfo } from "shared-components";

export const SingleDonation = () => {
  return (
    <>
      <SectionHeader
        title={"In interdum sit urna nam varius diam venenatis gravida arcu."}
        imageSrc={"/images/singleBlogtTitle.png"}
      />
      <Container styledClass={"singleDonationContainer"}>
        <DonationInfo
          title={"Opšte informacije"}
          categories={["Finansijska pomoć"]}
          text={
            "Quam sit mi odio amet, volutpat vmalesuada eros pellentesque ut. Enim egestas sollicitudin egestas aliquet interdum a. Vestibulum posuere nulla diam ac maecenas etiam varius et sociis. Praesent a lacus ipsum cras at justo. Morbi donec porttitor et amet tellus. Id feugiat sit pretium ullamcorper et lectus vitae diam iaculis. Magna ultrices fermentum tempus accumsan. Lorem nisi, dignissim turpis pellentesque laoreet. Nibh at id id a dictumst sed. Maecenas feugiat blandit ut massa nisl, posuere magnis. Egestas facilisis vitae cras lobortis semper cursus ante habitasse. Odio et ut id molestie sem. Ut mi ac etiam egestas in vulputate eget non ante."
          }
          donationInfos={[
            { title: "Svrha uplate", value: "Lorem Ipsum" },
            { title: "Primalac", value: "Metus enim egestas" },
            { title: "Šifra plaćanja", value: "011" },
            { title: "Račun primaoca", value: "0125101251" },
            { title: "Model", value: "124" },
            { title: "Poziv na broj", value: "0125101251" },
          ]}
        />
      </Container>
      <Container styledClass={"singleDonationContainer"}>
        <AboutDetails
          imageSrc={"/images/aboutCompanyDonationsImage.png"}
          name={"Ime kompanije"}
          type={"company"}
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
          ]}
        />
      </Container>
    </>
  );
};
