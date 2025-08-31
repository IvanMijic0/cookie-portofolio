import { forwardRef, useMemo, useState } from "react";
import type { MetaFunction } from "react-router";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Captions, Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";
import { useTranslate } from "~/context/I18nProvider";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/human-rights-left.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover w-full h-full"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	const slides = useMemo(
		() =>
			Array.from({ length: 4 }).map((_, idx) => ({
				src: `/human-rights-${idx + 1}.webp`,
				alt: `Human Rights series photo ${idx + 1} of 4`,
			})),
		[]
	);

	return (
		<RightPage ref={ref} showBookmark>
			<aside
				className="absolute inset-y-0 right-[5%] w-1/4"
				aria-label="Human Rights series thumbnails"
			>
				<div className="flex h-full flex-col">
					{slides.map((s) => (
						<img
							key={s.src}
							src={s.src}
							alt={s.alt}
							className="h-1/4 w-full z-30 object-cover select-none"
							loading="eager"
							fetchPriority="high"
							decoding="async"
						/>
					))}
				</div>
			</aside>

			<article
				className="absolute flex-col px-12 py-10 2xl:py-12 inset-0 z-20 flex justify-start gap-12 2xl:gap-16 items-center"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/human-rights"
			>
				<link itemProp="url" href="/human-rights" />
				<header className="flex flex-col items-start gap-5 2xl:gap-8">
					<h1
						className="text-[6rem] 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						{t("photographyTwo.title.titleOne", "Human")}{" "}
						{t("photographyTwo.title.titleTwo", "Rights")}
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">{t("info", "by Amna Kolić")}</span>
						</span>
					</p>
				</header>
				<section className="flex flex-col w-full font-serif justify-start text-[#505050] gap-4">
					<p className="w-72 2xl:w-[21rem] text-base 2xl:text-lg font-bold italic" itemProp="abstract">
						{t(
							"photographyTwo.headText",
							"This photo series explores the concept of light as a metaphor for human rights — a visual narrative where illumination becomes both symbol and statement."
						)}
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						{t("photographyTwo.text.textOne")}
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						{t("photographyTwo.text.textTwo")}
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						{t("photographyTwo.text.textThree")}
					</p>
				</section>
			</article>
		</RightPage>
	);
});

const ASPECT = 1600 / 2000;

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const hrSlides = useMemo(
		() => [
			{
				src: "/human-rights-left.webp",
				alt: t(
					"photographyTwo.slides.poster",
					"Human Rights series poster: still-life composition where light symbolizes the presence of rights."
				),
			},
			{
				src: "/human-rights-1.webp",
				alt: t("photographyTwo.slides.express", "Right to Express: directional light highlighting a solitary subject to suggest voice and visibility."),
			},
			{
				src: "/human-rights-2.webp",
				alt: t("photographyTwo.slides.privacy", "Right to Privacy: obscured shapes and controlled shadows imply concealment and protection."),
			},
			{
				src: "/human-rights-3.webp",
				alt: t("photographyTwo.slides.rest", "Right to Rest: softened light and quiet negative space evoke restoration and pause."),
			},
			{
				src: "/human-rights-4.webp",
				alt: t("photographyTwo.slides.religion", "Right to Religion: a focused beam suggests contemplation, conviction, and freedom of worship."),
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
			title: t("nav.photographyOne", "Kill them with kindness"),
			src: "/kill-them-with-kindness-1.webp",
			href: makeHref("/photography/kill-them-with-kindness"),
			alt: t(
				"photographyOne.meta.imageAlt",
				"Kill Them With Kindness — symbolic still-life promoting empathy and peace over violence."
			),
		},
		{
			id: 2,
			title: t("nav.photographyThree", "Double Indemnity"),
			src: "/double-indemnity-left-1.webp",
			href: makeHref("/photography/double-indemnity"),
			alt: t(
				"photographyThree.meta.imageAlt",
				"Double Indemnity — cinematic portraits inspired by classic film noir."
			),
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
							className="font-display text-end leading-22 text-[5rem] xs:text-[6rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							{t("photographyTwo.title.titleOne", "Human")}
							<br />
							{t("photographyTwo.title.titleTwo", "Rights")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<div className="flex flex-col gap-2 w-full pt-8">
						<figure className="w-full">
							<button
								type="button"
								onClick={() => openAt(0)}
								className="block w-full cursor-zoom-in"
								aria-label={t("photographyTwo.aria.openPoster", "Open image: Human Rights poster")}
							>
								<img
									src="/human-rights-left.webp"
									sizes="(max-width: 640px) 100vw, 640px"
									width={1600}
									height={2000}
									className="object-cover w-full h-auto"
									loading="eager"
									decoding="async"
									fetchPriority="high"
									itemProp="image"
									alt={t(
										"photographyTwo.slides.poster",
										"Human Rights series poster: still-life composition where light symbolizes the presence of rights."
									)}
								/>
							</button>

							<figcaption className="sr-only">{t("photographyTwo.fig.poster", "Human Rights — primary poster artwork.")}</figcaption>

						</figure>
						<div className="flex gap-2 w-full items-center overflow-hidden">
							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(1)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyTwo.aria.openExpress", "Open image: Right to Express")}
								>
									<img
										src="/human-rights-1.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
										alt={t("photographyTwo.slides.express")}
									/>
								</button>
							</figure>
							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(2)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyTwo.aria.openPrivacy", "Open image: Right to Privacy")}
								>
									<img
										src="/human-rights-2.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
										alt={t("photographyTwo.slides.privacy")}
									/>
								</button>
							</figure>
						</div>
						<div className="flex gap-2 w-full items-center overflow-hidden">
							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(3)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyTwo.aria.openRest", "Open image: Right to Rest")}
								>
									<img
										src="/human-rights-3.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
										alt={t("photographyTwo.slides.rest")}
									/>
								</button>
							</figure>

							<figure className="w-1/2 min-w-0">
								<button
									type="button"
									onClick={() => openAt(4)}
									className="block w-full cursor-zoom-in"
									aria-label={t("photographyTwo.aria.openReligion", "Open image: Right to Religion")}
								>
									<img
										src="/human-rights-4.webp"
										sizes="(max-width: 640px) 50vw, 320px"
										width={1200}
										height={1600}
										className="object-contain w-full h-auto"
										loading="lazy"
										decoding="async"
										alt={t("photographyTwo.slides.religion")}
									/>
								</button>
							</figure>
						</div>
					</div>
					<section
						id="description"
						aria-label={t("photographyTwo.aria.description", "Project description")}
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t("photographyTwo.headText")}
						</p>
						<p className="text-base" itemProp="about">
							{t("photographyTwo.text.textOne")}
						</p>
						<p className="text-base">
							{t("photographyTwo.text.textTwo")}
						</p>
						<p className="text-base">
							{t("photographyTwo.text.textThree")}
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
				slides={hrSlides}
				plugins={[Captions, Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				carousel={{ finite: false, imageFit: "cover" }}
				styles={{ container: { zIndex: 200 } }}
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
	const lang: Lang = params?.lang === "ba" ? "ba" : "en";
	const t = (k: string, fallback?: string) => translate(lang, `photographyTwo.meta.${k}`, fallback);

	const BASE_URL = import.meta.env?.VITE_BASE_URL || "https://www.amnakolic.com";
	const url = `${BASE_URL}/${lang}/photography/human-rights`;
	const image = `${BASE_URL}/human-rights-left.webp`;

	const title = t("title", "Human Rights – Conceptual Photo Series by Amna Kolić");
	const description = t(
		"description",
		"A conceptual photo series where light and shadow symbolize the fragility of human rights. Explore the narrative and studio process behind each image."
	);
	const imageAlt = t("imageAlt", "Conceptual photograph from the Human Rights series, using light as metaphor.");

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: t("keywords", "human rights photography, conceptual photography, studio lighting, visual metaphor, editorial photography, photo series, portfolio, Amna Kolić") },
		{ name: "author", content: t("author", "Amna Kolić") },
		{ name: "robots", content: "index,follow" },

		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: t("siteName", "Amna Kolić Portfolio") },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: t("section", "Photography") },
		{ property: "article:author", content: t("author", "Amna Kolić") },

		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const HumanRights = () => null;
export default HumanRights;
