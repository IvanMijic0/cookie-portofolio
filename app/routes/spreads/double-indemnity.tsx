import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<div className="w-full h-full grid grid-cols-2 gap-3">
			{ Array.from( { length: 6 } ).map( ( _, idx ) => {
				let i = ( idx + 1 ).toString()
				return <img
					key={ i }
					src={ `/double-indemnity-left-${ i }.webp` }
					alt={ `Double Indemnity Left ${ i }` }
					className="w-full h-full object-cover"
					aria-hidden="true"
					loading="eager"
					fetchPriority="high"
				/>
			} ) }
		</div>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<article
			className="absolute p-12 inset-0 z-20 flex items-center flex-col justify-between text-black"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/photography/double-indemnity"
		>
			<link itemProp="url" href="/book/photography/double-indemnity"/>
			<meta itemProp="name" content="Double Indemnity"/>
			<meta
				itemProp="description"
				content="A trio of black-and-white photographs that revive classic film noir through meticulous recreations of key scenes from Double Indemnity—studies in light, shadow, and emotion."
			/>
			<meta itemProp="genre" content="Photography, Film noir recreation"/>
			<meta itemProp="inLanguage" content="en"/>
			<div className="flex h-full justify-between flex-col items-end gap-5 2xl:gap-8">
				<header className="flex flex-col gap-8">
					<h1
						className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						Double<br/>Indemnity
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
						  <span itemProp="name">by Amna Kolić</span>
						</span>
					</p>
				</header>
				<section className="flex flex-col w-full font-serif items-end text-[#505050] gap-4">
					<p
						className="w-72 2xl:w-[19rem] text-justify text-base 2xl:text-lg font-bold italic"
						itemProp="abstract"
					>
						In this trio of black-and-white photographs, classic film noir is brought back to life
						through meticulous recreations of key scenes from <em>Double Indemnity</em>. More than
						homage, these images are exercises in atmosphere — a study in light, shadow, and
						emotion, a window into the tension and elegance of 1940s cinema.
					</p>

					<p className="w-72 2xl:w-[19rem] text-justify text-sm 2xl:text-base">
						Every photograph was carefully lit and staged to mirror the original stills, not only in
						composition but in emotional texture. The light carves out character, echoing the moral
						ambiguity and elegance that define the genre — and the film.
					</p>
				</section>
			</div>
		</article>
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