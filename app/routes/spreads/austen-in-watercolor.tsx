import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/austen-left.webp"
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
			src="/austen-right.webp"
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
		{ title: "Jane Austen-Inspired Watercolor Illustrations | Literary Art Series" },
		{
			name: "description",
			content: "Watercolor illustrations inspired by Pride and Prejudice, Sense and Sensibility, and Emma, celebrating literary emotion."
		}
	];
}

export const loader = () => null;

const AustenInWatercolor = () => null;
export default AustenInWatercolor;