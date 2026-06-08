import React, { type PropsWithChildren } from "react";
import CornerNav from "./UI/CornerNav";

const MobileWrapper = ({ children }: PropsWithChildren) => {
	return (
		<main className="relative min-h-dvh w-full overflow-x-hidden">
			<CornerNav />
			<div className="relative">
				{children}
			</div>
		</main>
	);
};

export default MobileWrapper;
