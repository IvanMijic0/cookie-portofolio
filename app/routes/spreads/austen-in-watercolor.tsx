import { forwardRef, useMemo, useState } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import Lightbox, { isImageSlide, type SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { Carousel, ScreenTextFit } from "~/components/UI";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <LeftPage ref={ref}>
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
						className="text-[6rem] text-left tracking-widest 2xl:text-[6rem] leading-22 2xl:leading-24 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						{t("illustrationTwo.title.titleOne", "Austen in")} {" "}
						{t("illustrationTwo.title.titleTwo", "watercolor")}
					</h1>
				</div>
			</header>
			<div className="flex pt-5 pr-5 items-start flex-col justify-start gap-3 2xl:gap-8">
				<div className="flex justify-between items-start w-full">
					<p
						className="text-base w-[75%] 2xl:w-[88%] font-serif 2xl:text-lg font-bold italic text-justify"
						itemProp="description"
					>
						{t(
							"illustrationTwo.text.textOne",
							"This illustration series was inspired by the emotional and thematic richness of Jane Austen’s Pride and Prejudice, Sense and Sensibility, and Emma."
						)}
					</p>

					<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">{t("common.by", "Project by")} </span>
						<span itemProp="creator author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
						</span>
					</p>
				</div>

				<p
					className="text-sm w-[75%] 2xl:w-[80%] 2xl:text-base font-serif text-justify"
					itemProp="artworkSurface"
				>
					{t(
						"illustrationTwo.text.textTwo",
						"Each piece captures the emotional core of its novel through symbolic compositions, framed like vintage cameos to evoke the era’s elegance and intimacy."
					)}
				</p>

				<p
					className="text-sm w-[75%] 2xl:w-[80%] 2xl:text-base font-serif text-justify"
					itemProp="articleBody"
				>
					{t(
						"illustrationTwo.text.textThree",
						"In Pride and Prejudice, two hands pull in opposite directions—symbolizing pride, misjudgment, and the eventual reconciliation of two strong wills. Sense and Sensibility shows a woman reaching for a man who doesn’t hold her firmly, while another hand behind her does—highlighting the contrast between fleeting passion and steady love. In Emma, the heroine is depicted playing chess with real people, reflecting her well-meaning but misguided attempts at matchmaking."
					)}
				</p>

				<p
					className="text-sm w-[75%] 2xl:w-[80%] 2xl:text-base font-serif text-justify"
					itemProp="articleBody"
				>
					{t(
						"illustrationTwo.text.textFour",
						"Every piece is adorned with meaningful flowers, chosen to represent the characters and emotional tone of each story. The series blends visual storytelling and literary symbolism, offering a modern yet respectful homage to Austen’s timeless narratives."
					)}
				</p>
			</div>
		</article>
	</LeftPage>
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	const slides = useMemo(
		() => [
			{
				src: "/austen-right-1.webp",
				alt: t(
					"illustrationTwo.slides.grid.1",
					"Watercolor cameo illustration inspired by Jane Austen’s Pride and Prejudice."
				),
			},
			{
				src: "/austen-right-2.webp",
				alt: t(
					"illustrationTwo.slides.grid.2",
					"Watercolor cameo illustration inspired by Sense and Sensibility."
				),
			},
			{
				src: "/austen-right-3.webp",
				alt: t(
					"illustrationTwo.slides.grid.3",
					"Watercolor cameo illustration inspired by Emma."
				),
			},
		],
		[t]
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
				<link itemProp="mainEntityOfPage" href="/illustration/austen-in-watercolor" />
				<h2 id="austen-gallery-title" className="sr-only">
					{t("illustrationTwo.meta.simpleName", "Austen in Watercolor — Gallery")}
				</h2>
				{slides.map((s) => (
					<figure
						key={s.src}
						className="w-36 2xl:w-52"
						itemProp="associatedMedia"
						itemScope
						itemType="https://schema.org/ImageObject"
					>
						<img
							src={s.src}
							alt={s.alt}
							className="object-cover z-0 w-full select-none"
							loading="eager"
							fetchPriority="high"
							decoding="async"
						/>
						<meta itemProp="contentUrl" content={s.src} />
						<figcaption className="sr-only" itemProp="caption">
							{s.alt}
						</figcaption>
					</figure>
				))}
			</article>
		</RightPage>
	);
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const austenSlides = useMemo(
		() => [
			{
				src: "/austen-right-1.webp",
				alt: t(
					"illustrationTwo.slides.mobile.1",
					"Pride and Prejudice — two hands pulling in opposite directions, symbolizing pride, misjudgment, and reconciliation."
				),
			},
			{
				src: "/austen-right-2.webp",
				alt: t(
					"illustrationTwo.slides.mobile.2",
					"Sense and Sensibility — a woman reaches for a man who doesn’t hold her firmly, while a steadier hand supports from behind."
				),
			},
			{
				src: "/austen-right-3.webp",
				alt: t(
					"illustrationTwo.slides.mobile.3",
					"Emma — the heroine plays chess with real people, alluding to her well-meaning yet misguided matchmaking."
				),
			},
		],
		[t]
	);

	const openAt = (i: number) => {
		setIndex(i);
		setOpened(true);
	};
	const close = () => setOpened(false);


	const slides = [
		{
			id: 1,
			title: t("illustrationOne.title.titleOne", "Mountain") + " " + t("illustrationOne.title.titleTwo", "Fairy"),
			src: "/mountain-fairy-right.webp",
			href: makeHref ? makeHref("/illustration/mountain-fairy") : "/illustration/mountain-fairy",
			alt: t(
				"illustrationTwo.related.mountainFairy",
				"Mountain Fairy — Bosnian planinska vila illustrated with wildflowers and horns in a warm forest."
			),
		},
		{
			id: 2,
			title: t("illustrationThree.title.titleOne", "Bosnia in") + " " + t("illustrationThree.title.titleThree", "of Europe"),
			src: "/mural.webp",
			href: makeHref ? makeHref("/illustration/mural") : "/illustration/mural",
			alt: t(
				"illustrationTwo.related.mural",
				"Bosnia in the Heart of Europe — mural artwork blending cultural heritage and contemporary design."
			),
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
						alt={t("illustrationTwo.meta.imageAlt", "Austen in Watercolor — editorial hero illustration background")}
						className="w-full h-full object-cover opacity-80"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						itemProp="contentUrl"
						width={1600}
						height={2400}
					/>
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
							{t("illustrationTwo.title.titleOne", "Austen in")} <br /> {t("illustrationTwo.title.titleTwo", "watercolor")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<div className="flex justify-between w-full gap-2 py-4">
						{austenSlides.map((s, i) => (
							<figure key={s.src} itemScope itemType="https://schema.org/ImageObject" className="w-full">
								<button
									type="button"
									onClick={() => openAt(i)}
									className="block w-full cursor-zoom-in"
									aria-label={t("illustrationTwo.slides.openAria", "Open illustration")}
									title={t("illustrationTwo.slides.openTitle", "View illustration")}
								>
									<img
										src={s.src}
										sizes="(max-width: 640px) 100vw, 640px"
										alt={s.alt}
										width={1600}
										height={2000}
										className="object-cover w-full h-auto"
										loading="eager"
										decoding="async"
										itemProp="contentUrl"
									/>
								</button>
								<figcaption className="sr-only" itemProp="caption">
									{s.alt}
								</figcaption>
							</figure>
						))}
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t(
								"illustrationTwo.text.textOne",
								"This illustration series was inspired by the emotional and thematic richness of Jane Austen’s Pride and Prejudice, Sense and Sensibility, and Emma."
							)}
						</p>
						<p className="text-base" itemProp="about">
							{t(
								"illustrationTwo.text.textTwo",
								"Each piece captures the emotional core of its novel through symbolic compositions, framed like vintage cameos to evoke the era’s elegance and intimacy."
							)}
						</p>
						<p className="text-base">
							{t(
								"illustrationTwo.text.textThree",
								"In Pride and Prejudice, two hands pull in opposite directions—symbolizing pride, misjudgment, and the eventual reconciliation of two strong wills. Sense and Sensibility shows a woman reaching for a man who doesn’t hold her firmly, while another hand behind her does—highlighting the contrast between fleeting passion and steady love. In Emma, the heroine is depicted playing chess with real people, reflecting her well-meaning but misguided attempts at matchmaking."
							)}
						</p>
						<p className="text-base">
							{t(
								"illustrationTwo.text.textFour",
								"Every piece is adorned with meaningful flowers, chosen to represent the characters and emotional tone of each story. The series blends visual storytelling and literary symbolism, offering a modern yet respectful homage to Austen’s timeless narratives."
							)}
						</p>
					</section>

					<section className="flex flex-col gap-6 w-full items-center" aria-labelledby="see-more-like-this">
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								{t("shared.seeMoreLikeThis", "See more like this")}
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

export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params.lang === "ba" ? "ba" : "en";
	const tt = (k: string, fb?: string) => translate(lang, `illustrationTwo.meta.${k}`, fb);

	const title = tt("title", "Austen in Watercolor — Jane Austen-Inspired Illustrations | Amna Kolić");
	const description = tt(
		"description",
		"Watercolor illustration series inspired by Pride and Prejudice, Sense and Sensibility, and Emma—literary symbolism meets contemporary visual storytelling."
	);
	const url = "/illustration/austen-in-watercolor";
	const img1 = "/austen-right-1.webp";
	const img2 = "/austen-left.webp";
	const imageAlt1 = tt(
		"imageAlt1",
		"Watercolor cameo illustration inspired by Jane Austen’s Pride and Prejudice"
	);
	const imageAlt2 = tt("imageAlt2", "Austen in Watercolor — series cover illustration");
	const keywords = tt(
		"keywords",
		"Jane Austen, watercolor illustration, Pride and Prejudice, Sense and Sensibility, Emma, literary art, concept illustration, portfolio"
	);

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "author", content: "Amna Kolić" },
		{ name: "keywords", content: keywords },
		{ name: "robots", content: "index,follow,max-image-preview:large" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: tt("siteName", "Amna Kolić Portfolio") },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "og:image", content: img1 },
		{ property: "og:image:alt", content: imageAlt1 },
		{ property: "og:image", content: img2 },
		{ property: "og:image:alt", content: imageAlt2 },
		{ property: "article:author", content: "Amna Kolić" },
		{ property: "article:section", content: tt("section", "Illustration") },
		{ property: "article:tag", content: "Jane Austen" },
		{ property: "article:tag", content: "Watercolor" },
		{ property: "article:tag", content: "Literary Illustration" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: img1 },
		{ name: "twitter:image:alt", content: imageAlt1 },
	];
};

export const loader = () => null;

const AustenInWatercolor = () => null;
export default AustenInWatercolor;
