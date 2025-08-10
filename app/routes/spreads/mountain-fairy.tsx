import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/mountain-fairy-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/mountain-fairy-right.webp"
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
		{ title: "Digital Illustration: Bosnian Mountain Fairy Concept Art" },
		{
			name: "description",
			content: "A folklore-inspired illustration of the Bosnian mountain fairy, blending mythological motifs with digital painting."
		}
	];
}

export const loader = () => null;

const MountainFairy = () => null;
export default MountainFairy;