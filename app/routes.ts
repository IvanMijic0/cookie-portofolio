import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	index("routes/index.tsx"),
	route(null, "routes/_layout.tsx", [
		route(null, "routes/spreads/redirect-to-homepage.tsx"),
		route("homepage", "routes/spreads/homepage.tsx"),
		route("photography", "routes/spreads/photography.tsx", [
			route("kill-them-with-kindness", "routes/spreads/kill-them-with-kindness.tsx"),
			route("human-rights", "routes/spreads/human-rights.tsx"),
			route("double-indemnity", "routes/spreads/double-indemnity.tsx"),
		]),
		route("graphic-design", "routes/spreads/graphic-design.tsx", [
			route("kreativ-festival-art-direction", "routes/spreads/kreativ-festival-art-direction.tsx"),
			route("sjecas-li-se-doli-bel", "routes/spreads/sjecas-li-se-doli-bel.tsx"),
			route("chippsters-logo", "routes/spreads/chippsters-logo.tsx"),
		]),
		route("illustration", "routes/spreads/illustration.tsx", [
			route("mountain-fairy", "routes/spreads/mountain-fairy.tsx"),
			route("austen-in-watercolor", "routes/spreads/austen-in-watercolor.tsx"),
			route("mural", "routes/spreads/mural.tsx"),
		]),
		route("about-me", "routes/spreads/about-me.tsx"),
		route("contact", "routes/spreads/contact.tsx"),
	]),

	route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
