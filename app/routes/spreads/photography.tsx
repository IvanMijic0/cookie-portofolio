import { forwardRef } from "react";
import { PBottom, PTop } from "~/assets";
import { motion } from "framer-motion";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/photography-intro.webp"
			alt="Page background"
			className="object-cover"
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
				Mah Baby
			</motion.button>
		</div>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-between flex-col text-white">
			<PTop/>
			<div className="text-black flex justify-center items-end pl-14  flex-col">
				<p className="text-5xl">PHOTOGRAPHY</p>
				<p className="text-3xl italic">and editing</p>
			</div>
			<div className="flex justify-between w-full items-end">
				<PBottom/>
				<div className="text-black flex flex-col items-end pr-4">
					<span><span className="font-semibold">Model: </span>Elma Rožajac</span>
					<span><span className="font-semibold">Photographer:</span> Amna Kolić</span>
				</div>
			</div>
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Creative Photography & Editing Projects | Amna Kolić Portfolio" },
		{
			name: "description",
			content: "Discover concept-driven photography by Amna Kolić—editorial, symbolic, and digitally enhanced visual narratives."
		}
	];
}

export const loader = () => null;

const Photography = () => null;
export default Photography;