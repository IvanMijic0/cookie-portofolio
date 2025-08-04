import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
	route( "book", "routes/_layout.tsx", [
		route( "spread-1", "routes/spreads/spread-1.tsx" ),
		route( "spread-2", "routes/spreads/spread-2.tsx" ),
	] )] satisfies RouteConfig;