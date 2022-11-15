import { LayoutDefault } from "layouts";
import { ErrorPageContent } from "../shared-components";

const Code500Page = () => {
	return (
		<LayoutDefault>
			<ErrorPageContent statusCode={500}/>
		</LayoutDefault>
	);
};

export default Code500Page;
