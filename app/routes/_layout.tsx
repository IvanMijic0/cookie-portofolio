import { ASPECT_RATIO, CRITICAL_IMAGES, FONT_STRINGS, spreadMap, spreads, TARGET_HEIGHT, TARGET_WIDTH } from "~/config";
import HTMLFlipBook from "react-pageflip";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import { useFlipbook } from "~/context/flipbook";
import { useInitialAssets } from "~/hooks";
import type { SpreadKey } from "~/types";
import { type LoaderFunctionArgs } from "react-router";
import clsx from "clsx";

type PageFlipApi = {
	flip: (pageIndex: number) => void;
	turnToPage?: (pageIndex: number) => void;
};

type FlipBookRef = {
	pageFlip: () => PageFlipApi | undefined;
};

type FlipEvent = { data: number };

export async function loader({ request }: LoaderFunctionArgs) {
	const ua = request.headers.get("user-agent") ?? "";
	const serverIsMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
	return ({ serverIsMobile });
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

const DesktopFlipbook = () => {
	const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
		width: TARGET_WIDTH,
		height: TARGET_HEIGHT,
	});
	const [remountId] = useState<number>(0);

	const activeRef = useRef<FlipBookRef | null>(null);
	const currentPageRef = useRef<number>(0);

	const navigate = useNavigate();
	const location = useLocation();
	const { setController } = useFlipbook();

	const assetsReady = useInitialAssets(FONT_STRINGS, CRITICAL_IMAGES);

	const slug = (location.pathname.replace("/", "") || "homepage") as string;
	const validatedSlug = (spreads.includes(slug as SpreadKey) ? slug : "homepage") as SpreadKey;
	const startPage = spreads.indexOf(validatedSlug) * 2;

	const allPages = useMemo<JSX.Element[]>(() => {
		return spreads.flatMap((key) => {
			const mod = spreadMap[key];
			const Left = mod.Left;
			const Right = mod.Right;
			return [<Left key={`${key}-left`} />, <Right key={`${key}-right`} />];
		});
	}, []);

	useEffect(() => {
		const updateSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			const marginX = (() => {
				if (width < 640) return 0.01;
				if (width < 768) return 0.02;
				if (width < 1024) return 0.02;
				if (width < 1280) return 0.03;
				if (width < 1536) return 0.08;
				if (width < 1650) return 0.1;
				if (width < 1720) return 0.05;
				if (width < 1840) return 0.1;
				return 0.12;
			})();

			const marginY = (() => {
				if (height < 600) return 0.02;
				if (height < 720) return 0.03;
				if (height < 850) return 0.04;
				if (height < 950) return 0.05;
				if (height < 1100) return 0.06;
				return 0.1;
			})();

			const availableWidth = Math.max(0, width * (1 - marginX * 2));
			const availableHeight = Math.max(0, height * (1 - marginY * 2));

			let finalWidth = availableWidth;
			let finalHeight = finalWidth / ASPECT_RATIO;

			if (finalHeight > availableHeight) {
				finalHeight = availableHeight;
				finalWidth = finalHeight * ASPECT_RATIO;
			}

			setDimensions({ width: finalWidth, height: finalHeight });
		};

		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		currentPageRef.current = startPage;
	}, [startPage]);

	useEffect(() => {
		const toPageIndex = (s: string): number => {
			const clean = s.replace(/^\/+/, "") as SpreadKey;
			const i = spreads.includes(clean) ? spreads.indexOf(clean) : -1;
			return i >= 0 ? i * 2 : 0;
		};

		const getApi = (): PageFlipApi | undefined => activeRef.current?.pageFlip?.();

		const goToIndex = (pageIndex: number): void => {
			const api = getApi();
			if (!api) return;
			if (typeof api.flip === "function") api.flip(pageIndex);
			else api.turnToPage?.(pageIndex);
		};

		const goToSpread = (s: string): void => goToIndex(toPageIndex(s));

		setController({
			ready: Boolean(activeRef.current),
			goToSpread,
			goToIndex,
		});
	}, [setController, remountId]);

	const handleFlip = (e: FlipEvent): void => {
		currentPageRef.current = Math.floor(e.data);
		const idx = Math.floor(e.data / 2);
		const nextSlug = spreads[idx];
		if (nextSlug) navigate(`/${nextSlug}`, { replace: true });
		window.dispatchEvent(new CustomEvent("bookmark:close"));
	};

	const bookProps = {
		width: dimensions.width,
		height: dimensions.height,
		flippingTime: 900,
		startZIndex: 0,
		maxShadowOpacity: 0.8,
		startPage: currentPageRef.current,
		usePortrait: false,
		showCover: false,
		mobileScrollSupport: true,
		useMouseEvents: true,
		clickEventForward: true,
		drawShadow: true,
		swipeDistance: 20,
		showPageCorners: true,
		disableFlipByClick: true,
		size: "fixed" as const,
		minWidth: 0,
		maxWidth: 0,
		minHeight: 0,
		maxHeight: 0,
		autoSize: false,
		onFlip: handleFlip,
		children: allPages,
		className: "",
		style: { margin: 0, display: "block" as const },
	};

	return (
		<div className="fixed inset-0 overflow-hidden w-full h-full">
			<div
				className={clsx(
					"absolute inset-0 flex justify-center items-center",
					!assetsReady && "invisible"
				)}
			>
				<HTMLFlipBook key={remountId} ref={activeRef} {...bookProps} />
			</div>
		</div>
	);
};
const MobileSpread = ({ slug }: { slug: SpreadKey }) => {
	const mod = spreadMap[slug] as any;
	const Mobile = mod?.Mobile;

	if (Mobile) {
		return (
			<div className="min-h-svh w-full overflow-y-auto">
				<Mobile />
			</div>
		);
	}

	const Left = mod.Left;
	const Right = mod.Right;

	return (
		<div className="min-h-svh w-full overflow-y-auto bg-white">
			<div className="mx-auto max-w-screen-lg px-4 py-6 space-y-6">
				<Left />
				<Right />
			</div>
		</div>
	);
};

const BookLayout = () => {
	const { serverIsMobile } = useLoaderData<typeof loader>();
	const isMobile = useIsMobile("(max-width: 1023px)", serverIsMobile);
	const location = useLocation();

	const slug = location.pathname.replace("/", "") || "homepage";
	const validatedSlug = (spreads.includes(slug as SpreadKey) ? slug : "homepage") as SpreadKey;

	return isMobile ? <MobileSpread slug={validatedSlug} /> : <DesktopFlipbook />;
};

export default BookLayout;
