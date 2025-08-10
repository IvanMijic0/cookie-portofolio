import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/doli-bel-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/doli-bel-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>

		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Theatre Poster Design | Doli Bel Stage Adaptation Visuals" },
		{
			name: "description",
			content: "A dramatic red poster and typographic treatment inspired by emotional depth and instability in the iconic Bosnian play."
		}
	];
}

export const loader = () => null;

const SjecasLiSeDoliBel = () => null;
export default SjecasLiSeDoliBel;