import { forwardRef, useMemo, useState } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";
import Lightbox, { isImageSlide, type Slide, type SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { Carousel, ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const slides: SlideImage[] = [
		{
			src: "/doli-bel-left-1.webp",
			alt: "Visual detail from the ‘Sjećaš li se Doli Bel’ design concept",
		},
	];

	const [opened, { open, close }] = useDisclosure(false);
	const [index, setIndex] = useState(0);

	return (
		<LeftPage ref={ref}>
			<img
				src="/doli-bel-left.webp"
				alt=""
				role="presentation"
				aria-hidden="true"
				className="w-full h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
			/>

			<article
				className="absolute px-16 py-24 inset-0 z-10 flex items-start flex-col justify-start text-[#363636] leading-[0.8]"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/book/graphic-design/sjecas-li-se-doli-bel"
			>
				<meta itemProp="inLanguage" content="bs" />
				<meta itemProp="genre" content="Graphic Design" />
				<meta
					itemProp="keywords"
					content="Sjećaš li se Doli Bel, Doli Bel, graphic design, poster, editorial, visual identity, Bosnian design"
				/>
				<meta itemProp="name" content="Sjećaš li se Doli Bel — Visual Concept" />
				<meta itemProp="image" content="/doli-bel-left.webp" />
				<meta itemProp="image" content="/doli-bel-left-1.webp" />
				<link itemProp="mainEntityOfPage" href="/book/graphic-design/sjecas-li-se-doli-bel" />

				<div className="flex flex-col items-start justify-between h-full gap-2">
					<header className="flex flex-col gap-1">
						<h1
							className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-30 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
							itemProp="headline"
						>
							Sjećaš<br />li se<br />Doli<br />Bel
						</h1>
						<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
							<span className="sr-only">Project by </span>
							<span itemProp="author" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">by Amna Kolić</span>
							</span>
						</p>
					</header>

					<img
						src={slides[0].src}
						alt={slides[0].alt}
						className="w-64 2xl:w-96 2xl:pb-8 object-cover z-0 cursor-zoom-in select-none"
						loading="eager"
						fetchPriority="high"
						itemProp="image"
						onClick={() => {
							setIndex(0);
							open();
						}}
					/>
				</div>
			</article>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={slides as Slide[]}
				plugins={[Captions, Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				carousel={{ finite: false }}
			/>
		</LeftPage>
	);
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/doli-bel-right.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute font-serif px-16 2xl:px-24 pt-28 inset-0 z-10 flex items-end flex-col gap-4 justify-start text-[#505050] leading-[0.8]"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/graphic-design/sjecas-li-se-doli-bel"
		>
			<h2 className="sr-only" itemProp="headline">
				Sjećaš li se Doli Bel — Visual Identity for Stage Adaptation
			</h2>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Graphic Design" />
			<meta
				itemProp="keywords"
				content="Sjećaš li se Doli Bel, Doli Bel, poster, stage adaptation, Kamerni Teatar 55, Sarajevo, visual identity, graphic design"
			/>
			<meta itemProp="image" content="/doli-bel-right.webp" />
			<link
				itemProp="mainEntityOfPage"
				href="/book/graphic-design/sjecas-li-se-doli-bel"
			/>
			<span itemProp="creator" itemScope itemType="https://schema.org/Person" className="sr-only">
				<span itemProp="name">Amna Kolić</span>
			</span>
			<span itemProp="about" itemScope itemType="https://schema.org/CreativeWork" className="sr-only">
				<span itemProp="name">Sjećaš li se Doli Bel</span>
			</span>
			<span itemProp="publisher" itemScope itemType="https://schema.org/Organization" className="sr-only">
				<span itemProp="name">Kamerni Teatar 55</span>
				<meta itemProp="address" content="Sarajevo, Bosnia and Herzegovina" />
			</span>
			<p
				className="w-72 2xl:w-[20rem] text-justify text-base 2xl:text-lg font-bold italic"
				itemProp="description"
			>
				For the stage adaptation of Sjećaš li se Doli Bel at Kamerni Teatar 55 in Sarajevo, I reimagined the
				promotional visuals with a concept rooted in emotional symbolism and narrative depth.
			</p>

			<p className="w-72 2xl:w-[20rem] text-justify text-sm 2xl:text-base" itemProp="articleBody">
				Drawing from the story’s themes of adolescence, loss, and emotional decay, I chose a vivid red
				background to reflect the intensity of the characters’ surroundings. In contrast, white handwritten
				typography symbolizes innocence that is gradually consumed by the world around it. The fragmented title
				layout forms a crooked house shape, referencing the confined and unstable spaces where much of the story
				takes place, from family homes to hotel rooms.
			</p>

			<p className="w-72 2xl:w-[20rem] text-justify text-sm 2xl:text-base" itemProp="articleBody">
				The handwritten typeface ties into the characters’ search for connection and learning, especially
				through the relationship between Doli and the protagonist. It evokes both vulnerability and a desire for
				understanding in a world that feels unstable. The accompanying brochure continues this narrative
				visually, with a circular, disoriented layout that mirrors the story’s emotional cycles and sense of
				imbalance. This identity captures the fragile, messy, and deeply human essence of the play.
			</p>
		</article>
	</RightPage>
));

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const doliSlides = useMemo(
		() => [
			{
				src: "/doli-bel-1.webp",
				alt: "Sjećaš li se Doli Bel? — primary poster with fragmented typography forming a crooked house silhouette on a vivid red background.",
			},
			{
				src: "/doli-bel-left-1.webp",
				alt: "Sjećaš li se Doli Bel? — ID badge front mockup with handwritten typography symbolizing vulnerability and innocence.",
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
			title: "Chippsters Logo",
			src: "/chippsters-1.webp",
			href: "/graphic-design/chippsters-logo",
			alt: "Chippsters logo design concept — playful wordmark with modern branding aesthetics.",
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
							src="/doli-bel-1.webp"
							sizes="100vw"
							alt="Sjećaš li se Doli Bel? hero poster — fragmented red typography forming a crooked house silhouette."
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
								Sjećaš li se <br /> Doli Bel
							</h1>
							<meta itemProp="inLanguage" content="en" />
						</header>
					</ScreenTextFit>

					<p
						itemProp="description"
						className="text-lg italic font-bold pb-4 text-justify font-serif text-[#505050]"
					>
						For the stage adaptation of <em>Sjećaš li se Doli Bel?</em> at Kamerni Teatar 55 in Sarajevo, this design reimagines the play’s promotional visuals through symbolic typography, color, and emotional texture.
					</p>

					<figure
						itemScope
						itemType="https://schema.org/ImageObject"
						className="m-0"
					>
						<button
							type="button"
							onClick={() => openAt(1)}
							className="block w-full cursor-zoom-in"
							aria-label="Open ID badge front in lightbox"
							title="View ID badge front"
						>
							<img
								src="/doli-bel-left-1.webp"
								sizes="(max-width: 540px) 40vw, 400px"
								className="object-cover w-full h-full flex-1"
								loading="lazy"
								decoding="async"
								alt="Sjećaš li se Doli Bel? — ID badge front with red background and white handwritten typography."
								itemProp="contentUrl"
								width={1200}
								height={1600}
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							ID badge front mockup.
						</figcaption>
					</figure>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm w-full pt-6 text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p className="text-base" itemProp="about">
							Drawing from the story’s themes of adolescence, loss, and emotional decay,          I chose a vivid red background to reflect the intensity of the characters’ surroundings. In contrast, white handwritten typography symbolizes innocence that is gradually consumed by the world around it. The fragmented title layout forms a crooked house shape, referencing the confined and unstable spaces where much of the story takes place, from family homes to hotel rooms.
						</p>
						<p className="text-base">
							The handwritten typeface ties into the characters’ search for connection and learning, especially through the relationship between Doli and the protagonist. It evokes both vulnerability and a desire for understanding in a world that feels unstable. The accompanying brochure continues this narrative visually, with a circular, disoriented layout that mirrors the story’s emotional cycles and sense of imbalance. This identity captures the fragile, messy,  and deeply human essence of the play.
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
					slides={doliSlides}
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
		"Sjećaš li se Doli Bel — Theatre Visual Identity & Poster Design | Amna Kolić";
	const description =
		"Visual identity and poster design for the stage adaptation of “Sjećaš li se Doli Bel” at Kamerni Teatar 55, Sarajevo—handwritten typography, symbolic layout, and bold color storytelling by Amna Kolić.";
	const url = "/book/graphic-design/sjecas-li-se-doli-bel";
	const image = "/doli-bel-right.webp";
	const imageAlt =
		"Red theatre poster concept for “Sjećaš li se Doli Bel” with expressive handwritten typography forming a house-like layout.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"Sjećaš li se Doli Bel, Doli Bel, theatre poster, stage adaptation, Kamerni Teatar 55, Sarajevo, visual identity, graphic design, Bosnian design, editorial, typography"
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
		{ property: "og:locale", content: "en_US" },
		{ property: "og:locale:alternate", content: "bs_BA" },
		{ property: "article:section", content: "Graphic Design" },
		{ property: "article:tag", content: "Theatre Poster" },
		{ property: "article:tag", content: "Visual Identity" },
		{ property: "article:tag", content: "Bosnian Design" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const SjecasLiSeDoliBel = () => null;
export default SjecasLiSeDoliBel;
