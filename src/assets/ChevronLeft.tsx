import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const ChevronLeft = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="30"
		fill="none"
		viewBox="0 0 17 30"
	>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3"
			d="M15 2 2 15l13 13"
		></path>
	</svg>
);

export default ChevronLeft;
