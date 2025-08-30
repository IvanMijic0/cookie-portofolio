import { redirect, type LoaderFunctionArgs } from "react-router";

function detectLangFromRequest(request: Request): "en" | "ba" {
	const h = request.headers.get("accept-language")?.toLowerCase() ?? "";
	if (/(^|,|\s)(bs|hr|sr|ba)(-|;|,|$)/.test(h)) return "ba";
	return "en";
}

export async function loader({ request }: LoaderFunctionArgs) {
	const lang = detectLangFromRequest(request);
	throw redirect(`/${lang}/homepage`, 302);
}

export default function Index() {
	return null;
}
