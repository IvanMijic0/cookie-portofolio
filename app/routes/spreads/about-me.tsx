import { forwardRef } from "react";
import { Star } from "~/assets";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<article
			className="absolute px-12 2xl:px-16 gap-3 2xl:gap-8 py-16 inset-0 z-10 flex items-center flex-col justify-between text-[#363636] leading-[0.8]"
		>
			<header >
				<div>
					<h1
						className="text-[5rem] text-center tracking-wider 2xl:text-[7rem] leading-18 2xl:leading-28 [-webkit-text-stroke:1px_#363636] text-stroke:1px_#363636]"
					>
						The Mind<br />Behind<br />The Design
					</h1>
				</div>
			</header>
			<div>
				<Star />
			</div>
			<div className="h-full flex gap-8 w-full text-[#505050]">
				<div className="flex flex-col w-full gap-4">
					<p className="first-letter:float-left first-letter:mr-1 first-letter:mt-1
						 first-letter:text-[4rem] first-letter:leading-[0.8] font-serif leading-5 first-letter:font-serif first-letter:font-[400] first-letter:text-[#363636] text-justify">
						Hi, I’m Amna Kolić—a Bosnia-based graphic designer, UX/UI designer, and an artist
						with a Bachelor of Arts in Graphic Design and Multimedia from the International
						Burch University.
					</p>
					<p className="text-sm leading-5 2xl:text-base font-serif text-justify" itemProp="artworkSurface">
						As a kid, I was obsessed with magazines—the layouts, the rhythm of the pages, the way design could shape how you feel while flipping through a story. That fascination stuck with me, and it’s a huge reason why I’ve chosen to design my portfolio with the spirit of an editorial spread.
					</p>
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="artworkSurface">
						I’ve been working professionally since my second year of university, when I co-founded OverVerse, a startup built with two colleagues that aimed to merge traditional picture books with interactive mobile experiences for preschoolers. I wore many hats there: graphic designer, UX/UI designer, 3D modeler, animator, texturer, and even voice actor, which had taught me how to move fluidly between disciplines while staying grounded in storytelling and design clarity.
					</p>
				</div>
				<div className="flex flex-col w-full gap-4">
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="articleBody">
						disciplines while staying grounded in storytelling and design clarity.
					</p>
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="articleBody">
						Since then, I’ve worked with the public relations and communications agency Beyond (since April 2024), as their graphic designer, and collaborated with the IT company Epifront as a graphic designer and illustrator.
					</p>
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="articleBody">
						Along the way, I’ve taken on a range of freelance and side projects that helped me grow, experiment, and eventually find the niche I feel most connected to: visual storytelling with purpose and personality.
					</p>
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="articleBody">
						When I’m not designing, you’ll likely find me hiking, sewing, or baking, still creating, just with different tools. I love thoughtful work, collaborative energy, and ideas that have something to say.
					</p>
					<p className="text-sm 2xl:text-base leading-5 font-serif text-justify" itemProp="articleBody">
						If you think we’d make a great team, feel free to reach out, for I would love to hear from you and see how we can bring your vision to life, together.
					</p>
				</div>
			</div>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref}>
		<img
			src="/about-me.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>
	</RightPage>
));

export function meta() {
	return [
		{ title: "Meet the Designer | About Amna Kolić – Graphic Designer & Visual Artist" },
		{
			name: "description",
			content: "Learn more about Amna Kolić, a Bosnia-based designer and illustrator combining UX, branding, and storytelling in her creative work."
		}
	];
};

export const loader = () => null;

const Mural = () => null;
export default Mural;







