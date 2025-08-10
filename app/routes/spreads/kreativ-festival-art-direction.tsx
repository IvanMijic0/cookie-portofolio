import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/kreativ-festival-art-direction-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
		/>
		<article
			className="absolute px-16 2xl:px-24 py-4 2xl:py-14 inset-0 z-20 flex justify-between flex-col text-white"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/graphic-design/kreativ-festival-art-direction"
		>
			<meta itemProp="inLanguage" content="en"/>
			<meta itemProp="genre" content="Art Direction"/>
			<meta
				itemProp="keywords"
				content="KREATIV fest, art direction, festival branding, poster design, visual identity, typography, student project"
			/>
			<meta itemProp="image" content="/kreativ-festival-art-direction-left.webp"/>
			<meta
				itemProp="name"
				content="KREATIV fest — Festival Art Direction Proposal (Kreativ Euphoria)"
			/>
			<link
				itemProp="mainEntityOfPage"
				href="/book/graphic-design/kreativ-festival-art-direction"
			/>
			<div>
				<p className="font-serif pt-4 2xl:pt-0 italic text-white font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">Project by </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name" className="[text-shadow:_0_8px_24px_rgba(0,0,0,.45)]">
              by Amna Kolić
            </span>
          </span>
				</p>
			</div>
			<div className="flex justify-between gap-4 items-start">
				<header>
					<h1 className="flex flex-col gap-6 italic" itemProp="headline">
            <span
	            className="[text-shadow:_0_8px_24px_rgba(0,0,0,.45)] text-sm 2xl:text-base font-serif tracking-[0.17em]">
              Festival Art Direction Proposal
            </span>
						<span
							className="pl-2 [text-shadow:_0_8px_24px_rgba(0,0,0,.45)] text-[2.5rem] text-nowrap leading-0 [-webkit-text-stroke:1px_white] [text-stroke:1px_white]">
              KREATIV fest
            </span>
						<span
							className="[text-shadow:_0_8px_24px_rgba(0,0,0,.65)] text-sm 2xl:text-base [-webkit-text-stroke:0.5px_white] [text-stroke:0.5px_white] tracking-[0.4em]">
              Kreativ Euphoria
            </span>
					</h1>
				</header>
				<section className="w-64" itemProp="description">
					<p className="[text-shadow:_0_8px_24px_rgba(0,0,0,.45)] text-sm 2xl:text-base font-serif text-justify font-bold italic">
						<time itemProp="dateCreated" dateTime="2024">2024</time>
						. KREATIV fest gave the opportunity to the
						students to showcase their creativity through art direction of the festival.
					</p>
				</section>
			</div>
		</article>
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
					aria-hidden="true"
					loading="eager"
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