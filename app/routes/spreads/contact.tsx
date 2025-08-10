import { forwardRef } from "react";
import { LeftPage, RightPage } from "~/components";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<LeftPage ref={ ref }>
		<img
			src="/contact-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>
	</LeftPage>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<RightPage ref={ ref } showBookmark>
		<img
			src="/contact-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="lazy"
		/>

		<div
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
		</div>
	</RightPage>
) );

export function meta() {
	return [
		{ title: "Get in Touch | Contact Amna Kolić – Graphic Design Portfolio" },
		{
			name: "description",
			content: "Reach out to Amna Kolić for freelance design inquiries, collaboration, or just to chat about your next creative project."
		}
	];
}

export const loader = () => null;

const Contact = () => null;
export default Contact;