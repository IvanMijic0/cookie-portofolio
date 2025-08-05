import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/kill-them-with-kindness-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/kill-them-with-kindness-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
		</div>
	</div>
) );

export function meta() {
	return [
		{ title: "Visual Storytelling in Photography: Kill Them with Kindness Series" },
		{
			name: "description",
			content: "A photo series that uses symbolism and staged lighting to present empathy as resistance. Explore the artistic concept behind each shot."
		}
	];
}

export const loader = () => null;

const KillThemWithKindness = () => null;
export default KillThemWithKindness;