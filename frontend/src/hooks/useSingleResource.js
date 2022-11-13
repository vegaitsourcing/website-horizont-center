import { useEffect, useState } from "react";
import ErrorPage from "next/error";

export function useSingleResource(fetchResource) {
	const [resource, setResource] = useState(null);
	const [errorPage, setErrorPage] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		async function getResource() {
			try {
				const response = await fetchResource();
				setResource(response.data);
			} catch (error) {
				const errorCodes = [401, 404, 500];
				if (errorCodes.includes(error.response.status)) {
					setErrorPage(<ErrorPage statusCode={error.response.status} withDarkMode={false}/>);
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
