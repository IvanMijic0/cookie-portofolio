import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/graphic-design-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/graphic-design-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>

		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
			<h1 className="text-[10rem] mix-blend-difference">GRAPHIC</h1>
			<h1 className="text-[10rem] mix-blend-difference">DESIGN</h1>
		</div>

		<img
			src="/graphic-design-right-cards.webp"
			alt="Cookie Pose"
			className="absolute bottom-0 left-0 max-h-full max-w-[40%] object-contain z-20 pointer-events-none"
			loading="lazy"
		/>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Visual Identity & Branding Projects | Graphic Design Portfolio" },
		{
			name: "description",
			content: "Browse Amna Kolić’s graphic design archive—from expressive poster design to logo systems and branding."
		}
	];
}

export const loader = () => null;

const GraphicDesign = () => null;
export default GraphicDesign;