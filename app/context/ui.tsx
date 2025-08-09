import { createContext, type ReactNode, useContext, useState } from "react";

type UIState = {
	readOnly: boolean;
	setReadOnly: ( v: boolean ) => void;
	toggleReadOnly: () => void;
};

const UIContext = createContext<UIState | null>( null );

export function UIProvider( { children }: { children: ReactNode } ) {
	const [readOnly, setReadOnly] = useState( false );
	return (
		<UIContext.Provider
			value={ {
				readOnly,
				setReadOnly,
				toggleReadOnly: () => setReadOnly( v => !v ),
			} }
		>
			{ children }
		</UIContext.Provider>
	);
}

export function useUI() {
	const ctx = useContext( UIContext );
	if (!ctx) throw new Error( "useUI must be used inside <UIProvider>" );
	return ctx;
}