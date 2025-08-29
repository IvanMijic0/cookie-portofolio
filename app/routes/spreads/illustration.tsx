import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { motion } from 'framer-motion';
import { illustrationNavButtons } from "~/config";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
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
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Illustration" />
			<meta
				itemProp="keywords"
				content="illustration, digital illustration, editorial illustration, character design, concept art, portfolio"
			/>
			<meta itemProp="image" content="/illustration-left.webp" />
			<link itemProp="mainEntityOfPage" href="/illustration" />
			<meta itemProp="name" content="Illustration" />
			<header className="flex flex-col items-start gap-4">
				<div>
					<h1
						className="text-[6rem] text-left 2xl:text-[8rem] leading-22 2xl:leading-28 [-webkit-text-stroke:1.76px_#363636] [text-stroke:1.76px_#363636]"
						itemProp="headline"
					>
						ILLUST<br />RATION
					</h1>
					<p className="sr-only">
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">Amna Kolić</span>
						</span>
					</p>
				</div>

				<div className="w-[45%]">
					<p
						className="font-serif text-base 2xl:text-lg text-left leading-6 italic font-bold"
						itemProp="description"
					>
						Passion from an early age turned into a refined illustration skill that any business can
						utilize.
					</p>
				</div>
			</header>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
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
			<meta itemProp="inLanguage" content="en" />
			<meta itemProp="genre" content="Illustration" />
			<meta
				itemProp="keywords"
				content="illustration, digital illustration, watercolor, concept art, editorial illustration, character design, portfolio"
			/>
			<meta itemProp="image" content="/illustration-right.webp" />
			<link itemProp="mainEntityOfPage" href="/book/illustration" />
			<meta itemProp="name" content="Illustration — Background & Credits" />
			<h2 className="sr-only" itemProp="headline">
				Illustration — Background & Credits
			</h2>
			<p className="font-serif font-bold text-sm" itemProp="creditText">
				Background illustration: Amna Kolić
			</p>
			<p className="sr-only">
				<span itemProp="author" itemScope itemType="https://schema.org/Person">
					<span itemProp="name">Amna Kolić</span>
				</span>
			</p>
		</article>
	</RightPage>
));

export const Mobile = () => {
	return (
		<MobileWrapper>
			<main
				className="relative h-screen w-full [overflow:clip]"
				itemScope
				itemType="https://schema.org/WebPage"
			>
				<meta itemProp="inLanguage" content="en" />
				<meta itemProp="name" content="Illustration — AMNA" />
				<meta
					itemProp="description"
					content="Passion from an early age turned into a legitimate skill that any business can utilize"
				/>

				<figure
					itemProp="primaryImageOfPage"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="m-0 absolute inset-0 pointer-events-none"
				>
					<img
						src="/illustration-1.webp"
						sizes="100vw"
						alt="Graphic Design — full-bleed hero showcasing editorial artwork"
						className="block h-full w-full object-contain object-right-bottom"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						itemProp="contentUrl"
						width={1600}
						height={2400}
					/>
					<figcaption className="sr-only" itemProp="caption">
						Full-bleed illustration hero artwork positioned bottom-right.
					</figcaption>
					<meta itemProp="url" content="/illustration-1.webp" />
					<meta itemProp="encodingFormat" content="image/webp" />
					<meta itemProp="width" content="1600" />
					<meta itemProp="height" content="2400" />
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
						>
							ILLUST <br /> RATION
						</h1>
					</header>

					<section
						id="description"
						aria-label="Section description"
						className="mt-6 flex w-full flex-col items-end gap-4 text-justify font-serif text-[#505050]"
					>
						<p itemProp="description" className="text-lg italic font-bold">
							Passion from an early age turned into a legitimate skill that any business can utilize
						</p>
					</section>

					<nav
						aria-label="Graphic Design section navigation"
						itemScope
						itemType="https://schema.org/SiteNavigationElement"
						className="mt-6 w-full"
					>
						<ul className="pointer-events-auto mx-auto flex w-full items-center justify-between gap-3">
							{illustrationNavButtons.map(({ label, to }) => (
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

export function meta() {
	const title =
		"Illustration Portfolio — Watercolor, Digital & Concept Art | Amna Kolić";
	const description =
		"Explore illustration projects by Amna Kolić: watercolor, digital painting, character and concept art—blending literature, folklore, and modern visual storytelling.";
	const url = "/illustration";
	const image = "/illustration-right.webp";
	const imageAlt =
		"Illustration background artwork by Amna Kolić featuring detailed, painterly textures.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content: "illustration, digital illustration, concept art, watercolor, character design, editorial illustration, visual storytelling, portfolio, Amna Kolić"
		},
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:locale", content: "en_US" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const Illustration = () => null;
export default Illustration;
