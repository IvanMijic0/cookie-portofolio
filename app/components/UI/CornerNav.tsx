import { type Dispatch, type SetStateAction, useState } from "react";
import { AnimatePresence, motion, type Variants, type Transition } from "framer-motion";
import { Star } from "~/assets";
import { contactButtons, navSections } from "~/config";
import { useLocation } from "react-router";

type NormalizeFn = (s: string) => string;

type LinksOverlayProps = {
	current: string;
	normalize: NormalizeFn;
};

const Nav = () => {
	const [active, setActive] = useState(false);
	const { pathname } = useLocation();

	const normalize = (s: string) => s.replace(/\/+$/, "");
	const current = normalize(pathname);

	const isHomepage =
		current === "/book/homepage" || current === "/homepage" || current === "/book";

	const baseColor = isHomepage ? "#ffffff" : "#000000";

	return (
		<>
			{!isHomepage && (
				<div className="pointer-events-none fixed inset-x-0 top-0 z-30">
					<div className="h-14 bg-gradient-to-b from-white/70 via-white/50 to-transparent" />
				</div>
			)}
			<HamburgerButton active={active} setActive={setActive} current={current} />

			<AnimatePresence>
				{active && <LinksOverlay current={current} normalize={normalize} />}
			</AnimatePresence>
			{isHomepage && (
				<div className="fixed inset-x-0 top-6 z-40 pointer-events-none">
					<motion.div
						className="mx-auto w-fit flex items-center gap-6 pointer-events-auto"
						initial={false}
						animate={{ opacity: active ? 0 : 1, scale: active ? 0.98 : 1 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
					>
						{contactButtons.map(({ label, to, icon: Icon }) => (
							<a key={label} href={to} className="inline-flex items-center justify-center bg-white rounded-full p-2 shadow-md">
								<Icon className="h-6 w-6 text-[#379C8D]" aria-hidden />
								<span className="sr-only">{label}</span>
							</a>
						))}
					</motion.div>
				</div>
			)}

			<div className="fixed z-40 right-6 top-4">
				<motion.div
					className="flex flex-col items-center gap-1"
					initial={false}
					animate={{ color: active ? "#000000" : baseColor }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<Star className="min-w-8 min-h-8 h-8 w-8" />
					<span className="font-logo">AMNA</span>
				</motion.div>
			</div>
		</>
	);
};

const LinksOverlay = ({ current, normalize }: LinksOverlayProps) => {
	return (
		<nav className="fixed z-40 h-screen w-full text-[#272727] overflow-hidden">
			<LinksContainer current={current} normalize={normalize} />
		</nav>
	);
};

const LinksContainer = ({ current, normalize }: LinksOverlayProps) => {
	const isActiveSection = (href: string) => {
		const h = normalize(href);
		return current === h || current.startsWith(h + "/");
	};

	const isActiveItem = (href: string) => normalize(href) === current;

	return (
		<motion.div
			className="space-y-2 p-12 pl-6 mt-18 md:pl-20"
			variants={container}
			initial="hidden"
			animate="show"
			exit="hidden"
		>
			<motion.h2 className="text-6xl font-serif pb-4" variants={titleV}>
				contents
			</motion.h2>

			<motion.ol className="space-y-6" variants={container}>
				{navSections.map((section) => {
					const sectionHref = `/book${section.to}`;
					const sectionActive = isActiveSection(sectionHref);

					return (
						<motion.li
							key={section.title}
							className="grid grid-cols-[2ch_1fr] items-start gap-12"
							variants={row}
						>
							<motion.span
								className="text-right tabular-nums font-sans text-5xl font-light"
								variants={numberV}
							>
								{section.pageNumber}
							</motion.span>

							<div className="flex flex-col gap-1">
								<motion.a
									variants={titleV}
									href={sectionHref}
									className={[
										"font-sans text-2xl font-black cursor-pointer transition",
										sectionActive
											? "text-[#379C8D] underline underline-offset-4 decoration-2"
											: "hover:opacity-90",
									].join(" ")}
									whileHover={{ x: 2 }}
									whileTap={{ scale: 0.98 }}
								>
									{section.title}
								</motion.a>

								<motion.ul className="ml-3 space-y-1" variants={subList}>
									{section.items.map((item) => {
										const itemHref = `/book${item.to}`;
										const itemActive = isActiveItem(itemHref);

										return (
											<motion.li key={item.to} variants={subItem}>
												<motion.a
													href={itemHref}
													className={[
														"font-serif italic text-lg cursor-pointer transition",
														itemActive
															? "text-[#379C8D] underline underline-offset-4 decoration-2"
															: "hover:opacity-90",
													].join(" ")}
													whileHover={{ x: 2 }}
													whileTap={{ scale: 0.98 }}
												>
													{item.label}
												</motion.a>
											</motion.li>
										);
									})}
								</motion.ul>
							</div>
						</motion.li>
					);
				})}
			</motion.ol>
		</motion.div>
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
	const isHomepage =
		current === "/book/homepage" || current === "/homepage" || current === "/book";

	const HAMBURGER_VARIANTS = makeHamburgerVariants(!isHomepage);

	return (
		<>
			<motion.div
				initial={false}
				animate={active ? "open" : "closed"}
				variants={UNDERLAY_VARIANTS}
				style={{ top: 0, left: 0, transformOrigin: "left top" }}
				className="fixed z-10 bg-transparent"
			/>
			<motion.button
				initial={false}
				animate={active ? "open" : "closed"}
				onClick={() => setActive(pv => !pv)}
				className="group fixed left-1 top-1 z-50 h-20 w-20 bg-black/0 transition-all hover:bg-black/20"
			>
				<motion.span
					variants={HAMBURGER_VARIANTS.top}
					className="absolute block h-[1px] w-10"
					style={{ y: "-50%", left: "50%", x: "-50%" }}
				/>
				<motion.span
					variants={HAMBURGER_VARIANTS.middle}
					className="absolute block h-[1px] w-10"
					style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
				/>
				<motion.span
					variants={HAMBURGER_VARIANTS.bottom}
					className="absolute block h-[1px] w-5"
					style={{ x: "-150%", y: "50%" }}
				/>
			</motion.button>
		</>
	);
};

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const DURATION = 0.22;

const container: Variants = {
	hidden: { opacity: 0, y: 8 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: DURATION,
			ease: EASE,
			delayChildren: 0.12,
			staggerChildren: 0.035,
		},
	},
};

const row: Variants = {
	hidden: { opacity: 0, y: 6 },
	show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

const numberV: Variants = row;
const titleV: Variants = row;

const subList: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.02, delayChildren: 0.05 } },
};

const subItem: Variants = row;

const UNDERLAY_VARIANTS: Variants = {
	open: {
		width: "100%",
		height: "100vh",
		backgroundColor: "rgba(255,255,255,1)",
		transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
	},
	closed: {
		width: "100px",
		height: "100px",
		backgroundColor: "rgba(255,255,255,0)",
		transition: {
			delay: 0.25,
			type: "spring",
			mass: 3,
			stiffness: 400,
			damping: 50,
		},
	},
};

const makeHamburgerVariants = (forceBlack: boolean): Record<"top" | "middle" | "bottom", Variants> => {
	const openColor = forceBlack ? "#000" : "#000";
	const closedColor = forceBlack ? "#000" : "#fff";
	return {
		top: {
			open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"], backgroundColor: openColor },
			closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"], backgroundColor: closedColor },
		},
		middle: {
			open: { rotate: ["0deg", "0deg", "-45deg"], backgroundColor: openColor },
			closed: { rotate: ["-45deg", "0deg", "0deg"], backgroundColor: closedColor },
		},
		bottom: {
			open: { rotate: ["0deg", "0deg", "45deg"], bottom: ["35%", "50%", "50%"], left: "74.5%", backgroundColor: openColor },
			closed: { rotate: ["45deg", "0deg", "0deg"], bottom: ["50%", "50%", "35%"], left: "calc(50% + 10px)", backgroundColor: closedColor },
		},
	};
};

export default Nav;
