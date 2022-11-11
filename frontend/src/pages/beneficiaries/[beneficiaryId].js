import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { ProfileDetails } from "components";
import { BeneficiariesService } from "../api/beneficiariesService";
import { beneficiaryEditList } from "components/user/hooks/beneficiaryEditList";
import { prepareSingleResourceSEO } from "../../utils";

function BeneficiaryProfile({ pathname, beneficiaryProfile }) {
	const seoTitle = `${beneficiaryProfile.user.first_name} ${beneficiaryProfile.user.last_name}`;
	const SEO = prepareSingleResourceSEO(beneficiaryProfile.id, seoTitle);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				<ProfileDetails profile={beneficiaryProfile} editList={beneficiaryEditList}/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { params, resolvedUrl } = ctx;
	const response = await BeneficiariesService.getBeneficiaryById(params.beneficiaryId);
	return {
		props: {
			pathname: resolvedUrl,
			beneficiaryProfile: response.data
		},
	};
}

export default BeneficiaryProfile;
