import React from "react";
import type { SpreadKey, SpreadModule } from "~/types";
import * as HomepageMobile from "~/routes/spreads/homepage";

const lazySpread = (importFn: () => Promise<any>): SpreadModule => ({
	Left: React.lazy(() => importFn().then(m => ({ default: m.Left }))),
	Right: React.lazy(() => importFn().then(m => ({ default: m.Right }))),
	Mobile: React.lazy(() => importFn().then(m => ({ default: m.Mobile || (() => null) })))
});

const homepageSpread: SpreadModule = {
	Left: React.lazy(() => import("~/routes/spreads/homepage-desktop").then(m => ({ default: m.Left }))),
	Right: React.lazy(() => import("~/routes/spreads/homepage-desktop").then(m => ({ default: m.Right }))),
	Mobile: HomepageMobile.Mobile
};

export const spreadMap: Record<string, SpreadModule> = {
	"homepage": homepageSpread,
	"photography": lazySpread(() => import("~/routes/spreads/photography")),
	"photography/kill-them-with-kindness": lazySpread(() => import("~/routes/spreads/kill-them-with-kindness")),
	"photography/human-rights": lazySpread(() => import("~/routes/spreads/human-rights")),
	"photography/double-indemnity": lazySpread(() => import("~/routes/spreads/double-indemnity")),
	"graphic-design": lazySpread(() => import("~/routes/spreads/graphic-design")),
	"graphic-design/kreativ-festival-art-direction": lazySpread(() => import("~/routes/spreads/kreativ-festival-art-direction")),
	"graphic-design/sjecas-li-se-doli-bel": lazySpread(() => import("~/routes/spreads/sjecas-li-se-doli-bel")),
	"graphic-design/chippsters-logo": lazySpread(() => import("~/routes/spreads/chippsters-logo")),
	"illustration": lazySpread(() => import("~/routes/spreads/illustration")),
	"illustration/mountain-fairy": lazySpread(() => import("~/routes/spreads/mountain-fairy")),
	"illustration/austen-in-watercolor": lazySpread(() => import("~/routes/spreads/austen-in-watercolor")),
	"illustration/mural": lazySpread(() => import("~/routes/spreads/mural")),
	"about-me": lazySpread(() => import("~/routes/spreads/about-me")),
	"contact": lazySpread(() => import("~/routes/spreads/contact")),
};

export const spreads = Object.keys(spreadMap) as SpreadKey[];
