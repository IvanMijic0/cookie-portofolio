import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const Mail = ( props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		fill="none"
		viewBox="0 0 36 36"
	>
		<path
			stroke="#379C8D"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.963"
			d="M29.63 5.926H5.926a2.963 2.963 0 0 0-2.963 2.963v17.778a2.963 2.963 0 0 0 2.963 2.963H29.63a2.963 2.963 0 0 0 2.963-2.963V8.889a2.963 2.963 0 0 0-2.963-2.963"
		></path>
		<path
			stroke="#379C8D"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.963"
			d="m32.593 10.37-13.29 8.445a2.87 2.87 0 0 1-3.051 0L2.963 10.37"
		></path>
	</svg>
);

export default Mail;
