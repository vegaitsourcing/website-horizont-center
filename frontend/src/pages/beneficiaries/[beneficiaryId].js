import { NextSeo } from "next-seo";
import { LayoutDefault } from "layouts";
import { ProfileDetails } from "components";
import { BeneficiariesService } from "../api/beneficiariesService";
import { prepareSingleResourceSEO } from "../../utils";
import { useSingleResource } from "hooks";
import { useEffect, useState } from "react";

function BeneficiaryProfile({ pathname, beneficiaryProfileId }) {
	const [beneficiaryProfile, errorPage] = useSingleResource(
		() => BeneficiariesService.getBeneficiaryById(beneficiaryProfileId)
	);
	const [SEO, setSEO] = useState({});

	useEffect(() => {
		if (beneficiaryProfile) {
			const seoTitle = `${beneficiaryProfile.user.first_name} ${beneficiaryProfile.user.last_name}`;
			setSEO(prepareSingleResourceSEO(beneficiaryProfile.id, seoTitle));
		}
	}, [beneficiaryProfile]);

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault pathname={pathname}>
				{errorPage || (beneficiaryProfile && (
					<ProfileDetails profile={beneficiaryProfile} profileType={"beneficiary"}/>
				))}
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { params, resolvedUrl } = ctx;
	return {
		props: {
			beneficiaryProfileId: params.beneficiaryId,
			pathname: resolvedUrl,
		},
	};
}

export default BeneficiaryProfile;
