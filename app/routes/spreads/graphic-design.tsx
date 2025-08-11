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
			loading="eager"
		/>

		<article
			className="absolute inset-0 pr-12 2xl:pr-20 pt-28 2xl:pt-36 pb-12 z-20 h-full w-full text-black gap-6"
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
			<div className="contents">
				<div
					className="justify-self-center h-full flex flex-col items-center gap-5 2xl:gap-8">
					<header className="flex flex-col gap-8">
						<h1
							className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-28 text-[#363636] [-webkit-text-stroke:2px_#363636] [text-stroke:2px_#363636]"
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
						className="flex flex-col w-full h-full  font-serif items-end justify-between text-[#505050] gap-4"
						itemProp="description"
					>
						<p className="w-56 font-bold 2xl:w-[19rem] italic text-justify text-base 2xl:text-lg">
							Where creativity and intention intertwine, designs unfold stories through subtle details and
							refined aesthetics.
							From elegant identities to vibrant narratives and tactile impressions, each creation
							captures a unique
							essence—inviting you to experience the art behind the visuals.
						</p>
						<p className="text-[#505050] font-serif text-xs 2xl:text-sm text-right font-bold">
							Background photograph: Amna Kolić<br/>
							Cards photograph: Freepik<br/>
							Edit &amp; Logos: Amna Kolić
						</p>
					</section>
				</div>
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
	const title = "Graphic Design – Visual Identity & Branding Projects | Amna Kolić";
	const description =
		"Explore graphic design work by Amna Kolić: branding, logo systems, editorial & poster design, and typography-driven visual identities.";
	const url = "/book/graphic-design";
	const image = "/graphic-design-right.webp";
	const imageAlt =
		"Graphic design spread with cards and logos from Amna Kolić’s portfolio.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"graphic design, branding, visual identity, logo design, editorial design, poster design, typography, portfolio, Amna Kolić"
		},
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: "en_US" },
		{ property: "article:section", content: "Graphic Design" },
		{ property: "article:author", content: "Amna Kolić" },
		{ property: "article:tag", content: "Branding" },
		{ property: "article:tag", content: "Visual Identity" },
		{ property: "article:tag", content: "Logo Design" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const GraphicDesign = () => null;
export default GraphicDesign;