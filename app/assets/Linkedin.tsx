import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const Linkedin = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		fill="none"
		viewBox="0 0 36 36"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.963"
			d="M23.704 11.852a8.89 8.89 0 0 1 8.889 8.889v10.37h-5.926v-10.37a2.963 2.963 0 0 0-5.926 0v10.37h-5.926v-10.37a8.89 8.89 0 0 1 8.889-8.89M8.889 13.333H2.963v17.778h5.926zM5.926 8.889a2.963 2.963 0 1 0 0-5.926 2.963 2.963 0 0 0 0 5.926"
		></path>
	</svg>
);

export default Linkedin;
