import { forwardRef, useMemo, useState } from "react";
import { LeftPage, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";
import Lightbox, { type Slide, type SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

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
			itemID="/book/illustration/austen-in-watercolor"
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
			<link itemProp="mainEntityOfPage" href="/book/illustration/austen-in-watercolor" />
			<link itemProp="isPartOf" href="/book/illustration" />
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

	const [opened, { open, close }] = useDisclosure(false);
	const [index, setIndex] = useState(0);

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
				itemID="/book/illustration/austen-in-watercolor"
				aria-labelledby="austen-gallery-title"
			>
				<meta itemProp="inLanguage" content="en" />
				<meta itemProp="name" content="Austen in Watercolor — Illustration Gallery" />
				<meta
					itemProp="keywords"
					content="Jane Austen illustrations, watercolor, Pride and Prejudice, Sense and Sensibility, Emma, literary art gallery"
				/>
				<link itemProp="mainEntityOfPage" href="/book/illustration/austen-in-watercolor" />
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
						className="object-cover z-0 w-full cursor-zoom-in select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						onClick={() => {
							setIndex(0);
							open();
						}}
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
						className="object-cover z-0 w-full cursor-zoom-in select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						onClick={() => {
							setIndex(1);
							open();
						}}
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
						className="object-cover z-0 w-full cursor-zoom-in select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						onClick={() => {
							setIndex(2);
							open();
						}}
					/>
					<meta itemProp="contentUrl" content={slides[2].src} />
					<figcaption className="sr-only" itemProp="caption">
						Emma — watercolor cameo illustration
					</figcaption>
				</figure>
			</article>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={slides}
				carousel={{ padding: 24 }}
				plugins={[Captions, Fullscreen, Share, Zoom, Download]}
			/>
		</RightPage>
	);
});

export function meta() {
	const title = "Austen in Watercolor — Jane Austen-Inspired Illustrations | Amna Kolić";
	const description =
		"Watercolor illustration series inspired by Pride and Prejudice, Sense and Sensibility, and Emma—literary symbolism meets contemporary visual storytelling.";
	const url = "/book/illustration/austen-in-watercolor";
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
