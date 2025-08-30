import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { motion, type Transition } from "framer-motion";
import clsx from "clsx";

const spring: Transition = { type: "spring", stiffness: 500, damping: 32, mass: 0.6 };

type Props = {
	isBookmark?: boolean;
};

const LanguageSwitcher = ({ isBookmark = false }: Props) => {
	const { lang = "en" } = useParams();
	const navigate = useNavigate();
	const { pathname, search, hash } = useLocation();

	useEffect(() => {
		try {
			localStorage.setItem("lang", lang);
		} catch { }
	}, [lang]);

	const basePath = (() => {
		const parts = pathname.split("/").filter(Boolean);
		if (parts.length === 0) return "/homepage";
		parts[0] = "";
		return `/${parts.filter(Boolean).join("/") || "homepage"}`;
	})();

	const go = (next: "en" | "ba") => {
		if (next === lang) return;
		navigate(`/${next}${basePath}${search}${hash}`, { replace: true });
	};

	const Btn = ({ code, label }: { code: "en" | "ba"; label: string }) => {
		const active = lang === code;
		return (
			<button
				type="button"
				onClick={() => go(code)}
				aria-current={active ? "page" : undefined}
				className={clsx(
					"px-2 text-lg xs:text-3xl tracking-wide cursor-pointer select-none leading-none",
					isBookmark
						? active
							? "text-white font-bold"
							: "text-white"
						: active
							? "text-[#272727] font-bold"
							: "text-[#272727]"
				)}
			>
				{label}
			</button>
		);
	};

	return (
		<div
			className={clsx(
				"relative inline-grid grid-cols-3 w-16 xs:w-28 items-center xs:items-end text-lg xs:text-3xl pb-1",
				isBookmark ? "text-white" : "text-[#272727]"
			)}
		>
			<div className="col-span-1 flex justify-center">
				<Btn code="en" label="EN" />
			</div>
			<div className="col-span-1 flex font-bold justify-center">
				<span className="font-bold">|</span>
			</div>
			<div className="col-span-1 flex justify-center">
				<Btn code="ba" label="BA" />
			</div>
			<motion.span
				aria-hidden
				className={clsx(
					"pointer-events-none absolute bottom-[3px] xs:-bottom-[1px] h-[3px] rounded",
					isBookmark ? "bg-white" : "bg-[#272727]"
				)}
				initial={false}
				style={{ width: "33.3333%" }}
				animate={{ x: lang === "en" ? "0%" : "200%" }}
				transition={spring}
			/>
		</div>
	);
};

export default LanguageSwitcher;
