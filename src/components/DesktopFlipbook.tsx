import {
	ASPECT_RATIO,
	TARGET_HEIGHT,
	TARGET_WIDTH,
} from "~/config";
import { spreadMap, spreads } from "~/config/spreads";
import HTMLFlipBook from "react-pageflip";
import { useNavigate, useLocation } from "~/hooks/useRouter";
import {
	useEffect,
	useMemo,
	useRef,
	useState,
	Suspense,
	forwardRef,
	createContext,
	useContext,
	type ComponentType,
	type JSX,
} from "react";
import { useFlipbook } from "~/context/flipbook";
import clsx from "clsx";
import { PageContext } from "~/context/page";

const PageActiveContext = createContext<{ currentPage: number; renderAll: boolean }>({ currentPage: 0, renderAll: false });

type PageFlipApi = { flip: (pageIndex: number) => void; turnToPage?: (pageIndex: number) => void };
type FlipBookRef = { pageFlip: () => PageFlipApi | undefined };
type FlipEvent = { data: number };

const LANGS = ["en", "ba"] as const;
type Lang = (typeof LANGS)[number];

function parsePathname(pathname: string): { lang: Lang; slug: string } {
	const parts = pathname.split("/").filter(Boolean);
	const maybeLang = parts[0];
	const hasLang = LANGS.includes(maybeLang as Lang);
	const lang = (hasLang ? maybeLang : "en") as Lang;
	const slugParts = hasLang ? parts.slice(1) : parts;
	const slug = slugParts.join("/") || "homepage";
	return { lang, slug };
}

const FlipPage = forwardRef<HTMLDivElement, { Component: ComponentType<any>; index: number; isRight?: boolean }>(
	({ Component, index, isRight }, ref) => {
		const { currentPage, renderAll } = useContext(PageActiveContext);
		const [hasRendered, setHasRendered] = useState(false);

		// Virtualized window: current spread (currentPage, currentPage+1) + adjacent spreads
		const isNear = index >= currentPage - 2 && index <= currentPage + 3;

		useEffect(() => {
			if (isNear) {
				setHasRendered(true);
			}
		}, [isNear]);

		const shouldRender = isNear || hasRendered || renderAll;

		return (
			<div ref={ref} className={clsx("page relative w-full h-full overflow-hidden", isRight ? "page--right" : "page--left")}>
				<PageContext.Provider value={{ insideFlipPage: true }}>
					<Suspense fallback={<div className="w-full h-full bg-white" />}>
						{shouldRender ? <Component /> : <div className="w-full h-full bg-white" />}
					</Suspense>
				</PageContext.Provider>
			</div>
		);
	}
);
FlipPage.displayName = "FlipPage";

function calculateDimensions(): { width: number; height: number } {
	if (typeof window === "undefined") {
		return { width: TARGET_WIDTH, height: TARGET_HEIGHT };
	}
	const width = window.innerWidth;
	const height = window.innerHeight;

	const marginX = (() => {
		if (width < 640) return 0.01;
		if (width < 768) return 0.02;
		if (width < 1024) return 0.02;
		if (width < 1280) return 0.03;
		if (width < 1536) return 0.08;
		if (width < 1650) return 0.01;
		if (width < 1720) return 0.05;
		if (width < 1840) return 0.01;
		if (height < 2000) return 0.02;
		return 0.12;
	})();

	const marginY = (() => {
		if (height < 600) return 0.01;
		if (height < 720) return 0.01;
		if (height < 850) return 0.01;
		if (height < 950) return 0.01;
		if (height < 1100) return 0.01;
		if (height < 2000) return 0.05;
		return 0.02;
	})();

	const availableWidth = Math.max(0, width * (1 - marginX * 2));
	const availableHeight = Math.max(0, height * (1 - marginY * 2));

	let finalWidth = availableWidth;
	let finalHeight = finalWidth / ASPECT_RATIO;

	if (finalHeight > availableHeight) {
		finalHeight = availableHeight;
		finalWidth = finalHeight * ASPECT_RATIO;
	}

	return { width: finalWidth, height: finalHeight };
}

const DesktopFlipbook = () => {
	const [dimensions, setDimensions] = useState<{ width: number; height: number }>(calculateDimensions);
	const [remountId] = useState<number>(0);

	const activeRef = useRef<FlipBookRef | null>(null);
	const currentPageRef = useRef<number>(0);

	const navigate = useNavigate();
	const location = useLocation();
	const { setController } = useFlipbook();

	const { slug } = parsePathname(location.pathname);
	const validatedSlug = spreads.includes(slug as any) ? slug : "homepage";
	const startPage = spreads.indexOf(validatedSlug as any) * 2;

	const [currentPage, setCurrentPage] = useState<number>(startPage);
	const [renderAll, setRenderAll] = useState(false);

	useEffect(() => {
		let triggered = false;
		const triggerRenderAll = () => {
			if (triggered) return;
			triggered = true;
			setRenderAll(true);
			cleanup();
		};

		// 3 seconds timeout to start preloading of all remaining pages in the background
		const timer = setTimeout(triggerRenderAll, 3000);

		// Eagerly trigger preload on any user interaction (to load pages before they are flipped to)
		const events = ["mousedown", "mousemove", "keydown", "touchstart"];
		const cleanup = () => {
			clearTimeout(timer);
			events.forEach(event => {
				window.removeEventListener(event, triggerRenderAll);
			});
		};

		events.forEach(event => {
			window.addEventListener(event, triggerRenderAll, { passive: true });
		});

		return cleanup;
	}, []);

	const allPages = useMemo<JSX.Element[]>(() => {
		return spreads.flatMap((key, idx) => {
			const mod = spreadMap[key];
			const leftIndex = idx * 2;
			const rightIndex = idx * 2 + 1;
			return [
				<FlipPage key={`${key}-left`} index={leftIndex} Component={mod.Left} />,
				<FlipPage key={`${key}-right`} index={rightIndex} Component={mod.Right} isRight />
			];
		});
	}, []);

	useEffect(() => {
		const updateSize = () => {
			setDimensions(calculateDimensions());
		};

		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		currentPageRef.current = startPage;
		setCurrentPage(startPage);
		const api = activeRef.current?.pageFlip?.();
		if (api) {
			if (typeof api.flip === "function") api.flip(startPage);
			else api.turnToPage?.(startPage);
		}
	}, [startPage]);

	useEffect(() => {
		const toPageIndex = (pathLike: string): number => {
			const { slug } = parsePathname(pathLike.startsWith("/") ? pathLike : `/${pathLike}`);
			const clean = slug;
			const i = spreads.includes(clean as any) ? spreads.indexOf(clean as any) : -1;
			return i >= 0 ? i * 2 : 0;
		};

		const getApi = (): PageFlipApi | undefined => activeRef.current?.pageFlip?.();

		const goToIndex = (pageIndex: number): void => {
			const api = getApi();
			if (!api) return;
			setCurrentPage(pageIndex);
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
		const newPage = Math.floor(e.data);
		currentPageRef.current = newPage;
		setCurrentPage(newPage);
		const idx = Math.floor(newPage / 2);
		const nextSlug = spreads[idx];

		const lang = localStorage.getItem('lang') || 'en';

		if (nextSlug) navigate(`/${lang}/${nextSlug}`, { replace: true });
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
			<div className="absolute inset-0 flex justify-center items-center">
				<PageActiveContext.Provider value={{ currentPage, renderAll }}>
					<HTMLFlipBook key={remountId} ref={activeRef} {...bookProps} />
				</PageActiveContext.Provider>
			</div>
		</div>
	);
};

export default DesktopFlipbook;
