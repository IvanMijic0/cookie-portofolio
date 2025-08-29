import { forwardRef, useMemo, useState } from "react";
import { isImageSlide, Lightbox, type Slide, type SlideImage } from "yet-another-react-lightbox";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { ScreenTextFit, Carousel } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
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
			itemID="/graphic-design/kreativ-festival-art-direction"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Art Direction" />
			<meta
				itemProp="keywords"
				content="KREATIV fest, art direction, festival branding, poster design, visual identity, typography, student project"
			/>
			<meta itemProp="image" content="/kreativ-festival-art-direction-left.webp" />
			<meta
				itemProp="name"
				content="KREATIV fest — Festival Art Direction Proposal (Kreativ Euphoria)"
			/>
			<link
				itemProp="mainEntityOfPage"
				href="/graphic-design/kreativ-festival-art-direction"
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
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {

	const isSlideImage = (s: Slide): s is SlideImage => "src" in s;

	const slides: SlideImage[] = useMemo(
		() => [
			{
				src: "/kreativ-festival-art-direction-right-1.webp",
				alt: "KREATIV fest visual identity poster — variant 1",
			},
			{
				src: "/kreativ-festival-art-direction-right-2.webp",
				alt: "KREATIV fest visual identity poster — variant 2",
			},
			{
				src: "/kreativ-festival-art-direction-right-3.webp",
				alt: "KREATIV fest visual identity poster — variant 3",
			},
		],
		[]
	);

	const [opened, { open, close }] = useDisclosure(false);
	const [index, setIndex] = useState(0);

	return (
		<RightPage ref={ref} showBookmark>
			<article
				className="px-14 py-12 grid grid-cols-2 gap-12 w-full h-full"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/book/graphic-design/kreativ-festival-art-direction"
			>
				<meta itemProp="inLanguage" content="en" />
				<meta itemProp="genre" content="Festival Art Direction" />
				<meta
					itemProp="keywords"
					content="KREATIV fest, art direction, visual identity, David Carson, grunge design, poster design, student project, International Burch University"
				/>
				<meta itemProp="dateCreated" content="2024" />
				<link itemProp="mainEntityOfPage" href="/graphic-design/kreativ-festival-art-direction" />
				<meta itemProp="name" content="Kreativ Euphoria — KREATIV fest Visual Identity Proposal" />
				<h1 className="sr-only" itemProp="headline">
					KREATIV fest — Kreativ Euphoria (Visual Identity Proposal)
				</h1>

				<div
					className="col-span-1 text-[#505050] font-serif py-8 2xl:py-12 flex flex-col justify-between text-justify"
					itemProp="articleBody"
				>
					<p className="text-sm 2xl:text-lg font-bold italic">
						As a submission for the 2024 KREATIV fest art direction at{" "}
						<span itemProp="provider" itemScope itemType="https://schema.org/Organization">
							<span itemProp="name">International Burch University</span>
						</span>
						, this visual identity proposal draws heavily from grunge aesthetics and the experimental legacy of David
						Carson.
					</p>
					<p className="text-xs 2xl:text-base">
						Centered around a custom logotype reading “Kreativ Euphoria,” the design uses negative-space lettering and a
						stamp-like composition to reflect the chaotic, expressive energy of young creatives.
					</p>
					<p className="text-xs 2xl:text-base">
						The visual language is built on a contrast of vivid neon green, pink, and orange against stark black
						overlays, creating a dynamic, high-impact look that feels both nostalgic and fresh. The textures and
						layering mimic ripped posters and street art, reinforcing a raw, urban atmosphere.
					</p>
					<p className="text-xs 2xl:text-base">
						Across posters, leaflets, and social media, the identity maintains a consistent, tactile quality while
						adapting to different formats.
					</p>
					<p className="text-xs 2xl:text-base">
						This concept celebrates imperfection, spontaneity, and the power of student expression. It doesn’t just
						promote an event—it visually embodies its energy, reminding every viewer: you can be kreativ too.
					</p>
				</div>

				<div className="col-span-1 flex justify-between flex-col py-8 2xl:py-14">
					{slides.map((s, idx) => (
						<figure
							key={s.src}
							itemProp="image"
							itemScope
							itemType="https://schema.org/ImageObject"
							className="mb-6 last:mb-0"
						>
							<img
								src={s.src}
								alt={s.alt}
								className="object-cover w-80 cursor-zoom-in select-none"
								loading="eager"
								fetchPriority="high"
								onClick={() => {
									setIndex(idx);
									open();
								}}
							/>
							<meta itemProp="contentUrl" content={s.src} />
							<meta itemProp="caption" content={s.alt} />
						</figure>
					))}
				</div>
			</article>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={slides as Slide[]}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide }) => {
						if (!isSlideImage(slide)) return null;
						return (
							<figure className="mx-auto overflow-hidden rounded-lg shadow-lg">
								<img src={slide.src} alt={slide.alt ?? ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								{slide.alt && <figcaption className="mt-3 text-center text-sm text-white/90">{slide.alt}</figcaption>}
							</figure>
						);
					},
				}}
			/>
		</RightPage>
	);
});

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const kreatSlides = useMemo(
		() => [
			{
				src: "/kreativ-festival-art-direction-1.webp",
				alt: "Kreativ Fest visual identity — hero poster, grunge-inspired layout with bold type and high-contrast textures.",
			},
			{
				src: "/kreativ-festival-art-direction-right-1.webp",
				alt: "Kreativ Fest ID badge — front side mockup with custom logotype and neon color accents.",
			},
			{
				src: "/kreativ-festival-art-direction-right-3.webp",
				alt: "Kreativ Fest ID badge — back side mockup with typographic grid and stamp-style marks.",
			},
			{
				src: "/kreativ-festival-art-direction-right-2.webp",
				alt: "Kreativ Fest program booklet — cover design featuring layered textures and expressive negative space.",
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
			title: "Sjecas li se Doli Bel?",
			src: "/doli-bel-1.webp",
			href: "/graphic-design/sjecas-li-se-doli-bel",
			alt:
				"Poster design inspired by the film Sjećaš li se Doli Bel?, cinematic composition with bold graphic typography.",
		},
		{
			id: 2,
			title: "Chippsters Logo",
			src: "/chippsters-1.webp",
			href: "/graphic-design/chippsters-logo",
			alt:
				"Chippsters logo concept — playful wordmark with contemporary brand detailing.",
		},
	];

	return (
		<MobileWrapper>
			<main
				className="relative h-svh w-full bg-white"
				itemScope
				itemType="https://schema.org/WebPage"
			>
				<figure
					itemProp="primaryImageOfPage"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="m-0"
				>
					<button
						type="button"
						onClick={() => openAt(0)}
						className="block w-full cursor-zoom-in"
						aria-label="Open hero poster in lightbox"
						title="View hero poster"
					>
						<img
							src="/kreativ-festival-art-direction-1.webp"
							srcSet="/kreativ-festival-art-direction-1-800.webp 800w, /kreativ-festival-art-direction-1.webp 1600w"
							sizes="100vw"
							alt="Kreativ Fest hero poster — expressive grunge art direction."
							className="block w-full h-auto object-cover"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							itemProp="contentUrl"
							width={1600}
							height={2000}
						/>
					</button>
					<figcaption className="sr-only" itemProp="caption">
						Hero poster for Kreativ Fest visual identity.
					</figcaption>
					<meta itemProp="encodingFormat" content="image/webp" />
					<meta itemProp="width" content="1600" />
					<meta itemProp="height" content="2000" />
				</figure>

				<article
					className="px-6 py-4 pb-8 z-20 flex items-center gap-3 w-full justify-start flex-col text-[#363636]"
					itemScope
					itemType="https://schema.org/WebPageSection"
					aria-labelledby="graphic-design-title"
				>
					<ScreenTextFit>
						<header>
							<h1
								id="graphic-design-title"
								itemProp="headline name"
								className="font-display w-full italic text-[#363636] whitespace-nowrap [-webkit-text-stroke:2px_#363636] [text-stroke:2px_#363636]"
							>
								KREATIV fest
							</h1>
							<meta itemProp="inLanguage" content="en" />
						</header>
					</ScreenTextFit>

					<p
						itemProp="description"
						className="text-lg italic font-bold text-justify font-serif text-[#505050]"
					>
						Submission for the 2024 Kreativ Fest art direction at International Burch
						University. A grunge-influenced identity that channels the experimental spirit of
						David Carson with layered textures, bold typography, and neon accents.
					</p>

					<div className="flex w-full gap-2 pt-6" itemProp="hasPart">
						<div className="flex flex-col flex-1 gap-2">
							<figure itemScope itemType="https://schema.org/ImageObject" className="m-0">
								<button
									type="button"
									onClick={() => openAt(1)}
									className="block w-full cursor-zoom-in"
									aria-label="Open ID badge front in lightbox"
									title="View ID badge front"
								>
									<img
										src="/kreativ-festival-art-direction-right-1.webp"
										sizes="(max-width: 540px) 40vw, 400px"
										className="object-cover w-full h-full flex-1"
										loading="lazy"
										decoding="async"
										alt="Kreativ Fest ID badge — front side with custom logotype."
										itemProp="contentUrl"
										width={1200}
										height={1600}
									/>
								</button>
								<figcaption className="sr-only" itemProp="caption">
									ID badge front mockup.
								</figcaption>
							</figure>

							<figure itemScope itemType="https://schema.org/ImageObject" className="m-0">
								<button
									type="button"
									onClick={() => openAt(2)}
									className="block w-full cursor-zoom-in"
									aria-label="Open ID badge back in lightbox"
									title="View ID badge back"
								>
									<img
										src="/kreativ-festival-art-direction-right-3.webp"
										sizes="(max-width: 540px) 40vw, 400px"
										className="object-cover w-full h-full flex-1"
										loading="lazy"
										decoding="async"
										alt="Kreativ Fest ID badge — back side with typographic grid."
										itemProp="contentUrl"
										width={1200}
										height={1600}
									/>
								</button>
								<figcaption className="sr-only" itemProp="caption">
									ID badge back mockup.
								</figcaption>
							</figure>
						</div>

						<figure
							itemScope
							itemType="https://schema.org/ImageObject"
							className="m-0 flex-[1.3]"
						>
							<button
								type="button"
								onClick={() => openAt(3)}
								className="block w-full cursor-zoom-in"
								aria-label="Open program booklet in lightbox"
								title="View program booklet"
							>
								<img
									src="/kreativ-festival-art-direction-right-2.webp"
									sizes="(max-width: 640px) 55vw, 520px"
									className="object-contain w-full h-full"
									loading="lazy"
									decoding="async"
									alt="Kreativ Fest program booklet cover design."
									itemProp="contentUrl"
									width={1400}
									height={1600}
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Program booklet cover.
							</figcaption>
						</figure>
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm w-full pt-6 text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p className="text-base" itemProp="about">
							Built around a custom “Kreativ Euphoria” logotype, the identity leverages
							negative space, stamp-like marks, and ripped-poster textures to express youthful,
							chaotic energy.
						</p>
						<p className="text-base">
							A vivid palette of neon green, pink, and orange pushes against deep blacks and
							layered overlays for a tactile, urban look that feels both nostalgic and fresh.
						</p>
						<p className="text-base">
							The system adapts across posters, leaflets, and social media while preserving a
							cohesive, hand-made aesthetic.
						</p>
						<p className="text-base">
							The concept embraces imperfection and spontaneity — it doesn’t just promote an
							event; it embodies its energy.
						</p>
					</section>

					<section
						className="flex pt-6 flex-col gap-6 w-full items-center"
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
						<Carousel items={slides as any} loop rounded aria-label="Related works carousel" />
					</section>
				</article>

				<Lightbox
					open={opened}
					close={close}
					index={index}
					slides={kreatSlides}
					plugins={[Fullscreen, Share, Zoom, Download]}
					controller={{ closeOnBackdropClick: true }}
					carousel={{ finite: false, imageFit: "contain" }}
					styles={{ container: { zIndex: 200 } }}
					render={{
						slide: ({ slide }) => {
							if (!isImageSlide(slide)) return null;
							return (
								<figure className="mx-auto overflow-hidden rounded-md">
									<img
										src={slide.src}
										alt={slide.alt ?? ""}
										style={{ width: "100%", height: "auto", display: "block" }}
									/>
								</figure>
							);
						},
					}}
				/>
			</main>
		</MobileWrapper>
	);
};

export function meta() {
	const title =
		"KREATIV Fest – Festival Art Direction & Visual Identity | Kreativ Euphoria — Amna Kolić";
	const description =
		"Festival branding and art direction for KREATIV Fest: a grunge-inspired visual identity with custom logotype, bold typography, and poster system by Amna Kolić.";
	const url = "/graphic-design/kreativ-festival-art-direction";
	const image = "/kreativ-festival-art-direction-left.webp";
	const imageAlt =
		"KREATIV Fest visual identity concept showcasing grunge textures, bold type, and the 'Kreativ Euphoria' logotype.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"KREATIV Fest, art direction, festival branding, visual identity, poster design, typography, David Carson, grunge design, student project, International Burch University, Kreativ Euphoria"
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
		{ property: "article:tag", content: "Festival Branding" },
		{ property: "article:tag", content: "Art Direction" },
		{ property: "article:tag", content: "Poster Design" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const KreativFestivalArtDirection = () => null;
export default KreativFestivalArtDirection
