import type { LoaderFunctionArgs } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const origin = new URL(request.url).origin;

	const langs = ["en", "bs"];

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

	const urls = ["/"];

	langs.forEach((lang) => {
		paths.forEach((p) => urls.push(`/${lang}${p}`));
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
			.map(
				(u) => `<url>
  <loc>${origin}${u}</loc>
  <changefreq>monthly</changefreq>
  <priority>${u === "/" ? "1.0" : "0.7"}</priority>
</url>`
			)
			.join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
