import { forwardRef, type PropsWithChildren } from "react";

type LeftPageProps = PropsWithChildren;

const LeftPage = forwardRef<HTMLDivElement, LeftPageProps>(
	( { children }, ref ) => {

		return (
			<div
				ref={ ref }
				className="page page--left relative w-full h-full overflow-hidden"
			>
				{ children }
			</div>
		);
	}
);

export default LeftPage;