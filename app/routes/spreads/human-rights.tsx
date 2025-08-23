import { forwardRef, useMemo, useState } from "react";
import Lightbox, { type Slide, type SlideImage } from "yet-another-react-lightbox";
import { Captions, Download, Fullscreen, Share, Zoom } from "yet-another-react-lightbox/plugins";
import { LeftPage, RightPage } from "~/components";
import { useDisclosure } from "~/helpers";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/human-rights-left.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover w-full h-full"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => {
	const isSlideImage = (s: Slide): s is SlideImage => "src" in s;

	const ASPECT = 3 / 4;


	const slides = useMemo(
		() =>
			Array.from({ length: 4 }).map((_, idx) => ({
				src: `/human-rights-${idx + 1}.webp`,
				alt: `Human Rights series photo ${idx + 1} of 4`,
			})),
		[]
	);

	const [opened, { open, close }] = useDisclosure(false);
	const [index, setIndex] = useState(0);

	return (
		<RightPage ref={ref} showBookmark>
			<aside
				className="absolute inset-y-0 right-[5%] w-1/4"
				aria-label="Human Rights series thumbnails"
			>
				<div className="flex h-full flex-col">
					{slides.map((s, idx) => (
						<img
							key={s.src}
							src={s.src}
							alt={s.alt}
							className="h-1/4 w-full z-30 object-cover cursor-zoom-in select-none"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							onClick={() => {
								setIndex(idx);
								open();
							}}
						/>
					))}
				</div>
			</aside>

			<article
				className="absolute flex-col px-12 py-10 2xl:py-12 inset-0 z-20 flex justify-start gap-12 2xl:gap-16 items-center"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/book/human-rights"
			>
				<link itemProp="url" href="/book/human-rights" />
				<meta itemProp="name" content="Human Rights" />
				<meta
					itemProp="description"
					content="A photo series exploring light as a metaphor for human rights—each frame reflecting the presence or absence of fundamental freedoms."
				/>
				<meta itemProp="genre" content="Photography" />
				<meta
					itemProp="keywords"
					content="human rights, photography, visual narrative, light, portfolio, Amna Kolić"
				/>
				<header className="flex flex-col items-start gap-5 2xl:gap-8">
					<h1
						className="text-[6rem] 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
						itemProp="headline"
					>
						Human Rights
					</h1>
					<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
						<span className="sr-only">Project by </span>
						<span itemProp="author" itemScope itemType="https://schema.org/Person">
							<span itemProp="name">by Amna Kolić</span>
						</span>
					</p>
				</header>
				<section className="flex flex-col w-full font-serif justify-start text-[#505050] gap-4">
					<p className="w-72 2xl:w-[21rem] text-base 2xl:text-lg font-bold italic" itemProp="abstract">
						This photo series explores the concept of light as a metaphor for human rights — a
						visual narrative where illumination becomes both symbol and statement.
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						Each frame experiments with the quality, color, and direction of light to reflect the
						fragile presence — or troubling absence — of a fundamental right.
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						The interplay of shadow and brightness isn't just aesthetic; it's intentional. Every
						photo stands for a specific right slowly slipping from our grasp, each composition a
						quiet act of resistance.
					</p>
					<p className="w-72 2xl:w-[21rem] text-sm 2xl:text-base">
						From top to bottom, left to right, the rights portrayed are: the Right to Express, the
						Right to Privacy, the Right to Rest, the Right to Religion, and the Right to Choose.
					</p>
				</section>
			</article>
			<Lightbox
				open={opened}
				close={close}
				index={index}
				slides={slides as Slide[]}
				plugins={[Captions, Fullscreen, Share, Zoom, Download]}
				controller={{ closeOnBackdropClick: true }}
				carousel={{ finite: false, imageFit: "cover" }} render={{
					slide: ({ slide, rect }) => {
						const frameWidth = Math.min(rect.width, rect.height * ASPECT);
						const frameHeight = frameWidth / ASPECT;

						if (!isSlideImage(slide)) return null;

						return (
							<figure
								style={{ width: frameWidth, height: frameHeight }}
								className="mx-auto overflow-hidden rounded-lg shadow-lg bg-black/5"
							>
								<img
									src={slide.src}
									alt={slide.alt ?? ""}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
								{slide.alt && (
									<figcaption className="mt-3 text-center text-sm text-white/90">
										{slide.alt}
									</figcaption>
								)}
							</figure>
						);
					},
				}}
			/>		</RightPage>
	);
});

export function meta() {
	const title = "Human Rights – Conceptual Photo Series by Amna Kolić";
	const description =
		"A conceptual photo series where light and shadow symbolize the fragility of human rights. Explore the narrative and studio process behind each image.";
	const url = "/book/photography/human-rights";
	const image = "/human-rights-left.webp";
	const imageAlt = "Conceptual photograph from the Human Rights series, using light as metaphor.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"human rights photography, conceptual photography, studio lighting, visual metaphor, editorial photography, photo series, portfolio, Amna Kolić"
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
		{ property: "article:tag", content: "Visual Metaphor" },
		{ property: "article:tag", content: "Studio Lighting" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const HumanRights = () => null;
export default HumanRights;
