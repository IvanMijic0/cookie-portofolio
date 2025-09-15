import { forwardRef } from "react";
import { PBottom, PTop } from "~/assets";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { BASE_URL, photographyNavButtons } from "~/config";
import { motion } from 'framer-motion';
import { useTranslate } from "~/context/I18nProvider";
import { translate, type Lang } from "~/i18n/i18n";
import type { MetaFunction } from "react-router";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/photography-intro.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover w-screen h-screen"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<article
			className="absolute px-12 pb-10 2xl:py-12 inset-0 z-20 flex items-start justify-between flex-col text-white"
			itemScope
			itemType="https://schema.org/WebPageSection"
			aria-labelledby="photography-title"
		>
			<h1 id="photography-title" className="sr-only" itemProp="name">
				{t("photography.title.titleOne", "Photography")} &amp;{" "}
				{t("photography.title.titleTwo", "Editing")}
			</h1>
			<div aria-hidden="true">
				<PTop className="w-[30rem] h-[30rem] 2xl:w-full 2xl:h-full" />
			</div>
			<div className="flex gap-2 justify-center items-end pl-14 flex-col" aria-hidden="true">
				<h2 className="text-[#363636] text-[3.4rem] leading-12 2xl:text-[4rem] font-display [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]">
					{t("photography.title.titleOne", "PHOTOGRAPHY")}
				</h2>
				<p className="text-3xl 2xl:text-4xl text-[#505050] tracking-[1rem] 2xl:tracking-[0.45em] font-display italic [-webkit-text-stroke:1px_#505050] [text-stroke:1px_#505050]">
					{t("photography.title.titleTwo", "and editing")}
				</p>
			</div>
			<div className="flex w-full items-end justify-between gap-3">
				<div aria-hidden="true">
					<PBottom className="shrink-0 w-60 2xl:w-[calc(100%-1rem)]" />
				</div>
				<div
					className="min-w-0 text-right text-[#505050] font-serif text-xs 2xl:text-base pr-4 sm:pr-6">
					<dl className="space-y-1" itemProp="about" itemScope itemType="https://schema.org/CreativeWork">
						<div className="flex justify-end gap-1">
							<dt className="font-bold">Model:</dt>
							<dd itemProp="actor" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">Elma Rožajac</span>
							</dd>
						</div>
						<div className="flex justify-end gap-1">
							<dt className='font-bold'>{t("photography.information", "Photographer")}:</dt>
							<dd itemProp="creator" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">Amna Kolić</span>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</article>
	</RightPage>
});

export const Mobile = () => {
	const { t, makeHref } = useTranslate();

	return (
		<MobileWrapper>
			<div className="relative h-svh w-full">
				<div className="relative">
					<figure
						itemProp="primaryImageOfPage"
						itemScope
						itemType="https://schema.org/ImageObject"
						className="m-0"
					>
						<img
							src="/photography-intro.webp"
							alt="Editorial portrait introducing the Photography & Editing section"
							className="block w-full h-auto object-cover"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							itemProp="contentUrl"
						/>
						<figcaption className="sr-only">
							Hero image for Photography &amp; Editing
						</figcaption>
					</figure>
					<div className="pointer-events-none absolute inset-x-0 -bottom-0 h-14 bg-gradient-to-b from-transparent via-white/80 to-white" />
				</div>
				<article
					className="absolute px-6 pb-14 py-4 inset-0 z-20 flex items-center h-screen justify-end flex-col text-white"
					itemScope
					itemType="https://schema.org/WebPageSection"
					aria-labelledby="photography-title"
				>
					<h1 id="photography-title" className="sr-only" itemProp="name">
						Photography &amp; Editing
					</h1>
					<div aria-hidden="true">
						<PTop className="w-full h-auto 2xl:w-auto 2xl:h-auto" />
					</div>
					<div className="pb-6 w-full pt-2 text-center space-y-2">
						<h2 className="text-[#363636] text-[2.5rem] leading-12 2xl:text-[4.8rem] font-display [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]">
							{t("photography.title.titleOne", "PHOTOGRAPHY")}
						</h2>
						<nav
							aria-label="Photography section navigation"
							itemScope
							itemType="https://schema.org/SiteNavigationElement"
						>
							<motion.div
								className="mx-auto w-full justify-between flex items-center gap-3 pointer-events-auto"
								initial={false}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								{photographyNavButtons(t, makeHref).map(({ label, to }) => (
									<a
										key={label}
										href={to}
										className="inline-flex text-sm xs:text-base font-serif items-center justify-center bg-[#363636] py-2 px-4 rounded-xl"
										itemProp="url"
										title={label}
									>
										<span itemProp="name">{label}</span>
									</a>
								))}
							</motion.div>
						</nav>
					</div>
					<div className="flex w-full items-end justify-between gap-3">
						<div aria-hidden="true">
							<PBottom className="w-[10rem] xs:w-[11.7rem] leading-0 h-auto" />
						</div>
						<div className="min-w-0 xs:text-right text-[#505050] font-serif text-xs">
							<dl
								className="space-y-1"
								itemProp="about"
								itemScope
								itemType="https://schema.org/CreativeWork"
							>
								<div className="flex flex-row justify-end gap-1">
									<dt className="font-bold">Model:</dt>
									<dd itemProp="actor" itemScope itemType="https://schema.org/Person">
										<span itemProp="name">Elma Rožajac</span>
									</dd>
								</div>
								<div className="flex flex-col xs:flex-row justify-end gap-1">
									<dt className='font-bold'>{t("photography.information", "Photographer")}:</dt>
									<dd itemProp="creator" itemScope itemType="https://schema.org/Person">
										<span itemProp="name">Amna Kolić</span>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</article>
			</div>
		</MobileWrapper>
	);
};

export const meta: MetaFunction = ({ params }) => {
	const lang: Lang = params.lang === "ba" ? "ba" : "en";
	const t = (k: string, fallback?: string) =>
		translate(lang, `photography.meta.${k}`, fallback);

	const title = t(
		"title",
		"Creative Photography & Editing Projects | Amna Kolić Portfolio"
	);
	const description = t(
		"description",
		"Discover concept-driven photography by Amna Kolić—editorial, symbolic, and digitally enhanced visual narratives."
	);
	const url = `${BASE_URL}/${lang}/photography`;
	const image = `${BASE_URL}/photography-intro.webp`;
	const imageAlt = t(
		"imageAlt",
		"Photography & editing title spread with typographic treatment."
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

const Photography = () => null;
export default Photography;
