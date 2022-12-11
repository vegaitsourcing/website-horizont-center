import { ProfileDetailsEdit, ProfileDetailsInfo } from "./components";
import { beneficiaryEditList, beneficiaryInfoList, caregiverEditList, caregiverInfoList } from "./hooks";

export const ProfileDetails = ({ profile, profileType, canEdit = false }) => {

	return canEdit ? (
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
	);
};
