import { NextSeo } from "next-seo";
import { ProfileDetails } from "components";
import { LayoutDefault } from "layouts";
import { CaregiversService } from "../api/caregiversService";
import { caregiverEditList } from "components/user/hooks/caregiverEditList";
import { prepareSingleResourceSEO } from "../../utils";

function CaregiverProfile({ pathname, caregiverProfile }) {
	const seoTitle = `${caregiverProfile.user.first_name} ${caregiverProfile.user.last_name}`;
	const SEO = prepareSingleResourceSEO(caregiverProfile.id, seoTitle);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				<ProfileDetails profile={caregiverProfile} editList={caregiverEditList}/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { params, resolvedUrl } = ctx;
	const response = await CaregiversService.getCaregiverById(params.caregiverId);
	return {
		props: {
			caregiverProfile: response.data,
			pathname: resolvedUrl,
		},
	};
}

export default CaregiverProfile;
