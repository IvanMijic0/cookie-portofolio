import type { LoaderFunctionArgs } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const origin = new URL(request.url).origin;

	const langs = [
		{ code: "en", hreflang: "en" },
		{ code: "bs", hreflang: "bs" },
	];

	const paths = [
		"/homepage",
		"/photography",
		"/photography/kill-them-with-kindness",
		"/photography/human-rights",
		"/photography/double-indemnity",
		"/graphic-design",
		"/graphic-design/kreativ-festival-art-direction",
		"/graphic-design/sjecas-li-se-doli-bel",
		"/graphic-design/chippsters-logo",
		"/illustration",
		"/illustration/mountain-fairy",
		"/illustration/austen-in-watercolor",
		"/illustration/mural",
		"/about-me",
		"/contact",
	];

	const entries: string[] = [];
	for (const p of paths) {
		for (const lang of langs) {
			const loc = `${origin}/${lang.code}${p}`;
			const alternates = langs
				.map(
					(alt) =>
						`<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${origin}/${alt.code}${p}" />`
				)
				.join("");

			entries.push(
				`<url>
  <loc>${loc}</loc>
  ${alternates}
  <changefreq>monthly</changefreq>
  <priority>${p === "/homepage" ? "1.0" : "0.7"}</priority>
</url>`
			);
		}
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
