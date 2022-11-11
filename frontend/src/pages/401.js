import ErrorPage from "next/error";
import { LayoutDefault } from "layouts";

const Code401Page = () => {
	return (
		<LayoutDefault>
			<ErrorPage statusCode={401} withDarkMode={false}/>
		</LayoutDefault>
	);
};

export default Code401Page;
