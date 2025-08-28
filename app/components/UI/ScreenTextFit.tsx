import { useLayoutEffect, useRef, type PropsWithChildren } from "react";

type ScreenFitTextProps = PropsWithChildren<{
	minPx?: number;
	maxPx?: number;
}>;

function ScreenFitText({ children, minPx = 8, maxPx = 512 }: ScreenFitTextProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLSpanElement | null>(null);

	const fit = () => {
		const container = containerRef.current;
		const text = textRef.current;
		if (!container || !text) return;

		const containerWidth = container.clientWidth;
		if (containerWidth <= 0) return;

		text.style.fontSize = `${minPx}px`;

		let lo = minPx;
		let hi = maxPx;
		while (lo <= hi) {
			const mid = Math.floor((lo + hi) / 2);
			text.style.fontSize = `${mid}px`;
			if (text.scrollWidth <= containerWidth) {
				lo = mid + 1;
			} else {
				hi = mid - 1;
			}
		}
		text.style.fontSize = `${hi}px`;
	};

	useLayoutEffect(() => {
		fit();
		const ro = new ResizeObserver(fit);
		if (containerRef.current) ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="flex w-full items-center overflow-hidden">
			<span
				ref={textRef}
				className="inline-block whitespace-nowrap align-baseline [-webkit-text-stroke:0.01em_white] [text-stroke:0.01em_white]"
			>
				{children}
			</span>
		</div>
	);
}

export default ScreenFitText;
