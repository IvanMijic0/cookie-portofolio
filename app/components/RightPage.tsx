import { forwardRef, useContext, type PropsWithChildren, type SyntheticEvent, useEffect, useRef, useState, lazy, Suspense } from "react";
import { useFlipbook } from "~/context/flipbook";
import { navSections } from "~/config";
import { useTranslate } from "~/context/I18nProvider";
import LanguageSwitcher from "./UI/LanguageSwitcher";
import { PageContext } from "~/context/page";

const AnimatedBookmarkIcon = lazy(() => import("~/components/AnimatedBookmark"));

type RightPageProps = PropsWithChildren<{ showBookmark?: boolean }>;

const RightPage = forwardRef<HTMLDivElement, RightPageProps>(
	({ children, showBookmark = true }, ref) => {
		const [open, setOpen] = useState(false);
		const [hovered, setHovered] = useState(false);
		const { goToSpread, ready } = useFlipbook();
		const { t, makeHref } = useTranslate();
		const { insideFlipPage } = useContext(PageContext);

		const bookmarkRef = useRef<HTMLDivElement>(null);

		const state: "open" | "peek" | "hidden" = open ? "open" : hovered ? "peek" : "hidden";

		const stopBubble = (e: SyntheticEvent) => {
			e.stopPropagation();
		};

		useEffect(() => {
			const close = () => setOpen(false);
			window.addEventListener("bookmark:close", close);
			return () => window.removeEventListener("bookmark:close", close);
		}, []);

		const innerContent = (
			<>
				{children}
				{showBookmark && (
					<div
						ref={bookmarkRef}
						className="absolute top-0 left-4 h-[45rem] w-[13rem] z-50 pointer-events-auto transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]"
						onMouseEnter={() => !open && setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						onMouseDownCapture={stopBubble}
						onPointerDownCapture={stopBubble}
						onTouchStartCapture={stopBubble}
						onTouchMoveCapture={stopBubble}
						onTouchEndCapture={stopBubble}
						style={{
							touchAction: "none",
							transform: open ? "translateY(0%)" : hovered ? "translateY(-86.5%)" : "translateY(-92.2%)"
						}}
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
													if (!ready) return;
													e.preventDefault();
													goToSpread(section.to);
												}}
												className="block cursor-pointer font-sans font-extrabold uppercase tracking-wide text-md mb-2 hover:opacity-90"
												href={section.to}
											>
												{section.title}
											</a>
											<ul className="pl-2 space-y-2">
												{section.items.map((item) => (
													<li key={item.to}>
														<a
															href={item.to}
															onClick={(e) => {
																if (!ready) return;
																e.preventDefault();
																goToSpread(item.to);
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
								<Suspense fallback={null}>
									<AnimatedBookmarkIcon
										state={open ? "up" : hovered ? "down" : "star"}
									/>
								</Suspense>
							</button>
						</div>
					</div>
				)}
			</>
		);

		if (insideFlipPage) {
			return innerContent;
		}

		return (
			<div ref={ref}
				className="page page--right relative w-full h-full overflow-hidden"
			>
				{innerContent}
			</div>
		);
	}
);

export default RightPage;
