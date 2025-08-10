import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/kreativ-festival-art-direction-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-start text-white">
		</div>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<div className="flex px-14 justify-between items-end flex-col w-full h-full">
			{ Array.from( { length: 3 } ).map( ( _, idx ) => {
				let i = ( idx + 1 ).toString()
				return <img
					key={ i }
					src={ `/kreativ-festival-art-direction-right-${ i }.webp` }
					alt={ `Kreativ Festival Art Direction ${ i }` }
					className="w-1/2 h-1/2 object-cover"
					loading="lazy"
				/>
			} ) }
		</div>

		<div className="absolute px-20 py-8 inset-0 z-10 flex items-start justify-start text-white">
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Festival Branding: KREATIV Fest Art Direction & Visual Identity" },
		{
			name: "description",
			content: "Art direction and branding system for KREATIV Fest, inspired by grunge aesthetics and David Carson’s experimental typography."
		}
	];
}

export const loader = () => null;

const KreativFestivalArtDirection = () => null;
export default KreativFestivalArtDirection