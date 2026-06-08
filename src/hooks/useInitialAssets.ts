import { useEffect, useState } from "react";

const useInitialAssets = ( fontFaces: string[], images: string[] = [] ) => {
	const [ready, setReady] = useState( false );

	useEffect( () => {
		let cancelled = false;

		async function run() {
			try {
				const fontsReady = ( document as any ).fonts?.ready;

				const specificLoads = ( document as any ).fonts
					? fontFaces.map( ( f ) => ( document as any ).fonts.load( f ) )
					: [];

				const imageLoads = images.map(
					( src ) =>
						new Promise<void>( ( resolve ) => {
							const img = new Image();
							img.onload = () => resolve();
							img.onerror = () => resolve();
							if (src === "/cookie-pose.avif" && typeof window !== "undefined" && window.devicePixelRatio < 1.5) {
								img.src = "/cookie-pose-small.avif";
							} else {
								img.src = src;
							}
						} )
				);

				await Promise.all( [
					fontsReady ?? await Promise.resolve(),
					...specificLoads,
					...imageLoads,
				] );
			} finally {
				if (!cancelled) setReady( true );
			}
		}

		void run();
		return () => {
			cancelled = true;
		};
	}, [fontFaces.join( "|" ), images.join( "|" )] );

	return ready;
}

export default useInitialAssets;
