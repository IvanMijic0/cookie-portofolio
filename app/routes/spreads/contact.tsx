import { forwardRef } from "react";
import { CModified, Star } from "~/assets";
import { LeftPage, RightPage } from "~/components";
import { motion } from 'framer-motion'
import { contactButtons } from "~/config";

export const Left = forwardRef<HTMLDivElement>((_, ref) => (
	<LeftPage ref={ref}>
		<img
			src="/contact-left.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>

		<article
			className="absolute px-20 w-2/3 inset-0 z-10 text-[#505050] flex items-start gap-12 flex-col justify-center leading-[0.8]">
			<div className="w-full text-center">
				<p className="font-serif italic text-2xl">Be it traditional email, phonecall,</p>
			</div>
			<section
				aria-label="Contact"
				className="flex flex-col items-center justify-center w-full gap-6"
			>
				<h3 className="font-serif text-[#363636] text-[7rem] leading-24">LET'S</h3>
				<div className="flex items-center justify-between w-[75%] gap-2">
					{contactButtons.map(({ label, to, icon: Icon }) => {
						const isExternal = to?.startsWith("http");
						return (
							<motion.a
								key={label}
								href={to || undefined}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer me" : undefined}
								aria-label={label}
								title={label}
								whileHover={{ scale: 1.05, rotate: -1 }}
								whileTap={{ scale: 0.95, rotate: 1 }}
								transition={{ type: "spring", stiffness: 300, damping: 15 }}
								className="z-50 inline-flex items-center justify-center bg-[#363636] rounded-full p-2 shadow-md hover:shadow-lg"
							>
								<Icon className="h-6 w-6 2xl:w-8 2xl:h-8" color="white" aria-hidden />
								<span className="sr-only">{label}</span>
							</motion.a>
						);
					})}
				</div>
			</section>
		</article>
	</LeftPage>
));

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark>
		<img
			src="/contact-right.webp"
			alt="Page background"
			className="w-full h-full object-cover z-0"
			loading="eager"
			fetchPriority="high"
		/>

		<article
			className="absolute px-20 pt-20 inset-0 z-10 flex items-end flex-col justify-start text-black leading-[0.8]">
			<p>Instagram or LinkedIn,</p>
			<h3><CModified />HAT</h3>
			<p>Even if your idea is silly, overly serious, undeniably new or just a plain old brochure design request, I’m here to listen and deliver with a professional approach and an open mind.</p>
		</article>
	</RightPage>
));

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
