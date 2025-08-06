import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/chippsters-left.webp"
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
		<div className="w-full h-full flex flex-col p-20 gap-6 justify-between">
			<div className="flex gap-4 justify-between w-full">
				<div className="flex flex-col gap-4">
					<p>
						The Chippsters logo was born from a playful fusion of chipmunk and hipster, reflecting a tech
						company that aims to be both casual and forward-thinking.
					</p>
					<p>
						With a name full of personality, the visual identity needed to match, professional yet
						approachable, clean but expressive. The logo features a chipmunk wearing a beanie and glasses,
						cleverly formed in the negative space of a bold letter “C.”
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<p>
						This simple, rounded shape ensures versatility and strong brand recognition, while the character
						adds charm and uniqueness. The clean circular shape ensures versatility, while the simplified
						character design keeps it easily recognizable across applications.
					</p>
					<p>
						A pastel green gradient brings a sense of freshness and calm professionalism. The result is a
						memorable, modern logo that stands out in the tech space with just the right balance of fun and
						clarity.
					</p>
				</div>
			</div>
			<img
				src="/chippsters-right.webp"
				alt="Page background"
				className="w-full h-full object-cover z-0"
				loading="lazy"
			/>
		</div>

		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
		</div>
	</div>
) );

export function meta() {
	return [
		{ title: "Logo Design for Tech Brand | Chippsters Visual Identity" },
		{
			name: "description",
			content: "A playful and professional brand mark combining “chipmunk” and “hipster” into a minimalist tech identity."
		}
	];
}

export const loader = () => null;

const ChippstersLogo = () => null;
export default ChippstersLogo;