import "./app.css";
import "yet-another-react-lightbox/styles.css";

import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, } from "react-router";
import type { Route } from "./+types/root";
import type { ReactNode } from "react";
import { UIProvider } from "~/context/ui";
import { FlipbookProvider } from "~/context/flipbook";
import { useLocation } from "react-router";
import type { Lang } from "./i18n/i18n";
import { I18nProvider } from "./context/I18nProvider";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{ rel: "preload", as: "font", href: "/fonts/bodoni-moda.woff2", type: "font/woff2", crossOrigin: "anonymous" },
	{
		rel: "preload",
		as: "font",
		href: "/fonts/bodoni-moda-italic.woff2",
		type: "font/woff2",
		crossOrigin: "anonymous"
	},
	{ rel: "preload", as: "font", href: "/fonts/libre-bodoni.woff2", type: "font/woff2", crossOrigin: "anonymous" },
	{
		rel: "preload",
		as: "font",
		href: "/fonts/libre-bodoni-italic.woff2",
		type: "font/woff2",
		crossOrigin: "anonymous"
	},
	{ rel: "preload", as: "font", href: "/fonts/roboto.woff2", type: "font/woff2", crossOrigin: "anonymous" },
	{ rel: "preload", as: "font", href: "/fonts/roboto-italic.woff2", type: "font/woff2", crossOrigin: "anonymous" },
	{ rel: "preload", as: "font", href: "/fonts/athene-voyage.woff2", type: "font/woff2", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<UIProvider>
			<FlipbookProvider>
				<Outlet />
			</FlipbookProvider>
		</UIProvider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
