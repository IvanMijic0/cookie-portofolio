import type { PropsWithChildren } from "react";
import { Nav } from "./UI";

const MobileWrapper = ({ children }: PropsWithChildren) => (
	<main className="h-screen w-full">
		<Nav />
		{children}
	</main>
)

export default MobileWrapper;
