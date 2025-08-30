import { forwardRef, useMemo, useState } from "react";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
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
			itemID="/illustration/mural"
			aria-labelledby="mural-title"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="artMedium" content="Digital painting" />
			<meta itemProp="artform" content="Illustration" />
			<meta
				itemProp="keywords"
				content="Europe House mural, Bosnia in the Heart of Europe, mural concept, Sarajevo, Bosnian identity, European unity, cultural heritage, public art"
			/>
			<meta itemProp="image" content="/mural-left.webp" />
			<meta itemProp="image" content="/mural-right.webp" />
			<link itemProp="mainEntityOfPage" href="/illustration/mural" />

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
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/mural-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
			itemProp="image"
		/>
	</RightPage>
));

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const muralSlides = useMemo(
		() => [
			{
				src: "/mural-1.webp",
				alt:
					"Bosnia in the Heart of Europe — foreground figure beneath a tree with Sarajevo in the background, opening into European landmarks.",
			},
			{
				src: "/mural-2.webp",
				alt:
					"Bosnia in the Heart of Europe — pigeons in flight connect Sarajevo motifs with iconic European architecture across the scene.",
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
			title: "Mountain Fairy",
			src: "/mountain-fairy-right.webp",
			href: "/illustration/mountain-fairy",
			alt:
				"Mountain Fairy — Bosnian planinska vila illustrated with wildflowers and horns in a warm forest.",
		},
		{
			id: 2,
			title: "austen in watercolor",
			src: "/austen-right-1.webp",
			href: "/illustration/austen-in-watercolor",
			alt:
				"austen in watercolor — delicate portrait illustration inspired by jane austen novels, rendered in soft washes of color.",
		},
	];

	return (
		<MobileWrapper>
			<div className="relative w-full">
				<article
					itemScope
					itemType="https://schema.org/CreativeWork"
					className="relative z-10 px-6 pb-8 pt-24 flex items-center justify-start gap-6 flex-col text-[#363636]"
					aria-labelledby="ktwk-title"
				>
					<header className="w-full">
						<h1
							id="ktwk-title"
							itemProp="name headline"
							className="font-display text-start leading-18 text-[4.5rem] xs:text-[5rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							Bosnia in <br /> the heart <br /> of Europe
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<section
						id="description"
						aria-label="Project description"
						className="text-sm w-full text-[#505050] pt-8 font-serif text-justify"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							Created for the Europe House mural contest, this piece visualizes the theme “Bosnia in the Heart of
							Europe” by blending identity with continental unity. At the center sits a seemingly a tourist beneath a
							tree.
						</p>
					</section>

					<div className="flex flex-col justify-between w-full gap-8 py-4">
						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(0)}
								className="block w-full cursor-zoom-in"
								aria-label="Open mural artwork (panel 1)"
								title="View mural — panel 1"
							>
								<img
									src="/mural-1.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt="Bosnia in the Heart of Europe — Sarajevo foreground opens into European landmarks; unity across the continent."
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Mural panel 1 — Sarajevo meets Europe.
							</figcaption>
						</figure>

						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(1)}
								className="block w-full cursor-zoom-in"
								aria-label="Open mural artwork (panel 2)"
								title="View mural — panel 2"
							>
								<img
									src="/mural-2.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt="Bosnia in the Heart of Europe — pigeons in flight connect Sarajevo motifs with European symbols of culture and peace."
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Mural panel 2 — Pigeons as messengers across borders.
							</figcaption>
						</figure>
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-base">
							The view opens up from Sarajevo’s familiar cityscape into a panoramic sweep of iconic European landmarks,
							positioning Bosnia not at the edge, but firmly within the cultural and geographical heart of Europe. The
							presence of pigeons, a recurring symbol of Sarajevo, connects the different elements as they fly across
							borders, cities, and monuments—serving as visual messengers of movement, peace, and connection. Their path
							reinforces the idea that Bosnia is both part of and in dialogue with the broader European community, that
							it is part of the crew.
						</p>
						<p className="text-base" itemProp="about">
							A bold yellow accent runs throughout the mural, referencing both the Bosnian flag and the Europe House
							visual identity. This shared color creates unity and draws the eye across the scene, tying disparate
							symbols into a single cohesive narrative. The result is a vibrant, clean, and meaningful composition that
							captures not only place, but purpose—a visual reminder of Bosnia’s place within a shared European future.
						</p>
						<p className="text-base">
							The mural was intended to not have a lot of information on the bottom part, due to the placement of the
							chair next to the wall, as it wouldn’t be very visible. It was there to gather us all together, help us
							relax and focus on what is important—mutual respect and love.
						</p>
					</section>

					<section className="flex flex-col gap-6 w-full items-center" aria-labelledby="see-more-like-this">
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								See more like this
							</h2>
						</ScreenTextFit>

						<Carousel items={slides} loop rounded aria-label="Related works carousel" />
					</section>
				</article>
			</div>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={muralSlides}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				styles={{ container: { zIndex: 200 } }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide }) => {
						if (!isImageSlide(slide)) return null;
						return (
							<figure className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5">
								<img
									src={slide.src}
									alt={slide.alt ?? ""}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
									loading="lazy"
								/>
							</figure>
						);
					},
				}}
			/>
		</MobileWrapper>
	);
};

export function meta() {
	const title = "Europe House Mural: Bosnia in the Heart of Europe | Amna Kolić";
	const description =
		"Mural concept that merges Bosnian identity with European unity—Sarajevo motifs, iconic landmarks, and bold yellow accents evoke connection, movement, and a shared future.";
	const url = "/illustration/mural";
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
