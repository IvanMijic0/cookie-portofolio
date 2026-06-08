import type React from "react";
import { useTranslate } from "~/context/I18nProvider";

const LangLink = ({ to, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => {
	const { makeHref } = useTranslate();
	return <a {...props} href={makeHref(to)} />;
}

export default LangLink;
