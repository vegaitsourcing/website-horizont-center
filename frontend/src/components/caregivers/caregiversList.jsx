import caregiversService from "pages/api/caregiversService";
import React, { useEffect, useState } from "react";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

function CaregiversList({ intialCaregivers, pathname, activepageNumber }) {
  const [caregivers, setcaregivers] = useState(intialCaregivers);
  function fetchData() {
    caregiversService.getAllCaregivers(3, activepageNumber).then(({ results }) => {
      setcaregivers([...results]);
    });
  }
  useEffect(() => fetchData(), [activepageNumber]);
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
