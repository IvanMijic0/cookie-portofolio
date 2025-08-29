import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { Carousel, ScreenTextFit } from "~/components/UI";



export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/kill-them-with-kindness-left.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="lazy"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/kill-them-with-kindness-right.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="lazy"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 py-10 2xl:py-14 inset-0 z-20 flex flex-col items-center h-full"
			aria-labelledby="ktwk-title"
			itemScope
			itemType="https://schema.org/CreativeWork"
		>
			<div className="flex flex-col justify-start 2xl:gap-20 gap-16 h-full text-right">
				<header>
					<h1
						id="ktwk-title"
						itemProp="name"
						className="font-display leading-22 2xl:leading-28 text-[#363636] text-[6rem] 2xl:text-[8rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
					>
						Kill them<br /> with <br /> Kindness
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">by Amna Kolić</span>
						</span>
					</p>
				</header>
				<section
					aria-label="Project description"
					className="flex text-sm 2xl:text-base text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
				>
					<p itemProp="description" className="w-64 2xl:w-[19rem] text-base 2xl:text-lg font-bold italic">
						What if empathy were more common than conflict? What if kindness—not violence—was the loudest
						force
						in the room? In that world, war would have no place.
					</p>
					<p className="w-64 2xl:w-[19rem] text-sm 2xl:text-base">
						True to its name, this project delivers a striking visual message: a call to disarm not just
						physically, but emotionally.
					</p>
					<p className="w-64 2xl:w-[19rem] text-sm 2xl:text-base">
						Each photo was meticulously staged in the studio under identical lighting, then artfully
						composited
						in Adobe Photoshop to create seamless, visually arresting narratives that challenge our
						perception
						of strength, peace, and humanity.
					</p>
				</section>
			</div>
		</article>
	</RightPage>
));

export const Mobile = () => {
	const slides = [
		{
			id: 1,
			title: "Human Rights",
			src: "/human-rights-left.webp",
			href: "/book/photography/human-rights",
			alt: "Human Rights photo series exploring freedom and equality."
		},
		{
			id: 2,
			title: "Double Indemnity",
			src: "/double-indemnity-left-1.webp",
			href: "/book/photography/double-indemnity",
			alt: "Double Indemnity photo series inspired by classic noir cinema."
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
							Kill them<br /> with <br /> Kindness
						</h1>
						<meta itemProp="inLanguage" content="en" />
					</header>
					<div className="flex flex-col gap-2 w-full">
						<figure className="w-full">
							<img
								src="/kill-them-with-kindness-1.webp"
								srcSet="/kill-them-with-kindness-1@800.webp 800w, /kill-them-with-kindness-1.webp 1600w"
								sizes="(max-width: 640px) 100vw, 640px"
								alt="Primary poster: a symbolic still-life that frames empathy as strength."
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								fetchPriority="high"
								itemProp="image"
							/>
							<figcaption className="sr-only">
								Kill Them With Kindness – primary poster artwork.
							</figcaption>
						</figure>
						<div className="flex gap-2 w-full items-center overflow-hidden">
							<figure className="w-1/2 min-w-0">
								<img
									src="/kill-them-with-kindness-2.webp"
									srcSet="/kill-them-with-kindness-2@600.webp 600w, /kill-them-with-kindness-2.webp 1200w"
									sizes="(max-width: 640px) 50vw, 320px"
									alt="Bouquet study juxtaposing tenderness and tension."
									width={1200}
									height={1600}
									className="object-contain w-full h-auto"
									loading="lazy"
									decoding="async"
								/>
								<figcaption className="sr-only">Bouquet Study.</figcaption>
							</figure>

							<figure className="w-1/2 min-w-0">
								<img
									src="/kill-them-with-kindness-3.webp"
									srcSet="/kill-them-with-kindness-3@600.webp 600w, /kill-them-with-kindness-3.webp 1200w"
									sizes="(max-width: 640px) 50vw, 320px"
									alt="Rose & Grenade still-life emphasizing peace over power."
									width={1200}
									height={1600}
									className="object-contain w-full h-auto"
									loading="lazy"
									decoding="async"
								/>
								<figcaption className="sr-only">Rose & Grenade.</figcaption>
							</figure>
						</div>
					</div>
					<section
						id="description"
						aria-label="Project description"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							What if empathy were more common than conflict? What if kindness—not violence—was the loudest
							force in the room? In that world, war would have no place.
						</p>
						<p className="text-base" itemProp="about">
							True to its name, this project delivers a striking visual message: a call to disarm not just
							physically, but emotionally.
						</p>
						<p className="text-base">
							Each photo was meticulously staged in the studio under identical lighting, then artfully composited
							in Adobe Photoshop to create seamless, visually arresting narratives that challenge our perception
							of strength, peace, and humanity.
						</p>
					</section>
					<section className="flex flex-col gap-6 w-full items-center" aria-labelledby="see-more-like-this">
						<ScreenTextFit>
							<h2
								id="see-more-like-this"
								className="font-display text-[#363636] text-left [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636] text-2xl"
							>
								See more like this
							</h2>
						</ScreenTextFit>
						<Carousel
							items={slides.map(s => ({ id: s.id, title: s.title, src: s.src, alt: s.alt }))}
							loop
							rounded
							aria-label="Related works carousel"
						/>
					</section>
				</article>
			</div>
		</MobileWrapper>
	);
};

export function meta() {
	const title = "Kill Them with Kindness – Conceptual Photo Series by Amna Kolić";
	const description =
		"A conceptual photo series using staged lighting and compositing to present empathy as resistance. Explore the visual narrative and process behind each image.";
	const url = "/book/photography/kill-them-with-kindness";
	const image = "/kill-them-with-kindness-right.webp";
	const imageAlt = "Conceptual portrait from the ‘Kill Them with Kindness’ photo series.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"conceptual photography, photo series, studio lighting, compositing, visual storytelling, anti-war art, empathy in art, editorial photography, portfolio"
		},
		{ name: "author", content: "Amna Kolić" },
		{ name: "robots", content: "index,follow" },
		{ property: "og:type", content: "article" },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: imageAlt },
		{ property: "og:image:type", content: "image/webp" },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: "en_US" },
		{ property: "article:section", content: "Photography" },
		{ property: "article:author", content: "Amna Kolić" },
		{ property: "article:tag", content: "Conceptual Photography" },
		{ property: "article:tag", content: "Studio Lighting" },
		{ property: "article:tag", content: "Compositing" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const KillThemWithKindness = () => null;
export default KillThemWithKindness;
