import { forwardRef, useMemo, useState } from "react";
import { CModified } from "~/assets";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { motion } from "framer-motion";
import { contactButtons } from "~/config";
import { ScreenTextFit } from "~/components/UI";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/contact-left.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-20 w-2/3 inset-0 z-10 text-[#505050] flex items-start gap-12 flex-col justify-center pb-12 2xl:pb-11 leading-[0.8]"
			itemScope
			itemType="https://schema.org/ContactPage"
			itemID="/contact"
			aria-labelledby="contact-h1"
		>
			<h1 id="contact-h1" className="sr-only" itemProp="name">
				Contact Amna Kolić
			</h1>

			<div className="w-full text-center">
				<p className="font-serif font-bold italic text-xl 2xl:text-2xl">
					Be it traditional email, phonecall,
				</p>
			</div>

			<section
				aria-label="Contact"
				className="flex flex-col items-center justify-center w-full gap-6"
				itemProp="mainEntity"
				itemScope
				itemType="https://schema.org/Person"
			>
				<meta itemProp="name" content="Amna Kolić" />
				<meta itemProp="jobTitle" content="Graphic Designer" />
				<h2 className="font-display font-bold text-[#363636] text-[6rem] 2xl:text-[7rem] [-webkit-text-stroke:0.5px_#363636] leading-24">
					LET'S
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
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/contact-right.webp"
			alt=""
			role="presentation"
			aria-hidden="true"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>

		<article
			className="absolute top-0 bottom-0 right-0 left-auto w-2/3 z-10 px-20 flex flex-col items-end justify-center gap-8 leading-[0.8]"
			aria-labelledby="contact-chat-title"
		>
			<div className="w-full text-center">
				<p className="font-serif font-bold italic text-[#505050] text-xl 2xl:text-2xl">
					Instagram or LinkedIn,
				</p>
			</div>

			<h2 id="contact-chat-title" className="font-display font-bold flex w-full justify-center text-[#363636] text-[6rem] 2xl:text-[7rem]">
				<span className="inline-flex items-baseline gap-1">
					<CModified className="h-[0.77em] w-auto flex-none" />
					<span className="[-webkit-text-stroke:0.5px_#363636]">HAT</span>
				</span>
			</h2>

			<div className="w-full text-center">
				<p className="text-[#505050] font-serif leading-6 2xl:leading-7 text-base 2xl:text-lg text-justify">
					Even if your idea is silly, overly serious, undeniably new or just a plain old brochure design request, I’m here to listen and deliver with a professional approach and an open mind.
				</p>
			</div>
		</article>
	</RightPage>
));

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const aboutSlides = useMemo(
		() => [
			{
				src: "/contact.webp",
				alt: "Amna Kolić — Bosnia-based graphic & UX/UI designer — contact portrait.",
			},
		],
		[]
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
						aria-label="About Amna Kolić"
						className="text-xl xs:text-2xl w-full text-[#505050] font-serif justify-start text-center"
					>
						<p itemProp="description" className="font-bold italic">
							Be it traditional email, phonecall, Instagram or LinkedIn
						</p>
						<meta itemProp="jobTitle" content="Graphic Designer & UX/UI Designer" />
						<meta itemProp="name" content="Amna Kolić" />
						<meta itemProp="nationality" content="Bosnia and Herzegovina" />
						<meta itemProp="knowsLanguage" content="en" />
					</section>

					<header className="w-full">
						<ScreenTextFit>
							<h1
								id="about-title"
								itemProp="name"
								className="font-display text-center leading-17 text-[3.7rem] xs:text-[4.4rem] [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
							>
								LET’S CHAT
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
							aria-label="Open portrait in lightbox"
							title="View portrait"
						>
							<img
								src="/contact.webp"
								sizes="(max-width: 640px) 100vw, 640px"
								alt="Amna Kolić — Bosnia-based graphic & UX/UI designer — contact portrait."
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								itemProp="contentUrl"
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							Portrait of Amna Kolić for professional inquiries.
						</figcaption>
					</figure>

					<section
						id="description-cta"
						aria-label="Work together"
						className="text-sm w-full text-[#505050] font-serif justify-start text-justify"
					>
						<p className="text-base">
							Even if your idea is silly, overly serious, undeniably new or just a plain old brochure design request, I’m here to listen and deliver with a professional approach and an open mind.
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

export function meta() {
	const title = "Get in Touch | Contact Amna Kolić – Graphic Design Portfolio";
	const description =
		"Reach out to Amna Kolić for freelance design inquiries, collaboration, or just to chat about your next creative project.";
	const url = "/contact";
	const image = "/contact-right.webp";

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "robots", content: "index,follow" },
		{ name: "author", content: "Amna Kolić" },
		{ name: "og:type", content: "website" },
		{ name: "og:title", content: title },
		{ name: "og:description", content: description },
		{ name: "og:url", content: url },
		{ name: "og:image", content: image },
		{ name: "og:locale", content: "en_US" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ tagName: "link", rel: "canonical", href: url } as any,
	];
}

export const loader = () => null;

const Contact = () => null;
export default Contact;
