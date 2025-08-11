import { ASPECT_RATIO, CRITICAL_IMAGES, FONT_STRINGS, spreadMap, spreads, TARGET_HEIGHT, TARGET_WIDTH } from "~/config";
import HTMLFlipBook from "react-pageflip";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFlipbook } from "~/context/flipbook";
import { useInitialAssets } from "~/hooks";
import clsx from "clsx";
import type { SpreadKey } from "~/types";

const Flipbook = () => {
	const [dimensions, setDimensions] = useState( { width: TARGET_WIDTH, height: TARGET_HEIGHT } );
	const [remountId] = useState( 0 );
	const activeRef = useRef<any>( null );
	const currentPageRef = useRef( 0 );

	const navigate = useNavigate();
	const location = useLocation();
	const { setController } = useFlipbook();

	const assetsReady = useInitialAssets( FONT_STRINGS, CRITICAL_IMAGES );

	const slug = location.pathname.replace( /^\/book\//, "" ) || "homepage";
	const validatedSlug = ( spreads.includes( slug as SpreadKey ) ? slug : "homepage" ) as SpreadKey;
	const startPage = spreads.indexOf( validatedSlug ) * 2;

	const allPages = useMemo( () => {
		return spreads.flatMap( ( key ) => {
			const mod = spreadMap[key];
			const Left = mod.Left;
			const Right = mod.Right;
			return [<Left key={ `${ key }-left` }/>, <Right key={ `${ key }-right` }/>];
		} );
	}, [] );

	useEffect( () => {
		const updateSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			const marginX = ( () => {
				if (width < 640) return 0.01;
				if (width < 768) return 0.02;
				if (width < 1024) return 0.02;
				if (width < 1280) return 0.03;
				if (width < 1536) return 0.08;
				if (width < 1650) return 0.10;
				if (width < 1720) return 0.05;
				if (width < 1840) return 0.1;
				return 0.12;
			} )();

			const marginY = ( () => {
				if (height < 600) return 0.02;
				if (height < 720) return 0.03;
				if (height < 850) return 0.04;
				if (height < 950) return 0.05;
				if (height < 1100) return 0.06;
				return 0.1;
			} )();

			const availableWidth = Math.max( 0, width * ( 1 - marginX * 2 ) );
			const availableHeight = Math.max( 0, height * ( 1 - marginY * 2 ) );

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

	useEffect( () => {
		currentPageRef.current = startPage;
	}, [startPage] );

	useEffect( () => {
		const toPageIndex = ( s: string ) => {
			const clean = s.replace( /^\/+/, "" );
			const i = spreads.indexOf( clean as any );
			return i >= 0 ? i * 2 : 0;
		};

		const getApi = () => activeRef.current?.pageFlip?.();

		const goToIndex = ( pageIndex: number ) => {
			const api: any = getApi();
			if (!api) return;
			if (typeof api.flip === "function") api.flip( pageIndex );
			else if (typeof api.turnToPage === "function") api.turnToPage( pageIndex );
		};

		const goToSpread = ( s: string ) => goToIndex( toPageIndex( s ) );

		setController( {
			ready: !!activeRef.current,
			goToSpread,
			goToIndex,
		} );
	}, [setController, remountId] );

	const handleFlip = ( e: any ) => {
		currentPageRef.current = Math.floor( e.data );
		const idx = Math.floor( e.data / 2 );
		const nextSlug = spreads[idx];
		if (nextSlug) navigate( `/book/${ nextSlug }`, { replace: true } );
		window.dispatchEvent( new CustomEvent( "bookmark:close" ) );
	};

	const bookProps = {
		width: dimensions.width,
		height: dimensions.height,
		flippingTime: 900,
		startZIndex: 0,
		maxShadowOpacity: 0.8,
		startPage: currentPageRef.current,
		usePortrait: false,
		showCover: false,
		mobileScrollSupport: true,
		useMouseEvents: true,
		clickEventForward: true,
		drawShadow: true,
		swipeDistance: 20,
		showPageCorners: true,
		disableFlipByClick: true,
		size: "fixed" as const,
		minWidth: 0,
		maxWidth: 0,
		minHeight: 0,
		maxHeight: 0,
		autoSize: false,
		onFlip: handleFlip,
		children: allPages,
		className: "",
		style: { margin: 0, display: "block" as const },
	};

	return (
		<div className="fixed inset-0 overflow-hidden w-full h-full">
			<div
				className={ clsx( "absolute inset-0 flex justify-center items-center", ( !assetsReady ) && "invisible" ) }>
				<HTMLFlipBook key={ remountId } ref={ activeRef } { ...bookProps } />
			</div>
		</div>
	);
}

export default Flipbook;