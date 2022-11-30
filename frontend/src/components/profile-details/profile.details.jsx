import { ProfileDetailsEdit, ProfileDetailsInfo } from "./components";
import { beneficiaryEditList, beneficiaryInfoList, caregiverEditList, caregiverInfoList } from "./hooks";
import styles from "./profile.details.module.scss";

export const ProfileDetails = ({ profile, profileType, canEdit = false }) => {

	return (
		<div className={styles.profileDetailsWrapper}>
			{canEdit ? (
				<ProfileDetailsEdit
					editList={profileType === "caregiver" ? caregiverEditList : beneficiaryEditList}
					profile={profile}
					profileType={profileType}
				/>
			) : (
				<ProfileDetailsInfo
					infoList={profileType === "caregiver" ? caregiverInfoList : beneficiaryInfoList}
					profile={profile}
					profileType={profileType}
				/>
			)}
		</div>
	);
};
