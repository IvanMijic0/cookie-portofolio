import { forwardRef, useMemo, useState } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { ScreenTextFit, Carousel } from "~/components/UI";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	const slides = useMemo(
		() =>
			Array.from({ length: 6 }).map((_, idx) => ({
				src: `/double-indemnity-left-${idx + 1}.webp`,
				alt: t(`photographyThree.slides.grid.${idx + 1}`, `Double Indemnity series photo ${idx + 1} of 6`)
			})),
		[t]
	);

	return (
		<LeftPage ref={ref}>
			<div className="w-full h-full grid grid-cols-2 gap-3">
				{slides.map((s) => (
					<img
						key={s.src}
						src={s.src}
						alt={s.alt ?? ""}
						className="w-full h-full object-cover z-30 select-none"
						loading="eager"
						fetchPriority="high"
						decoding="async"
					/>
				))}
			</div>
		</LeftPage>
	);
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<article
			className="absolute p-12 inset-0 z-20 flex items-center flex-col justify-between text-black"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/photography/double-indemnity"
		>
			<link itemProp="url" href="/photography/double-indemnity" />
			<div className="flex h-full justify-start flex-col items-end gap-8 2xl:gap-12">
				<header className="flex flex-col gap-8">
					<h1
						className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						{t("photographyThree.title.titleOne", "Double")}
						<br />
						{t("photographyThree.title.titleTwo", "Indemnity")}
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">{t("common.by", "Project by")} </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
						</span>
					</p>
				</header>
				<section className="flex flex-col w-full font-serif items-end text-[#505050] gap-4">
					<p
						className="w-72 2xl:w-[19rem] text-justify text-base 2xl:text-lg font-bold italic"
						itemProp="abstract"
					>
						{t(
							"photographyThree.headText",
							"In this trio of black-and-white photographs, classic film noir is brought back to life through meticulous recreations of key scenes from Double Indemnity. More than homage, these images are exercises in atmosphere — a study in light, shadow, and emotion, a window into the tension and elegance of 1940s cinema."
						)}
					</p>

					<p className="w-72 2xl:w-[19rem] text-justify text-sm 2xl:text-base">
						{t(
							"photographyThree.text",
							"Every photograph was carefully lit and staged to mirror the original stills, not only in composition but in emotional texture. The light carves out character, echoing the moral ambiguity and elegance that define the genre — and the film."
						)}
					</p>
				</section>
			</div>
		</article>
	</RightPage>
});

const ASPECT = 1600 / 2000;

const Thumb = ({
	src,
	alt,
	onClick,
	ratio = "100%" }:
	{ src: string; alt: string; onClick: () => void; ratio?: string }) => (
	<figure className="w-1/2 min-w-0">
		<button
			type="button"
			onClick={onClick}
			className="block w-full cursor-zoom-in"
		>
			<div className="relative w-full" style={{ paddingTop: ratio }}>
				<img
					src={src}
					alt={alt}
					className="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</button>
	</figure>
);

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const diSlides = useMemo(
		() =>
			Array.from({ length: 6 }).map((_, i) => ({
				src: `/double-indemnity-left-${i + 1}.webp`,
				alt: t(
					`photographyThree.slides.grid.${i + 1}`,
					[
						"Double Indemnity still: Phyllis and Walter framed in a doorway, classic noir lighting and tension.",
						"Phyllis and Walter close framing at the door, crisp suits and stark shadows.",
						"Phyllis behind the wheel, headlights carving her face with dramatic contrast.",
						"Phyllis in soft focus, a cool stare underlining the film’s moral ambiguity.",
						"Phyllis on the phone—brimmed hat, tight composition, deep shadows.",
						"Walter on the phone—hat brim across his eyes; smoke and shadow set the mood.",
					][i]
				),
			})),
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
				"photographyOne.slides.primary",
				"Primary poster: a symbolic still-life that frames empathy as strength."
			),
		},
		{
			id: 2,
			title: t("nav.photographyTwo", "Human Rights"),
			src: "/human-rights-left.webp",
			href: makeHref("/photography/human-rights"),
			alt: t(
				"photographyTwo.slides.poster",
				"Human Rights series poster: still-life composition where light symbolizes the presence of rights."
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
							className="font-display text-end leading-22 text-[5rem] xs:text-[5.5rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						>
							{t("photographyThree.title.titleOne", "Double")}
							<br />
							{t("photographyThree.title.titleTwo", "Indemnity")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<div className="flex flex-col gap-2 pt-10 w-full">
						<div className="flex gap-2 w-full items-center overflow-hidden">
							<Thumb
								src="/double-indemnity-left-1.webp"
								alt={t(
									"photographyThree.slides.grid.1",
									"Double Indemnity still: Phyllis and Walter framed in a doorway, classic noir lighting and tension."
								)}
								onClick={() => openAt(0)}
							/>
							<Thumb
								src="/double-indemnity-left-2.webp"
								alt={t(
									"photographyThree.slides.grid.2",
									"Phyllis and Walter close framing at the door, crisp suits and stark shadows."
								)}
								onClick={() => openAt(1)}
							/>
						</div>

						<div className="flex gap-2 w-full items-center overflow-hidden">
							<Thumb
								src="/double-indemnity-left-3.webp"
								alt={t(
									"photographyThree.slides.grid.3",
									"Phyllis behind the wheel, headlights carving her face with dramatic contrast."
								)}
								onClick={() => openAt(2)}
							/>
							<Thumb
								src="/double-indemnity-left-4.webp"
								alt={t(
									"photographyThree.slides.grid.4",
									"Phyllis in soft focus, a cool stare underlining the film’s moral ambiguity."
								)}
								onClick={() => openAt(3)}
							/>
						</div>

						<div className="flex gap-2 w-full items-center overflow-hidden">
							<Thumb
								src="/double-indemnity-left-5.webp"
								alt={t(
									"photographyThree.slides.grid.5",
									"Phyllis on the phone—brimmed hat, tight composition, deep shadows."
								)}
								onClick={() => openAt(4)}
							/>
							<Thumb
								src="/double-indemnity-left-6.webp"
								alt={t(
									"photographyThree.slides.grid.6",
									"Walter on the phone—hat brim across his eyes; smoke and shadow set the mood."
								)}
								onClick={() => openAt(5)}
							/>
						</div>
					</div>

					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							{t(
								"photographyThree.headText",
								"In this trio of black-and-white photographs, classic film noir is brought back to life through meticulous recreations of key scenes from Double Indemnity. More than homage, these images are exercises in atmosphere — a study in light, shadow, and emotion, a window into the tension and elegance of 1940s cinema."
							)}
						</p>
						<p className="text-base" itemProp="about">
							{t(
								"photographyThree.text",
								"Every photograph was carefully lit and staged to mirror the original stills, not only in composition but in emotional texture. The light carves out character, echoing the moral ambiguity and elegance that define the genre — and the film."
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
				slides={diSlides}
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
	const t = (k: string, fb?: string) => translate(lang, `photographyThree.meta.${k}`, fb);

	const title = t(
		"title",
		"Double Indemnity – Film Noir Photo Series by Amna Kolić"
	);
	const description = t(
		"description",
		"A trio of black-and-white photographs reimagining Double Indemnity—meticulous lighting, composition, and mood that revive classic film noir."
	);
	const url = `/photography/double-indemnity`;
	const image = `/double-indemnity-left-1.webp`;
	const imageAlt = t(
		"imageAlt",
		"Black-and-white film-noir style photograph from the Double Indemnity series."
	);
	const siteName = translate(lang, "photographyTwo.meta.siteName", "Amna Kolić Portfolio");

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content: t(
				"keywords",
				"film noir photography, Double Indemnity, black and white photography, studio lighting, cinematic portrait, photo series, Amna Kolić"
			),
		},
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: siteName },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: translate(lang, "photographyTwo.meta.section", "Photography") },
		{ property: "article:author", content: translate(lang, "photographyTwo.meta.author", "Amna Kolić") },
		{ property: "article:tag", content: "Film Noir" },
		{ property: "article:tag", content: "Black and White" },
		{ property: "article:tag", content: "Studio Lighting" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const DoubleIndemnity = () => null;
export default DoubleIndemnity;
