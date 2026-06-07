import { forwardRef, useContext, type PropsWithChildren } from "react";
import { PageContext } from "~/context/page";

type LeftPageProps = PropsWithChildren;

const LeftPage = forwardRef<HTMLDivElement, LeftPageProps>(
	( { children }, ref ) => {
		const { insideFlipPage } = useContext(PageContext);

		if (insideFlipPage) {
			return <>{children}</>;
		}

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