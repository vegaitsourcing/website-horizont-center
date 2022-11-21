import React from "react";
import styles from "./profile.list.module.scss";
import { ProfileCard } from "../../shared-components";

export function BeneficiaryList({ profiles }) {
  return (
    <div className={styles.profileList}>
      {profiles.map((profile) => (
        <ProfileCard
          firstName={profile.user.first_name}
          lastName={profile.user.last_name}
          body={profile.description}
          city={profile.city}
          createdDate={profile.created}
          image={profile.image}
          title={profile.care_type}
          key={profile.id}
          period={profile.helping_period}
          url={`/beneficiaries/${profile.id}`}
        />
      ))}
    </div>
  );
}
