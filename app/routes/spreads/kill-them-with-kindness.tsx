import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/kill-them-with-kindness-left.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="eager"
			fetchPriority="high"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/kill-them-with-kindness-right.webp"
			alt=""
			aria-hidden="true"
			role="presentation"
			className="object-cover"
			loading="eager"
			fetchPriority="high"
		/>
		<article
			className="absolute px-12 py-10 2xl:py-14 inset-0 z-20 flex flex-col items-center h-full"
			aria-labelledby="ktwk-title"
			itemScope
			itemType="https://schema.org/CreativeWork"
		>
			<div className="gap-2 flex flex-col justify-between h-full text-right">
				<header>
					<h1
						id="ktwk-title"
						itemProp="name"
						className="font-display leading-22 2xl:leading-28 text-[#363636] text-[6rem] 2xl:text-[8rem] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]"
					>
						Kill them<br/> with <br/> Kindness
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
) );

export function meta() {
	return [
		{ title: "Visual Storytelling in Photography: Kill Them with Kindness Series" },
		{
			name: "description",
			content: "A photo series that uses symbolism and staged lighting to present empathy as resistance. Explore the artistic concept behind each shot."
		}
	];
}

export const loader = () => null;

const KillThemWithKindness = () => null;
export default KillThemWithKindness;