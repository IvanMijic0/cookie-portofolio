import { forwardRef, useMemo, useState } from "react";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import { Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { Star } from "~/assets";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<article
			className="absolute px-12 2xl:px-16 gap-6 2xl:gap-10 py-16 inset-0 z-10 flex items-center flex-col justify-start text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/AboutPage"
			itemID="/about-me"
			aria-labelledby="about-title"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Amna Kolić",
						jobTitle: ["Graphic Designer", "UX/UI Designer", "Visual Artist"],
						image: "/about-me.webp",
						email: "mailto:amna.kolic1@gmail.com",
						alumniOf: {
							"@type": "CollegeOrUniversity",
							name: "International Burch University",
						},
						worksFor: [
							{ "@type": "Organization", name: "Beyond" },
							{ "@type": "Organization", name: "Epifront" },
						],
						knowsAbout: [
							"Branding",
							"Editorial design",
							"UX/UI",
							"Photography",
							"Illustration",
							"Visual storytelling",
						],
						url: "/about-me",
					}),
				}}
			/>
			<header>
				<div>
					<h1
						id="about-title"
						className="text-[5rem] text-center tracking-wider 2xl:text-[7rem] leading-18 2xl:leading-28 [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						The Mind<br />Behind<br />The Design
					</h1>
				</div>
			</header>
			<div aria-hidden="true">
				<Star />
			</div>
			<div className="flex flex-col gap-4 w-5/6" itemProp="mainEntity">
				<p className="first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:text-[4rem] first-letter:leading-[0.8] font-serif leading-5 first-letter:font-serif first-letter:font-[400] first-letter:text-[#363636] text-justify">
					Hi, I’m Amna Kolić—a Bosnia-based graphic and UX/UI designer with a BA in Graphic Design and Multimedia from International Burch University.
				</p>
				<p className="text-sm leading-5 2xl:text-base font-serif text-justify">
					My editorial-inspired approach to design comes from a childhood love of magazines and visual storytelling.
				</p>
				<p className="text-sm 2xl:text-base leading-5 font-serif text-justify">
					I started my career as co-founder of OverVerse, a startup merging picture books with interactive apps, where I worked across design, 3D, animation, and more. Today, I’m a graphic designer at Beyond, creating ad campaigns, social media visuals, and major national branding projects, while also collaborating with Epifront and taking on freelance work.
				</p>
				<p className="text-sm 2xl:text-base leading-5 font-serif text-justify">
					Whether designing for print, digital, or campaigns, my focus is creating visuals with purpose and personality. Let’s bring your vision to life.
				</p>
			</div>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref}>
		<img
			src="/about-me.webp"
			alt="Portrait of Amna Kolić"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
			itemProp="image"
		/>
	</RightPage>
));

export const Mobile = () => {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	const aboutSlides = useMemo(
		() => [
			{
				src: "/about-me.webp",
				alt: "Amna Kolić — Bosnia-based graphic designer, UX/UI designer, and artist.",
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
					className="relative z-10 px-6 pb-8 pt-24 flex items-center justify-start gap-6 flex-col text-[#363636]"
					aria-labelledby="about-title"
				>
					<header className="w-full">
						<ScreenTextFit>
							<h1
								id="about-title"
								itemProp="name"
								className="font-display text-center leading-17 pb-4 text-[4rem] xs:text-[4.5rem] [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]"
							>
								The Mind <br /> Behind <br /> The Design
							</h1>
						</ScreenTextFit>
						<meta itemProp="inLanguage" content="en" />
					</header>
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
								src="/about-me.webp"
								sizes="(max-width: 640px) 100vw, 640px"
								alt="Amna Kolić — Bosnia-based graphic designer and artist."
								width={1600}
								height={2000}
								className="object-cover w-full h-auto"
								loading="eager"
								decoding="async"
								itemProp="contentUrl"
							/>
						</button>
						<figcaption className="sr-only" itemProp="caption">
							Portrait of Amna Kolić.
						</figcaption>
					</figure>

					{/* About text */}
					<section
						id="description"
						aria-label="About Amna Kolić"
						className="flex text-sm 2xl:text-base w-full text-[#505050] font-serif justify-start text-justify items-end gap-4 flex-col"
					>
						<p itemProp="description" className="text-lg font-bold italic">
							Hi, I’m Amna Kolić, a Bosnia-based graphic designer, UX/UI designer, and an artist with a
							Bachelor of Arts in Graphic Design and Multimedia from the International Burch University.
						</p>
						<p className="text-base" itemProp="knowsAbout">
							As a kid, I was obsessed with magazines—the layouts, the rhythm of the pages, the way design
							could shape how you feel while flipping through a story. That fascination stuck with me, and
							it’s a huge reason why I’ve chosen to design my portfolio with the spirit of an editorial
							spread.
						</p>
						<p className="text-base">
							I’ve been working professionally since my second year of university, when I co-founded
							OverVerse, a startup built with two colleagues that aimed to merge traditional picture books
							with interactive mobile experiences for preschoolers. I wore many hats there: graphic
							designer, UX/UI designer, 3D modeler, animator, texturer, and even voice actor, which had
							taught me how to move fluidly between disciplines while staying grounded in storytelling and
							design clarity.
						</p>
						<p className="text-base">
							Since then, I’ve worked with the public relations and communications agency Beyond (since
							April 2024), as their graphic designer, and collaborated with the IT company Epifront as a
							graphic designer and illustrator.
						</p>
						<p className="text-base">
							Along the way, I’ve taken on a range of freelance and side projects that helped me grow,
							experiment, and eventually find the niche I feel most connected to: visual storytelling with
							purpose and personality.
						</p>
						<p className="text-base">
							When I’m not designing, you’ll likely find me hiking, sewing, or baking, still creating,
							just with different tools. I love thoughtful work, collaborative energy, and ideas that have
							something to say.
						</p>
						<p className="text-base">
							If you think we’d make a great team, feel free to reach out, for I would love to hear from
							you and see how we can bring your vision to life, together.
						</p>
					</section>
				</article>
			</div>

			{/* Lightbox now linked to About Me images */}
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
	const title = "About Amna Kolić – Graphic Designer, UX/UI & Visual Artist";
	const description =
		"Learn about Amna Kolić, a Bosnia-based graphic & UX/UI designer and visual artist blending branding, editorial design, photography, and illustration.";
	const url = "/about-me";
	const image = "/about-me.webp";
	const name = "Amna Kolić";

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "author", content: name },
		{ name: "robots", content: "index,follow,max-image-preview:large" },
		{
			name: "keywords",
			content:
				"Amna Kolić, graphic designer, UX/UI designer, visual artist, Bosnia, branding, editorial design, portfolio",
		},
		{ property: "og:type", content: "profile" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:site_name", content: "Amna Kolić Portfolio" },
		{ property: "og:locale", content: "en_US" },
		{ property: "profile:first_name", content: "Amna" },
		{ property: "profile:last_name", content: "Kolić" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ tagName: "link", rel: "canonical", href: url },
	];
}

export const loader = () => null;

const AboutMe = () => null;
export default AboutMe;
