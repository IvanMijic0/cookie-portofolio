import { type ComponentType, lazy, Suspense } from "react";

const pages = import.meta.glob(
	"/app/routes/*.tsx"
) as Record<string, () => Promise<{ default: ComponentType<any> }>>;

function getLazyPage( route: string ) {
	const file = Object.keys( pages ).find( ( k ) => k.endsWith( `/${ route }.tsx` ) );
	if (!file) throw new Error( `Unknown page route: ${ route }` );
	return lazy( () => pages[file]() );
}

export default function PageLoader( {
	                                    route,
	                                    number,
                                    }: {
	route: string;
	number?: number;
} ) {
	const LazyPage = getLazyPage( route );
	return (
		<Suspense fallback={ <div className="p-10 bg-white">Loading…</div> }>
			<LazyPage number={ number }/>
		</Suspense>
	);
}