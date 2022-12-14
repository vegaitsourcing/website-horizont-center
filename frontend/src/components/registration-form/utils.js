import { FIELD_WITH_ERRORS_CLASS_NAME } from "../../shared-components";

export function scrollFirstFieldWithErrorsIntoView () {
	setTimeout(function () {
		const firstFieldWithErrors = document.getElementsByClassName(FIELD_WITH_ERRORS_CLASS_NAME)[0];
		if (firstFieldWithErrors) {
			const scrollTop = firstFieldWithErrors.offsetTop - 200;
			window.scrollTo({ top: scrollTop, behavior: "smooth" });
		}
	}, 500);
}
