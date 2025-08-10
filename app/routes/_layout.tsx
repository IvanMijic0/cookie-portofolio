import HTMLFlipBook from "react-pageflip";
import { useLocation, useNavigate } from "react-router";
import { type ForwardRefExoticComponent, type RefAttributes, useEffect, useMemo, useRef, useState } from "react";
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
import { useUI } from "~/context/ui";
import { BarLoader } from "~/components";
import { useFlipbook } from "~/context/flipbook";
import { useInitialAssets } from "~/hooks";
import { CRITICAL_IMAGES, FONT_STRINGS } from "~/constants";
import clsx from "clsx";

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
	const [, setOpen] = useState( false );
	const navigate = useNavigate();
	const location = useLocation();
	const { readOnly } = useUI();

	const bookRef = useRef<any>( null );
	const { setController } = useFlipbook();
	const assetsReady = useInitialAssets( FONT_STRINGS, CRITICAL_IMAGES );

	const flipKey = `flip-${ readOnly ? "ro" : "rw" }`;
	const LOADER_MS = 500;

	useEffect( () => {
		const toPageIndex = ( slug: string ) => {
			const clean = slug.replace( /^\/+/, "" );
			const spreadIndex = spreads.indexOf( clean as any );
			return spreadIndex >= 0 ? spreadIndex * 2 : 0;
		};

		const goToIndex = ( pageIndex: number ) => {
			const api: any = bookRef.current?.pageFlip?.();
			if (!api) return;
			if (typeof api.flip === "function") api.flip( pageIndex );
			else if (typeof api.turnToPage === "function") api.turnToPage( pageIndex );
		};


		const goToSpread = ( slug: string ) => goToIndex( toPageIndex( slug ) );

		setController( {
			ready: !!bookRef.current,
			goToSpread,
			goToIndex,
		} );
	}, [setController] );

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
				marginRatio = 0.06; // xl
			} else if (width < 1920) {
				marginRatio = 0.12; // 2xl
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
			style={ {
				display: 'none'
			} }
			className="relative flip-book flex select-text justify-center items-center w-screen h-screen overflow-hidden"
		>
			<div className="relative">
				<div className={ clsx( !assetsReady && "invisible" ) }>
					<HTMLFlipBook
						ref={ bookRef }
						key={ flipKey }
						width={ dimensions.width }
						height={ dimensions.height }
						flippingTime={ 900 }
						startZIndex={ 0 }
						maxShadowOpacity={ 0.8 }
						startPage={ startPage }
						usePortrait={ false }
						showCover={ false }
						mobileScrollSupport={ !readOnly }
						useMouseEvents={ !readOnly }
						clickEventForward={ !readOnly }
						drawShadow={ true }
						swipeDistance={ readOnly ? 9999 : 20 }
						showPageCorners={ !readOnly }
						disableFlipByClick={ readOnly }
						style={ { margin: "0 auto", } }
						onFlip={ ( e ) => {
							const idx = Math.floor( e.data / 2 );
							const nextSlug = spreads[idx];
							if (nextSlug) navigate( `/book/${ nextSlug }`, { replace: true } );
						} }
						className="shadow-[0_32px_90px_rgba(0,0,0,.45),0_12px_36px_rgba(0,0,0,.25),0_1px_6px_rgba(0,0,0,.22)]"
						size={ "fixed" }
						minWidth={ 0 }
						maxWidth={ 0 }
						minHeight={ 0 }
						maxHeight={ 0 }
						autoSize={ false }>
						{ allPages }
					</HTMLFlipBook>
				</div>
				{ !assetsReady &&
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div
                            className="rounded bg-black/20 p-4 backdrop-blur-2xl">
                            <BarLoader/>
                        </div>
                    </div> }
			</div>
		</div>
	);
}