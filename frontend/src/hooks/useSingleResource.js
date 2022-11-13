import { useEffect, useState } from "react";
import ErrorPage from "next/error";

export function useSingleResource(resourceId, fetchResource) {
	const [resource, setResource] = useState(null);
	const [errorPage, setErrorPage] = useState(null);

	useEffect(() => {
		async function getResource() {
			try {
				const response = await fetchResource(resourceId);
				setResource(response.data);
			} catch (error) {
				const errorCodes = [401, 404, 500];
				if (errorCodes.includes(error.response.status)) {
					setErrorPage(<ErrorPage statusCode={error.response.status} withDarkMode={false}/>);
				}
			}
		}

		getResource();
	}, [resourceId, fetchResource]);

	return [resource, errorPage];
}
