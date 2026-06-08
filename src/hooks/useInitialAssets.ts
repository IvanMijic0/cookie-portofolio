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
							img.src = src;
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
