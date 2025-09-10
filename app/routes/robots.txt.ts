import type { LoaderFunctionArgs } from "react-router";

export const loader = ({ request }: LoaderFunctionArgs) => {
	const origin = (import.meta.env.VITE_BASE_URL || new URL(request.url).origin).replace(/\/$/, "");
	const body =
		`User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300",
		},
	});
};
