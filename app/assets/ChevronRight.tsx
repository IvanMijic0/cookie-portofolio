import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const ChevronRight = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="30"
		fill="none"
		viewBox="0 0 16 30"
	>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3"
			d="m1.5 2 13 13-13 13"
		></path>
	</svg>
);

export default ChevronRight;
