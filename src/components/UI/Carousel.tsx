import { useEffect, useMemo, useRef, useState, type HTMLAttributeAnchorTarget, type SyntheticEvent } from "react";
import { motion, type PanInfo, type Transition } from "motion/react";
import { ChevronLeft, ChevronRight } from "~/assets";

type ImageItem = {
	id: number;
	title: string;
	src: string;
	alt?: string;
	href?: string;
	target?: HTMLAttributeAnchorTarget;
	rel?: string;
};

type CarouselProps = {
	items: ImageItem[];
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	loop?: boolean;
	rounded?: boolean;
};

const GAP = 0;
const SPRING_OPTIONS = { type: "spring", stiffness: 220, damping: 28, mass: 0.9 } as const;
const DRAG_ELASTIC = 0.12;

const Carousel = ({
	items,
	autoplay = false,
	autoplayDelay = 3000,
	pauseOnHover = false,
	loop = true,
	rounded = true,
}: CarouselProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [w, setW] = useState(0);
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const ro = new ResizeObserver(() => setW(el.clientWidth));
		ro.observe(el);
		setW(el.clientWidth);
		return () => ro.disconnect();
	}, []);
	const itemWidth = Math.max(240, w);
	const trackItemOffset = itemWidth + GAP;

	const hasLoop = loop && items.length > 1;

	const extended = useMemo(
		() => (hasLoop ? [items[items.length - 1], ...items, items[0]] : items),
		[hasLoop, items]
	);
	const startIndex = hasLoop ? 1 : 0;

	const [currentIndex, setCurrentIndex] = useState(startIndex);
	const [isHovered, setIsHovered] = useState(false);
	const [isResetting, setIsResetting] = useState(false);

	useEffect(() => {
		if (!pauseOnHover || !containerRef.current) return;
		const el = containerRef.current;
		const onEnter = () => setIsHovered(true);
		const onLeave = () => setIsHovered(false);
		el.addEventListener("mouseenter", onEnter);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			el.removeEventListener("mouseenter", onEnter);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, [pauseOnHover]);

	useEffect(() => {
		if (!(autoplay && (!pauseOnHover || !isHovered))) return;
		const t = setInterval(() => goNext(), autoplayDelay);
		return () => clearInterval(t);
	}, [autoplay, autoplayDelay, isHovered, pauseOnHover]);

	useEffect(() => {
		if (!hasLoop) return;
		if (currentIndex === 0) {
			setIsResetting(true);
			requestAnimationFrame(() => {
				setCurrentIndex(items.length);
				requestAnimationFrame(() => setIsResetting(false));
			});
		} else if (currentIndex === items.length + 1) {
			setIsResetting(true);
			requestAnimationFrame(() => {
				setCurrentIndex(1);
				requestAnimationFrame(() => setIsResetting(false));
			});
		}
	}, [currentIndex, hasLoop, items.length]);

	const NO_ANIM: Transition = { duration: 0 };
	const transition: Transition = isResetting ? NO_ANIM : SPRING_OPTIONS;

	const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const distance = info.offset.x;
		const velocity = info.velocity.x;

		const projected = distance + velocity * 0.35;

		let steps = Math.round(projected / trackItemOffset);
		steps = Math.max(-1, Math.min(1, steps));

		if (steps === 0 && Math.abs(projected) > trackItemOffset * 0.25) {
			steps = projected < 0 ? -1 : 1;
		}
		if (steps === 0) return;

		const next = currentIndex - steps;
		if (hasLoop) {
			setCurrentIndex(next);
		} else {
			setCurrentIndex(Math.max(0, Math.min(next, extended.length - 1)));
		}
	};

	const downPos = useRef<{ x: number; y: number } | null>(null);
	const goPrev = (e?: React.SyntheticEvent) => {
		e?.stopPropagation();
		downPos.current = null;
		if (hasLoop && currentIndex === startIndex) setCurrentIndex(0);
		else setCurrentIndex((p) => Math.max(p - 1, 0));
	};
	const goNext = (e?: SyntheticEvent) => {
		e?.stopPropagation();
		downPos.current = null;
		if (hasLoop && currentIndex === items.length) setCurrentIndex(items.length + 1);
		else setCurrentIndex((p) => Math.min(p + 1, extended.length - 1));
	};

	const DRAG_CLICK_TOLERANCE = 6;
	const onPointerDownCard = (e: React.PointerEvent) => {
		if ((e.target as HTMLElement).closest("button")) return;
		downPos.current = { x: e.clientX, y: e.clientY };
	};
	const wasTap = (e: React.PointerEvent) => {
		if (!downPos.current) return false;
		const dx = Math.abs(e.clientX - downPos.current.x);
		const dy = Math.abs(e.clientY - downPos.current.y);
		return dx <= DRAG_CLICK_TOLERANCE && dy <= DRAG_CLICK_TOLERANCE;
	};
	const activate = (item: ImageItem) => {
		if (!item.href) return;
		const target = item.target ?? "_self";
		if (target === "_blank") window.open(item.href, target, "noopener,noreferrer");
		else window.location.href = item.href;
	};

	const dotIndex = hasLoop ? (currentIndex - 1 + items.length) % items.length : currentIndex;

	const dragProps = hasLoop
		? {}
		: {
			dragConstraints: {
				left: -((itemWidth + GAP) * (extended.length - 1)),
				right: 0,
			},
		};

	return (
		<div className="w-full">
			<div
				ref={containerRef}
				className={`relative w-full overflow-hidden ${rounded ? "rounded-3xl" : ""} bg-black touch-pan-y select-none`}
			>
				<motion.div
					className="flex"
					drag="x"
					dragElastic={DRAG_ELASTIC}
					{...dragProps}
					style={{ gap: `${GAP}px`, willChange: "transform" }}
					onDragEnd={onDragEnd}
					animate={{ x: -(currentIndex * (itemWidth + GAP)) }}
					transition={transition}
				>
					{extended.map((item, idx) => (
						<motion.div
							key={`${item.id}-${idx}`}
							className="relative shrink-0 overflow-hidden bg-black cursor-pointer"
							style={{ width: itemWidth, height: Math.round(itemWidth * 1.1) }}
							onPointerDown={onPointerDownCard}
							onPointerUp={(e) => wasTap(e) && activate(item)}
							role={item.href ? "link" : "group"}
							tabIndex={item.href ? 0 : -1}
							aria-label={item.href ? `Open ${item.title}` : item.title}
						>
							<img
								src={item.src}
								alt={item.alt ?? item.title}
								className="absolute inset-0 h-full w-full object-cover pointer-events-none"
								draggable={false}
								loading="lazy"
							/>
							<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.9))]" />
							<div className="absolute inset-0 flex items-end justify-center pb-4 px-4 text-center">
								<p className="text-white font-display italic tracking-wide text-2xl drop-shadow">
									{item.title}
								</p>
							</div>
							<button
								type="button"
								onClick={goPrev}
								onPointerDown={(e) => e.stopPropagation()}
								aria-label="Previous"
								className="absolute left-1 top-1/2 -translate-y-1/2 p-2 pointer-events-auto"
							>
								<ChevronLeft className="h-8 w-8 text-white drop-shadow" />
							</button>
							<button
								type="button"
								onClick={goNext}
								onPointerDown={(e) => e.stopPropagation()}
								aria-label="Next"
								className="absolute right-1 top-1/2 -translate-y-1/2 p-2 pointer-events-auto"
							>
								<ChevronRight className="h-8 w-8 text-white drop-shadow" />
							</button>
						</motion.div>
					))}
				</motion.div>
			</div>

			<div className="mt-4 flex w-full justify-center">
				<div className="flex items-center gap-2">
					{items.map((_, i) => {
						const active = dotIndex === i;
						return (
							<motion.button
								key={i}
								onClick={() => setCurrentIndex(hasLoop ? i + 1 : i)}
								className={`h-2 w-2 rounded-full ${active ? "bg-[#333]" : "bg-black/30"}`}
								aria-label={`Go to slide ${i + 1}`}
								animate={{ scale: active ? 1.2 : 1 }}
								transition={{ duration: 0.15 }}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Carousel;
