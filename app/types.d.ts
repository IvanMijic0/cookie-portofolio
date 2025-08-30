import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { MetaFunction } from "react-router";
import { spreadMap } from "~/config";

type MetaEntry = Partial<{ title: string; name: string; content: string }>;


export type SpreadModule = {
	Left: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	Right: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	meta?: MetaFunction | (() => MetaEntry[]);
};

type SpreadKey = keyof typeof spreadMap;

type NaveSectionItems = {
	title: string;
	to: string;
	pageNumber: number;
	items: { label: string; to: string }[];
};
