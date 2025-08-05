import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	index( "routes/index.tsx" ),
	route( "book", "routes/_layout.tsx", [
		route( null, "routes/spreads/redirect-to-homepage.tsx" ),
		route( "homepage", "routes/spreads/homepage.tsx" ),
		route( "photography", "routes/spreads/photography.tsx", [
			route( "kill-them-with-kindness", "routes/spreads/kill-them-with-kindness.tsx" ),
			route( "human-rights", "routes/spreads/human-rights.tsx" ),
			route( "double-indemnity", "routes/spreads/double-indemnity.tsx" ),
		] ),
	] ),
	route( "*", "routes/not-found.tsx" ),
] satisfies RouteConfig;