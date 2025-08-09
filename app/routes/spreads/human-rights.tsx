import { forwardRef } from "react";
import { RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative pr-12 w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<img
			src="/human-rights-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<div className="flex flex-col w-1/4 h-full">
			{ Array.from( { length: 4 } ).map( ( _, idx ) => {
				let i = ( idx + 1 ).toString()
				return <img
					key={ i }
					src={ `/human-rights-${ i }.webp` }
					alt={ `Human Rights ${ i }` }
					className="w-full h-1/4 object-cover"
					loading="lazy"
				/>
			} ) }
		</div>

		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Photography Series on Human Rights | Light as a Metaphor" },
		{
			name: "description",
			content: "This conceptual series explores the fragility of human rights through light, shadow, and metaphor-rich visual storytelling."
		}
	];
}

export const loader = () => null;

const HumanRights = () => null;
export default HumanRights;