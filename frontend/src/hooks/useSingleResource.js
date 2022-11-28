import { useEffect, useState } from "react";
import { ErrorPageContent } from "../shared-components";

export function useSingleResource(fetchResource) {
	const [resource, setResource] = useState(null);
	const [errorPage, setErrorPage] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		async function getResource() {
			if (fetchResource) {
				try {
					const response = await fetchResource();
					setResource(response.data);
				} catch (error) {
					const errorCodes = [401, 404, 500];
					if (errorCodes.includes(error.response?.status)) {
						setErrorPage(<ErrorPageContent statusCode={error.response.status}/>);
					} else {
						setErrorPage(<ErrorPageContent statusCode={500}/>);
					}
				}
			}
			setIsFetching(false);
		}

		if (isFetching) {
			getResource();
		}

	}, [isFetching, fetchResource]);

	return [resource, errorPage];
}
