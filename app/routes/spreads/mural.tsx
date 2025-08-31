import { forwardRef, useMemo, useState } from "react";
import type { MetaFunction } from "react-router";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";
import { useTranslate } from "~/context/I18nProvider";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <LeftPage ref={ref}>
		<img
			src="/mural-left.webp"
			alt={t("illustrationThree.meta.imageAlt", "Mural concept visual: Bosnia in the Heart of Europe with Sarajevo motifs and European landmarks.")}
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
			<link itemProp="mainEntityOfPage" href="/illustration/mural" />
			<header className="flex flex-col items-start gap-8">
				<div>
					<h1
						id="mural-title"
						className="text-[6rem] text-left tracking-wider 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						{t("illustrationThree.title.titleOne", "Bosnia in")}{" "}
						{t("illustrationThree.title.titleTwo", "the heart")}{" "}
						{t("illustrationThree.title.titleThree", "of Europe")}
					</h1>
				</div>
				<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">{t("common.by", "Project by")} </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
						<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
					</span>
				</p>
			</header>
			<div className="flex 2xl:pt-8 flex-col gap-4 2xl:gap-8 justify-start w-[84%] 2xl:w-2/3">
				<p
					className="text-base font-serif leading-5 2xl:leading-6 2xl:text-lg font-bold italic text-justify"
					itemProp="description"
				>
					{t(
						"illustrationThree.text.textOne",
						"Created for the Europe House mural contest, this work brings the theme “Bosnia in the Heart of Europe” to life by merging national identity with continental unity."
					)}
				</p>
				<p
					className="text-sm 2xl:text-base leading-5 2xl:leading-6 font-serif text-justify"
					itemProp="artworkSurface"
				>
					{t(
						"illustrationThree.text.textTwo",
						"At the center, a tourist rests beneath a tree as Sarajevo’s familiar skyline unfolds into a sweeping panorama of iconic European landmarks, placing Bosnia not on the periphery, but firmly in Europe’s cultural and geographical heart. Pigeons, a recurring symbol of Sarajevo, traverse the scene as messengers of peace, movement, and connection—reinforcing Bosnia’s role as part of the wider European community. A bold yellow accent, taken from both the Bosnian flag and Europe House identity, ties the visual elements together into a cohesive narrative."
					)}
				</p>
				<p
					className="text-sm 2xl:text-base leading-5 2xl:leading-6 font-serif text-justify"
					itemProp="artworkSurface"
				>
					{t(
						"illustrationThree.text.textThree",
						"The lower part of the mural was intentionally kept minimal due to the placement of nearby seating, inviting viewers to sit, reflect, and embrace the shared values of unity, respect, and belonging."
					)}
				</p>
			</div>
		</article>
	</LeftPage>
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return (
		<RightPage ref={ref} showBookmark>
			<img
				src="/mural-right.webp"
				alt={t("illustrationThree.meta.imageAlt", "Mural concept visual: Bosnia in the Heart of Europe with Sarajevo motifs and European landmarks.")}
				className="w-full h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
				itemProp="image"
			/>
		</RightPage>
	);
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const muralSlides = useMemo(
		() => [
			{
				src: "/mural-1.webp",
				alt: t(
					"illustrationThree.slides.grid.1",
					"Bosnia in the Heart of Europe — foreground figure beneath a tree with Sarajevo in the background, opening into European landmarks."
				),
			},
			{
				src: "/mural-2.webp",
				alt: t(
					"illustrationThree.slides.grid.2",
					"Bosnia in the Heart of Europe — pigeons in flight connect Sarajevo motifs with iconic European architecture across the scene."
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
				"illustrationThree.related.mountainFairy",
				"Mountain Fairy — Bosnian planinska vila illustrated with wildflowers and horns in a warm forest."
			),
		},
		{
			id: 2,
			title: t("illustrationTwo.title.titleOne", "Austen in") + " " + t("illustrationTwo.title.titleTwo", "watercolor"),
			src: "/austen-right-1.webp",
			href: makeHref ? makeHref("/illustration/austen-in-watercolor") : "/illustration/austen-in-watercolor",
			alt: t(
				"illustrationThree.related.austenWatercolor",
				"Austen in Watercolor — literary symbolism meets contemporary visual storytelling."
			),
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
							{t("illustrationThree.title.titleOne", "Bosnia in")} <br />
							{t("illustrationThree.title.titleTwo", "the heart")} <br />
							{t("illustrationThree.title.titleThree", "of Europe")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<section
						id="description"
						aria-label={t("common.projectDescription", "Project description")}
						className="text-sm w-full text-[#505050] pt-8 font-serif text-justify"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t(
								"illustrationThree.text.textOneMobile",
								"Created for the Europe House mural contest, this piece visualizes the theme “Bosnia in the Heart of Europe” by blending identity with continental unity. At the center sits a tourist beneath a tree."
							)}
						</p>
					</section>

					<div className="flex flex-col justify-between w-full gap-8 py-4">
						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(0)}
								className="block w-full cursor-zoom-in"
								aria-label={t("illustrationThree.slides.openAria", "Open mural artwork")}
								title={`${t("illustrationThree.slides.openTitle", "View mural")} — ${t("common.panel", "panel")} 1`}
							>
								<img
									src="/mural-1.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt={t(
										"illustrationThree.slides.mobile.1",
										"Sarajevo foreground opens into European landmarks; unity across the continent."
									)}
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								{t("illustrationThree.captions.panel1", "Mural panel 1 — Sarajevo meets Europe.")}
							</figcaption>
						</figure>

						<figure itemScope itemType="https://schema.org/ImageObject" className="w-full">
							<button
								type="button"
								onClick={() => openAt(1)}
								className="block w-full cursor-zoom-in"
								aria-label={t("illustrationThree.slides.openAria", "Open mural artwork")}
								title={`${t("illustrationThree.slides.openTitle", "View mural")} — ${t("common.panel", "panel")} 2`}
							>
								<img
									src="/mural-2.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt={t(
										"illustrationThree.slides.mobile.2",
										"Pigeons as messengers linking Sarajevo’s symbols with Europe’s cultural heritage."
									)}
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									itemProp="contentUrl"
								/>
							</button>
							<figcaption className="sr-only" itemProp="caption">
								{t("illustrationThree.captions.panel2", "Mural panel 2 — Pigeons as messengers across borders.")}
							</figcaption>
						</figure>
					</div>

					<section
						id="description"
						aria-label={t("common.projectDescription", "Project description")}
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-base">
							{t(
								"illustrationThree.mobile.textA",
								"The view opens up from Sarajevo’s familiar cityscape into a panoramic sweep of iconic European landmarks, positioning Bosnia not at the edge, but firmly within the cultural and geographical heart of Europe. The presence of pigeons, a recurring symbol of Sarajevo, connects the different elements as they fly across borders, cities, and monuments—serving as visual messengers of movement, peace, and connection."
							)}
						</p>
						<p className="text-base" itemProp="about">
							{t(
								"illustrationThree.mobile.textB",
								"A bold yellow accent runs throughout the mural, referencing both the Bosnian flag and the Europe House visual identity. This shared color creates unity and draws the eye across the scene, tying disparate symbols into a single cohesive narrative."
							)}
						</p>
						<p className="text-base">
							{t(
								"illustrationThree.mobile.textC",
								"The mural’s lower area was kept minimal due to nearby seating, inviting everyone to sit, relax, and focus on what matters—mutual respect and love."
							)}
						</p>
					</section>

					<section className="flex flex-col gap-6 w-full items-center" aria-labelledby="see-more-like-this">
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								{t("common.seeMoreLikeThis", "See more like this")}
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

export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params?.lang === "ba" ? "ba" : "en";
	const t = (k: string, fallback?: string) =>
		translate(lang, `illustrationThree.meta.${k}`, fallback);

	const BASE_URL = import.meta.env?.VITE_BASE_URL || "https://www.amnakolic.com";
	const url = `${BASE_URL}/${lang}/illustration/mural`;
	const image = `${BASE_URL}/mural-left.webp`;

	const title = t(
		"title",
		"Europe House Mural: Bosnia in the Heart of Europe | Amna Kolić"
	);
	const description = t(
		"description",
		"Mural concept that merges Bosnian identity with European unity—Sarajevo motifs, iconic landmarks, and bold yellow accents evoke connection, movement, and a shared future."
	);
	const imageAlt = t(
		"imageAlt",
		"Mural concept visual: Bosnia in the Heart of Europe with Sarajevo motifs and European landmarks."
	);
	const keywords = t(
		"keywords",
		"Europe House mural, Bosnia in the Heart of Europe, mural design, Sarajevo, Bosnian identity, European unity, public art, cultural heritage, illustration, digital painting"
	);
	const siteName = translate(lang, "common.siteName", "Amna Kolić Portfolio");
	const author = translate(lang, "common.byName", "Amna Kolić");

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "author", content: author },
		{ name: "robots", content: "index,follow,max-image-preview:large" },

		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: siteName },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: translate(lang, "sections.illustration", "Illustration") },
		{ property: "article:author", content: author },

		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const Mural = () => null;
export default Mural;
