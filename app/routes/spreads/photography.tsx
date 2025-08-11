import { forwardRef } from "react";
import { PBottom, PTop } from "~/assets";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/photography-intro.webp"
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
		<article
			className="absolute px-12 pb-8 2xl:py-12 inset-0 z-20 flex items-start justify-between flex-col text-white"
			itemScope
			itemType="https://schema.org/WebPageSection"
			aria-labelledby="photography-title"
		>
			<h1 id="photography-title" className="sr-only" itemProp="name">
				Photography &amp; Editing
			</h1>
			<div aria-hidden="true">
				<PTop className="w-[30rem] h-[30rem] 2xl:w-auto 2xl:h-auto"/>
			</div>
			<div className="flex  justify-center items-end pl-14 flex-col" aria-hidden="true">
				<h2 className="text-[#363636] text-[3.4rem] leading-12 2xl:text-[4.8rem] font-display [-webkit-text-stroke:1px_#363636] [text-stroke:1px_#363636]">
					PHOTOGRAPHY
				</h2>
				<p className="text-3xl 2xl:text-5xl text-[#505050] tracking-[1rem] 2xl:tracking-[0.45em] font-display italic [-webkit-text-stroke:1px_#505050] [text-stroke:1px_#505050]">
					and editing
				</p>
			</div>
			<div className="flex w-full items-end justify-between gap-3">
				<div aria-hidden="true">
					<PBottom className="shrink-0 w-60 2xl:w-80"/>
				</div>
				<div
					className="min-w-0 text-right text-[#505050] font-serif text-xs 2xl:text-base pr-4 sm:pr-6 xl:pr-12 2xl:pr-[5rem]">
					<dl className="space-y-1" itemProp="about" itemScope itemType="https://schema.org/CreativeWork">
						<div className="flex justify-end gap-1">
							<dt className="font-bold">Model:</dt>
							<dd itemProp="actor" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">Elma Rožajac</span>
							</dd>
						</div>
						<div className="flex justify-end gap-1">
							<dt className="font-bold">Photographer:</dt>
							<dd itemProp="creator" itemScope itemType="https://schema.org/Person">
								<span itemProp="name">Amna Kolić</span>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</article>
	</RightPage>
) );

export function meta() {
	const title = "Creative Photography & Editing Projects | Amna Kolić Portfolio";
	const description =
		"Discover concept-driven photography by Amna Kolić—editorial, symbolic, and digitally enhanced visual narratives.";
	const url = "/book/photography";
	const image = "/photography-intro.webp";
	const imageAlt = "Photography & editing title spread with typographic treatment.";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content: "photography, photo editing, studio lighting, compositing, editorial photography, visual storytelling, portfolio"
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
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];
}

export const loader = () => null;

const Photography = () => null;
export default Photography;