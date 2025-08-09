import { AnimatePresence, motion, type Variants } from "framer-motion";
import { forwardRef, type PropsWithChildren, type SyntheticEvent, useState, } from "react";
import { AnimatedBookmarkIcon } from "~/components";
import { GlassesEmpty, GlassesFilled } from "~/assets";
import { useUI } from "~/context/ui";
import { useFlipbook } from "~/context/flipbook";

type RightPageProps = PropsWithChildren<{ showBookmark?: boolean }>;

const stop = ( e: SyntheticEvent ) => {
	e.preventDefault();
	e.stopPropagation();
};

const variants: Variants = {
	hidden: { y: "-92.3%" },
	peek: { y: "-87.5%" },
	open: { y: "0%" },
};

const navSections = [
	{
		title: "HOME",
		to: "/homepage",
		items: [
			{ label: "About me", to: "/about-me" },
			{ label: "Contact", to: "/contact" },
		],
	},
	{
		title: "PHOTOGRAPHY",
		to: "/photography",
		items: [
			{ label: "Kill them with kindness", to: "/photography/kill-them-with-kindness" },
			{ label: "Human Rights", to: "/photography/human-rights" },
			{ label: "Double Indemnity", to: "/photography/double-indemnity" },
		],
	},
	{
		title: "GRAPHIC DESIGN",
		to: "/graphic-design",
		items: [
			{ label: "KREATIV festival Art Direction", to: "/graphic-design/kreativ-festival-art-direction" },
			{ label: "Sjećaš li se Doli Bel?", to: "/graphic-design/sjecas-li-se-doli-bel" }, // fixed slug
			{ label: "Chippsters logo", to: "/graphic-design/chippsters-logo" },
		],
	},
	{
		title: "ILLUSTRATION",
		to: "/illustration",
		items: [
			{ label: "Mountain Fairy", to: "/illustration/mountain-fairy" },
			{ label: "Austen in Watercolor", to: "/illustration/austen-in-watercolor" },
			{ label: "“Bosnia in the heart of Europe” mural", to: "/illustration/mural" },
		],
	},
] as const;

const RightPage = forwardRef<HTMLDivElement, RightPageProps>(
	( { children, showBookmark = true }, ref ) => {
		const [open, setOpen] = useState( false );
		const [hovered, setHovered] = useState( false );
		const { readOnly, toggleReadOnly } = useUI();
		const { goToSpread, ready } = useFlipbook();

		const state: keyof typeof variants = open ? "open" : hovered ? "peek" : "hidden";

		const stopBubble = ( e: SyntheticEvent ) => {
			e.stopPropagation();
		};

		return (
			<div ref={ ref } className="page relative w-full h-full overflow-hidden">
				{ children }
				{ showBookmark && (
					<motion.div
						className="absolute top-0 left-4 h-[46rem] w-[13rem] z-50 pointer-events-auto"
						variants={ variants }
						animate={ state }
						initial="hidden"
						transition={ {
							type: "spring",
							stiffness: 400,
							damping: state === "hidden" ? 48 : 32,
							mass: 0.8,
						} }
						onHoverStart={ () => !open && setHovered( true ) }
						onHoverEnd={ () => setHovered( false ) }
						onMouseDownCapture={ stopBubble }
						onPointerDownCapture={ stopBubble }
						onTouchStartCapture={ stopBubble }
						onTouchMoveCapture={ stopBubble }
						onTouchEndCapture={ stopBubble }
						style={ { touchAction: "none" } }
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
									{ navSections.map( ( section ) => (
										<li key={ section.title }>
											<a
												onClick={ ( e ) => {
													e.preventDefault();
													console.log( "Title" )
													if (ready) goToSpread( section.to );
													setOpen( false );
												} }
												className="block cursor-pointer font-sans font-extrabold uppercase tracking-wide text-md mb-2 hover:opacity-90"
											>
												{ section.title }
											</a>

											<ul className="pl-2 space-y-2">
												{ section.items.map( ( item ) => (
													<li key={ item.to }>
														<a
															onClick={ ( e ) => {
																e.preventDefault();
																console.log( "label" )
																if (ready) goToSpread( item.to );
																setOpen( false );
															} }
															className="block cursor-pointer text-sm font-serif italic text-white/90 hover:text-white transition"
														>
															{ item.label }
														</a>
													</li>
												) ) }
											</ul>
										</li>
									) ) }
								</ul>
							</nav>
							<button
								type="button"
								aria-pressed={ readOnly }
								onClick={ ( e ) => {
									e.stopPropagation();
									toggleReadOnly();
								} }
								className="cursor-pointer flex flex-col text-white gap-1 items-center z-30"
							>
								<span className="inline-flex items-center justify-center w-7 h-7">
								<AnimatePresence mode="popLayout" initial={ false }>
								  { readOnly ? (
									  <motion.span
										  key="filled"
										  initial={ { opacity: 0, scale: 0.85, rotate: -6 } }
										  animate={ { opacity: 1, scale: 1, rotate: 0 } }
										  exit={ { opacity: 0, scale: 0.85, rotate: 6 } }
										  transition={ { type: "spring", stiffness: 500, damping: 30 } }
										  className="inline-flex"
									  >
										  <GlassesFilled className="w-10 h-10"/>
									  </motion.span>
								  ) : (
									  <motion.span
										  key="empty"
										  initial={ { opacity: 0, scale: 0.85, rotate: 6 } }
										  animate={ { opacity: 1, scale: 1, rotate: 0 } }
										  exit={ { opacity: 0, scale: 0.85, rotate: -6 } }
										  transition={ { type: "spring", stiffness: 500, damping: 30 } }
										  className="inline-flex"
									  >
										  <GlassesEmpty className="w-10 h-10"/>
									  </motion.span>
								  ) }
								</AnimatePresence>
							  </span>
								<span className="font-sans font-black text-md">READ ONLY</span>
							</button>
							<button
								type="button"
								aria-label={ open ? "Close bookmark" : "Open bookmark" }
								className="cursor-pointer"
								onClick={ ( e ) => {
									e.stopPropagation();
									setOpen( ( prev ) => {
										const next = !prev;
										if (!next) setHovered( false );
										return next;
									} );
								} }
							>
								<AnimatedBookmarkIcon
									state={ open ? "up" : hovered ? "down" : "star" }
								/>
							</button>
						</div>
					</motion.div>
				) }
			</div>
		);
	}
);

export default RightPage;