import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/mural-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 gap-4 2xl:gap-0 py-12 inset-0 z-10 flex items-start flex-col justify-start text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/book/illustration/mural"
			aria-labelledby="mural-title"
		>
			<meta itemProp="inLanguage" content="en"/>
			<meta itemProp="artMedium" content="Digital painting"/>
			<meta itemProp="artform" content="Illustration"/>
			<meta
				itemProp="keywords"
				content="Europe House mural, Bosnia in the Heart of Europe, mural concept, Sarajevo, Bosnian identity, European unity, cultural heritage, public art"
			/>
			<meta itemProp="image" content="/mural-left.webp"/>
			<meta itemProp="image" content="/mural-right.webp"/>
			<link itemProp="mainEntityOfPage" href="/book/illustration/mural"/>

			<header className="flex flex-col items-start gap-8">
				<div>
					<h1
						id="mural-title"
						className="text-[6rem] text-left tracking-wider 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						Bosnia in the heart of Europe
					</h1>
				</div>
				<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">Project by </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
						<span itemProp="name">by Amna Kolić</span>
					</span>
				</p>
			</header>
			<div className="flex 2xl:pt-8 flex-col gap-4 2xl:gap-8 justify-start w-[84%] 2xl:w-2/3">
				<p
					className="text-base font-serif leading-5 2xl:leading-6 2xl:text-lg font-bold italic text-justify"
					itemProp="description"
				>
					Created for the Europe House mural contest, this work brings the theme “Bosnia in the Heart of
					Europe” to life by merging national identity with continental unity.
				</p>
				<p
					className="text-sm 2xl:text-base leading-5 2xl:leading-6 font-serif text-justify"
					itemProp="artworkSurface"
				>
					At the center, a tourist rests beneath a tree as Sarajevo’s familiar skyline unfolds into a sweeping
					panorama of iconic European landmarks, placing Bosnia not on the periphery, but firmly in Europe’s
					cultural and geographical heart. Pigeons, a recurring symbol of Sarajevo, traverse the scene as
					messengers of peace, movement, and connection—reinforcing Bosnia’s role as part of the wider
					European community. A bold yellow accent, taken from both the Bosnian flag and Europe House
					identity, ties the visual elements together into a cohesive narrative.
				</p>
				<p
					className="text-sm 2xl:text-base leading-5 2xl:leading-6 font-serif text-justify"
					itemProp="artworkSurface"
				>
					The lower part of the mural was intentionally kept minimal due to the placement of nearby seating,
					inviting viewers to sit, reflect, and embrace the shared values of unity, respect, and belonging.
				</p>
			</div>
		</article>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/mural-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
			itemProp="image"
		/>
	</RightPage>
) );

export function meta() {
	const title = "Europe House Mural: Bosnia in the Heart of Europe | Amna Kolić";
	const description =
		"Mural concept that merges Bosnian identity with European unity—Sarajevo motifs, iconic landmarks, and bold yellow accents evoke connection, movement, and a shared future.";
	const url = "/book/illustration/mural";
	const imagePrimary = "/mural-left.webp";
	const imageAlt = "Mural concept visual: Bosnia in the Heart of Europe with Sarajevo motifs and European landmarks.";

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "author", content: "Amna Kolić" },
		{
			name: "keywords",
			content:
				"Europe House mural, Bosnia in the Heart of Europe, mural design, Sarajevo, Bosnian identity, European unity, public art, cultural heritage, illustration, digital painting"
		},
		{ name: "robots", content: "index,follow,max-image-preview:large" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:locale", content: "en_US" },
		{ property: "og:image", content: imagePrimary },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "article:author", content: "Amna Kolić" },
		{ property: "article:section", content: "Illustration" },
		{ property: "article:tag", content: "Mural" },
		{ property: "article:tag", content: "Sarajevo" },
		{ property: "article:tag", content: "Europe House" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: imagePrimary },
		{ name: "twitter:image:alt", content: imageAlt }
	];
}

export const loader = () => null;

const Mural = () => null;
export default Mural;
