import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LayoutDefault } from "layouts";
import { LoginForm } from "components";
import { Spinner } from "shared-components";
import { AuthService } from "./api/authService";
import { prepareSEO } from "../utils";

function Login(props) {
	const { pathname } = props;
	const SEO = prepareSEO(pathname);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function redirectToHomePage() {
			await router.push("/");
		}

		if (isLoading) {
			if (AuthService.isAuthenticated()) redirectToHomePage();
			else setIsLoading(false);
		}
	}, [isLoading, router]);

	if (isLoading) {
		return (
			<LayoutDefault>
				<Spinner/>
			</LayoutDefault>
		);
	}

	return (
		<>
			<NextSeo {...SEO} />
			<LayoutDefault>
				<LoginForm/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return { props: { data: {}, pathname: resolvedUrl } };
}

export default Login;
