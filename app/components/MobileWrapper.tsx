import React, { Suspense, type PropsWithChildren, useState, useEffect } from "react";
import { useLocation } from "react-router";
import Star from "~/assets/Star";

const LazyNav = React.lazy(() => import("./UI/CornerNav"));

const MobileWrapper = ({ children }: PropsWithChildren) => {
	const { pathname } = useLocation();
	const [loadNav, setLoadNav] = useState(false);

	useEffect(() => {
		let idleId: number | undefined;
		let timeoutId: number | undefined;

		const load = () => setLoadNav(true);

		if (typeof window !== "undefined") {
			const win = window as any;
			if (typeof win.requestIdleCallback === "function") {
				idleId = win.requestIdleCallback(() => {
					timeoutId = setTimeout(load, 200) as any;
				});
			} else {
				timeoutId = setTimeout(load, 500) as any;
			}
		}

		return () => {
			if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
				window.cancelIdleCallback(idleId);
			}
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}
		};
	}, []);

	const current = pathname.replace(/\/+$/, "");
	const isHomepage = current.endsWith("/homepage") || current === "";
	const baseColor = isHomepage ? "#ffffff" : "#000000";

	return (
		<main className="relative min-h-dvh w-full overflow-x-hidden">
			{loadNav ? (
				<Suspense fallback={<div className="h-20 w-full" />}>
					<LazyNav />
				</Suspense>
			) : (
				// Placeholder header to match closed state layout
				<div className="fixed inset-0 z-[100] pointer-events-none">
					{/* Scroll transition overlay placeholder */}
					<div
						className={`fixed inset-x-0 top-0 h-20 transition-all duration-300 pointer-events-none ${
							isHomepage ? "" : "bg-gradient-to-b from-white/70 via-white/70 to-transparent"
						}`}
					/>
					
					{/* Static Hamburger Icon button */}
					<div className="pointer-events-auto">
						<button
							type="button"
							className="group fixed left-1 top-1 z-50 h-20 w-20 bg-black/0 transition-all"
							aria-label="Open navigation menu"
							style={{ color: baseColor }}
						>
							<span
								className="absolute block h-[1px] w-10"
								style={{ top: "35%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: baseColor }}
							/>
							<span
								className="absolute block h-[1px] w-10"
								style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: baseColor }}
							/>
							<span
								className="absolute block h-[1px] w-5"
								style={{ bottom: "35%", left: "calc(50% + 10px)", transform: "translate(-150%, 50%)", backgroundColor: baseColor }}
							/>
						</button>
					</div>

					{/* Static Brand Logo */}
					<div className="fixed right-6 top-4 z-[100] pointer-events-none">
						<div className="flex flex-col items-center gap-1 pointer-events-auto" style={{ color: baseColor }}>
							<Star className="min-w-8 min-h-8 h-8 w-8" />
							<span className="font-logo">AMNA</span>
						</div>
					</div>
				</div>
			)}
			<div className="relative">
				{children}
			</div>
		</main>
	);
};

export default MobileWrapper;
