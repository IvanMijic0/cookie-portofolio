import { motion } from "framer-motion";
import { forwardRef } from "react";
import { RightPage } from "~/components";
import { DModified } from "~/assets";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/homepage-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
			<motion.button
				onClick={ () => console.log( "Cookie" ) }
				whileHover={ { scale: 1.05, rotate: -1 } }
				whileTap={ { scale: 0.95, rotate: 1 } }
				transition={ { type: "spring", stiffness: 300, damping: 15 } }
				className="z-50 bg-pink-200 cursor-pointer rounded-full px-4 py-2 text-pink-950 font-semibold shadow-md hover:shadow-lg"
			>
				Butterino
			</motion.button>
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark={ false }>
		<img
			src="/homepage-right.webp"
			className="absolute inset-0 w-full h-full object-cover z-0"
			alt=""
			loading="eager"
		/>


		<h1 className="font-display font-normal absolute inset-0 flex justify-center text-white z-10 text-[8rem] 2xl:text-[10rem]">
			<span className="sr-only">DESIGN</span>
			<span
				aria-hidden
				className="
				  inline-flex items-baseline text-white
				  [-webkit-text-stroke:0.01em_white] [text-stroke:0.01em_white]
				"
			>
				<DModified className="h-[0.75em] w-auto mr-[0.04em]"/>
				ESIGN
			</span>
		</h1>
		<img
			src="/cookie-pose.webp"
			alt="Cookie Pose"
			className="absolute bottom-0 right-0 max-w-[39rem] object-contain z-20 pointer-events-none"
			loading="eager"
		/>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Amna Kolić | Graphic Design, Photography & Illustration Portfolio" },
		{
			name: "description",
			content: "Explore the design portfolio of Amna Kolić, featuring creative work in graphic design, photography, illustration, and visual storytelling."
		}
	];
}

export const loader = () => null;

const Homepage = () => null;
export default Homepage;