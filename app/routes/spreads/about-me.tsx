import { forwardRef } from "react";
import { Star } from "~/assets";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<article
			className="absolute px-12 2xl:px-16 gap-6 2xl:gap-10 py-16 inset-0 z-10 flex items-center flex-col justify-start text-[#363636] leading-[0.8]"
			itemScope
			itemType="https://schema.org/AboutPage"
			itemID="/book/about-me"
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
						url: "/book/about-me",
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

export function meta() {
	const title = "About Amna Kolić – Graphic Designer, UX/UI & Visual Artist";
	const description =
		"Learn about Amna Kolić, a Bosnia-based graphic & UX/UI designer and visual artist blending branding, editorial design, photography, and illustration.";
	const url = "/book/about-me";
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
