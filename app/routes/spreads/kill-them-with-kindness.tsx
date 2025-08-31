import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";
import { useState, useMemo } from "react";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";
import { BASE_URL } from "~/config";



export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/kill-them-with-kindness-left.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="lazy"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<img
			src="/kill-them-with-kindness-right.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="lazy"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 py-10 2xl:py-14 inset-0 z-20 flex flex-col items-center h-full"
			aria-labelledby="ktwk-title"
			itemScope
			itemType="https://schema.org/CreativeWork"
		>
			<div className="flex flex-col justify-start 2xl:gap-20 gap-16 h-full text-right">
				<header>
					<h1
						id="ktwk-title"
						itemProp="name"
						className="font-display leading-22 2xl:leading-28 text-[#363636] text-[6rem] 2xl:text-[7rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
					>
						{t("photographyOne.title.titleOne", "Kill them")}
						<br /> {t("photographyOne.title.titleTwo", "with")} <br />{" "}
						{t("photographyOne.title.titleThree", "Kindness")}
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">{t("info", "by Amna Kolić")}</span>
						</span>
					</p>
				</header>
				<section
					aria-label="Project description"
					className="flex text-sm 2xl:text-base text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
				>
					<p itemProp="description" className="w-64 2xl:w-[19rem] text-base 2xl:text-lg font-bold italic">
						{t(
							"photographyOne.headText",
							"What if empathy were more common than conflict? What if kindness—not violence—was the loudest force in the room? In that world, war would have no place."
						)}
					</p>
					<p className="w-64 2xl:w-[19rem] text-sm 2xl:text-base">
						{t(
							"photographyOne.text.textOne",
							"True to its name, this project delivers a striking visual message: a call to disarm not just physically, but emotionally."
						)}
					</p>
					<p className="w-64 2xl:w-[19rem] text-sm 2xl:text-base">
						{t(
							"photographyOne.text.textTwo",
							"Each photo was meticulously staged in the studio under identical lighting, then artfully composited in Adobe Photoshop to create seamless, visually arresting narratives that challenge our perception of strength, peace, and humanity."
						)}					</p>
				</section>
			</div>
		</article>
	</RightPage>
});

const ASPECT = 1600 / 2000;

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const killSlides = useMemo(
		() => [
			{
				src: "/kill-them-with-kindness-1.webp",
				alt: t(
					"photographyOne.slides.primary",
					"Primary poster: a symbolic still-life that frames empathy as strength."
				),
			},
			{
				src: "/kill-them-with-kindness-2.webp",
				alt: t("photographyOne.slides.bouquet", "Bouquet study juxtaposing tenderness and tension."),
			},
			{
				src: "/kill-them-with-kindness-3.webp",
				alt: t("photographyOne.slides.roseGrenade", "Rose & Grenade still-life emphasizing peace over power."),
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
			title: t("nav.photographyTwo", "Human Rights"),
			src: "/human-rights-left.webp",
			href: makeHref("/photography/human-rights"),
			alt: t("photographyTwo.meta.imageAlt", "Human Rights photo series exploring freedom and equality."),
		},
		{
			id: 2,
			title: t("nav.photographyThree", "Double Indemnity"),
			src: "/double-indemnity-left-1.webp",
			href: makeHref("/photography/double-indemnity"),
			alt: t("photographyThree.meta.imageAlt", "Double Indemnity photo series inspired by classic noir cinema."),
		},
	];

	return (
		<MobileWrapper>
			<div className="relative w-full pt-24">
				<article
					itemScope
					itemType="https://schema.org/CreativeWork"
					className="px-6 pb-8 z-20 flex items-center justify-start gap-6 flex-col text-[#363636]"
				>
					<header className="w-full">
						<h1
							id="ktwk-title"
							itemProp="name headline"
							className="font-display text-end leading-24 text-[4.6rem] xs:text-[5.5rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							{t("photographyOne.title.titleOne", "Kill them")}
							<br /> {t("photographyOne.title.titleTwo", "with")} <br />{" "}
							{t("photographyOne.title.titleThree", "Kindness")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<div className="flex flex-col gap-2 w-full">
						<figure className="w-full">
							<button
								type="button"
								onClick={() => openAt(0)}
								className="block w-full cursor-zoom-in"
								aria-label={t("photographyOne.slides.primaryAria", "Open image: Primary poster")}
							>
								<img
									src="/kill-them-with-kindness-1.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									alt={t(
										"photographyOne.slides.primary",
										"Primary poster: a symbolic still-life that frames empathy as strength."
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
							<figcaption className="sr-only">
								{t("photographyOne.slides.primaryCaption", "Kill Them With Kindness – primary poster artwork.")}
							</figcaption>
						</figure>

						<div className="flex gap-2 w-full items-center overflow-hidden">
							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(1)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyOne.slides.bouquetAria", "Open image: Bouquet study")}
								>
									<img
										src="/kill-them-with-kindness-2.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										alt="Bouquet study juxtaposing tenderness and tension."
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
									/>
								</button>
								<figcaption className="sr-only">{t("photographyOne.slides.bouquetCaption", "Bouquet Study.")}</figcaption>
							</figure>

							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(2)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyOne.slides.roseGrenadeAria", "Open image: Rose & Grenade")}
								>
									<img
										src="/kill-them-with-kindness-3.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										alt={t("photographyOne.slides.roseGrenade", "Rose & Grenade still-life emphasizing peace over power.")}
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
									/>
								</button>
								<figcaption className="sr-only">
									{t("photographyOne.slides.roseGrenadeCaption", "Rose & Grenade.")}
								</figcaption>
							</figure>
						</div>
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t(
								"photographyOne.headText",
								"What if empathy were more common than conflict? What if kindness—not violence—was the loudest force in the room? In that world, war would have no place."
							)}
						</p>
						<p className="text-base" itemProp="about">
							{t(
								"photographyOne.text.textOne",
								"True to its name, this project delivers a striking visual message: a call to disarm not just physically, but emotionally."
							)}
						</p>
						<p className="text-base">
							{t(
								"photographyOne.text.textTwo",
								"Each photo was meticulously staged in the studio under identical lighting, then artfully composited in Adobe Photoshop to create seamless, visually arresting narratives that challenge our perception of strength, peace, and humanity."
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
				slides={killSlides}
				plugins={[Captions, Fullscreen, Share, Zoom, Download]}
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
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
	const t = (k: string, fb?: string) => translate(lang, `photographyOne.meta.${k}`, fb);

	const title = t(
		"title",
		"Kill Them with Kindness – Conceptual Photo Series by Amna Kolić"
	);
	const description = t(
		"description",
		"A conceptual photo series using staged lighting and compositing to present empathy as resistance. Explore the visual narrative and process behind each image."
	);

	const urlPath = `/${lang}/photography/kill-them-with-kindness`;
	const url = `${BASE_URL}${urlPath}`;
	const image = `${BASE_URL}/kill-them-with-kindness-right.webp`;
	const imageAlt = t(
		"imageAlt",
		"Conceptual portrait from the ‘Kill Them with Kindness’ photo series."
	);

	const locale = lang === "ba" ? "bs_BA" : "en_US";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content: t(
				"keywords",
				"conceptual photography, photo series, studio lighting, compositing, visual storytelling, anti-war art, empathy in art, editorial photography, portfolio"
			),
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
		{ property: "og:locale", content: locale },
		{ property: "article:section", content: "Photography" },
		{ property: "article:author", content: "Amna Kolić" },

		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const KillThemWithKindness = () => null;
export default KillThemWithKindness;
