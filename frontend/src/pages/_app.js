import "styles/main.scss";
import "react-datepicker/dist/react-datepicker.css";
import SEO from "../../next-seo.config";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

const { metas, microdatas } = SEO;

export default function Application({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...metas} />
			<LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
			<Component {...pageProps} />
		</>
	);
}
