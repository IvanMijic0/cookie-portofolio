import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { Star } from "~/assets";
import { contactButtons, navSections } from "~/config";
import { useLocation } from "~/hooks/useRouter";
import clsx from "clsx";
import Portal from "../Portal";
import { useTranslate } from "~/context/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

type NormalizeFn = (s: string) => string;

type LinksOverlayProps = {
	current: string;
	normalize: NormalizeFn;
	active: boolean;
};

type NavProps = {
	initialActive?: boolean;
};

const Nav = ({ initialActive = false }: NavProps) => {
	const [active, setActive] = useState(false);
	const [renderOverlay, setRenderOverlay] = useState(initialActive);
	const { pathname } = useLocation();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!initialActive) return;
		setRenderOverlay(true);
		const raf = requestAnimationFrame(() => setActive(true));
		return () => cancelAnimationFrame(raf);
	}, [initialActive]);

	useEffect(() => {
		if (active) {
			setRenderOverlay(true);
			return;
		}

		const timer = setTimeout(() => setRenderOverlay(false), 260);
		return () => clearTimeout(timer);
	}, [active]);

	const normalize = (s: string) => s.replace(/\/+$/, "");
	const current = normalize(pathname);
	const isHomepage = current.endsWith("/homepage") || current === "/";
	const baseColor = isHomepage ? "#ffffff" : "#000000";

	return (
		<Portal>
			<div className="fixed inset-0 z-[100] pointer-events-none">
				<div
					className={clsx(
						"fixed inset-x-0 top-0 h-20 transition-all duration-300 pointer-events-none",
						scrolled
							? "backdrop-blur bg-white/70"
							: isHomepage
								? ""
								: "bg-gradient-to-b from-white/70 via-white/70 to-transparent"
					)}
				/>

				<div className="pointer-events-auto">
					<HamburgerButton active={active} setActive={setActive} current={current} />
					{renderOverlay && (
						<LinksOverlay active={active} current={current} normalize={normalize} />
					)}
				</div>

				{isHomepage && (
					<div className="fixed inset-x-0 top-6 pointer-events-none">
						<div
							className={clsx(
								"mx-auto w-fit flex items-center gap-6 pointer-events-auto transition duration-200 ease-out",
								active ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
							)}
						>
							{contactButtons.map(({ label, to, icon: Icon }) => (
								<a
									key={label}
									href={to}
									className="inline-flex items-center justify-center bg-white rounded-full p-2 shadow-md"
								>
									<Icon className="h-6 w-6 text-[#379C8D]" aria-hidden />
									<span className="sr-only">{label}</span>
								</a>
							))}
						</div>
					</div>
				)}

				<div className="fixed right-6 top-4 z-[100] pointer-events-none">
					<div
						className="flex flex-col items-center gap-1 pointer-events-auto transition-colors duration-200 ease-out"
						style={{ color: active ? "#000000" : baseColor }}
					>
						<Star className="min-w-8 min-h-8 h-8 w-8" />
						<span className="font-logo">AMNA</span>
					</div>
				</div>
			</div>
		</Portal>
	);
};

const LinksOverlay = ({ active, current, normalize }: LinksOverlayProps) => {
	return (
		<nav
			className={clsx(
				"fixed z-40 h-screen w-full text-[#272727] overflow-hidden transition-opacity duration-200 ease-out",
				active ? "opacity-100" : "opacity-0"
			)}
			aria-hidden={!active}
		>
			<LinksContainer active={active} current={current} normalize={normalize} />
		</nav>
	);
};

export const LinksContainer = ({ active, current, normalize }: LinksOverlayProps) => {
	const { t, makeHref } = useTranslate();

	const isActiveSection = (href: string) => {
		const h = normalize(href);
		return current === h || current.startsWith(h + "/");
	};
	const isActiveItem = (href: string) => normalize(href) === current;

	return (
		<div
			className={clsx(
				"space-y-0 xs:space-y-2 overflow-y-auto p-12 pl-6 mt-6 xs:mt-10 md:pl-20 transition duration-200 ease-out motion-reduce:transition-none",
				active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
			)}
		>
			<div className="flex w-full justify-between items-start">
				<h2
					className={clsx(
						"text-5xl xs:text-6xl font-serif pb-4 transition duration-200 ease-out motion-reduce:transition-none",
						active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
					)}
				>
					contents
				</h2>

				<div
					className={clsx(
						"pt-1 xs:pt-4 transition duration-200 ease-out motion-reduce:transition-none",
						active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
					)}
				>
					<LanguageSwitcher />
				</div>
			</div>

			<ol className="space-y-4 xs:space-y-6">
				{navSections(t, makeHref).map((section, sectionIndex) => {
					const sectionHref = `${section.to}`;
					const sectionActive = isActiveSection(sectionHref);
					const delay = active ? `${120 + sectionIndex * 35}ms` : "0ms";

					return (
						<li
							key={section.title}
							className={clsx(
								"grid grid-cols-[2ch_1fr] items-start gap-12 transition duration-200 ease-out motion-reduce:transition-none",
								active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
							)}
							style={{ transitionDelay: delay }}
						>
							<span className="text-right tabular-nums font-sans text-4xl xs:text-5xl font-light transform-gpu">
								{section.pageNumber}
							</span>

							<div className="flex flex-col gap-1">
								<a
									href={sectionHref}
									className={[
										"font-sans text-xl xs:text-2xl font-black cursor-pointer transition-colors transform-gpu",
										sectionActive
											? "text-[#379C8D] underline underline-offset-4 decoration-2"
											: "hover:opacity-90"
									].join(" ")}
								>
									{section.title}
								</a>

								<ul className="ml-3 space-y-1">
									{section.items.map((item, itemIndex) => {
										const itemHref = `${item.to}`;
										const itemActive = isActiveItem(itemHref);
										const itemDelay = active
											? `${170 + sectionIndex * 35 + itemIndex * 20}ms`
											: "0ms";

										return (
											<li
												key={item.to}
												className={clsx(
													"transition duration-200 ease-out motion-reduce:transition-none",
													active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
												)}
												style={{ transitionDelay: itemDelay }}
											>
												<a
													href={itemHref}
													className={[
														"font-serif italic text-md xs:text-lg cursor-pointer transition-colors transform-gpu",
														itemActive
															? "text-[#379C8D] underline underline-offset-4 decoration-2"
															: "hover:opacity-90"
													].join(" ")}
												>
													{item.label}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

const HamburgerButton = ({
	active,
	setActive,
	current
}: {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	current: string
}) => {
	const isHomepage = current.endsWith("/homepage") || current === "/";
	const closedColor = isHomepage ? "#ffffff" : "#000000";
	const barColor = active ? "#000000" : closedColor;

	return (
		<>
			<div
				className="fixed z-10 bg-white transition-all duration-300 ease-out motion-reduce:transition-none"
				style={{
					top: 0,
					left: 0,
					transformOrigin: "left top",
					width: active ? "100%" : "100px",
					height: active ? "100vh" : "100px",
					opacity: active ? 1 : 0,
					transitionDelay: active ? "0ms" : "250ms",
				}}
			/>
			<button
				type="button"
				onClick={() => setActive((pv) => !pv)}
				className="group fixed left-1 top-1 z-50 h-20 w-20 bg-black/0 transition-all hover:bg-black/20"
				aria-label={active ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={active}
			>
				<span
					className="absolute block h-[1px] w-10 transition-all duration-200 ease-out motion-reduce:transition-none"
					style={{
						top: active ? "50%" : "35%",
						left: "50%",
						transform: `translate(-50%, -50%) rotate(${active ? "45deg" : "0deg"})`,
						backgroundColor: barColor,
					}}
				/>
				<span
					className="absolute block h-[1px] w-10 transition-all duration-200 ease-out motion-reduce:transition-none"
					style={{
						top: "50%",
						left: "50%",
						transform: `translate(-50%, -50%) rotate(${active ? "-45deg" : "0deg"})`,
						backgroundColor: barColor,
					}}
				/>
				<span
					className="absolute block h-[1px] w-5 transition-all duration-200 ease-out motion-reduce:transition-none"
					style={{
						bottom: active ? "50%" : "35%",
						left: active ? "74.5%" : "calc(50% + 10px)",
						transform: `translate(-150%, 50%) rotate(${active ? "45deg" : "0deg"})`,
						backgroundColor: barColor,
					}}
				/>
			</button>
		</>
	);
};

export default Nav;
