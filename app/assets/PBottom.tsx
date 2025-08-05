import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const PBottom = ( props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		width="326"
		height="144"
		fill="none"
		viewBox="0 0 355 144"
	>
		<path
			fill="#363636"
			fillRule="evenodd"
			d="M115.455.5H238.65v140.42h115.455v2.58H0v-2.58h115.455z"
			clipRule="evenodd"
		></path>
	</svg>
);

export default PBottom;
