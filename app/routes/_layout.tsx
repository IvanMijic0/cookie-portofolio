import HTMLFlipBook from "react-pageflip";
import { useLocation, useNavigate } from "react-router";
import { type ForwardRefExoticComponent, type RefAttributes, useEffect, useMemo, useState } from "react";
import * as Homepage from "./spreads/homepage";
import * as Photography from "./spreads/photography";
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

type MetaEntry = Partial<{
	title: string;
	name: string;
	content: string;
}>;

type SpreadModule = {
	Left: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	Right: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	meta?: () => MetaEntry[];
};

const spreadMap: Record<string, SpreadModule> = {
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

export type SpreadKey = keyof typeof spreadMap;

const spreads = Object.keys( spreadMap ) as SpreadKey[];

const TARGET_WIDTH = 864;
const TARGET_HEIGHT = 1117;
const ASPECT_RATIO = 864 / 1117;

export default function Flipbook() {
	const [dimensions, setDimensions] = useState( { width: TARGET_WIDTH, height: TARGET_HEIGHT } );
	const [open, setOpen] = useState( false );
	const navigate = useNavigate();
	const location = useLocation();

	useEffect( () => setOpen( false ), [location.pathname] );

	useEffect( () => {
		const updateSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			let marginRatio: number;

			if (width < 640) {
				marginRatio = 0.03; // < sm
			} else if (width < 768) {
				marginRatio = 0.05; // sm
			} else if (width < 1024) {
				marginRatio = 0.06; // md
			} else if (width < 1280) {
				marginRatio = 0.07; // lg
			} else if (width < 1536) {
				marginRatio = 0.08; // xl
			} else if (width < 1920) {
				marginRatio = 0.13; // 2xl
			} else {
				marginRatio = 0.15; // 3xl+
			}

			const availableWidth = width * ( 1 - marginRatio * 2 );
			const availableHeight = height * ( 1 - marginRatio * 2 );

			let finalWidth = availableWidth;
			let finalHeight = finalWidth / ASPECT_RATIO;

			if (finalHeight > availableHeight) {
				finalHeight = availableHeight;
				finalWidth = finalHeight * ASPECT_RATIO;
			}

			setDimensions( { width: finalWidth, height: finalHeight } );
		};

		updateSize();
		window.addEventListener( "resize", updateSize );
		return () => window.removeEventListener( "resize", updateSize );
	}, [] );

	const slug = location.pathname.replace( /^\/book\//, "" ) || "homepage";

	const validatedSlug = spreads.includes( slug as SpreadKey )
		? ( slug as SpreadKey )
		: "homepage";

	const startPage = spreads.indexOf( validatedSlug ) * 2;

	const allPages = useMemo( () => {
		return spreads.flatMap( ( key ) => {
			const mod = spreadMap[key];
			const Left = mod.Left;
			const Right = mod.Right;
			return [<Left key={ `${ key }-left` }/>, <Right key={ `${ key }-right` }/>];
		} );
	}, [] );

	return (
		<div
			className="relative flex select-text justify-center items-center w-screen h-screen overflow-hidden bg-black"
		>
			<div className="relative">
				<HTMLFlipBook
					width={ dimensions.width }
					height={ dimensions.height }
					flippingTime={ 800 }
					startZIndex={ 0 }
					maxShadowOpacity={ 0.8 }
					startPage={ startPage }
					usePortrait={ false }
					showCover={ false }
					mobileScrollSupport
					useMouseEvents
					clickEventForward
					drawShadow
					swipeDistance={ 20 }
					showPageCorners
					disableFlipByClick={ false }
					style={ { margin: "0 auto" } }
					onFlip={ ( e ) => {
						const idx = Math.floor( e.data / 2 );
						const nextSlug = spreads[idx];
						if (nextSlug) navigate( `/book/${ nextSlug }`, { replace: true } );
					} }
					className=""
					size={ "fixed" }
					minWidth={ 0 }
					maxWidth={ 0 }
					minHeight={ 0 }
					maxHeight={ 0 }
					autoSize={ false }>
					{ allPages }
				</HTMLFlipBook>
			</div>
		</div>
	);
}