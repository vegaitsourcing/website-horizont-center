import { useEffect, useState } from "react";

import { ProfileDetailsInfo, ProfileDetailsEdit } from "./components";
import { beneficiaryInfoList, beneficiaryEditList, caregiverInfoList, caregiverEditList } from "./hooks";

import styles from "./profile.details.module.scss";

export const ProfileDetails = ({ profile, userType, authUser }) => {
  const [editEnabled, setEditEnabled] = useState(false);

  useEffect(() => {
    if (profile.user.id === authUser.id) {
      setEditEnabled(true);
    }
  }, [profile, authUser]);

  return (
    <div className={styles.profileDetailsWrapper}>
      {editEnabled ? (
        <ProfileDetailsEdit
          editList={userType === "caregiver" ? caregiverEditList : beneficiaryEditList}
          profile={profile}
          userType={userType}
        />
      ) : (
        <ProfileDetailsInfo
          infoList={userType === "caregiver" ? caregiverInfoList : beneficiaryInfoList}
          profile={profile}
          userType={userType}
        />
      )}
    </div>
  );
};
