import { forwardRef, useMemo, useState } from "react";
import { CModified } from "~/assets";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { motion } from "framer-motion";
import { contactButtons } from "~/config";
import { ScreenTextFit } from "~/components/UI";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { useTranslate } from "~/context/I18nProvider";
import type { MetaFunction } from "react-router";
import { translate, type Lang } from "~/i18n/i18n";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <LeftPage ref={ref}>
		<img
			src="/contact-left.webp"
			alt={t("contact.meta.imageAlt", "Contact page decorative background.")}
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-20 w-2/3 top-[calc(50%_-_13.2rem)] 3xl:top-[calc(50%_-_12.5rem)] inset-0 z-10 text-[#505050] flex items-start gap-12 flex-col justify-start leading-[0.8]"
			itemScope
			itemType="https://schema.org/ContactPage"
			itemID="/contact"
			aria-labelledby="contact-h1"
		>
			<h1 id="contact-h1" className="sr-only" itemProp="name">
				{t("contact.meta.simpleName", "Contact")}
			</h1>

			<div className="w-full text-center">
				<p className="font-serif font-bold italic text-xl 2xl:text-2xl">
					{t("contact.title.titleOne", "Be it traditional email, phonecall,")}
				</p>
			</div>

			<section
				aria-label={t("contact.a11y.section", "Contact")}
				className="flex flex-col items-center justify-center w-full gap-6"
				itemProp="mainEntity"
				itemScope
				itemType="https://schema.org/Person"
			>
				<h2 className="font-display font-bold text-[#363636] text-[6rem] 2xl:text-[6rem] [-webkit-text-stroke:0.5px_#363636] leading-24">
					{t("contact.title.titleThree", "LET'S")}
				</h2>
				<div className="flex items-center justify-between w-[75%] gap-2">
					{contactButtons.map(({ label, to, icon: Icon }) => {
						const isExternal = to?.startsWith("http");
						const isEmail = to?.startsWith("mailto:");
						return (
							<motion.a
								key={label}
								href={to || undefined}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer me" : "me"}
								aria-label={label}
								title={label}
								itemProp={isEmail ? "email" : "sameAs"}
								whileHover={{ scale: 1.05, rotate: -1 }}
								whileTap={{ scale: 0.95, rotate: 1 }}
								transition={{ type: "spring", stiffness: 300, damping: 15 }}
								className="z-50 inline-flex items-center justify-center bg-[#363636] rounded-full p-2 shadow-md hover:shadow-lg"
							>
								<Icon className="h-6 w-6 2xl:w-8 2xl:h-8" color="white" aria-hidden />
								<span className="sr-only">{label}</span>
							</motion.a>
						);
					})}
				</div>
			</section>
		</article>
	</LeftPage>
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslate();

	return <RightPage ref={ref} showBookmark>
		<img
			src="/contact-right.webp"
			alt={t("contact.meta.imageAlt", "Contact page decorative background.")}
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>

		<article
			className="absolute bottom-0 top-[calc(50%_-_10rem)]  right-0 left-auto w-2/3 z-10 px-20 flex flex-col items-end justify-start gap-8 leading-[0.8]"
			aria-labelledby="contact-chat-title"
		>
			<div className="w-full text-center">
				<p className="font-serif font-bold italic text-[#505050] text-xl 2xl:text-2xl">
					{t("contact.title.titleTwo", "Instagram or LinkedIn,")}
				</p>
			</div>

			<h2 id="contact-chat-title" className="font-display font-bold flex w-full justify-center text-[#363636] text-[6rem] 2xl:text-[6rem]">
				<span className="inline-flex items-baseline gap-1">
					{t("contact.title.titleFour", "CHAT").startsWith("C") ? (
						<>
							<CModified className="h-[0.77em] w-auto flex-none" />
							<span className="[-webkit-text-stroke:0.5px_#363636]">
								{t("contact.title.titleFour", "CHAT").slice(1)}
							</span>
						</>
					) : (
						<span className="[-webkit-text-stroke:0.5px_#363636]">
							{t("contact.title.titleFour", "CHAT")}
						</span>
					)}
				</span>
			</h2>
			<div className="w-full text-center">
				<p className="text-[#505050] font-serif leading-6 2xl:leading-7 text-base 2xl:text-lg text-justify">
					{t(
						"contact.text.textOne",
						"Even if your idea is silly, overly serious, undeniably new or just a plain old brochure design request, I’m here to listen and deliver with a professional approach and an open mind."
					)}
				</p>
			</div>
		</article>
	</RightPage>
});

export const Mobile = () => {
	const { t } = useTranslate();

	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const aboutSlides = useMemo(
		() => [
			{
				src: "/contact.webp",
				alt: t(
					"contact.alts.mobileHero",
					"Amna Kolić — Bosnia-based graphic & UX/UI designer — contact portrait."
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

	return (
		<MobileWrapper>
			<div className="relative w-full">
				<article
					itemScope
					itemType="https://schema.org/Person"
					className="relative z-10 px-6 pb-8 pt-24 flex items-center justify-start gap-8 flex-col text-[#363636]"
					aria-labelledby="about-title"
				>
					<section
						id="description"
						aria-label={t("contact.a11y.topLine", "Contact intro")}
						className="text-xl xs:text-2xl w-full text-[#505050] font-serif justify-start text-center"
					>
						<p itemProp="description" className="font-bold italic">
							{t(
								"contact.mobile.lead",
								"Be it traditional email, phonecall, Instagram or LinkedIn"
							)}
						</p>
					</section>

					<header className="w-full">
						<ScreenTextFit>
							<h1
								id="about-title"
								itemProp="name"
								className="font-display text-center leading-17 [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
							>
								{t("contact.title.titleThree", "LET’S")}{t("contact.title.titleFour", "CHAT")}
							</h1>
						</ScreenTextFit>
						<meta itemProp="inLanguage" content="en" />
					</header>

					<nav
						aria-label="Contact methods"
						itemScope
						itemType="https://schema.org/SiteNavigationElement"
						className="w-full"
					>
						<div className="flex items-center justify-between w-full gap-2">
							{contactButtons.map(({ label, to, icon: Icon }) => {
								const isExternal = to?.startsWith("http");
								const isEmail = to?.startsWith("mailto:");
								return (
									<motion.a
										key={label}
										href={to || undefined}
										target={isExternal ? "_blank" : undefined}
										rel={isExternal ? "noopener noreferrer me" : "me"}
										aria-label={label}
										title={label}
										itemProp={isEmail ? "email" : "sameAs"}
										whileHover={{ scale: 1.05, rotate: -1 }}
										whileTap={{ scale: 0.95, rotate: 1 }}
										transition={{ type: "spring", stiffness: 300, damping: 15 }}
										className="z-50 inline-flex items-center justify-center bg-[#363636] rounded-full p-3 shadow-md hover:shadow-lg"
									>
										<Icon className="h-10 w-10" color="white" aria-hidden />
										<span className="sr-only">{label}</span>
									</motion.a>
								);
							})}
						</div>
					</nav>

					<figure
						itemProp="image"
						itemScope
						itemType="https://schema.org/ImageObject"
						className="w-full pb-2"
					>
						<button
							type="button"
							onClick={() => openAt(0)}
							className="block w-full cursor-zoom-in"
							aria-label={t("contact.a11y.openPortrait", "Open portrait in lightbox")}
							title={t("contact.a11y.viewPortrait", "View portrait")}
						>
							<img
								src="/contact.webp"
								sizes="(max-width: 640px) 100vw, 640px"
								alt={t("contact.alts.mobileHero", "Amna Kolić — Bosnia-based graphic & UX/UI designer — contact portrait.")}
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								itemProp="contentUrl"
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							{t("contact.a11y.caption", "Portrait of Amna Kolić for professional inquiries.")}
						</figcaption>
					</figure>

					<section
						id="description-cta"
						aria-label="Work together"
						className="text-sm w-full text-[#505050] font-serif justify-start text-justify"
					>
						<p className="text-base">
							{t(
								"contact.text.textOne",
								"Even if your idea is silly, overly serious, undeniably new or just a plain old brochure design request, I’m here to listen and deliver with a professional approach and an open mind."
							)}
						</p>
						<p className="text-xs opacity-80 mt-3">
							{t(
								"contact.text.textTwo",
								"Photograph used was generated by ChatGPT, then photoshopped to fix the obvious issues. The photo shows my own likeness and is here purely for the decorative and relevance purposes."
							)}
						</p>
					</section>
				</article>
			</div>

			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={aboutSlides}
				plugins={[Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				styles={{ container: { zIndex: 200 } }}
				carousel={{ finite: false, imageFit: "cover" }}
				render={{
					slide: ({ slide }) => {
						if (!isImageSlide(slide)) return null;
						return (
							<figure className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5">
								<img
									src={slide.src}
									alt={slide.alt ?? ""}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
									loading="lazy"
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
	const t = (k: string, fallback?: string) => translate(lang, `contact.meta.${k}`, fallback);

	const BASE_URL = import.meta.env?.VITE_BASE_URL || "https://www.amnakolic.com";
	const url = `${BASE_URL}/${lang}/contact`;
	const image = `${BASE_URL}/contact-right.webp`;

	const title = t("title", "Get in Touch | Contact Amna Kolić – Graphic Design Portfolio");
	const description = t(
		"description",
		"Reach out to Amna Kolić for freelance design inquiries, collaboration, or just to chat about your next creative project."
	);
	const imageAlt = t("imageAlt", "Contact page decorative background.");
	const keywords = t(
		"keywords",
		"contact, hire graphic designer, UX/UI designer, collaboration, branding, editorial design, portfolio"
	);

	const siteName = translate(lang, "common.siteName", "Amna Kolić Portfolio");
	const section = translate(lang, "sections.contact", "Contact");

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },

		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: siteName },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:locale", content: lang === "ba" ? "bs_BA" : "en_US" },
		{ property: "article:section", content: section },

		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },

		{ rel: "canonical", href: url } as any,
	];
};


export const loader = () => null;

const Contact = () => null;
export default Contact;
