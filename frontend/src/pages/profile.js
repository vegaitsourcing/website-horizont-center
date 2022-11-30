import { NextSeo } from "next-seo";
import { ProfileDetails } from "components";
import { LayoutDefault } from "layouts";
import { useEffect, useState } from "react";
import AuthService from "./api/authService";
import { CaregiversService } from "./api/caregiversService";
import { BeneficiariesService } from "./api/beneficiariesService";
import { useSingleResource } from "../hooks";
import { prepareSingleResourceSEO } from "../utils";

function getProfileFetchCallback() {
	const user = AuthService.getUser();
	if (!user || !(user.profileType && user.profileID)) {
		const error = new Error();
		error.response = { status: 401 };
		throw error;
	}
	if (user.profileType === "caregiver") return CaregiversService.getCaregiverById(user.profileID);
	if (user.profileType === "beneficiary") return BeneficiariesService.getBeneficiaryById(user.profileID);
}

function Profile({ pathname }) {
	const [profile, errorPage] = useSingleResource(getProfileFetchCallback);
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (profile) {
			const seoTitle = `${profile.user.first_name} ${profile.user.last_name}`;
			setSEO(prepareSingleResourceSEO(profile.id, seoTitle));
		}
	}, [profile]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				{errorPage || (profile && (
					<ProfileDetails profile={profile} profileType={profile.type} canEdit/>
				))}
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return {
		props: {
			pathname: resolvedUrl,
		},
	};
}

export default Profile;
