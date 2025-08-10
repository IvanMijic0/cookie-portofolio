import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { spreadMap } from "~/config";

type MetaEntry = Partial<{ title: string; name: string; content: string }>;

type SpreadModule = {
	Left: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	Right: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
	meta?: () => MetaEntry[];
};

type SpreadKey = keyof typeof spreadMap;

type NaveSectionItems = {
	title: string;
	to: string;
	pageNumber: number;
	items: { label: string; to: string }[];
};