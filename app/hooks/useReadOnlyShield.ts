import type { SyntheticEvent } from "react";

const useReadOnlyShield = (
	enabled: boolean,
	exceptions: Array<() => HTMLElement | null> = []
) => {
	if (!enabled) return {};
	const isInside = ( n: Node | null ) =>
		!!n && exceptions.some( getEl => {
			const el = getEl();
			return el ? el.contains( n ) : false;
		} );

	const onCapture = ( e: SyntheticEvent ) => {
		if (isInside( e.target as Node | null )) return;
		e.stopPropagation();
	};

	return {
		onMouseDownCapture: onCapture,
		onPointerDownCapture: onCapture,
		onTouchStartCapture: onCapture,
		onClickCapture: onCapture,
	};
}

export default useReadOnlyShield;