import { forwardRef } from "react";
import { PBottom, PTop } from "~/assets";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/photography-intro.webp"
			alt="Page background"
			className="object-cover"
			loading="eager"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<div className="absolute p-12 inset-0 z-20 flex items-start justify-between flex-col text-white">
			<PTop className="w-[30rem] 2xl:w-auto"/>
			<div className="flex justify-center items-end pl-14 flex-col">
				<h1 className="text-[#363636]  text-[3.4rem] 2xl:text-[4.8rem] font-display [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]">PHOTOGRAPHY</h1>
				<h2 className="text-3xl 2xl:text-5xl text-[#505050] tracking-[1rem] 2xl:tracking-[0.45em] font-display italic [-webkit-text-stroke:1px_#505050] [text-stroke:1px_#505050]">and
					editing</h2>
			</div>
			<div className="flex w-full items-end justify-between gap-3">
				<PBottom className="shrink-0 w-60 2xl:w-auto"/>
				<div
					className="min-w-0 text-right text-[#505050] font-serif text-xs 2xl:text-base pr-4 sm:pr-6 xl:pr-12 2xl:pr-[5rem]">
					<p><span className="font-bold">Model: </span>Elma Rožajac</p>
					<p><span className="font-bold">Photographer: </span>Amna Kolić</p>
				</div>
			</div>
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Creative Photography & Editing Projects | Amna Kolić Portfolio" },
		{
			name: "description",
			content: "Discover concept-driven photography by Amna Kolić—editorial, symbolic, and digitally enhanced visual narratives."
		}
	];
}

export const loader = () => null;

const Photography = () => null;
export default Photography;