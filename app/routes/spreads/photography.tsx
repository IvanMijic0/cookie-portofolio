import { forwardRef } from "react";
import { PTop } from "~/assets";
import PBottom from "~/assets/PBottom";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page mr-3 relative w-full h-full m-0 overflow-hidden"
	>
		<img
			src="/photography-intro.webp"
			alt="Page background"
			className="object-cover"
			loading="lazy"
		/>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
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
	</div>
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