import { useEffect, useState } from "react";

export function useSingleResource(resourceId, fetchResource) {
	const [resource, setResource] = useState(null);
	const [statusCode, setStatusCode] = useState(null);

	useEffect(() => {
		async function getResource() {
			try {
				const response = await fetchResource(resourceId);
				setResource(response.data);
				setStatusCode(response.status);
			} catch (error) {
				setStatusCode(error.response.status);
			}
		}

		getResource();
	}, [resourceId, fetchResource]);

	return [resource, statusCode];
}
