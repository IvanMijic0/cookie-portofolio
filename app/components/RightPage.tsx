import { motion, type Variants } from "framer-motion";
import { forwardRef, type PropsWithChildren, type SyntheticEvent, useEffect, useRef, useState, } from "react";
import { AnimatedBookmarkIcon } from "~/components";
import { useFlipbook } from "~/context/flipbook";
import { navSections } from "~/config";
import { useTranslate } from "~/context/I18nProvider";
import { LanguageSwitcher } from "./UI";

type RightPageProps = PropsWithChildren<{ showBookmark?: boolean }>;

const variants: Variants = {
	hidden: { y: "-92.2%" },
	peek: { y: "-86.5%" },
	open: { y: "0%" },
};

const RightPage = forwardRef<HTMLDivElement, RightPageProps>(
	({ children, showBookmark = true }, ref) => {
		const [open, setOpen] = useState(false);
		const [hovered, setHovered] = useState(false);
		const { goToSpread, ready } = useFlipbook();
		const { t, makeHref } = useTranslate();

		const bookmarkRef = useRef<HTMLDivElement>(null);

		const state: keyof typeof variants = open ? "open" : hovered ? "peek" : "hidden";

		const stopBubble = (e: SyntheticEvent) => {
			e.stopPropagation();
		};

		useEffect(() => {
			const close = () => setOpen(false);
			window.addEventListener("bookmark:close", close);
			return () => window.removeEventListener("bookmark:close", close);
		}, []);

		return (
			<div ref={ref}
				className="page page--right relative w-full h-full overflow-hidden"
			>
				{children}
				{showBookmark && (
					<motion.div
						ref={bookmarkRef}
						className="absolute top-0 left-4 h-[45rem] w-[13rem] z-50 pointer-events-auto"
						variants={variants}
						animate={state}
						initial="hidden"
						transition={{
							type: "spring",
							stiffness: 400,
							damping: state === "hidden" ? 48 : 32,
							mass: 0.8,
						}}
						onHoverStart={() => !open && setHovered(true)}
						onHoverEnd={() => setHovered(false)}
						onMouseDownCapture={stopBubble}
						onPointerDownCapture={stopBubble}
						onTouchStartCapture={stopBubble}
						onTouchMoveCapture={stopBubble}
						onTouchEndCapture={stopBubble}
						style={{ touchAction: "none" }}
					>
						<div
							className="
								absolute inset-0 h-full w-full
								bg-[url('/bookmark.webp')] bg-no-repeat bg-[length:115%_105%] bg-center
								border-white border-6 shadow-lg py-2
								flex flex-col items-center justify-between
								outline-none
                           "
						>
							<nav
								className="w-full flex justify-center px-4 pt-4 text-white"
							>
								<ul className="space-y-6">
									{navSections(t, makeHref).map((section) => (
										<li key={section.title}>
											<a
												onClick={(e) => {
													e.preventDefault();
													if (ready) goToSpread(section.to);
													setOpen(false);
												}}
												className="block cursor-pointer font-sans font-extrabold uppercase tracking-wide text-md mb-2 hover:opacity-90"
											>
												{section.title}
											</a>
											<ul className="pl-2 space-y-2">
												{section.items.map((item) => (
													<li key={item.to}>
														<a
															onClick={(e) => {
																e.preventDefault();
																if (ready) goToSpread(item.to);
																setOpen(false);
															}}
															className="block cursor-pointer text-sm font-serif italic text-white/90 hover:text-white transition"
														>
															{item.label}
														</a>
													</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</nav>
							<div className='flex w-full items-start px-4'>
								<LanguageSwitcher isBookmark />
							</div>
							<button
								type="button"
								aria-label={open ? "Close bookmark" : "Open bookmark"}
								className="cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									setOpen((prev) => {
										const next = !prev;
										if (!next) setHovered(false);
										return next;
									});
								}}
							>
								<AnimatedBookmarkIcon
									state={open ? "up" : hovered ? "down" : "star"}
								/>
							</button>
						</div>
					</motion.div>
				)}
			</div>
		);
	}
);

export default RightPage;
