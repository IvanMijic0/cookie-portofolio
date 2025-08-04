import HTMLFlipBook from "react-pageflip";
import { useLocation, useNavigate } from "react-router";
import type { SpreadKey } from "~/routes/spreads";
import { type ForwardRefExoticComponent, type RefAttributes, useEffect, useState } from "react";
import * as Spread1 from "./spreads/spread-1";
import * as Spread2 from "./spreads/spread-2";

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
	"spread-1": Spread1,
	"spread-2": Spread2,
};

const spreads = Object.keys( spreadMap ) as SpreadKey[];

const TARGET_WIDTH = 864;
const TARGET_HEIGHT = 1117;
const ASPECT_RATIO = 864 / 1117;

export default function Flipbook() {
	const [dimensions, setDimensions] = useState( { width: TARGET_WIDTH, height: TARGET_HEIGHT } );

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

	const navigate = useNavigate();
	const location = useLocation();
	const slug = location.pathname.split( "/" ).pop() ?? "spread-1";

	const validatedSlug = spreads.includes( slug as SpreadKey )
		? ( slug as SpreadKey )
		: "spread-1";

	const startPage = spreads.indexOf( validatedSlug ) * 2;

	const allPages = spreads.flatMap( ( key ) => {
		const { Left, Right } = spreadMap[key];
		return [<Left key={ `${ key }-left` }/>, <Right key={ `${ key }-right` }/>];
	} );

	return (
		<div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-black">
			<HTMLFlipBook
				width={ dimensions.width }
				height={ dimensions.height }
				flippingTime={ 1000 }
				startZIndex={ 0 }
				maxShadowOpacity={ 0.8 }
				startPage={ startPage }
				usePortrait={ false }
				showCover={ false }
				mobileScrollSupport
				useMouseEvents
				clickEventForward
				drawShadow
				swipeDistance={ 30 }
				showPageCorners
				disableFlipByClick={ false }
				style={ { margin: "0 auto" } }
				onFlip={ ( e ) => {
					const idx = Math.floor( e.data / 2 );
					const nextSlug = spreads[idx];
					if (nextSlug) navigate( `/book/${ nextSlug }` );
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
	);
}

