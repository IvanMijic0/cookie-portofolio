import { forwardRef, useState } from "react";
import { LeftPage, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";
import Lightbox, { type Slide, type SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

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
