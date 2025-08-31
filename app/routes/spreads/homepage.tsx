import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { DModified, Star } from "~/assets";
import { BASE_URL, contactButtons, navSections } from "~/config";
import { useFlipbook } from "~/context/flipbook";
import { motion } from "framer-motion";
import { LanguageSwitcher, ScreenTextFit } from "~/components/UI";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { goToSpread, ready } = useFlipbook();
	const { t, makeHref } = useTranslate();

	return (
		<LeftPage ref={ref}>
			<img
				src="/homepage-left.webp"
				alt=""
				role="presentation"
				className="w-full h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
			/>
			<div className="absolute inset-0 z-20 px-16 py-10 2xl:py-16 flex flex-col justify-between">
				<nav aria-label="Table of contents" className="text-[#272727]">
					<h2 className="text-5xl font-serif pb-4">{t("nav.contents", "contents")}</h2>
					<ol className="space-y-6">
						{navSections(t, makeHref).map((section) => (
							<li
								key={section.title}
								className="grid grid-cols-[2ch_1fr] items-start gap-8"
							>
								<span className="text-right tabular-nums font-sans text-4xl font-light">
									{section.pageNumber}
								</span>
								<div className="flex flex-col">
									<a
										href={section.to}
										onClick={(e) => {
											if (!ready) return;
											if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
											e.preventDefault();
											goToSpread(section.to);
										}}
										className="font-sans text-lg 2xl:text-xl font-black cursor-pointer hover:opacity-90 transition"
									>
										{section.title}
									</a>
									<ul className="ml-3">
										{section.items.map((item) => (
											<li key={item.to}>
												<a
													href={item.to}
													onClick={(e) => {
														if (!ready) return;
														if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
														e.preventDefault();
														goToSpread(item.to);
													}}
													className="font-serif italic text-md 2xl:text-lg cursor-pointer hover:opacity-90 transition"
												>
													{item.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ol>
					<div className='pt-10'>
						<LanguageSwitcher />
					</div>
				</nav>
				<section
					aria-label="Contact"
					className="flex flex-col items-center gap-2"
				>
					<Star className="w-10 h-10 2xl:w-12 2xl:h-12 text-white" aria-hidden />
					<h3 className="font-serif text-white text-xl 2xl:text-2xl">
						{t("homepage.cta", "Let's chat!")}
					</h3>
					<div className="flex items-center gap-2">
						{contactButtons.map(({ label, to, icon: Icon }) => {
							if (!to) return null;

							return (
								<motion.a
									key={label}
									href={to}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									title={label}
									onClick={(e) => {
										e.stopPropagation();
									}}
									className="pointer-events-auto z-50 inline-flex items-center justify-center bg-white rounded-full p-2 text-pink-950 shadow-md hover:shadow-lg"
									whileHover={{ scale: 1.05, rotate: -1 }}
									whileTap={{ scale: 0.95, rotate: 1 }}
									transition={{ type: "spring", stiffness: 300, damping: 15 }}
								>
									<Icon className="h-6 w-6 text-[#379C8D] 2xl:w-7 2xl:h-7" aria-hidden />
									<span className="sr-only">{label}</span>
								</motion.a>
							);
						})}
					</div>
				</section>
			</div>
		</LeftPage>
	);
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return (
		<RightPage ref={ref} showBookmark={false}>
			<img
				src="/homepage-right.webp"
				className="absolute inset-0 w-full h-full object-cover z-0"
				alt=""
				role="presentation"
				loading="eager"
				fetchPriority="high"
				decoding="async"
			/>
			<section
				aria-labelledby="home-hero-title"
				className="flex absolute h-full justify-between py-10 2xl:py-16 w-full flex-col inset-0 items-center"
			>
				<div className="flex flex-col h-[55%] 2xl:h-1/2 justify-between">
					<div className="flex flex-col gap-3">
						<h1 id="home-hero-title" className="sr-only">
							{t("info", "by Amna Kolić")} — {t("homepage.title", "DESIGN")} portfolio
						</h1>
						<div
							aria-hidden="true"
							className="font-display leading-0 font-normal flex justify-center text-white text-[8rem] 2xl:text-[10rem]"
						>
							<span
								className=" inline-flex items-baseline [-webkit-text-stroke:0.01em_white] [text-stroke:0.01em_white]"
							>
								<DModified className="h-[0.75em] w-auto" />
								{t("homepage.title", "DESIGN").slice(1)}
							</span>
						</div>
						<h2 className="font-display italic tracking-[0.4em] text-[#272727] [-webkit-text-stroke:1px_#272727] [text-stroke:1px_#272727] text-4xl 2xl:text-5xl">
							<span aria-hidden="true">portofolio</span>
							<span className="sr-only">portfolio</span>
						</h2>
					</div>
					<div>
						<h3 className="text-white font-serif text-2xl 2xl:text-3xl w-[13.3rem] 2xl:w-[16.3rem]">
							<span className="flex flex-col">
								<span>{t("homepage.headlineOne.titleOne", "GRAPHIC")}</span>
								<span className="w-full flex italic justify-end">
									{t("homepage.headlineOne.titleTwo", "DESIGN")}
								</span>
							</span>
						</h3>
						<h3 className="text-[#272727] font-serif text-2xl 2xl:text-3xl">
							{t("homepage.headlineTwo", "ILLUSTRATION")}
						</h3>
						<h3 className="text-white font-serif text-2xl 2xl:text-3xl w-[13rem] 2xl:w-[16rem]">
							<span className="flex flex-col">
								<span className="w-full flex justify-end">
									{t("homepage.headlineThree.titleOne", "PHOTO")}
								</span>
								<span className='italic'>{t("homepage.headlineThree.titleTwo", "EDITING")}</span>
							</span>
						</h3>
					</div>
				</div>
			</section>
			<img
				src="/cookie-pose.webp"
				alt=""
				role="presentation"
				className="absolute bottom-0 right-0 w-[calc(100%-11rem)] object-contain z-20 pointer-events-none"
				loading="eager"
				decoding="async"
				fetchPriority="high"
			/>
			<div
				className="absolute -bottom-24 -right-12 w-[26rem] h-[26rem] 2xl:w-[33.5rem] 2xl:h-[33.5rem] rounded-full z-30 pointer-events-none isolate">
				<div
					className="
						  absolute inset-0 rounded-full mix-blend-multiply
						  bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0)_100%)]
						  bg-no-repeat bg-[length:100%_100%]
						"
					aria-hidden="true"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-end gap-10 pb-32">
					<div className="px-4 text-end">
						<p className="text-white italic text-3xl 2xl:text-4xl font-serif leading-tight">
							<span className="not-italic">
								{t("homepage.headlineFour.titleOne", "The DIFFERENT")}
							</span>
							<br />
							<span className="not-italic">
								{t("homepage.headlineFour.titleTwo", "APPROACH")}
							</span>
							<br />
							{t("homepage.headlineFour.titleThree", "to design")}
							<br />
							{t("homepage.headlineFour.titleFour", "with")}
						</p>
						<h2 className="text-white py-12 leading-0 text-[5rem] 2xl:text-[6rem] font-logo">
							{t("homepage.headlineFour.title", "Amna")}
						</h2>
					</div>
				</div>
			</div>
		</RightPage >
	)
});

export const Mobile = () => {
	const { t } = useTranslate();

	return (
		<MobileWrapper>
			<main
				className="relative h-svh w-full px-6 [overflow:clip]"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/homepage"
			>
				<img
					src="/homepage.webp"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="absolute inset-0 z-0 h-full w-full object-cover"
					loading="eager"
					fetchPriority="high"
					decoding="async"
				/>
				<link itemProp="url" href="/homepage" />
				<section
					className="relative flex h-screen w-full flex-col items-start justify-start gap-8 xs:gap-20 overflow-hidden pt-24 xs:pt-32"
					aria-labelledby="home-hero-title"
				>
					<div className="relative z-10 flex w-full flex-col items-start gap-2">
						<h1 id="home-hero-title" className="sr-only">
							{t("info", "by Amna Kolić")} — {t("homepage.title", "DESIGN")}
							portfolio
						</h1>

						<div
							aria-hidden="true"
							className="font-display flex w-full justify-center font-normal leading-0 text-white"
						>
							<ScreenTextFit>
								<span className="inline-flex items-baseline py-1">
									<DModified className="h-[0.75em] w-auto" />
									{t("homepage.title", "DESIGN").slice(1)}
								</span>
							</ScreenTextFit>
						</div>

						<p className="font-display text-2xl italic tracking-[0.4em] pl-2 text-[#272727] [-webkit-text-stroke:1px_#272727] [text-stroke:1px_#272727]">
							portfolio
						</p>
					</div>

					<div className="relative z-30">
						<h2 className="w-[13.3rem] font-serif text-3xl text-white">
							<span className="flex flex-col">
								<span>{t("homepage.headlineOne.titleOne", "GRAPHIC")}</span>
								<span className="flex w-full justify-end italic">
									{t("homepage.headlineOne.titleTwo", "DESIGN")}
								</span>
							</span>
						</h2>

						<h2 className="font-serif text-2xl text-[#272727]">
							{t("homepage.headlineTwo", "ILLUSTRATION")}
						</h2>

						<h2 className="w-[13rem] font-serif text-2xl text-white">
							<span className="flex flex-col">
								<span className="flex w-full justify-end">
									{t("homepage.headlineThree.titleOne", "PHOTO")}
								</span>
								<span className='italic'>{t("homepage.headlineThree.titleTwo", "EDITING")}</span>
							</span>
						</h2>
					</div>
				</section>
				<img
					src="/cookie-pose-mobile.webp"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="pointer-events-none absolute bottom-0 z-20 max-w-[45vh] object-contain object-bottom-right right-0"
					loading="eager"
					decoding="async"
					fetchPriority="high"
				/>
				<div
					className="pointer-events-none absolute bottom-0 right-4 z-30 h-[24rem] w-[24rem] translate-x-14 translate-y-24 overflow-hidden rounded-full xs:right-0 xs:h-[26rem] xs:w-[26rem]"
					aria-hidden="true"
				>
					<div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0)_100%)] bg-no-repeat bg-[length:100%_100%] mix-blend-multiply" />

					<div className="absolute inset-0 flex flex-col items-center justify-end gap-10 pb-28">
						<div className="px-4 text-end">
							<p className="text-white italic text-2xl xs:text-2xl font-serif leading-tight">
								<span className="not-italic">
									{t("homepage.headlineFour.titleOne", "The DIFFERENT")}
								</span>
								<br />
								<span className="not-italic">
									{t("homepage.headlineFour.titleTwo", "APPROACH")}
								</span>
								<br />
								{t("homepage.headlineFour.titleThree", "to design")}
								<br />
								{t("homepage.headlineFour.titleFour", "with")}
							</p>
							<h2 className="text-white py-12 leading-0 text-[5rem] 2xl:text-[6rem] font-logo">
								{t("homepage.headlineFour.title", "Amna")}
							</h2>
						</div>
					</div>

				</div>
			</main>
		</MobileWrapper >
	);
};

export const meta: MetaFunction = ({ params, location }) => {
	const lang: Lang = params.lang === "ba" ? "ba" : "en";
	const t = (k: string, fallback?: string) =>
		translate(lang, `homepage.meta.${k}`, fallback);

	const pathNoLang =
		location.pathname.replace(/^\/(en|ba)(?=\/|$)/, "") || "/homepage";
	const pageUrl = `${BASE_URL}/${lang}${pathNoLang}`;
	const ogLocale = lang === "ba" ? "bs_BA" : "en_US";
	const ogImg = `${BASE_URL}/og/homepage-og.jpg`;

	return [
		{ title: t("title") },
		{ name: "description", content: t("description") },
		{ name: "keywords", content: t("keywords") },
		{ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

		{ tagName: "link", rel: "canonical", href: pageUrl },
		{ tagName: "link", rel: "alternate", href: `${BASE_URL}/en${pathNoLang}`, hrefLang: "en" },
		{ tagName: "link", rel: "alternate", href: `${BASE_URL}/ba${pathNoLang}`, hrefLang: "bs-BA" },
		{ tagName: "link", rel: "alternate", href: `${BASE_URL}/en${pathNoLang}`, hrefLang: "x-default" },

		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Amna Kolić" },
		{ property: "og:locale", content: ogLocale },
		{ property: "og:url", content: pageUrl },
		{ property: "og:title", content: t("ogTitle", t("title")) },
		{ property: "og:description", content: t("ogDescription", t("description")) },
		{ property: "og:image", content: ogImg },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },

		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: t("ogTitle", t("title")) },
		{ name: "twitter:description", content: t("ogDescription", t("description")) },
		{ name: "twitter:image", content: ogImg }
	];
};

export const loader = () => null;

const Homepage = () => null;
export default Homepage;
