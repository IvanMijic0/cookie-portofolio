import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/mountain-fairy-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 gap-4 2xl:gap-0 w-11/12 2xl:w-2/3 py-12 inset-0 z-10 flex items-start flex-col justify-between text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/book/illustration/mountain-fairy"
			aria-labelledby="mountain-fairy-title"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Illustration" />
			<meta
				itemProp="keywords"
				content="Bosnian folklore, mountain fairy, planinska vila, digital illustration, concept art, cultural heritage"
			/>
			<meta itemProp="artMedium" content="Digital painting" />
			<meta itemProp="image" content="/mountain-fairy-left.webp" />
			<meta itemProp="image" content="/mountain-fairy-right.webp" />
			<link itemProp="mainEntityOfPage" href="/book/illustration/mountain-fairy" />

			<header className="flex flex-col items-start gap-6">
				<div>
					<h1
						id="mountain-fairy-title"
						className="text-[6rem] text-left tracking-wider 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						Mountain Fairy
					</h1>
				</div>
				<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">Project by </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
						<span itemProp="name">by Amna Kolić</span>
					</span>
				</p>
			</header>
			<p className="text-base font-serif 2xl:text-lg font-bold italic text-justify" itemProp="description">
				This digital illustration depicts the Bosnian mountain fairy, or <em>planinska vila</em>, as part of an
				ongoing series dedicated to visualizing forgotten figures of Bosnian folklore.
			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="artworkSurface">
				Created in Clip Studio Paint, the artwork draws directly from both environmental inspiration and
				traditional descriptions of these mystical beings.
			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="articleBody">
				Dressed in historically inspired garments with earthy tones and folk motifs, the fairy is crowned with
				wildflowers and adorned with horns, a nod to her mythological ability to transform into a white goat,
				her symbol. The warm forest backdrop echoes the mountainous terrain she is said to inhabit, blending
				realism and fantasy to root her firmly in her homeland.
			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="articleBody">
				This series was born from a desire to reconnect with Bosnia’s deeper cultural past—one that extends far
				beyond Ottoman or modern-day narratives. Much of the pre-imperial, pre-modern history of Bosnia remains
				overlooked or forgotten, and this project seeks to give it a new voice. Each character aims to breathe
				life back into centuries-old legends, honoring the richness of a heritage that deserves to be seen,
				remembered, and reimagined.
			</p>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/mountain-fairy-right.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 py-20 inset-0 z-10 flex items-end flex-col justify-end text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/book/illustration/mountain-fairy"
			aria-labelledby="mountain-fairy-aux"
		>
			<h2 id="mountain-fairy-aux" className="sr-only" itemProp="alternativeHeadline">
				Mountain Fairy — Visual Artwork
			</h2>
			<figure itemProp="image" itemScope itemType="https://schema.org/ImageObject" className="sr-only">
				<meta itemProp="contentUrl" content="/mountain-fairy-right.webp" />
				<meta itemProp="caption" content="Mountain Fairy illustration — right page background" />
			</figure>
		</article>
	</RightPage>
));

export function meta() {
	const title = "Bosnian Mountain Fairy — Digital Illustration | Amna Kolić";
	const description =
		"Folklore-inspired concept art of the Bosnian mountain fairy (planinska vila), rendered in digital paint and rooted in cultural heritage.";
	const url = "/book/illustration/mountain-fairy";
	const image = "/mountain-fairy-right.webp";
	const keywords =
		"Bosnian folklore, mountain fairy, planinska vila, digital illustration, concept art, cultural heritage, Clip Studio Paint, Amna Kolić";

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ property: "og:type", content: "article" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:locale", content: "en_US" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ rel: "canonical", href: url },
	];
}

export const loader = () => null;

const MountainFairy = () => null;
export default MountainFairy;
