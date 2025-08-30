import { createContext, useContext, useEffect, type ReactNode } from "react";
import { translate, type Lang } from "~/i18n/i18n";

type Ctx = {
	lang: Lang;
	t: (key: string, fallback?: string) => string;
	makeHref: (path: string) => string;
	setLang: (next: Lang) => void;
};

const I18nCtx = createContext<Ctx | null>(null);

export const I18nProvider = ({
	lang,
	children,
}: {
	lang: Lang;
	children: ReactNode;
}) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("lang", lang);
		}
	}, [lang]);

	const t = (key: string, fallback?: string) => translate(lang, key, fallback);

	const makeHref = (path: string) => {
		const clean = path.startsWith("/") ? path : `/${path}`;
		return `/${lang}${clean}`;
	};

	const setLang = (newLang: Lang) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("lang", newLang);
			const current = window.location.pathname.replace(/^\/(en|ba)/, "");
			window.location.href = `/${newLang}${current}`;
		}
	};

	const value: Ctx = { lang, t, makeHref, setLang };

	return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
};

export function useTranslate() {
	const ctx = useContext(I18nCtx);
	if (!ctx) throw new Error("useTranslate must be used inside <I18nProvider>");
	return ctx;
}
