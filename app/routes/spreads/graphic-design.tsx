import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { graphicDesignNavButtons } from "~/config";
import { motion } from 'framer-motion';
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/graphic-design-left.webp"
			alt=""
			className="w-full h-full object-cover z-0"
			aria-hidden="true"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<img
			src="/graphic-design-right.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
		/>

		<article
			className="absolute inset-0 pr-12 2xl:pr-20 pt-28 2xl:pt-36 pb-12 z-20 h-full w-full text-black gap-6"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/graphic-design"
		>
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Graphic Design" />
			<meta
				itemProp="keywords"
				content="graphic design, branding, editorial design, typography, visual identity, print design, portfolio"
			/>
			<meta itemProp="image" content="/graphic-design-right.webp" />
			<meta itemProp="image" content="/graphic-design-right-cards.webp" />
			<link itemProp="mainEntityOfPage" href="/graphic-design" />
			<div className="contents">
				<div
					className="justify-self-center h-full flex flex-col items-center gap-5 2xl:gap-8">
					<header className="flex flex-col gap-8">
						<h1
							className="text-[6rem] text-right 2xl:text-[8rem] leading-22 2xl:leading-28 text-[#363636] [-webkit-text-stroke:2px_#363636] [text-stroke:2px_#363636]"
							itemProp="headline"
						>
							{t("graphicDesign.title.titleOne", "GRAPHIC")}
							<br />
							{t("graphicDesign.title.titleTwo", "DESIGN")}
						</h1>
						<p className="sr-only">
							<span itemProp="author" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">Amna Kolić</span>
							</span>
						</p>
					</header>
					<section
						className="flex flex-col w-full h-full  font-serif items-end justify-between text-[#505050] gap-4"
						itemProp="description"
					>
						<p className="w-56 font-bold 2xl:w-[19rem] italic text-justify text-base 2xl:text-lg">
							{t(
								"graphicDesign.text",
								"Where creativity and intention intertwine, designs unfold stories through subtle details and refined aesthetics. From elegant identities to vibrant narratives and tactile impressions, each creation captures a unique essence—inviting you to experience the art behind the visuals."
							)}
						</p>
						<p className="text-[#505050] font-serif text-xs 2xl:text-sm text-right font-bold">
							{t("graphicDesign.information.informationOne", "Background photograph")}: Amna Kolić
							<br />
							{t("graphicDesign.information.informationTwo", "Cards photograph")}: Freepik
							<br />
							{t("graphicDesign.information.informationThree", "Edit & Logos")}: Amna Kolić
						</p>
					</section>
				</div>
			</div>
		</article>
		<img
			src="/graphic-design-right-cards.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="absolute bottom-0 left-0 max-h-full max-w-[40%] object-contain z-20 pointer-events-none"
			loading="eager"
			fetchPriority="high"
		/>
	</RightPage>
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	return (
		<MobileWrapper>
			<main
				className="relative h-svh w-full [overflow:clip] bg-white"
				itemScope
				itemType="https://schema.org/WebPage"
			>
				<figure
					itemProp="primaryImageOfPage"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="m-0"
				>
					<img
						src="/graphic-design-mobile.webp"
						srcSet="/graphic-design-mobile-800.webp 800w, /graphic-design-mobile.webp 1600w"
						sizes="100vw"
						alt="Graphic Design — full-bleed hero showcasing editorial artwork"
						className="block h-screen w-full object-cover"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						itemProp="contentUrl"
						width={1600}
						height={2400}
					/>
				</figure>

				<article
					className="absolute inset-0 z-50 flex h-screen flex-col items-center justify-start px-6 pb-8 pt-24 text-white"
					itemScope
					itemType="https://schema.org/WebPageSection"
					aria-labelledby="graphic-design-title"
				>
					<header className="w-full text-right">
						<h1
							id="graphic-design-title"
							itemProp="headline name"
							className="font-display text-[#363636] text-[4rem] xs:text-[5rem] leading-16 xs:leading-20 [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
						>
							{t("graphicDesign.title.titleOne", "GRAPHIC")} <br />
							{t("graphicDesign.title.titleTwo", "DESIGN")}
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<section
						id="description"
						aria-label="Section description"
						className="mt-8 flex w-full flex-col items-end gap-4 text-justify font-serif text-[#505050]"
					>
						<p itemProp="description" className="text-lg italic font-bold">
							{t(
								"graphicDesign.text",
								"Where creativity and intention intertwine, designs unfold stories through subtle details and refined aesthetics. From elegant identities to vibrant narratives and tactile impressions, each creation captures a unique essence—inviting you to experience the art behind the visuals."
							)}
						</p>
					</section>

					<nav
						aria-label="Graphic Design section navigation"
						itemScope
						itemType="https://schema.org/SiteNavigationElement"
						className="mt-6 w-full"
					>
						<motion.div
							className="pointer-events-auto mx-auto flex w-full items-center justify-between gap-3"
							initial={false}
							transition={{ duration: 0.2, ease: "easeInOut" }}
						>
							{graphicDesignNavButtons(t, makeHref).map(({ label, to }) => (
								<a
									key={label}
									href={to.replace(/^\/+/, "/")}
									className="inline-flex items-center justify-center rounded-xl bg-[#363636] px-4 py-2 font-serif text-sm xs:text-base"
									itemProp="url"
									title={label}
								>
									<span itemProp="name">{label}</span>
								</a>
							))}
						</motion.div>
					</nav>
				</article>

				<div className="absolute inset-x-0 bottom-0 z-30 flex justify-center">
					<img
						src="/graphic-design-cards.webp"
						srcSet="/graphic-design-cards-700.webp 700w, /graphic-design-cards.webp 1200w"
						sizes="(max-width: 420px) 14rem, 92vw"
						alt="Highlights of recent graphic design projects: identity, editorial, and print cards"
						className="h-auto w-[14rem] max-w-[14rem] xs:w-[92vw] xs:max-w-[720px] object-contain"
						loading="lazy"
						decoding="async"
						width={1200}
						height={800}
					/>
				</div>
			</main>
		</MobileWrapper>
	);
};


export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params?.lang === "ba" ? "ba" : "en";
	const tMeta = (k: string, fb?: string) => translate(lang, `graphicDesign.meta.${k}`, fb);

	const title = translate(
		lang,
		"graphicDesign.meta.title",
		"Graphic Design – Visual Identity & Branding Projects | Amna Kolić"
	);
	const description = translate(
		lang,
		"graphicDesign.meta.description",
		"Explore graphic design work by Amna Kolić: branding, logo systems, editorial & poster design, and typography-driven visual identities."
	);

	const url = "/graphic-design";
	const image = "/graphic-design-right.webp";
	const imageAlt = translate(
		lang,
		"graphicDesign.meta.imageAlt",
		"Graphic design spread with cards and logos from Amna Kolić’s portfolio."
	);
	const siteName = translate(lang, "photographyTwo.meta.siteName", "Amna Kolić Portfolio");

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content: translate(
				lang,
				"graphicDesign.meta.keywords",
				"graphic design, branding, visual identity, logo design, editorial design, poster design, typography, portfolio, Amna Kolić"
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
		{ property: "article:section", content: translate(lang, "graphicDesign.meta.section", "Graphic Design") },
		{ property: "article:author", content: translate(lang, "photographyTwo.meta.author", "Amna Kolić") },
		{ property: "article:tag", content: tMeta("shortOne", "Kreativ Fest") },
		{ property: "article:tag", content: tMeta("shortTwo", "Doli Bel") },
		{ property: "article:tag", content: tMeta("shortThree", "Chippsters") },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const GraphicDesign = () => null;
export default GraphicDesign;
