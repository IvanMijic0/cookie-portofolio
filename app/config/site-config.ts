import * as Homepage from "~/routes/spreads/homepage";
import * as Photography from "~/routes/spreads/photography";
import * as KillThemWithKindness from "~/routes/spreads/kill-them-with-kindness";
import * as HumanRights from "~/routes/spreads/human-rights";
import * as DoubleIndemnity from "~/routes/spreads/double-indemnity";
import * as GraphicDesign from "~/routes/spreads/graphic-design";
import * as KreativFestivalArtDirection from "~/routes/spreads/kreativ-festival-art-direction";
import * as SjecasLiSeDoliBel from "~/routes/spreads/sjecas-li-se-doli-bel";
import * as ChippstersLogo from "~/routes/spreads/chippsters-logo";
import * as Illustration from "~/routes/spreads/illustration";
import * as MountainFairy from "~/routes/spreads/mountain-fairy";
import * as AustenInWatercolor from "~/routes/spreads/austen-in-watercolor";
import * as Mural from "~/routes/spreads/mural";
import * as AboutMe from "~/routes/spreads/about-me";
import * as Contact from "~/routes/spreads/contact";
import type { NaveSectionItems, SpreadKey, SpreadModule } from "~/types";
import { Instagram, Linkedin, Mail } from "~/assets";

export const FONT_STRINGS = [
	`1em "Bodoni Moda"`,
	`1em "Libre Bodoni"`,
	`1em "Roboto"`,
];

export const CRITICAL_IMAGES = [
	"/bookmark.webp",
	"/homepage-right.webp",
	"/cookie-pose.webp",
];

export const navSections: NaveSectionItems[] = [
	{
		title: "HOME",
		to: "/homepage",
		pageNumber: 0,
		items: [
			{ label: "About me", to: "/about-me" },
			{ label: "Contact", to: "/contact" },
		],
	},
	{
		title: "PHOTOGRAPHY",
		to: "/photography",
		pageNumber: 1,
		items: [
			{ label: "Kill them with kindness", to: "/photography/kill-them-with-kindness" },
			{ label: "Human Rights", to: "/photography/human-rights" },
			{ label: "Double Indemnity", to: "/photography/double-indemnity" },
		],
	},
	{
		title: "GRAPHIC DESIGN",
		to: "/graphic-design",
		pageNumber: 7,
		items: [
			{ label: "KREATIV festival Art Direction", to: "/graphic-design/kreativ-festival-art-direction" },
			{ label: "Sjećaš li se Doli Bel?", to: "/graphic-design/sjecas-li-se-doli-bel" },
			{ label: "Chippsters logo", to: "/graphic-design/chippsters-logo" },
		],
	},
	{
		title: "ILLUSTRATION",
		to: "/illustration",
		pageNumber: 13,
		items: [
			{ label: "Mountain Fairy", to: "/illustration/mountain-fairy" },
			{ label: "Austen in Watercolor", to: "/illustration/austen-in-watercolor" },
			{ label: "“Bosnia in the heart of Europe” mural", to: "/illustration/mural" },
		],
	},
];

export const contactButtons = [
	{
		label: "Instagram",
		to: 'https://www.instagram.com/_amnacreates_/',
		icon: Instagram
	},
	{
		label: 'LinkedIn',
		to: 'https://www.linkedin.com/in/amna-kolic/',
		icon: Linkedin
	},
	{
		label: "Email",
		to: "mailto:amna.kolic1@gmail.com",
		icon: Mail
	}
]

export const photographyNavButtons = [
	{ label: "Kindness", to: "/photography/kill-them-with-kindness" },
	{ label: "Human Rights", to: "/photography/human-rights" },
	{ label: "Film Noir", to: "/photography/double-indemnity" },
]

export const spreadMap: Record<string, SpreadModule> = {
	"homepage": Homepage,
	"photography": Photography,
	"photography/kill-them-with-kindness": KillThemWithKindness,
	"photography/human-rights": HumanRights,
	"photography/double-indemnity": DoubleIndemnity,
	"graphic-design": GraphicDesign,
	"graphic-design/kreativ-festival-art-direction": KreativFestivalArtDirection,
	"graphic-design/sjecas-li-se-doli-bel": SjecasLiSeDoliBel,
	"graphic-design/chippsters-logo": ChippstersLogo,
	"illustration": Illustration,
	"illustration/mountain-fairy": MountainFairy,
	"illustration/austen-in-watercolor": AustenInWatercolor,
	"illustration/mural": Mural,
	"about-me": AboutMe,
	"contact": Contact,
};

export const TARGET_WIDTH = 864;
export const TARGET_HEIGHT = 1117;
export const ASPECT_RATIO = TARGET_WIDTH / TARGET_HEIGHT;

export const spreads = Object.keys(spreadMap) as SpreadKey[];
