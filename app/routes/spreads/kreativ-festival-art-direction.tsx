import { forwardRef, useMemo, useState } from "react";
import { Lightbox, type Slide, type SlideImage } from "yet-another-react-lightbox";
import { LeftPage, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

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
			itemID="/book/graphic-design/kreativ-festival-art-direction"
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
				href="/book/graphic-design/kreativ-festival-art-direction"
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
				<link itemProp="mainEntityOfPage" href="/book/graphic-design/kreativ-festival-art-direction" />
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
					slide: ({ slide, rect }) => {
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
export function meta() {
	const title =
		"KREATIV Fest – Festival Art Direction & Visual Identity | Kreativ Euphoria — Amna Kolić";
	const description =
		"Festival branding and art direction for KREATIV Fest: a grunge-inspired visual identity with custom logotype, bold typography, and poster system by Amna Kolić.";
	const url = "/book/graphic-design/kreativ-festival-art-direction";
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
