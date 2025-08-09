import { forwardRef } from "react";
import { RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div
		ref={ ref }
		className="page relative w-full h-full bg-cover bg-center bg-no-repeat"
	>
		<div className="w-full h-full grid grid-cols-2 gap-3">
			{ Array.from( { length: 6 } ).map( ( _, idx ) => {
				let i = ( idx + 1 ).toString()
				return <img
					key={ i }
					src={ `/double-indemnity-left-${ i }.webp` }
					alt={ `Double Indemnity Left ${ i }` }
					className="w-full h-full object-cover"
					loading="lazy"
				/>
			} ) }
		</div>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-center text-black">
			<h2 className="text-6xl flex flex-col items-end">
				<span>Double</span>
				<span>Indemnity</span>
			</h2>
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Film Noir Photography Tribute | Double Indemnity Reimagined" },
		{
			name: "description",
			content: "A cinematic homage to the 1940s classic Double Indemnity, brought to life through precise lighting, composition, and mood."
		}
	];
}

export const loader = () => null;

const DoubleIndemnity = () => null;
export default DoubleIndemnity;