import type { LoaderFunctionArgs } from "react-router";

export const loader = ({ request }: LoaderFunctionArgs) => {
	const origin = new URL(request.url).origin;
	const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
	return new Response(body, {
		headers: { "Content-Type": "text/plain" },
	});
};
