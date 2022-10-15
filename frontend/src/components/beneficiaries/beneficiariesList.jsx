import beneficiariesService from "pages/api/beneficiariesService";
import React, { useEffect, useState } from "react";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

function BeneficiariesList({ intialBeneficiaries, pathname, activePageNumber }) {
  const [beneficiaries, setbeneficiaries] = useState(intialBeneficiaries);
  function fetchData() {
    beneficiariesService.getAllBeneficiaries(3, activePageNumber).then(({ results }) => {
      setbeneficiaries([...results]);
    });
  }
  useEffect(() => fetchData(), [activePageNumber]);
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {beneficiaries.map(
        ({ id, care_type, image, created, city, description, first_name, last_name, helping_period }) => (
          <ProfileListItem
            body={description}
            city={city}
            createdDate={created}
            firstName={first_name}
            image={image}
            lastName={last_name}
            title={care_type}
            key={id}
            url={`${pathname}/${id}`}
            period={helping_period}
          ></ProfileListItem>
        )
      )}
    </div>
  );
}

export default BeneficiariesList;
