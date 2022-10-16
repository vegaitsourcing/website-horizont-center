import React from "react";

import styles from "./singe.blog.module.scss";

import { SectionHeader, BlogArticles } from "shared-components";

export const SingleBlog = () => {
  return (
    <>
      <SectionHeader
        title={"In interdum sit urna nam varius diam venenatis gravida arcu."}
        imageSrc={"/images/singleBlogtTitle.png"}
      />
      {/* druga komponenta */}
      <div className={styles.singleBlogContainer}>
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
      </div>
      {/* treca komponenta */}
      <div className={styles.singleBlogContainer}>
        <section className={styles.aboutDetails}>
          <div className={styles.aboutMain}>
            <div className={styles.authorName}>
              <img src="/images/aboutDetailsImage.png" alt="" />
              <h3 className={styles.aboutHeading}>Zorana Radulović</h3>
            </div>
            <div className={styles.authorAbout}>
              <h3 className={styles.aboutHeading}>O autorki</h3>
              <p className={styles.aboutParagraph}>
                Vitae consectetur nisi id in nibh. Nec dictumst nunc leo lacus, mollis. Justo vitae lorem in fermentum
                neque, sollicitudin tristique nunc. Sed quam fames semper ipsum nam. Tristique leo neque, elit proin
                metus. Nisi, magna cras sed aliquam rhoncus
              </p>
              <ul className={styles.aboutSocialLinks}>
                <li>
                  <a href="#">
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.0469 13.5L12.7031 9.1875H8.53125V6.375C8.53125 5.15625 9.09375 4.03125 10.9688 4.03125H12.8906V0.328125C12.8906 0.328125 11.1562 0 9.51562 0C6.09375 0 3.84375 2.10938 3.84375 5.85938V9.1875H0V13.5H3.84375V24H8.53125V13.5H12.0469Z"
                        fill="#0075FF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.8874 7.9983C10.684 7.9983 8.88577 9.79651 8.88577 12C8.88577 14.2035 10.684 16.0017 12.8874 16.0017C15.0908 16.0017 16.889 14.2035 16.889 12C16.889 9.79651 15.0908 7.9983 12.8874 7.9983ZM24.8893 12C24.8893 10.3429 24.9043 8.70077 24.8112 7.04665C24.7182 5.12536 24.2799 3.4202 22.875 2.01525C21.467 0.607302 19.7649 0.172008 17.8437 0.0789456C16.1866 -0.0141173 14.5445 0.000892936 12.8904 0.000892936C11.2333 0.000892936 9.59123 -0.0141173 7.93715 0.0789456C6.01589 0.172008 4.31076 0.610305 2.90584 2.01525C1.49792 3.42321 1.06263 5.12536 0.969569 7.04665C0.876508 8.70377 0.891518 10.3459 0.891518 12C0.891518 13.6541 0.876508 15.2992 0.969569 16.9533C1.06263 18.8746 1.50092 20.5798 2.90584 21.9847C4.31377 23.3927 6.01589 23.828 7.93715 23.9211C9.59424 24.0141 11.2363 23.9991 12.8904 23.9991C14.5475 23.9991 16.1896 24.0141 17.8437 23.9211C19.7649 23.828 21.47 23.3897 22.875 21.9847C24.2829 20.5768 24.7182 18.8746 24.8112 16.9533C24.9073 15.2992 24.8893 13.6571 24.8893 12ZM12.8874 18.1572C9.48016 18.1572 6.73035 15.4073 6.73035 12C6.73035 8.5927 9.48016 5.84284 12.8874 5.84284C16.2946 5.84284 19.0444 8.5927 19.0444 12C19.0444 15.4073 16.2946 18.1572 12.8874 18.1572ZM19.2966 7.02864C18.5011 7.02864 17.8587 6.38621 17.8587 5.59067C17.8587 4.79513 18.5011 4.1527 19.2966 4.1527C20.0921 4.1527 20.7346 4.79513 20.7346 5.59067C20.7348 5.77957 20.6978 5.96667 20.6256 6.14124C20.5534 6.31581 20.4475 6.47442 20.3139 6.608C20.1803 6.74157 20.0217 6.84748 19.8472 6.91967C19.6726 6.99185 19.4855 7.02888 19.2966 7.02864Z"
                        fill="#0075FF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.25975 24V7.94631H1.26646V24H6.25975ZM3.73626 5.79866C5.347 5.79866 6.63559 4.45638 6.63559 2.84564C6.63559 1.28859 5.347 0 3.73626 0C2.17922 0 0.890625 1.28859 0.890625 2.84564C0.890625 4.45638 2.17922 5.79866 3.73626 5.79866ZM24.8906 24H24.9443V15.1946C24.9443 10.8993 23.9779 7.57047 18.9309 7.57047C16.5148 7.57047 14.904 8.91275 14.2061 10.1477H14.1524V7.94631H9.37385V24H14.3671V16.0537C14.3671 13.9597 14.743 11.9732 17.3202 11.9732C19.8973 11.9732 19.951 14.3356 19.951 16.2148V24H24.8906Z"
                        fill="#0075FF"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
