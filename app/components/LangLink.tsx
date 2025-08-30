import { Link, type LinkProps } from "react-router";
import { useTranslate } from "~/context/I18nProvider";

const LangLink = (props: Omit<LinkProps, "to"> & { to: string }) => {
	const { makeHref } = useTranslate();
	return <Link {...props} to={makeHref(props.to)} />;
}

export default LangLink;
