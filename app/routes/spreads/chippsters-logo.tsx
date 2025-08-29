import { forwardRef, useMemo, useState } from "react";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/chippsters-left.webp"
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
			itemType="https://schema.org/CreativeWork"
			itemID="/graphic-design/chippsters-logo"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Logo Design" />
			<meta
				itemProp="keywords"
				content="Chippsters, logo, logo design, branding, visual identity, mark, wordmark, portfolio"
			/>
			<meta itemProp="image" content="/chippsters-left.webp" />
			<link itemProp="mainEntityOfPage" href="/graphic-design/chippsters-logo" />
			<header className="flex flex-col items-end gap-8 2xl:gap-10">
				<div>
					<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">by Amna Kolić</span>
						</span>
					</p>
					<h1
						className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						Chipp<br />sters<br />Logo
					</h1>
				</div>
				<p
					className="font-serif tracking-[0.1em] 2xl:tracking-[0.2em]"
					itemProp="description"
				>
					Design and the idea behind it--
				</p>
			</header>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<article
			className="w-full h-full flex flex-col p-20 gap-6 justify-between"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/book/graphic-design/chippsters-logo"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Logo Design" />
			<meta
				itemProp="keywords"
				content="Chippsters, logo design, branding, visual identity, tech logo, mascot logo, negative space logo"
			/>
			<link itemProp="mainEntityOfPage" href="/book/graphic-design/chippsters-logo" />
			<meta itemProp="image" content="/chippsters-right.webp" />
			<div className="flex gap-10 justify-between w-full">
				<section className="flex text-[#505050] font-serif text-justify flex-col gap-4" itemProp="description">
					<p className="text-base 2xl:text-lg font-bold italic">
						The Chippsters logo was born from a playful fusion of chipmunk and hipster, reflecting a tech
						company that aims to be both casual and forward-thinking.
					</p>
					<p className="text-sm 2xl:text-base">
						With a name full of personality, the visual identity needed to match, professional yet
						approachable, clean but expressive. The logo features a chipmunk wearing a beanie and glasses,
						cleverly formed in the negative space of a bold letter “C.”
					</p>
				</section>
				<section className="flex text-[#505050] font-serif text-justify flex-col gap-4">
					<p className="text-sm 2xl:text-base">
						This simple, rounded shape ensures versatility and strong brand recognition, while the character
						adds charm and uniqueness. The clean circular shape ensures versatility, while the simplified
						character design keeps it easily recognizable across applications.
					</p>
					<p className="text-sm 2xl:text-base">
						A pastel green gradient brings a sense of freshness and calm professionalism. The result is a
						memorable, modern logo that stands out in the tech space with just the right balance of fun and
						clarity.
					</p>
				</section>
			</div>
			<img
				src="/chippsters-right.webp"
				alt="Chippsters logo mockups: circular C mark with chipmunk-in-negative-space on green gradient applications."
				className="w-full h-1/2 2xl:w-full 2xl:h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
				itemProp="image"
			/>
			<p className="sr-only">
				<span itemProp="author" itemScope itemType="https://schema.org/Person">
					<span itemProp="name">Amna Kolić</span>
				</span>
			</p>
		</article>
		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]"></div>
	</RightPage>
));

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const chippSlides = useMemo(
		() => [
			{
				src: "/chippsters-1.webp",
				alt: "Chippsters logo concept — modern circular emblem with playful negative-space chipmunk design.",
			},
			{
				src: "/chippsters-right.webp",
				alt: "Chippsters logo mockup — bold letter C with chipmunk character in negative space, beanie and glasses included.",
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
			title: "Kreativ Fest Art Direction",
			src: "/kreativ-festival-art-direction-1.webp",
			href: "/graphic-design/kreativ-festival-art-direction",
			alt: "Kreativ Fest art direction poster — bold grunge-inspired textures and expressive typography.",
		},
		{
			id: 2,
			title: "Sjećaš li se Doli Bel?",
			src: "/doli-bel-1.webp",
			href: "/graphic-design/sjecas-li-se-doli-bel",
			alt: "Poster design inspired by the film Sjećaš li se Doli Bel?, cinematic composition with bold graphic typography.",
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
						aria-label="Open Chippsters logo in lightbox"
						title="View Chippsters logo"
					>
						<img
							src="/chippsters-1.webp"
							sizes="100vw"
							alt="Chippsters logo concept — circular emblem with modern, playful character design."
							className="block w-full h-auto object-cover"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							itemProp="contentUrl"
							width={1600}
							height={2000}
						/>
					</button>
				</figure>

				<article
					className="px-6 py-8 z-20 flex items-center gap-4 w-full justify-start flex-col text-[#363636]"
					itemScope
					itemType="https://schema.org/WebPageSection"
					aria-labelledby="graphic-design-title"
				>
					<ScreenTextFit>
						<header>
							<h1
								id="graphic-design-title"
								itemProp="headline name"
								className="font-display pb-4 w-full text-right italic text-[#363636] leading-18 [-webkit-text-stroke:2px_#363636] [text-stroke:2px_#363636]"
							>
								Chippsters <br /> Logo
							</h1>
							<meta itemProp="inLanguage" content="en" />
						</header>
					</ScreenTextFit>

					<p
						itemProp="description"
						className="text-lg italic font-bold pb-4 text-justify font-serif text-[#505050]"
					>
						The Chippsters logo was born from a playful fusion of chipmunk and hipster, reflecting a tech company that aims to be both casual and forward-thinking.
					</p>

					<figure itemScope itemType="https://schema.org/ImageObject" className="m-0">
						<button
							type="button"
							onClick={() => openAt(1)}
							className="block w-full cursor-zoom-in"
							aria-label="Open Chippsters logo mockup in lightbox"
							title="View Chippsters logo mockup"
						>
							<img
								src="/chippsters-right.webp"
								sizes="(max-width: 540px) 40vw, 400px"
								className="object-cover w-full h-full flex-1"
								loading="lazy"
								decoding="async"
								alt="Chippsters logo mockup — bold C letterform with chipmunk silhouette."
								itemProp="contentUrl"
								width={1200}
								height={1600}
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							Chippsters logo mockup.
						</figcaption>
					</figure>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm w-full pt-6 text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p className="text-base" itemProp="about">
							With a name full of personality, the visual identity needed to match, professional yet approachable, clean but expressive. The logo features a chipmunk wearing a beanie and glasses, cleverly formed in the negative space of a bold letter “C.”
						</p>
						<p className="text-base">
							This simple, rounded shape ensures versatility and strong brand recognition, while the character adds charm and uniqueness. The clean circular shape ensures versatility, while the simplified character design keeps it easily recognizable across applications.
						</p>
						<p className="text-base">
							A pastel green gradient brings a sense of freshness and calm professionalism. The result is a memorable, modern logo that stands out in the tech space with just the right balance of fun and clarity.
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
						<Carousel items={slides} loop rounded aria-label="Related works carousel" />
					</section>
				</article>

				<Lightbox
					open={opened}
					close={close}
					index={index}
					slides={chippSlides}
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
		"Chippsters Logo Design — Tech Brand Visual Identity | Amna Kolić";
	const description =
		"Playful yet professional logo for a tech brand—chipmunk + hipster fused into a minimalist C-mark with negative space, clean geometry, and a fresh green gradient. Visual identity by Amna Kolić.";
	const url = "/graphic-design/chippsters-logo";
	const image = "/chippsters-right.webp";
	const imageAlt =
		"Chippsters logo mockups: circular C mark with a chipmunk silhouette in negative space, set on a soft green gradient.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"Chippsters, logo design, tech brand logo, mascot logo, negative space logo, branding, visual identity, wordmark, brand mark, minimalist logo, green gradient, portfolio, Amna Kolić"
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
		{ property: "article:section", content: "Graphic Design" },
		{ property: "article:tag", content: "Logo Design" },
		{ property: "article:tag", content: "Branding" },
		{ property: "article:tag", content: "Negative Space" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const ChippstersLogo = () => null;
export default ChippstersLogo;
