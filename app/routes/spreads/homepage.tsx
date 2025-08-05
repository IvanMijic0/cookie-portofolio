import { forwardRef } from "react";
import { Button } from "@heroui/react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/homepage-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
			<Button>Cookie</Button>
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/homepage-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
			<Button>Cookie</Button>
		</div>
	</div>
) );

export function meta() {
	return [
		{ title: "Amna Kolić | Graphic Design, Photography & Illustration Portfolio" },
		{
			name: "description",
			content: "Explore the design portfolio of Amna Kolić, featuring creative work in graphic design, photography, illustration, and visual storytelling."
		}
	];
}

export const loader = () => null;

const Homepage = () => null;
export default Homepage;