import { AnimatePresence, motion } from "framer-motion";
import { GlassesEmpty, GlassesFilled } from "~/assets";
import { useUI } from "~/context/ui";

const ReadOnlyButton = () => {
	const { readOnly, toggleReadOnly } = useUI();

	return (
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
	);
};

export default ReadOnlyButton;