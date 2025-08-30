import { forwardRef, useMemo, useState } from "react";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";

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
			itemID="/illustration/mountain-fairy"
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
			<link itemProp="mainEntityOfPage" href="/illustration/mountain-fairy" />

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
			itemID="/illustration/mountain-fairy"
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

const ASPECT = 1600 / 2000;

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const fairySlides = useMemo(
		() => [
			{
				src: "/mountain-fairy-right.webp",
				alt: "Mountain Fairy — digital illustration of the Bosnian planinska vila, crowned with wildflowers and adorned with horns in a mystical forest setting.",
			},
		],
		[]
	);

	const openAt = (i: number) => {
		setIndex(i);
		setOpened(true);
	};
	const close = () => setOpened(false);

	const slides = [
		{
			id: 1,
			title: "austen in watercolor",
			src: "/austen-right-1.webp",
			href: "/illustration/austen-in-watercolor",
			alt: "austen in watercolor — delicate portrait illustration inspired by jane austen novels, rendered in soft washes of color.",
		},
		{
			id: 2,
			title: "Bosnia in the Heart of Europe",
			src: "/mural.webp",
			href: "/photography/mural",
			alt: "Bosnia in the Heart of Europe — mural artwork blending cultural heritage and contemporary design.",
		},
	];

	return (
		<MobileWrapper>
			<div className="relative w-full bg-[#F4F3EB] pt-24">
				<article
					itemScope
					itemType="https://schema.org/CreativeWork"
					className="px-6 pb-8 z-20 flex items-center justify-start gap-6 flex-col text-[#363636]"
				>
					<header className="w-full">
						<h1
							id="ktwk-title"
							itemProp="name headline"
							className="font-display text-start leading-22 text-[5rem] xs:text-[6rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							Mountain <br /> Fairy
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<figure
						itemScope
						itemType="https://schema.org/ImageObject"
						className="w-full pt-3"
					>
						<button
							type="button"
							onClick={() => openAt(0)}
							className="block w-full cursor-zoom-in"
							aria-label="Open image: Mountain Fairy poster"
						>
							<img
								src="/mountain-fairy-right.webp"
								sizes="(max-width: 640px) 100vw, 640px"
								alt="Mountain Fairy — symbolic still-life illustration portraying empathy as strength, rooted in Bosnian folklore."
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								fetchPriority="high"
								itemProp="image"
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							Mountain Fairy digital illustration hero artwork.
						</figcaption>
					</figure>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							This digital illustration depicts the Bosnian mountain fairy, or
							planinska vila, as part of an ongoing series dedicated to
							visualizing forgotten figures of Bosnian folklore.
						</p>
						<p className="text-base" itemProp="about">
							Created in Clip Studio Paint, the artwork draws directly from both
							environmental inspiration and traditional descriptions of these
							mystical beings.
						</p>
						<p className="text-base">
							Dressed in historically inspired garments with earthy tones and
							folk motifs, the fairy is crowned with wildflowers and adorned with
							horns, a nod to her mythological ability to transform into a white
							goat, her symbol. The warm forest backdrop echoes the mountainous
							terrain she is said to inhabit, blending realism and fantasy to
							root her firmly in her homeland.
						</p>
						<p className="text-base">
							This series was born from a desire to reconnect with Bosnia’s
							deeper cultural past—one that extends far beyond Ottoman or
							modern-day narratives. Much of the pre-imperial, pre-modern history
							of Bosnia remains overlooked or forgotten, and this project seeks
							to give it a new voice. Each character aims to breathe life back
							into centuries-old legends, honoring the richness of a heritage
							that deserves to be seen, remembered, and reimagined.
						</p>
					</section>

					<section
						className="flex flex-col gap-6 w-full items-center"
						aria-labelledby="see-more-like-this"
					>
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								See more like this
							</h2>
						</ScreenTextFit>

						<Carousel
							items={slides}
							loop
							rounded
							aria-label="Related works carousel"
						/>
					</section>
				</article>
			</div>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={fairySlides}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				styles={{ container: { zIndex: 200 } }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide, rect }) => {
						const frameWidth = Math.min(rect.width, rect.height * ASPECT);
						const frameHeight = frameWidth / ASPECT;

						if (!isImageSlide(slide)) return null;

						return (
							<figure
								style={{ width: frameWidth, height: frameHeight }}
								className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5"
							>
								<img
									src={slide.src}
									alt={slide.alt ?? ""}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
								{slide.alt && (
									<figcaption className="mt-3 text-center text-sm text-white/90">
										{slide.alt}
									</figcaption>
								)}
							</figure>
						);
					},
				}}
			/>
		</MobileWrapper>
	);
};

export function meta() {
	const title = "Bosnian Mountain Fairy — Digital Illustration | Amna Kolić";
	const description =
		"Folklore-inspired concept art of the Bosnian mountain fairy (planinska vila), rendered in digital paint and rooted in cultural heritage.";
	const url = "/illustration/mountain-fairy";
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
