import MobileWrapper from "~/components/MobileWrapper";
import { DModified } from "~/assets";
import { translate, type Lang } from "~/i18n/i18n";
import ScreenTextFit from "~/components/UI/ScreenTextFit";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { BASE_URL } from "~/config";

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
					src="/homepage.avif"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="absolute inset-0 z-0 h-full w-full object-cover"
					loading="eager"
					width={440}
					height={956}
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
							<ScreenTextFit ssrSize="18vw">
								<span className="inline-flex items-baseline py-1">
									<DModified className="h-[0.75em] w-auto" />
									{t("homepage.title", "DESIGN").slice(1)}
								</span>
							</ScreenTextFit>
						</div>

						<p className="font-display text-2xl tracking-[0.4em] pl-2 text-[#272727] [-webkit-text-stroke:1px_#272727] [text-stroke:1px_#272727]">
							portfolio
						</p>
					</div>

					<div className="relative z-30">
						<h2 className="w-[13.3rem] font-serif text-3xl text-white">
							<span className="flex flex-col">
								<span>{t("homepage.headlineOne.titleOne", "GRAPHIC")}</span>
								<span className="flex w-full justify-end">
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
								<span>{t("homepage.headlineThree.titleTwo", "EDITING")}</span>
							</span>
						</h2>
					</div>
				</section>
				<img
					src="/cookie-pose-mobile.avif"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="pointer-events-none absolute bottom-0 z-20 max-w-[45vh] object-contain object-bottom-right right-0 aspect-[411/817]"
					loading="eager"
					width={411}
					height={817}
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
							<p className="text-white text-2xl xs:text-2xl font-serif leading-tight">
								<span>
									{t("homepage.headlineFour.titleOne", "The DIFFERENT")}
								</span>
								<br />
								<span>
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

export default Mobile;
