import { forwardRef, useMemo, useState } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import Lightbox, { isImageSlide, type SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { Carousel, ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/austen-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 py-12 inset-0 z-10  text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/illustration/austen-in-watercolor"
			aria-labelledby="austen-watercolor-title"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Illustration" />
			<meta
				itemProp="keywords"
				content="Jane Austen, watercolor illustration, Pride and Prejudice, Sense and Sensibility, Emma, literary art, concept illustration, portfolio"
			/>
			<meta itemProp="artMedium" content="Watercolor" />
			<meta itemProp="artform" content="Illustration" />
			<meta itemProp="image" content="/austen-left.webp" />
			<link itemProp="mainEntityOfPage" href="/illustration/austen-in-watercolor" />
			<link itemProp="isPartOf" href="/illustration" />
			<span className="sr-only" itemProp="about" itemScope itemType="https://schema.org/CreativeWork">
				<span itemProp="name">Pride and Prejudice</span>
			</span>
			<span className="sr-only" itemProp="about" itemScope itemType="https://schema.org/CreativeWork">
				<span itemProp="name">Sense and Sensibility</span>
			</span>
			<span className="sr-only" itemProp="about" itemScope itemType="https://schema.org/CreativeWork">
				<span itemProp="name">Emma</span>
			</span>
			<header>
				<div>
					<h1
						id="austen-watercolor-title"
						className="text-[6rem] text-left tracking-widest 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						Austen in watercolor
					</h1>
				</div>
			</header>
			<div className="flex pt-5 pr-5 items-start flex-col justify-start gap-3 2xl:gap-8">
				<div className="flex justify-between items-start w-full">
					<p
						className="text-base w-[75%] 2xl:w-[70%] font-serif 2xl:text-lg font-bold italic text-justify"
						itemProp="description"
					>
						This illustration series was inspired by the emotional and thematic richness of Jane
						Austen’s{' '}
						<em>Pride and Prejudice</em>, <em>Sense and Sensibility</em>, and <em>Emma</em>.
					</p>

					<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="creator author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">by Amna Kolić</span>
						</span>
					</p>
				</div>

				<p
					className="text-sm w-[75%] 2xl:w-[70%] 2xl:text-base font-serif text-justify"
					itemProp="artworkSurface"
				>
					Each piece captures the emotional core of its novel through symbolic compositions, framed like
					vintage
					cameos to evoke the era’s elegance and intimacy.
				</p>

				<p
					className="text-sm w-[75%] 2xl:w-[70%] 2xl:text-base font-serif text-justify"
					itemProp="articleBody"
				>
					In <em>Pride and Prejudice</em>, two hands pull in opposite directions—symbolizing pride,
					misjudgment, and
					the eventual reconciliation of two strong wills. <em>Sense and Sensibility</em> shows a woman
					reaching for a
					man who doesn’t hold her firmly, while another hand behind her does—highlighting the contrast
					between
					fleeting passion and steady love. In <em>Emma</em>, the heroine is depicted playing chess with real
					people,
					reflecting her well-meaning but misguided attempts at matchmaking.
				</p>

				<p
					className="text-sm w-[75%] 2xl:w-[70%] 2xl:text-base font-serif text-justify"
					itemProp="articleBody"
				>
					Every piece is adorned with meaningful flowers, chosen to represent the characters and emotional
					tone of each
					story. The series blends visual storytelling and literary symbolism, offering a modern yet
					respectful homage
					to Austen’s timeless narratives.
				</p>
			</div>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const slides: SlideImage[] = useMemo(
		() => [
			{
				src: "/austen-right-1.webp",
				alt: "Watercolor cameo illustration inspired by Jane Austen’s Pride and Prejudice.",
			},
			{
				src: "/austen-right-2.webp",
				alt: "Watercolor cameo illustration inspired by Sense and Sensibility.",
			},
			{
				src: "/austen-right-3.webp",
				alt: "Watercolor cameo illustration inspired by Emma.",
			},
		],
		[]
	);

	return (
		<RightPage ref={ref} showBookmark>
			<img
				src="/austen-right.webp"
				alt=""
				role="presentation"
				aria-hidden="true"
				className="w-full h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
			/>

			<article
				className="absolute px-12 2xl:px-20 pt-14 2xl:pt-20 inset-0 z-10 flex items-start justify-between"
				itemScope
				itemType="https://schema.org/ImageGallery"
				itemID="/illustration/austen-in-watercolor"
				aria-labelledby="austen-gallery-title"
			>
				<meta itemProp="inLanguage" content="en" />
				<meta itemProp="name" content="Austen in Watercolor — Illustration Gallery" />
				<meta
					itemProp="keywords"
					content="Jane Austen illustrations, watercolor, Pride and Prejudice, Sense and Sensibility, Emma, literary art gallery"
				/>
				<link itemProp="mainEntityOfPage" href="/illustration/austen-in-watercolor" />
				<h2 id="austen-gallery-title" className="sr-only">
					Austen in Watercolor — Gallery
				</h2>
				<figure
					className="w-36 2xl:w-52"
					itemProp="associatedMedia"
					itemScope
					itemType="https://schema.org/ImageObject"
				>
					<img
						src={slides[0].src}
						alt={slides[0].alt ?? ""}
						className="object-cover z-0 w-full select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
					/>
					<meta itemProp="contentUrl" content={slides[0].src} />
					<figcaption className="sr-only" itemProp="caption">
						Pride and Prejudice — watercolor cameo illustration
					</figcaption>
				</figure>
				<figure
					className="w-36 2xl:w-52"
					itemProp="associatedMedia"
					itemScope
					itemType="https://schema.org/ImageObject"
				>
					<img
						src={slides[1].src}
						alt={slides[1].alt ?? ""}
						className="object-cover z-0 w-full select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
					/>
					<meta itemProp="contentUrl" content={slides[1].src} />
					<figcaption className="sr-only" itemProp="caption">
						Sense and Sensibility — watercolor cameo illustration
					</figcaption>
				</figure>
				<figure
					className="w-36 2xl:w-52"
					itemProp="associatedMedia"
					itemScope
					itemType="https://schema.org/ImageObject"
				>
					<img
						src={slides[2].src}
						alt={slides[2].alt ?? ""}
						className="object-cover z-0 w-full select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
					/>
					<meta itemProp="contentUrl" content={slides[2].src} />
					<figcaption className="sr-only" itemProp="caption">
						Emma — watercolor cameo illustration
					</figcaption>
				</figure>
			</article>
		</RightPage>
	);
});

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const austenSlides = useMemo(
		() => [
			{
				src: "/austen-right-1.webp",
				alt:
					"Pride and Prejudice — two hands pulling in opposite directions, symbolizing pride, misjudgment, and reconciliation.",
			},
			{
				src: "/austen-right-2.webp",
				alt:
					"Sense and Sensibility — a woman reaches for a man who doesn’t hold her firmly, while a steadier hand supports from behind.",
			},
			{
				src: "/austen-right-3.webp",
				alt:
					"Emma — the heroine plays chess with real people, alluding to her well-meaning yet misguided matchmaking.",
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
			title: "Bosnia in the Heart of Europe",
			src: "/mural.webp",
			href: "/photography/mural",
			alt:
				"Bosnia in the Heart of Europe — mural artwork blending cultural heritage and contemporary design.",
		},
	];

	return (
		<MobileWrapper>
			<div className="relative w-full">
				<figure
					itemProp="primaryImageOfPage"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="absolute inset-0 m-0 z-0"
				>
					<img
						src="/austen.webp"
						sizes="100vw"
						alt="Austen in Watercolor — editorial hero illustration background"
						className="w-full h-full object-cover opacity-80"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						itemProp="contentUrl"
						width={1600}
						height={2400}
					/>
					<meta itemProp="caption" content="Hero background for Austen in Watercolor series." />
				</figure>

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
							Austen in <br /> watercolor
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<div className="flex justify-between w-full gap-2 py-4">
						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(0)}
								className="block w-full cursor-zoom-in"
								aria-label="Open Pride and Prejudice illustration"
								title="View Pride and Prejudice"
							>
								<img
									src="/austen-right-1.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt="Pride and Prejudice — symbolic hands in tension and eventual reconciliation."
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Pride and Prejudice illustration
							</figcaption>
						</figure>

						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(1)}
								className="block w-full cursor-zoom-in"
								aria-label="Open Sense and Sensibility illustration"
								title="View Sense and Sensibility"
							>
								<img
									src="/austen-right-2.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt="Sense and Sensibility — the contrast between fleeting passion and steady love."
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Sense and Sensibility illustration
							</figcaption>
						</figure>

						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(2)}
								className="block w-full cursor-zoom-in"
								aria-label="Open Emma illustration"
								title="View Emma"
							>
								<img
									src="/austen-right-3.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt="Emma — playing chess with people, hinting at well-meaning matchmaking."
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								Emma illustration
							</figcaption>
						</figure>
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							This illustration series was inspired by the emotional and thematic richness of Jane Austen’s Pride and
							Prejudice, Sense and Sensibility, and Emma.
						</p>
						<p className="text-base" itemProp="about">
							Each piece captures the emotional core of its novel through symbolic compositions, framed like vintage
							cameos to evoke the era’s elegance and intimacy.
						</p>
						<p className="text-base">
							In Pride and Prejudice, two hands pull in opposite directions—symbolizing pride, misjudgment, and the
							eventual reconciliation of two strong wills. Sense and Sensibility shows a woman reaching for a man who
							doesn’t hold her firmly, while another hand behind her does—highlighting the contrast between fleeting
							passion and steady love. In Emma, the heroine is depicted playing chess with real people, reflecting her
							well-meaning but misguided attempts at matchmaking.
						</p>
						<p className="text-base">
							Every piece is adorned with meaningful flowers, chosen to represent the characters and emotional tone of
							each story. The series blends visual storytelling and literary symbolism, offering a modern yet respectful
							homage to Austen’s timeless narratives.
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
				slides={austenSlides}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				styles={{ container: { zIndex: 200 } }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide }) => {
						if (!isImageSlide(slide)) return null;

						return (
							<figure
								className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5"
							>
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
	const title = "Austen in Watercolor — Jane Austen-Inspired Illustrations | Amna Kolić";
	const description =
		"Watercolor illustration series inspired by Pride and Prejudice, Sense and Sensibility, and Emma—literary symbolism meets contemporary visual storytelling.";
	const url = "/illustration/austen-in-watercolor";
	const img1 = "/austen-right-1.webp";
	const img2 = "/austen-left.webp";

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "author", content: "Amna Kolić" },
		{
			name: "keywords",
			content: "Jane Austen, watercolor illustration, Pride and Prejudice, Sense and Sensibility, Emma, literary art, concept illustration, portfolio"
		},
		{ name: "robots", content: "index,follow,max-image-preview:large" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:locale", content: "en_US" },
		{ property: "og:image", content: img1 },
		{
			property: "og:image:alt",
			content: "Watercolor cameo illustration inspired by Jane Austen’s Pride and Prejudice"
		},
		{ property: "og:image", content: img2 },
		{ property: "og:image:alt", content: "Austen in Watercolor — series cover illustration" },
		{ property: "article:author", content: "Amna Kolić" },
		{ property: "article:section", content: "Illustration" },
		{ property: "article:tag", content: "Jane Austen" },
		{ property: "article:tag", content: "Watercolor" },
		{ property: "article:tag", content: "Literary Illustration" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: img1 },
		{
			name: "twitter:image:alt",
			content: "Watercolor cameo illustration inspired by Jane Austen’s Pride and Prejudice"
		},
	];
}

export const loader = () => null;

const AustenInWatercolor = () => null;
export default AustenInWatercolor;
