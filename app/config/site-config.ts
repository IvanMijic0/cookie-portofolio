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
import type { useTranslate } from "~/context/I18nProvider";

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

type TFn = ReturnType<typeof useTranslate>["t"];

export const navSections = (t: TFn, makeHref: (p: string) => string) => [
	{
		title: t("nav.home"),
		to: makeHref("/homepage"),
		pageNumber: 0,
		items: [
			{ label: t("nav.aboutMe"), to: makeHref("/about-me") },
			{ label: t("nav.contact"), to: makeHref("/contact") },
		],
	},
	{
		title: t("nav.photography"),
		to: makeHref("/photography"),
		pageNumber: 1,
		items: [
			{ label: t("nav.photographyOne"), to: makeHref("/photography/kill-them-with-kindness") },
			{ label: t("nav.photographyTwo"), to: makeHref("/photography/human-rights") },
			{ label: t("nav.photographyThree"), to: makeHref("/photography/double-indemnity") },
		],
	},
	{
		title: t("nav.graphicDesign"),
		to: makeHref("/graphic-design"),
		pageNumber: 7,
		items: [
			{ label: t("nav.designOne"), to: makeHref("/graphic-design/kreativ-festival-art-direction") },
			{ label: t("nav.designTwo"), to: makeHref("/graphic-design/sjecas-li-se-doli-bel") },
			{ label: t("nav.designThree"), to: makeHref("/graphic-design/chippsters-logo") },
		],
	},
	{
		title: t("nav.illustration"),
		to: makeHref("/illustration"),
		pageNumber: 13,
		items: [
			{ label: t("nav.illustrationOne"), to: makeHref("/illustration/mountain-fairy") },
			{ label: t("nav.illustrationTwo"), to: makeHref("/illustration/austen-in-watercolor") },
			{
				label: `${t("nav.illustrationThreeQuotations")} ${t("nav.illustrationThree")}`,
				to: makeHref("/illustration/mural"),
			},
		],
	},
];

export const contactButtons = [
	{ label: "Instagram", to: "https://www.instagram.com/_amnacreates_/", icon: Instagram },
	{ label: "LinkedIn", to: "https://www.linkedin.com/in/amna-kolic/", icon: Linkedin },
	{ label: "Email", to: "mailto:amna.kolic1@gmail.com", icon: Mail },
];

export const photographyNavButtons = (t: TFn, makeHref: (p: string) => string) => [
	{ label: t("photography.meta.shortOne"), to: makeHref("/photography/kill-them-with-kindness") },
	{ label: t("photography.meta.shortTwo"), to: makeHref("/photography/human-rights") },
	{ label: t("photography.meta.shortThree"), to: makeHref("/photography/double-indemnity") },
];

export const graphicDesignNavButtons = (t: TFn, makeHref: (p: string) => string) => [
	{ label: t("graphicDesign.meta.shortOne"), to: makeHref("/graphic-design/kreativ-festival-art-direction") },
	{ label: t("graphicDesign.meta.shortTwo"), to: makeHref("/graphic-design/sjecas-li-se-doli-bel") },
	{ label: t("graphicDesign.meta.shortThree"), to: makeHref("/graphic-design/chippsters-logo") },
];

export const illustrationNavButtons = (t: TFn, makeHref: (p: string) => string) => [
	{ label: t("illustration.meta.shortOne"), to: makeHref("/illustration/mountain-fairy") },
	{ label: t("illustration.meta.shortTwo"), to: makeHref("/illustration/austen-in-watercolor") },
	{ label: t("illustration.meta.shortThree"), to: makeHref("/illustration/mural") },
];

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
