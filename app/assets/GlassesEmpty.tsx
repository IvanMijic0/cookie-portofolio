import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const GlassesEmpty = ( props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="20"
		fill="none"
		viewBox="0 0 28 20"
	>
		<path
			stroke="#E2E2E2"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 19.082c2.946 0 5.333-2.313 5.333-5.167S8.946 8.75 6 8.75c-2.945 0-5.333 2.313-5.333 5.166S3.055 19.082 6 19.082M22 19.082c2.946 0 5.333-2.313 5.333-5.167S24.946 8.75 22 8.75c-2.945 0-5.333 2.313-5.333 5.166s2.388 5.167 5.333 5.167M16.667 13.915c0-.685-.281-1.342-.782-1.827A2.7 2.7 0 0 0 14 11.332c-.707 0-1.386.272-1.886.756a2.54 2.54 0 0 0-.78 1.827"
		></path>
		<path
			stroke="#E2E2E2"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m1.333 11.332 3.334-7.75C5.6 1.903 6.533 1 8.667 1M26.667 11.332l-3.334-7.75c-.933-1.679-2-2.583-4-2.583"
		></path>
	</svg>
);

export default GlassesEmpty;