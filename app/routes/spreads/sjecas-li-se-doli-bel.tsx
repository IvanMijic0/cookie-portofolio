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

	const slides: SlideImage[] = [
		{
			src: "/doli-bel-left-1.webp",
			alt: t(
				"graphicDesignTwo.slides.detail",
				"Visual detail from the ‘Sjećaš li se Doli Bel’ design concept"
			),
		},
	];

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
				className="absolute px-16 py-20 inset-0 z-10 flex items-start flex-col justify-start text-[#363636] leading-[0.8]"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/graphic-design/sjecas-li-se-doli-bel"
			>
				<link itemProp="mainEntityOfPage" href="/graphic-design/sjecas-li-se-doli-bel" />

				<div className="flex flex-col items-start justify-between h-full gap-2">
					<header className="flex flex-col gap-1">
						<h1
							className="text-[6rem] text-right 2xl:text-[7rem] leading-22 2xl:leading-24 [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
							itemProp="headline"
						>
							{t("graphicDesignTwo.title.titleOne", "Sjećaš")}
							<br />
							{t("graphicDesignTwo.title.titleTwo", "li se")}
							<br />
							{t("graphicDesignTwo.title.titleThree", "Doli")}
							<br />
							{t("graphicDesignTwo.title.titleFour", "Bel")}
						</h1>
						<p className="font-serif italic font-extralight text-sm 2xl:text-base text-right">
							<span className="sr-only">{t("common.by", "Project by")} </span>
							<span itemProp="author" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
							</span>
						</p>
					</header>
					<img
						src={slides[0].src}
						alt={slides[0].alt}
						className="w-64 2xl:w-80 2xl:pb-8 object-cover z-0 select-none"
						loading="eager"
						fetchPriority="high"
						itemProp="image"
					/>
				</div>
			</article>
		</LeftPage>
	);
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
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
			className="absolute font-serif px-16 2xl:pl-24 pt-28 inset-0 z-10 flex items-end flex-col gap-4 justify-start text-[#505050] leading-[0.6]"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/graphic-design/sjecas-li-se-doli-bel"
		>
			<h2 className="sr-only" itemProp="headline">
				{t("graphicDesignTwo.meta.simpleName", "Sjećaš li se Doli Bel")} —{" "}
				{t("graphicDesignTwo.meta.subhead", "Visual Identity for Stage Adaptation")}
			</h2>
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
				className="w-72 2xl:w-[22rem] text-justify text-base 2xl:text-lg font-bold italic"
				itemProp="description"
			>
				{t(
					"graphicDesignTwo.text.textOne",
					"For the stage adaptation of Sjećaš li se Doli Bel at Kamerni Teatar 55 in Sarajevo, I reimagined the promotional visuals with a concept rooted in emotional symbolism and narrative depth."
				)}
			</p>

			<p className="w-72 2xl:w-[22rem] text-justify text-sm 2xl:text-base" itemProp="articleBody">
				{t(
					"graphicDesignTwo.text.textTwo",
					"Drawing from the story’s themes of adolescence, loss, and emotional decay, I chose a vivid red background to reflect the intensity of the characters’ surroundings. In contrast, white handwritten typography symbolizes innocence that is gradually consumed by the world around it. The fragmented title layout forms a crooked house shape, referencing the confined and unstable spaces where much of the story takes place, from family homes to hotel rooms."
				)}
			</p>

			<p className="w-72 2xl:w-[22rem] text-justify text-sm 2xl:text-base" itemProp="articleBody">
				{t(
					"graphicDesignTwo.text.textThree",
					"The handwritten typeface ties into the characters’ search for connection and learning, especially through the relationship between Doli and the protagonist. It evokes both vulnerability and a desire for understanding in a world that feels unstable. The accompanying brochure continues this narrative visually, with a circular, disoriented layout that mirrors the story’s emotional cycles and sense of imbalance. This identity captures the fragile, messy,  and deeply human essence of the play."
				)}
			</p>
		</article>
	</RightPage>
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const doliSlides = useMemo(
		() => [
			{
				src: "/doli-bel-1.webp",
				alt: t(
					"graphicDesignTwo.slides.hero",
					"Sjećaš li se Doli Bel? — primary poster with fragmented typography forming a crooked house silhouette on a vivid red background."
				),
			},
			{
				src: "/doli-bel-left-1.webp",
				alt: t(
					"graphicDesignTwo.slides.idFront",
					"Sjećaš li se Doli Bel? — ID badge front mockup with handwritten typography symbolizing vulnerability and innocence."
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
			title: t("graphicDesign.meta.shortOne", "Kreativ Fest"),
			src: "/kreativ-festival-art-direction-1.webp",
			href: makeHref("/graphic-design/kreativ-festival-art-direction"),
			alt: t(
				"graphicDesignTwo.related.kreativ",
				"Kreativ Fest art direction poster — bold grunge-inspired textures and expressive typography."
			),
		},
		{
			id: 2,
			title: t("graphicDesign.meta.shortThree", "Chippsters"),
			src: "/chippsters-1.webp",
			href: makeHref("/graphic-design/chippsters-logo"),
			alt: t(
				"graphicDesignTwo.related.chippsters",
				"Chippsters logo design concept — playful wordmark with modern branding aesthetics."
			),
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
						aria-label={t("graphicDesignTwo.aria.openHero", "Open hero poster in lightbox")}
						title={t("graphicDesignTwo.aria.viewHero", "View hero poster")}
					>
						<img
							src="/doli-bel-1.webp"
							sizes="100vw"
							alt={t(
								"graphicDesignTwo.slides.heroShort",
								"Sjećaš li se Doli Bel? hero poster — fragmented red typography forming a crooked house silhouette."
							)}
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
								{t("graphicDesignTwo.title.mobileLineOne", "Sjećaš li se")} <br />{" "}
								{t("graphicDesignTwo.title.mobileLineTwo", "Doli Bel")}
							</h1>
							<meta itemProp="inLanguage" content="en" />
						</header>
					</ScreenTextFit>

					<p
						itemProp="description"
						className="text-lg italic font-bold pb-4 text-justify font-serif text-[#505050]"
					>
						{t(
							"graphicDesignTwo.mobileIntro",
							"For the stage adaptation of “Sjećaš li se Doli Bel?” at Kamerni Teatar 55 in Sarajevo, this design reimagines the play’s promotional visuals through symbolic typography, color, and emotional texture."
						)}
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
							aria-label={t("graphicDesignTwo.aria.openIdFront", "Open ID badge front in lightbox")}
							title={t("graphicDesignTwo.aria.viewIdFront", "View ID badge front")}
						>
							<img
								src="/doli-bel-left-1.webp"
								sizes="(max-width: 540px) 40vw, 400px"
								className="object-cover w-full h-full flex-1"
								loading="lazy"
								decoding="async"
								alt={t(
									"graphicDesignTwo.slides.idFrontShort",
									"Sjećaš li se Doli Bel? — ID badge front with red background and white handwritten typography."
								)}
								itemProp="contentUrl"
								width={1200}
								height={1600}
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							{t("graphicDesignTwo.fig.idFront", "ID badge front mockup.")}
						</figcaption>
					</figure>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm w-full pt-6 text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p className="text-base" itemProp="about">

							{t("graphicDesignTwo.text.textTwo")}

						</p>

						<p className="text-base">{t("graphicDesignTwo.text.textThree")}</p>

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
								{t("shared.seeMoreLikeThis", "See more like this")}
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

export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params.lang === "ba" ? "ba" : "en";
	const t = (k: string, fb?: string) => translate(lang, `graphicDesignTwo.meta.${k}`, fb);

	const title = t(
		"title",
		"Sjećaš li se Doli Bel — Theatre Visual Identity & Poster Design | Amna Kolić"
	);
	const description = t(
		"description",
		"Visual identity and poster design for the stage adaptation of “Sjećaš li se Doli Bel” at Kamerni Teatar 55, Sarajevo—handwritten typography, symbolic layout, and bold color storytelling by Amna Kolić."
	);
	const url = "/graphic-design/sjecas-li-se-doli-bel";
	const image = "/doli-bel-right.webp";
	const imageAlt = t(
		"imageAlt",
		"Red theatre poster concept for “Sjećaš li se Doli Bel” with expressive handwritten typography forming a house-like layout."
	);

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: t("keywords", "Sjećaš li se Doli Bel, Doli Bel, theatre poster, stage adaptation, Kamerni Teatar 55, Sarajevo, visual identity, graphic design, Bosnian design, editorial, typography") },
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: t("siteName", "Amna Kolić Portfolio") },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: t("section", "Graphic Design") },
		{ property: "article:tag", content: t("tag1", "Theatre Poster") },
		{ property: "article:tag", content: t("tag2", "Visual Identity") },
		{ property: "article:tag", content: t("tag3", "Bosnian Design") },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const SjecasLiSeDoliBel = () => null;
export default SjecasLiSeDoliBel;
