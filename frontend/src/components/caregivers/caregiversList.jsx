import caregiversService from "pages/api/caregiversService";
import React, { useEffect, useState } from "react";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

function CaregiversList({
  pageSize,
  intialCaregivers,
  pathname,
  activepageNumber,
  textFilter,
  genderFilter,
  cityFilter,
  changeNumberOfPages,
}) {
  const [caregivers, setcaregivers] = useState(intialCaregivers);
  function fetchData() {
    caregiversService
      .getAllMockCaregivers(pageSize, activepageNumber, textFilter, genderFilter, cityFilter)
      .then(({ data }) => {
        const { items, pagination } = data;
        const { total_pages, total_items } = pagination;
        setcaregivers([...items]);
        changeNumberOfPages(total_items, pageSize);
      });
  }
  useEffect(() => fetchData(), [activepageNumber, cityFilter, textFilter, genderFilter]);
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {caregivers.map(({ id, work_application, image, created, city, description, first_name, last_name }) => (
        <ProfileListItem
          body={description}
          city={city}
          createdDate={created}
          firstName={first_name}
          image={image}
          lastName={last_name}
          title={work_application}
          key={id}
          url={`${pathname}/${id}`}
        ></ProfileListItem>
      ))}
    </div>
  );
}

export default CaregiversList;
