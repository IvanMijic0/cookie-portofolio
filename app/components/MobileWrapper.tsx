import type { PropsWithChildren } from "react";
import { Nav } from "./UI";

const MobileWrapper = ({ children }: PropsWithChildren) => (
	<main className="relative min-h-svh min-w-sm w-full overflow-x-hidden">
		<Nav />
		<div className="relative min-h-svh">
			{children}
		</div>
	</main >
)

export default MobileWrapper;
