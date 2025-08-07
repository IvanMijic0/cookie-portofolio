import { motion, type Variants } from "framer-motion";
import { forwardRef, type PropsWithChildren, type SyntheticEvent, useState } from "react";
import { AnimatedBookmarkIcon } from "~/components";

type RightPageProps = PropsWithChildren<{ showBookmark?: boolean }>;

const stop = ( e: SyntheticEvent ) => {
	e.preventDefault();
	e.stopPropagation();
};

const variants: Variants = {
	hidden: { y: "-93.5%" },
	peek: { y: "-87%" },
	open: { y: "0%" },
};

const RightPage = forwardRef<HTMLDivElement, RightPageProps>(
	( { children, showBookmark = true }, ref ) => {
		const [open, setOpen] = useState( false );
		const [hovered, setHovered] = useState( false );

		const state: keyof typeof variants = open ? "open" : hovered ? "peek" : "hidden";

		return (
			<div ref={ ref } className="page relative w-full h-full overflow-hidden">
				{ children }

				{ showBookmark && (
					<motion.div
						className="absolute top-0 left-4 h-2/3 w-2/12 z-50 pointer-events-auto"
						variants={ variants }
						animate={ state }
						initial="hidden"
						transition={ {
							type: "spring",
							stiffness: 400,
							damping: state === "hidden" ? 48 : 32,
							mass: 0.8
						} }
						onHoverStart={ () => setHovered( true ) }
						onHoverEnd={ () => setHovered( false ) }
						onMouseDownCapture={ stop }
						onPointerDownCapture={ stop }
						onTouchStartCapture={ stop }
						onTouchMoveCapture={ stop }
						onTouchEndCapture={ stop }
						style={ { touchAction: "none" } }
					>
						<button
							type="button"
							aria-label="Open bookmark"
							onClick={ () => setOpen( v => !v ) }
							className="
									absolute
									bg-[url('/bookmark.webp')]
									bg-no-repeat
									bg-[length:115%_105%]
									bg-center
									inset-0
									flex flex-col items-center py-1 justify-end
									h-full w-full
									cursor-pointer outline-none
									border-white border-6
								  "
						>
							<div className="flex w-full h-full justify-end items-center flex-col">
								<AnimatedBookmarkIcon
									state={ open ? "up" : hovered ? "down" : "star" }
									className="mb-2"
								/>
							</div>
						</button>
					</motion.div>
				) }
			</div>
		);
	}
);

export default RightPage;