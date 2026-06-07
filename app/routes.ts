import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	route("sitemap.xml", "routes/sitemap.xml.ts"),
	route("robots.txt", "routes/robots.txt.ts"),

	index("routes/index.tsx"),

	route(":lang", "routes/_layout.tsx", [
		index("routes/spreads/redirect-to-homepage.tsx"),

		route("homepage", "routes/spreads/homepage.tsx"),

		route("photography", "routes/spreads/photography.tsx"),
		route("photography/kill-them-with-kindness", "routes/spreads/kill-them-with-kindness.tsx"),
		route("photography/human-rights", "routes/spreads/human-rights.tsx"),
		route("photography/double-indemnity", "routes/spreads/double-indemnity.tsx"),

		route("graphic-design", "routes/spreads/graphic-design.tsx"),
		route("graphic-design/kreativ-festival-art-direction", "routes/spreads/kreativ-festival-art-direction.tsx"),
		route("graphic-design/sjecas-li-se-doli-bel", "routes/spreads/sjecas-li-se-doli-bel.tsx"),
		route("graphic-design/chippsters-logo", "routes/spreads/chippsters-logo.tsx"),

		route("illustration", "routes/spreads/illustration.tsx"),
		route("illustration/mountain-fairy", "routes/spreads/mountain-fairy.tsx"),
		route("illustration/austen-in-watercolor", "routes/spreads/austen-in-watercolor.tsx"),
		route("illustration/mural", "routes/spreads/mural.tsx"),

		route("about-me", "routes/spreads/about-me.tsx"),
		route("contact", "routes/spreads/contact.tsx"),
	]),

	route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
