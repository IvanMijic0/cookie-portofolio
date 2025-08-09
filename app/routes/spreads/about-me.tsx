import { forwardRef } from "react";
import { RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full bg-white h-full bg-cover bg-center bg-no-repeat"
	>
		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/about-me.webp"
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
		{ title: "Meet the Designer | About Amna Kolić – Graphic Designer & Visual Artist" },
		{
			name: "description",
			content: "Learn more about Amna Kolić, a Bosnia-based designer and illustrator combining UX, branding, and storytelling in her creative work."
		}
	];
}

export const loader = () => null;

const Mural = () => null;
export default Mural;