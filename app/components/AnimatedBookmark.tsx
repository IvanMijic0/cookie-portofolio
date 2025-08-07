import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Star } from "~/assets";
import { useEffect, useRef } from "react";

type Props = { state: "star" | "down" | "up"; className?: string };

const startAngleFor = ( to: Props["state"] ) =>
	to === "down" ? -90 : to === "up" ? 90 : 180;

const AnimatedBookmark = ( { state, className }: Props ) => {
	const prev = useRef<Props["state"]>( state );
	useEffect( () => void ( prev.current = state ), [state] );

	const Icon = state === "star" ? Star : state === "down" ? ChevronDown : ChevronUp;

	return (
		<motion.div
			key={ state }
			className={ className }
			initial={ { rotate: startAngleFor( state ) } }
			animate={ { rotate: 0 } }
			transition={ { duration: 0.12, ease: "easeOut" } }
			style={ { display: "inline-flex", transformOrigin: "50% 50%" } }
		>
			<Icon width={ 48 } height={ 48 } aria-hidden/>
		</motion.div>
	);
};

export default AnimatedBookmark;