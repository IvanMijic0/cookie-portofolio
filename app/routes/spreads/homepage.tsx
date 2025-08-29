import { forwardRef } from "react";
import { LeftPage, MobileWrapper, RightPage } from "~/components";
import { DModified, Star } from "~/assets";
import { contactButtons, navSections } from "~/config";
import { useFlipbook } from "~/context/flipbook";
import { motion } from "framer-motion";
import { ScreenTextFit } from "~/components/UI";

export const Left = forwardRef<HTMLDivElement>((_, ref) => {
	const { goToSpread, ready } = useFlipbook();

	return (
		<LeftPage ref={ref}>
			<img
				src="/homepage-left.webp"
				alt=""
				role="presentation"
				className="w-full h-full object-cover z-0"
				loading="eager"
				fetchPriority="high"
			/>
			<div className="absolute inset-0 z-20 px-16 py-10 2xl:py-16 flex flex-col justify-between">
				<nav aria-label="Table of contents" className="text-[#272727]">
					<h2 className="text-5xl font-serif pb-4">contents</h2>
					<ol className="space-y-6">
						{navSections.map((section) => (
							<li
								key={section.title}
								className="grid grid-cols-[2ch_1fr] items-start gap-8"
							>
								<span className="text-right tabular-nums font-sans text-4xl font-light">
									{section.pageNumber}
								</span>
								<div className="flex flex-col">
									<a
										href={`/${section.to}`}
										onClick={(e) => {
											if (!ready) return;
											e.preventDefault();
											goToSpread(section.to);
										}}
										className="font-sans text-lg 2xl:text-xl font-black cursor-pointer hover:opacity-90 transition"
									>
										{section.title}
									</a>
									<ul className="ml-3">
										{section.items.map((item) => (
											<li key={item.to}>
												<a
													href={`/${item.to}`}
													onClick={(e) => {
														if (!ready) return;
														e.preventDefault();
														goToSpread(item.to);
													}}
													className="font-serif italic text-md 2xl:text-lg cursor-pointer hover:opacity-90 transition"
												>
													{item.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ol>
				</nav>
				<section
					aria-label="Contact"
					className="flex flex-col items-center gap-2"
				>
					<Star className="w-10 h-10 2xl:w-12 2xl:h-12 text-white" aria-hidden />
					<h3 className="font-serif text-white text-xl 2xl:text-2xl">Let's chat!</h3>
					<div className="flex items-center gap-2">
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
									className="z-50 inline-flex items-center justify-center bg-white rounded-full p-2 text-pink-950 shadow-md hover:shadow-lg"
								>
									<Icon className="h-6 w-6 text-[#379C8D] 2xl:w-7 2xl:h-7" aria-hidden />
									<span className="sr-only">{label}</span>
								</motion.a>
							);
						})}
					</div>
				</section>
			</div>
		</LeftPage>
	);
});

export const Right = forwardRef<HTMLDivElement>((_, ref) => (
	<RightPage ref={ref} showBookmark={false}>
		<img
			src="/homepage-right.webp"
			className="absolute inset-0 w-full h-full object-cover z-0"
			alt=""
			role="presentation"
			loading="eager"
			fetchPriority="high"
			decoding="async"
		/>
		<section
			aria-labelledby="home-hero-title"
			className="flex absolute h-full justify-between py-10 2xl:py-16 w-full flex-col inset-0 items-center"
		>
			<div className="flex flex-col h-[55%] 2xl:h-1/2 justify-between">
				<div className="flex flex-col gap-3">
					<h1 id="home-hero-title" className="sr-only">
						Amna Kolić — Design portfolio
					</h1>
					<div
						aria-hidden="true"
						className="font-display leading-0 font-normal flex justify-center text-white text-[8rem] 2xl:text-[10rem]"
					>
						<span
							className=" inline-flex items-baseline [-webkit-text-stroke:0.01em_white] [text-stroke:0.01em_white]"
						>
							<DModified className="h-[0.75em] w-auto" />
							ESIGN
						</span>
					</div>
					<h2 className="font-display italic tracking-[0.4em] text-[#272727] [-webkit-text-stroke:1px_#272727] [text-stroke:1px_#272727] text-4xl 2xl:text-5xl">
						<span aria-hidden="true">portofolio</span>
						<span className="sr-only">portfolio</span>
					</h2>
				</div>
				<div>
					<h3 className="text-white font-serif text-2xl 2xl:text-3xl w-[13.3rem] 2xl:w-[16.3rem]">
						<span className="flex flex-col">
							<span>GRAPHIC</span>
							<span className="w-full flex justify-end">DESIGN</span>
						</span>
					</h3>
					<h3 className="text-[#272727] font-serif text-2xl 2xl:text-3xl">
						ILLUSTRATION
					</h3>
					<h3 className="text-white font-serif text-2xl 2xl:text-3xl w-[13rem] 2xl:w-[16rem]">
						<span className="flex flex-col">
							<span className="w-full flex justify-end">PHOTO</span>
							<span>EDITING</span>
						</span>
					</h3>
				</div>
			</div>
		</section>
		<img
			src="/cookie-pose.webp"
			alt=""
			role="presentation"
			className="absolute bottom-0 right-0 xl:max-w-[28.5rem] 2xl:max-w-[39rem] object-contain z-20 pointer-events-none"
			loading="eager"
			decoding="async"
		/>
		<div
			className="absolute -bottom-24 -right-12 w-[26rem] h-[26rem] 2xl:w-[33.5rem] 2xl:h-[33.5rem] rounded-full z-30 pointer-events-none isolate">
			<div
				className="
						  absolute inset-0 rounded-full mix-blend-multiply
						  bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0)_100%)]
						  bg-no-repeat bg-[length:100%_100%]
						"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 gap-10 flex-col flex items-center justify-center pb-24">
				<p className="text-white italic text-3xl 2xl:text-4xl font-serif text-end leading-tight px-4">
					<span className="not-italic">The DIFFERENT</span>
					<br />
					<span className="not-italic">APPROACH</span>
					<br />
					to design
					<br />
					with
				</p>
				<h2 className="text-white leading-0 text-[5rem] 2xl:text-[6rem] font-logo">
					AMNA
				</h2>
			</div>
		</div>
	</RightPage>
));

export const Mobile = () => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"name": "Amna Kolić — Design Portfolio",
				"url": "https://your-domain.tld/homepage",
				"inLanguage": "en",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "https://your-domain.tld/search?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			},
			{
				"@type": "Person",
				"name": "Amna Kolić",
				"jobTitle": "Graphic Designer & Illustrator",
				"url": "https://your-domain.tld/",
				"sameAs": [
					"https://www.instagram.com/your-handle",
					"https://www.linkedin.com/in/your-handle"
				]
			}
		]
	};

	return (
		<MobileWrapper>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<main
				className="relative h-svh w-full px-6 [overflow:clip]"
				itemScope
				itemType="https://schema.org/CreativeWork"
				itemID="/homepage"
			>
				<img
					src="/homepage-right.webp"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="absolute inset-0 z-0 h-full w-full object-cover"
					loading="eager"
					fetchPriority="high"
					decoding="async"
				/>
				<link itemProp="url" href="/homepage" />
				<meta itemProp="inLanguage" content="en" />
				<meta
					itemProp="name"
					content="Amna Kolić — Graphic Design, Illustration & Photo Editing"
				/>
				<meta
					itemProp="description"
					content="Explore the portfolio of Amna Kolić—editorial-inspired graphic design, illustration, and photo editing."
				/>
				<meta
					itemProp="keywords"
					content="graphic design, illustration, photo editing, portfolio, editorial design, Bosnia designer"
				/>
				<meta itemProp="image" content="/homepage-right.webp" />
				<section
					className="relative flex h-screen w-full flex-col items-start justify-start gap-10 xs:gap-20 overflow-hidden pt-24 xs:pt-32"
					aria-labelledby="home-hero-title"
				>
					<div className="relative z-10 flex w-full flex-col items-start gap-2">
						<h1 id="home-hero-title" className="sr-only" itemProp="headline">
							Amna Kolić — Design portfolio: Graphic Design, Illustration, Photo
							Editing
						</h1>

						<div
							aria-hidden="true"
							className="font-display flex w-full justify-center font-normal leading-0 text-white"
						>
							<ScreenTextFit>
								<span className="inline-flex items-baseline py-1">
									<DModified className="h-[0.75em] w-auto" />
									ESIGN
								</span>
							</ScreenTextFit>
						</div>

						<p className="font-display text-2xl italic tracking-[0.4em] pl-2 text-[#272727] [-webkit-text-stroke:1px_#272727] [text-stroke:1px_#272727]">
							portfolio
						</p>
					</div>
					<div className="relative z-30">
						<h2 className="w-[13.3rem] font-serif text-3xl text-white">
							<span className="flex flex-col">
								<span>GRAPHIC</span>
								<span className="flex w-full justify-end">DESIGN</span>
							</span>
						</h2>
						<h2 className="font-serif text-2xl text-[#272727]">ILLUSTRATION</h2>
						<h2 className="w-[13rem] font-serif text-2xl text-white">
							<span className="flex flex-col">
								<span className="flex w-full justify-end">PHOTO</span>
								<span>EDITING</span>
							</span>
						</h2>
					</div>
				</section>
				<img
					src="/cookie-pose.webp"
					alt=""
					role="presentation"
					aria-hidden="true"
					className="pointer-events-none absolute bottom-0 -right-6 z-20 max-h-[97vh] max-w-[97vw] object-contain object-bottom-right xs:-right-24 xs:max-h-[122vh] xs:max-w-[122vw]"
					loading="eager"
					decoding="async"
				/>
				<div
					className="pointer-events-none absolute bottom-0 right-4 z-30 h-[21rem] w-[21rem] translate-x-14 translate-y-24 overflow-hidden rounded-full xs:right-0 xs:h-[26rem] xs:w-[26rem]"
					aria-hidden="true"
				>
					<div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0)_100%)] bg-no-repeat bg-[length:100%_100%] mix-blend-multiply" />
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-10 pb-24">
						<p className="px-4 text-end font-serif text-2xl italic leading-tight text-white xs:text-3xl">
							<span className="not-italic">The DIFFERENT</span>
							<br />
							<span className="not-italic">APPROACH</span>
							<br />
							to design
							<br />
							with
						</p>
						<strong className="font-logo text-[4rem] leading-0 text-white xs:text-[5rem]">
							AMNA
						</strong>
					</div>
				</div>
			</main>
		</MobileWrapper>
	);
};

export const loader = () => null;

const Homepage = () => null;
export default Homepage;
