import { forwardRef } from "react";
import type { MetaFunction } from "react-router";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { illustrationNavButtons } from "~/config";
import { useTranslate } from "~/context/I18nProvider";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return < LeftPage ref={ref} >
		<img
			src="/illustration-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 2xl:px-16 py-20 inset-0 z-10 flex items-start flex-col justify-start text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/illustration"
		>
			<link itemProp="mainEntityOfPage" href="/illustration" />
			<header className="flex flex-col items-start gap-4">
				<div>
					<h1
						className="text-[6rem] text-left 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1.76px_#363636] [text-stroke:1.76px_#363636]"
						itemProp="headline"
					>
						{t("illustration.title.titleOne", "ILLUST")}
						<br />
						{t("illustration.title.titleTwo", "RATION")}
					</h1>
					<p className="sr-only">
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">{t("common.byName", "by Amna Kolić")}</span>
						</span>
					</p>
				</div>

				<div className="w-[45%]">
					<p
						className="font-serif text-base 2xl:text-lg text-left leading-6 italic font-bold"
						itemProp="description"
					>
						{t(
							"illustration.text",
							"Passion from an early age turned into a legitimate skill that any business can utilize"
						)}
					</p>
				</div>
			</header>
		</article>
	</LeftPage >
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<img
			src="/illustration-right.webp"
			className="w-full h-full object-cover z-0"
			alt=""
			role="presentation"
			aria-hidden="true"
			loading="eager"
			fetchPriority="high"
		/>

		<article
			className="absolute px-12 2xl:px-16 py-20 inset-0 z-10 flex items-end flex-col justify-end text-[#363636]"
			itemScope
			itemType="https://schema.org/CreativeWork"
			itemID="/book/illustration"
		>
			<link itemProp="mainEntityOfPage" href="/book/illustration" />
			<h2 className="sr-only" itemProp="headline">
				Illustration — Background & Credits
			</h2>
			<p className="font-serif font-bold text-sm" itemProp="creditText">
				{t("illustration.information", "Background illustration")}
				:&nbsp;Amna Kolić
			</p>
			<p className="sr-only">
				<span itemProp="author" itemScope itemType="https://schema.org/Person">
					<span itemProp="name">Amna Kolić</span>
				</span>
			</p>
		</article>
	</RightPage>
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	return (
		<MobileWrapper>
			<main
				className="relative h-screen w-full [overflow:clip]"
				itemScope
				itemType="https://schema.org/WebPage"
			>
				<figure
					itemProp="primaryImageOfPage"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="m-0 absolute inset-0 pointer-events-none"
				>
					<img
						src="/illustration-1.webp"
						sizes="100vw"
						alt={t(
							"illustration.meta.imageAlt",
							"Illustration background artwork by Amna Kolić featuring detailed, painterly textures."
						)}
						className="block h-full w-full object-contain object-right-bottom"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						itemProp="contentUrl"
						width={1600}
						height={2400}
					/>
					<figcaption className="sr-only" itemProp="caption">
						{t("illustration.fig.hero", "Full-bleed illustration hero artwork positioned bottom-right.")}
					</figcaption>
				</figure>

				<article
					className="absolute inset-0 z-50 flex h-screen flex-col items-center justify-start px-6 pb-8 pt-24 text-white"
					itemScope
					itemType="https://schema.org/WebPageSection"
					aria-labelledby="graphic-design-title"
				>
					<meta itemProp="isPartOf" content="Illustration — AMNA" />

					<header className="w-full text-left" itemProp="about">
						<h1
							id="graphic-design-title"
							itemProp="headline name"
							className="font-display text-[#363636] text-[4.5rem] xs:text-[5.5rem] leading-16 xs:leading-20 [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
							aria-label={t("illustration.title.combined", "Illustration")}
						>
							{t("illustration.title.titleOne", "ILLUST")} <br /> {t("illustration.title.titleTwo", "RATION")}
						</h1>
					</header>

					<section
						id="description"
						aria-label={t("illustration.aria.sectionDescription", "Section description")}
						className="mt-6 flex w-full flex-col items-end gap-4 text-justify font-serif text-[#505050]"
					>
						<p itemProp="description" className="text-lg italic font-bold">
							{t(
								"illustration.text",
								"Passion from an early age turned into a legitimate skill that any business can utilize"
							)}
						</p>
					</section>

					<nav
						aria-label="Graphic Design section navigation"
						itemScope
						itemType="https://schema.org/SiteNavigationElement"
						className="mt-6 w-full"
					>
						<ul className="pointer-events-auto mx-auto flex w-full items-center justify-between gap-3">
							{illustrationNavButtons(t, makeHref).map(({ label, to }) => (
								<li key={label} className="list-none">
									<a
										href={to.replace(/^\/+/, "/")}
										className="inline-flex items-center justify-center rounded-xl bg-[#363636] px-4 py-2 font-serif text-sm xs:text-base"
										itemProp="url"
										title={label}
										aria-label={label}
									>
										<span itemProp="name">{label}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</article>
			</main>
		</MobileWrapper>
	);
};

export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params.lang === "ba" ? "ba" : "en";
	const t = (k: string, fb?: string) => translate(lang, k, fb);

	const title = t(
		"illustration.meta.title",
		"Illustration Portfolio — Watercolor, Digital & Concept Art | Amna Kolić"
	);
	const description = t(
		"illustration.meta.description",
		"Explore illustration projects by Amna Kolić: watercolor, digital painting, character and concept art—blending literature, folklore, and modern visual storytelling."
	);
	const url = "/illustration";
	const image = "/illustration-right.webp";
	const imageAlt = t(
		"illustration.meta.imageAlt",
		"Illustration background artwork by Amna Kolić featuring detailed, painterly textures."
	);

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "author", content: "Amna Kolić" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
};

export const loader = () => null;

const Illustration = () => null;
export default Illustration;
