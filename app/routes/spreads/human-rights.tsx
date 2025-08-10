import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/human-rights-left.webp"
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
		<div className="absolute inset-y-0 right-[5%] w-1/4">
			<div className="flex h-full flex-col">
				{ Array.from( { length: 4 } ).map( ( _, idx ) => {
					const i = String( idx + 1 );
					return (
						<img
							key={ i }
							src={ `/human-rights-${ i }.webp` }
							alt={ `Human Rights ${ i }` }
							className="h-1/4 w-full object-cover"
							loading="eager"
							fetchPriority="high"
						/>
					);
				} ) }
			</div>
		</div>
		<div
			className="absolute flex-col px-12 py-10 2xl:py-12 2xl:pt-24 inset-0 z-20 flex justify-between items-center">
			<header className="flex flex-col items-start gap-5 2xl:gap-8">
				<h1 className="text-[6rem] 2xl:text-[8rem] leading-22 2xl:leading-30 text-[#363636] [-webkit-text-stroke:1px_#363636] italic [text-stroke:1px_#363636]">
					Human Rights
				</h1>
				<p className="font-serif italic text-[#505050] font-extralight text-sm 2xl:text-base text-right">
					<span className="sr-only">Project by </span>
					<span itemProp="author" itemScope itemType="https://schema.org/Person">
						  <span itemProp="name">by Amna Kolić</span>
					</span>
				</p>
			</header>
			<div className="flex flex-col w-full font-serif justify-start text-[#505050] gap-4">
				<p className="w-72 2xl:w-[19rem] text-base 2xl:text-lg font-bold italic">
					This photo series explores the concept of light as a metaphor for human rights — a visual narrative
					where illumination becomes both symbol and statement.
				</p>
				<p className="w-72 2xl:w-[19rem] text-sm 2xl:text-base">
					Each frame experiments with the quality, color, and direction of light to reflect the fragile
					presence — or troubling absence — of a fundamental right.
				</p>
				<p className="w-72 2xl:w-[19rem] text-sm 2xl:text-base">
					The interplay of shadow and brightness isn't just aesthetic; it's intentional. Every photo stands
					for a specific right slowly slipping from our grasp, each composition a quiet act of resistance.
				</p>
				<p className="w-72 2xl:w-[19rem] text-sm 2xl:text-base">
					From top to bottom, left to right, the rights portrayed are: the Right to Express, the Right to
					Privacy, the Right to Rest, the Right to Religion, and the Right to Choose.
				</p>
			</div>
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Photography Series on Human Rights | Light as a Metaphor" },
		{
			name: "description",
			content: "This conceptual series explores the fragility of human rights through light, shadow, and metaphor-rich visual storytelling."
		}
	];
}

export const loader = () => null;

const HumanRights = () => null;
export default HumanRights;