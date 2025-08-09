import { forwardRef } from "react";
import { RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/mural-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/mural-right.webp"
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
		{ title: "Europe House Mural Design | Bosnia in the Heart of Europe" },
		{
			name: "description",
			content: "A mural concept merging Bosnian identity with European unity, featuring symbolic cityscapes and vibrant yellow accents."
		}
	];
}

export const loader = () => null;

const Mural = () => null;
export default Mural;