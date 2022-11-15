import { LayoutDefault } from "layouts";
import { ErrorPageContent } from "../shared-components";

const Code401Page = () => {
	return (
		<LayoutDefault>
			<ErrorPageContent statusCode={401}/>
		</LayoutDefault>
	);
};

export default Code401Page;
