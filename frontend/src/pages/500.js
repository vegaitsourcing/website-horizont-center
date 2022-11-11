import ErrorPage from "next/error";
import { LayoutDefault } from "layouts";

const Code500Page = () => {
	return (
		<LayoutDefault>
			<ErrorPage statusCode={500} withDarkMode={false}/>
		</LayoutDefault>
	);
};

export default Code500Page;
