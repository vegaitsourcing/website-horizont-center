import { LayoutDefault } from "layouts";
import { ErrorPageContent } from "../shared-components";

const Code404Page = () => {
	return (
		<LayoutDefault>
			<ErrorPageContent statusCode={404}/>
		</LayoutDefault>
	);
};

export default Code404Page;
