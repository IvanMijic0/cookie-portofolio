import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

type Controller = {
	ready: boolean;
	goToSpread: ( slug: string ) => void;
	goToIndex: ( pageIndex: number ) => void;
};

type Ctx = Controller & {
	setController: ( c: Controller ) => void;
};

const noop: Controller = {
	ready: false, goToSpread: () => {
	}, goToIndex: () => {
	}
};
const FlipCtx = createContext<Ctx>( {
	...noop, setController: () => {
	}
} );

export function FlipbookProvider( { children }: { children: ReactNode } ) {
	const [ctrl, setController] = useState<Controller>( noop );
	const value = useMemo( () => ( { ...ctrl, setController } ), [ctrl] );
	return <FlipCtx.Provider value={ value }>{ children }</FlipCtx.Provider>;
}

export const useFlipbook = () => useContext( FlipCtx );