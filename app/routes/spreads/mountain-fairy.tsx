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
			src="/mountain-fairy-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 gap-4 2xl:gap-0 w-11/12 2xl:w-2/3 py-12 inset-0 z-10 flex items-start flex-col justify-between text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/VisualArtwork"
			itemID="/illustration/mountain-fairy"
			aria-labelledby="mountain-fairy-title"
		>
			<link itemProp="mainEntityOfPage" href="/illustration/mountain-fairy" />

			<header className="flex flex-col items-start gap-6">
				<div>
					<h1
						id="mountain-fairy-title"
						className="text-[6rem] text-left tracking-wider 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline name"
					>
						{t("illustrationOne.title.titleOne", "Mountain")}<br />
						{t("illustrationOne.title.titleTwo", "Fairy")}
					</h1>
				</div>
				<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">{t("common.by", "Project by")} </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
						<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
					</span>
				</p>
			</header>
			<p className="text-base font-serif 2xl:text-lg font-bold italic text-justify" itemProp="description">
				{t(
					"illustrationOne.text.textOne",
					"This digital illustration depicts the Bosnian mountain fairy, or planinska vila, as part of an ongoing series dedicated to visualizing forgotten figures of Bosnian folklore."
				)}			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="artworkSurface">
				{t(
					"illustrationOne.text.textTwo",
					"Created in Clip Studio Paint, the artwork draws directly from both environmental inspiration and traditional descriptions of these mystical beings."
				)}
			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="articleBody">
				{t(
					"illustrationOne.text.textThree",
					"Dressed in historically inspired garments with earthy tones and folk motifs, the fairy is crowned with wildflowers and adorned with horns, a nod to her mythological ability to transform into a white goat, her symbol. The warm forest backdrop echoes the mountainous terrain she is said to inhabit, blending realism and fantasy to root her firmly in her homeland."
				)}			</p>
			<p className="text-sm 2xl:text-base font-serif text-justify" itemProp="articleBody">
				{t(
					"illustrationOne.text.textFour",
					"This series was born from a desire to reconnect with Bosnia’s deeper cultural past—one that extends far beyond Ottoman or modern-day narratives. Much of the pre-imperial, pre-modern history of Bosnia remains overlooked or forgotten, and this project seeks to give it a new voice. Each character, aims to breathe life back into centuries-old legends, honoring the richness of a heritage that deserves to be seen, remembered, and reimagined."
				)}
			</p>
		</article>
	</LeftPage>
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/mountain-fairy-right.webp"
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
			itemType="https://schema.org/VisualArtwork"
			itemID="/illustration/mountain-fairy"
			aria-labelledby="mountain-fairy-aux"
		>
			<h2 id="mountain-fairy-aux" className="sr-only" itemProp="alternativeHeadline">
				Mountain Fairy — Visual Artwork
			</h2>
			<figure itemProp="image" itemScope itemType="https://schema.org/ImageObject" className="sr-only">
				<meta itemProp="contentUrl" content="/mountain-fairy-right.webp" />
				<meta itemProp="caption" content="Mountain Fairy illustration — right page background" />
			</figure>
		</article>
	</RightPage>
));

const ASPECT = 1600 / 2000;

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const fairySlides = useMemo(
		() => [
			{
				src: "/mountain-fairy-right.webp",
				alt: t(
					"illustrationOne.slides.hero",
					"Mountain Fairy — digital illustration of the Bosnian planinska vila, crowned with wildflowers and adorned with horns in a mystical forest setting."
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
			title: t("illustration.meta.shortTwo", "Austen Books"),
			src: "/austen-right-1.webp",
			href: makeHref("/illustration/austen-in-watercolor"),
			alt: t(
				"illustrationTwo.slides.hero",
				"Austen in Watercolor — delicate portrait illustration inspired by Jane Austen novels, rendered in soft washes of color."
			),
		},
		{
			id: 2,
			title: t("illustration.meta.shortThree", "Mural"),
			src: "/mural.webp",
			href: makeHref("/illustration/mural"),
			alt: t(
				"illustrationThree.meta.imageAlt",
				"Bosnia in the Heart of Europe — mural artwork blending cultural heritage and contemporary design."
			),
		},
	];


	return (
		<MobileWrapper>
			<div className="relative w-full bg-[#F4F3EB] pt-24">
				<article
					itemScope
					itemType="https://schema.org/CreativeWork"
					className="px-6 pb-8 z-20 flex items-center justify-start gap-6 flex-col text-[#363636]"
				>
					<header className="w-full">
						<h1
							id="ktwk-title"
							itemProp="name headline"
							className="font-display text-start leading-22 text-[4.7rem] xs:text-[5.5rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							{t("illustrationOne.title.titleOne", "Mountain")}<br />{t("illustrationOne.title.titleTwo", "Fairy")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<figure
						itemScope
						itemType="https://schema.org/ImageObject"
						className="w-full pt-3"
					>
						<button
							type="button"
							onClick={() => openAt(0)}
							className="block w-full cursor-zoom-in"
							aria-label={t("illustrationOne.slides.heroAria", "Open image: Mountain Fairy poster")}
							title={t("illustrationOne.slides.heroTitle", "View Mountain Fairy poster")}
						>
							<img
								src="/mountain-fairy-right.webp"
								sizes="(max-width: 640px) 100vw, 640px"
								alt={t(
									"illustrationOne.slides.hero",
									"Mountain Fairy — symbolic still-life illustration portraying empathy as strength, rooted in Bosnian folklore."
								)}
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								fetchPriority="high"
								itemProp="image"
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							{t("illustrationOne.slides.heroCaption", "Mountain Fairy digital illustration hero artwork.")}
						</figcaption>
					</figure>

					<section
						id="description"
						aria-label={t("photographyTwo.aria.description", "Project description")}
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t(
								"illustrationOne.text.textOne",
								"This digital illustration depicts the Bosnian mountain fairy, or planinska vila, as part of an ongoing series dedicated to visualizing forgotten figures of Bosnian folklore."
							)}
						</p>
						<p className="text-base" itemProp="about">
							{t(
								"illustrationOne.text.textTwo",
								"Created in Clip Studio Paint, the artwork draws directly from both environmental inspiration and traditional descriptions of these mystical beings."
							)}
						</p>
						<p className="text-base">
							{t(
								"illustrationOne.text.textThree",
								"Dressed in historically inspired garments with earthy tones and folk motifs, the fairy is crowned with wildflowers and adorned with horns, a nod to her mythological ability to transform into a white goat, her symbol. The warm forest backdrop echoes the mountainous terrain she is said to inhabit, blending realism and fantasy to root her firmly in her homeland."
							)}
						</p>
						<p className="text-base">
							{t(
								"illustrationOne.text.textFour",
								"This series was born from a desire to reconnect with Bosnia’s deeper cultural past—one that extends far beyond Ottoman or modern-day narratives. Much of the pre-imperial, pre-modern history of Bosnia remains overlooked or forgotten, and this project seeks to give it a new voice. Each character, aims to breathe life back into centuries-old legends, honoring the richness of a heritage that deserves to be seen, remembered, and reimagined."
							)}
						</p>
					</section>

					<section
						className="flex flex-col gap-6 w-full items-center"
						aria-labelledby="see-more-like-this"
					>
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								{t("shared.seeMoreLikeThis", "See more like this")}
							</h2>
						</ScreenTextFit>

						<Carousel
							items={slides}
							loop
							rounded
							aria-label="Related works carousel"
						/>
					</section>
				</article>
			</div>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={fairySlides}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				styles={{ container: { zIndex: 200 } }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide, rect }) => {
						const frameWidth = Math.min(rect.width, rect.height * ASPECT);
						const frameHeight = frameWidth / ASPECT;

						if (!isImageSlide(slide)) return null;

						return (
							<figure
								style={{ width: frameWidth, height: frameHeight }}
								className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5"
							>
								<img
									src={slide.src}
									alt={slide.alt ?? ""}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
								{slide.alt && (
									<figcaption className="mt-3 text-center text-sm text-white/90">
										{slide.alt}
									</figcaption>
								)}
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
	const t = (k: string, fallback?: string) =>
		translate(lang, `illustrationOne.meta.${k}`, fallback);

	const title = t(
		"title",
		"Bosnian Mountain Fairy — Digital Illustration | Amna Kolić"
	);
	const description = t(
		"description",
		"Folklore-inspired concept art of the Bosnian mountain fairy (planinska vila), rendered in digital paint and rooted in cultural heritage."
	);
	const url = "/illustration/mountain-fairy";
	const image = "/mountain-fairy-right.webp";
	const imageAlt = t(
		"imageAlt",
		"Mountain Fairy — digital illustration of the Bosnian planinska vila, crowned with wildflowers and adorned with horns in a mystical forest setting."
	);
	const keywords = t(
		"keywords",
		"Bosnian folklore, mountain fairy, planinska vila, digital illustration, concept art, cultural heritage, Clip Studio Paint, Amna Kolić"
	);

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
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
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: "Illustration" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const MountainFairy = () => null;
export default MountainFairy;
