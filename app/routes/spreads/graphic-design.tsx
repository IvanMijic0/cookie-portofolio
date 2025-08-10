import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/graphic-design-left.webp"
			alt=""
			className="w-full h-full object-cover z-0"
			aria-hidden="true"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/graphic-design-right.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>

		<article
			className="absolute inset-0 p-12 z-20 h-full w-full text-black grid grid-rows-[1fr_auto_1fr] gap-6"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/graphic-design"
		>
			<meta itemProp="inLanguage" content="en"/>
			<meta itemProp="genre" content="Graphic Design"/>
			<meta
				itemProp="keywords"
				content="graphic design, branding, editorial design, typography, visual identity, print design, portfolio"
			/>
			<meta itemProp="image" content="/graphic-design-right.webp"/>
			<meta itemProp="image" content="/graphic-design-right-cards.webp"/>
			<link itemProp="mainEntityOfPage" href="/book/graphic-design"/>
			<div className="row-start-2 pb-20 2xl:pb-52 justify-self-center flex flex-col items-center gap-5 2xl:gap-8">
				<header className="flex flex-col gap-8">
					<h1
						className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:2px_#363636] italic [text-stroke:2px_#363636]"
						itemProp="headline"
					>
						GRAPHIC<br/>DESIGN
					</h1>
					<p className="sr-only">
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Amna Kolić</span>
            </span>
					</p>
				</header>
				<section
					className="flex flex-col w-full font-serif items-end justify-between text-[#505050] gap-4"
					itemProp="description"
				>
					<p className="w-64 2xl:w-[19rem] font-bold italic text-justify text-base 2xl:text-lg">
						Where creativity and intention intertwine, designs unfold stories through subtle details and
						refined aesthetics. From elegant identities to vibrant narratives and tactile impressions, each
						creation captures a unique essence—inviting you to experience the art behind the visuals.
					</p>
				</section>
			</div>
			<div className="row-start-3 self-end justify-self-end w-full flex justify-end">
				<p className="w-72 2xl:w-[16rem] font-serif text-xs 2xl:text-sm text-right font-bold">
					Background photograph: Amna Kolić<br/>
					Cards photograph: Freepik<br/>
					Edit &amp; Logos: Amna Kolić
				</p>
			</div>
		</article>
		<img
			src="/graphic-design-right-cards.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="absolute bottom-0 left-0 max-h-full max-w-[40%] object-contain z-20 pointer-events-none"
			loading="eager"
			fetchPriority="high"
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