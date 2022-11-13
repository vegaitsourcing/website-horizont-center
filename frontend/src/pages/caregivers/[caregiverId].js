import { NextSeo } from "next-seo";
import { ProfileDetails } from "components";
import { LayoutDefault } from "layouts";
import { CaregiversService } from "../api/caregiversService";
import { caregiverEditList } from "components/user/hooks/caregiverEditList";
import { prepareSingleResourceSEO } from "../../utils";
import { useSingleResource } from "../../hooks";
import { useEffect, useState } from "react";

function CaregiverProfile({ pathname, caregiverProfileId }) {
	const [caregiverProfile, errorPage] = useSingleResource(
		() => CaregiversService.getCaregiverById(caregiverProfileId),
	);
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (caregiverProfile) {
			const seoTitle = `${caregiverProfile.user.first_name} ${caregiverProfile.user.last_name}`;
			setSEO(prepareSingleResourceSEO(caregiverProfile.id, seoTitle));
		}
	}, [caregiverProfile]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				{errorPage || caregiverProfile && <ProfileDetails profile={caregiverProfile} editList={caregiverEditList}/>}
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { params, resolvedUrl } = ctx;
	return {
		props: {
			caregiverProfileId: params.caregiverId,
			pathname: resolvedUrl,
		},
	};
}

export default CaregiverProfile;
