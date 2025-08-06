import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/illustration-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/illustration-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>

		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
		</div>
	</div>
) );

export function meta() {
	return [
		{ title: "Illustration Projects | Watercolor, Digital & Concept Art by Amna Kolić" },
		{
			name: "description",
			content: "View concept illustrations and artistic interpretations blending tradition, literature, and folklore with modern visual storytelling."
		}
	];
}

export const loader = () => null;

const Illustration = () => null;
export default Illustration;