import en from "./en.json";
import ba from "./ba.json";

export type Lang = "en" | "ba";
export type Dict = typeof en;

export const resources: Record<Lang, Dict> = {
	en,
	ba,
};

const STORAGE_KEY = "site.lang";

export function getDefaultLang(): Lang {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === "en" || saved === "ba") return saved;
	}

	if (typeof navigator !== "undefined") {
		const n = navigator.language.toLowerCase();
		if (n.startsWith("bs") || n.startsWith("hr") || n.startsWith("sr") || n.startsWith("ba")) return "ba";
	}

	return "en";
}

export function setPersistedLang(lang: Lang) {
	if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, lang);
}

export function translate(lang: Lang, key: string, fallback?: string): string {
	const parts = key.split(".");
	let node: any = resources[lang];

	for (const p of parts) {
		if (node && p in node) {
			node = node[p];
		} else {
			return fallback ?? key;
		}
	}
	return typeof node === "string" ? node : fallback ?? key;
}
