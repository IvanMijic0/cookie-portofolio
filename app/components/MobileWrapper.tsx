import React, { Suspense, type PropsWithChildren } from "react";

const LazyNav = React.lazy(() => import("./UI").then(m => ({ default: m.Nav })));

const MobileWrapper = ({ children }: PropsWithChildren) => (
	<main className="relative min-h-dvh w-full overflow-x-hidden">
		<Suspense fallback={<div className="h-20 w-full" />}>
			<LazyNav />
		</Suspense>
		<div className="relative">
			{children}
		</div>
	</main>
);

export default MobileWrapper;
