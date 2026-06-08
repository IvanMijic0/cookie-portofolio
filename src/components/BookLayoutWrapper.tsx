import { useState, useEffect, type ComponentType, type PropsWithChildren, Suspense, lazy } from "react";

const DesktopFlipbook = lazy(() => import("./DesktopFlipbook"));

const useIsMobile = (query = "(max-width: 1023px)", initial = false) => {
	const [matches, setMatches] = useState<boolean>(initial);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const mql = window.matchMedia(query);
		const onChange = () => setMatches(mql.matches);
		if (matches !== mql.matches) {
			setMatches(mql.matches);
		}
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [query, matches]);

	return matches;
};

export default function BookLayoutWrapper({ children, isMobile: serverIsMobile }: PropsWithChildren<{ lang: string; isMobile: boolean }>) {
	const isMobile = useIsMobile("(max-width: 1023px)", serverIsMobile);

	return isMobile ? (
		<Suspense fallback={null}>
			{children}
		</Suspense>
	) : (
		<Suspense fallback={null}>
			<DesktopFlipbook />
		</Suspense>
	);
}
