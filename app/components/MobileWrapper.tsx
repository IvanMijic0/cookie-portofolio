import type { PropsWithChildren } from "react";
import { Nav } from "./UI";

const MobileWrapper = ({ children }: PropsWithChildren) => (
	<main className="relative min-h-dvh w-full overflow-x-hidden">
		<Nav />
		<div className="relative">
			{children}
		</div>
	</main>
);

export default MobileWrapper;
