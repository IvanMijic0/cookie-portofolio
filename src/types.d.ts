import type { ComponentType } from "react";
import type { MetaFunction } from "react-router";
import { spreadMap } from "~/config/spreads";

type MetaEntry = Partial<{ title: string; name: string; content: string }>;


export type SpreadModule = {
	Left: ComponentType<any>;
	Right: ComponentType<any>;
	meta?: MetaFunction | (() => MetaEntry[]);
	Mobile?: ComponentType<any>;
};

type SpreadKey = keyof typeof spreadMap;

type NaveSectionItems = {
	title: string;
	to: string;
	pageNumber: number;
	items: { label: string; to: string }[];
};
