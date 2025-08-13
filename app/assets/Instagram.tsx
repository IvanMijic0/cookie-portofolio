import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const Instagram = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>, color?: string) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		fill="none"
		viewBox="0 0 36 36"
	>
		<path
			stroke='currentColor'
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.963"
			d="M25.185 2.963H10.37a7.407 7.407 0 0 0-7.407 7.407v14.815a7.407 7.407 0 0 0 7.407 7.408h14.815a7.407 7.407 0 0 0 7.408-7.408V10.37a7.407 7.407 0 0 0-7.408-7.407"
		></path>
		<path
			stroke='currentColor'
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.963"
			d="M23.704 16.844a5.926 5.926 0 1 1-11.724 1.739 5.926 5.926 0 0 1 11.724-1.739M25.926 9.63h.015"
		></path>
	</svg>
);

export default Instagram;
