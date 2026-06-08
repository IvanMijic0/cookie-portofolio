import { useEffect, useRef, type PropsWithChildren } from "react";

type ScreenFitTextProps = PropsWithChildren<{
	minPx?: number;
	maxPx?: number;
	ssrSize?: string;
}>;

function ScreenFitText({ children, minPx = 8, maxPx = 512, ssrSize = "12vw" }: ScreenFitTextProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLSpanElement | null>(null);

	const fit = () => {
		const container = containerRef.current;
		const text = textRef.current;
		if (!container || !text) return;

		const containerWidth = container.clientWidth;
		if (containerWidth <= 0) return;

		// Set a baseline font size to measure the text's width
		const measureSize = 100;
		text.style.fontSize = `${measureSize}px`;
		const measuredWidth = text.scrollWidth;

		if (measuredWidth > 0) {
			// Calculate target font size proportionally and clamp it
			const calculatedSize = (containerWidth / measuredWidth) * measureSize;
			const finalSize = Math.min(maxPx, Math.max(minPx, calculatedSize));
			text.style.fontSize = `${finalSize}px`;
		}
	};

	useEffect(() => {
		fit();
		const ro = new ResizeObserver(fit);
		if (containerRef.current) ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="flex w-full items-center overflow-hidden">
			<span
				ref={textRef}
				style={{ fontSize: ssrSize }}
				className="inline-block whitespace-nowrap align-baseline [-webkit-text-stroke:0.01em_white] [text-stroke:0.01em_white]"
			>
				{children}
			</span>
		</div>
	);
}

export default ScreenFitText;
