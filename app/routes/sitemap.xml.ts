export const loader = async () => {
	const CANONICAL_ORIGIN = (
		import.meta.env.VITE_BASE_URL ||
		"https://amnakolic.com"
	).replace(/\/$/, "");

	const langs = [
		{ code: "en", hreflang: "en" },
		{ code: "bs", hreflang: "bs" },
	] as const;

	const paths = [
		"",
		"photography",
		"photography/kill-them-with-kindness",
		"photography/human-rights",
		"photography/double-indemnity",
		"graphic-design",
		"graphic-design/kreativ-festival-art-direction",
		"graphic-design/sjecas-li-se-doli-bel",
		"graphic-design/chippsters-logo",
		"illustration",
		"illustration/mountain-fairy",
		"illustration/austen-in-watercolor",
		"illustration/mural",
		"about-me",
		"contact",
	];

	const isoNow = new Date().toISOString();

	const entries: string[] = [];
	for (const p of paths) {
		const urlFor = (lang: string) =>
			`${CANONICAL_ORIGIN}${p ? `/${lang}/${p}` : `/${lang}`}`;

		for (const { code } of langs) {
			const alternates =
				langs
					.map(({ hreflang, code: alt }) =>
						`<xhtml:link rel="alternate" hreflang="${hreflang}" href="${urlFor(alt)}" />`
					)
					.join("") +
				`<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en")}" />`;

			entries.push(
				`<url>
  <loc>${urlFor(code)}</loc>
  ${alternates}
  <lastmod>${isoNow}</lastmod>
  <changefreq>${p === "" ? "weekly" : "monthly"}</changefreq>
  <priority>${p === "" ? "1.0" : "0.7"}</priority>
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
			"Content-Type": "application/xml; charset=UTF-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
