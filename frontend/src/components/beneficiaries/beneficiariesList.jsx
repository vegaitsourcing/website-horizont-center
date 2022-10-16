import beneficiariesService from "pages/api/beneficiariesService";
import React, { useEffect, useState } from "react";
import { ProfileListItem } from "shared-components/profile-list-item/profile-list-item";

function BeneficiariesList({
  pageSize,
  intialBeneficiaries,
  pathname,
  activePageNumber,
  textFilter,
  genderFilter,
  cityFilter,
  changeNumberOfPages,
}) {
  const [beneficiaries, setbeneficiaries] = useState(intialBeneficiaries);
  function fetchData() {
    beneficiariesService
      .getAllMockBeneficiaries(pageSize, activePageNumber, textFilter, genderFilter, cityFilter)
      .then(({ data }) => {
        const { items, pagination } = data;
        const { total_pages, total_items } = pagination;
        setbeneficiaries([...items]);
        changeNumberOfPages(total_items, pageSize);
      });
  }
  useEffect(() => fetchData(), [activePageNumber, textFilter, genderFilter, cityFilter]);
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
