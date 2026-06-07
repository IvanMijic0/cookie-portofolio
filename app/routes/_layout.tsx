import {
	spreadMap,
	spreads,
} from "~/config";
import {
	useLoaderData,
	useLocation,
	Outlet,
	type LoaderFunctionArgs,
} from "react-router";
import {
	useEffect,
	useState,
	Suspense,
	lazy,
} from "react";
import type { SpreadKey } from "~/types";
import { I18nProvider } from "~/context/I18nProvider";

export async function loader({ request }: LoaderFunctionArgs) {
	const ua = request.headers.get("user-agent") ?? "";
	const serverIsMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
			ua
		);
	return { serverIsMobile };
}

const LANGS = ["en", "ba"] as const;
type Lang = (typeof LANGS)[number];

function parsePathname(pathname: string): { lang: Lang; slug: SpreadKey } {
	const parts = pathname.split("/").filter(Boolean);
	const maybeLang = parts[0];
	const hasLang = LANGS.includes(maybeLang as Lang);
	const lang = (hasLang ? maybeLang : "en") as Lang;
	const slugParts = hasLang ? parts.slice(1) : parts;
	const slug = (slugParts.join("/") || "homepage") as SpreadKey;
	return { lang, slug };
}

const useIsMobile = (query = "(max-width: 1023px)", initial = false) => {
	const [matches, setMatches] = useState<boolean>(initial);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const mql = window.matchMedia(query);
		const onChange = () => setMatches(mql.matches);
		setMatches(mql.matches);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [query]);

	return matches;
};

const LazyDesktopFlipbook = lazy(() => import("~/components/DesktopFlipbook"));

const BookLayout = () => {
	const { serverIsMobile } = useLoaderData<typeof loader>();
	const isMobile = useIsMobile("(max-width: 1023px)", serverIsMobile);
	const location = useLocation();

	const { lang } = parsePathname(location.pathname);

	return (
		<I18nProvider lang={lang}>
			{isMobile ? (
				<Outlet />
			) : (
				<Suspense fallback={null}>
					<LazyDesktopFlipbook />
				</Suspense>
			)}
		</I18nProvider>
	);
};

export default BookLayout;
